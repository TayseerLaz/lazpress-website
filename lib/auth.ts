import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";

/**
 * Admin credentials. Reads from environment variables in production; falls
 * back to the dev defaults below so local development works out of the box.
 *
 * For production set in `.env.local` (gitignored):
 *   ADMIN_USER=...
 *   ADMIN_PASS=...
 *   ADMIN_SECRET=...   (any random string — used to sign the session cookie)
 *
 * Anyone with access to the dev defaults below can log in to a site running
 * with the defaults — change them in your deployment.
 */
export const ADMIN_USER = process.env.ADMIN_USER || "admin";
export const ADMIN_PASS = process.env.ADMIN_PASS || "lazpress2026";

const SECRET =
  process.env.ADMIN_SECRET || "laz-press-admin-static-secret-change-me-in-production";
const COOKIE_NAME = "lp_admin";
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

function sign(payload: string): string {
  const sig = crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

function verifySigned(token: string): string | null {
  const dot = token.lastIndexOf(".");
  if (dot < 0) return null;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = crypto
    .createHmac("sha256", SECRET)
    .update(payload)
    .digest("hex");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return null;
  if (!crypto.timingSafeEqual(a, b)) return null;
  return payload;
}

export function checkCredentials(user: string, pass: string): boolean {
  return user === ADMIN_USER && pass === ADMIN_PASS;
}

export async function login(): Promise<void> {
  const expires = Date.now() + SESSION_TTL_MS;
  const token = sign(`${ADMIN_USER}.${expires}`);
  const c = await cookies();
  c.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_MS / 1000,
  });
}

export async function logout(): Promise<void> {
  const c = await cookies();
  c.delete(COOKIE_NAME);
}

export async function isAuthed(): Promise<boolean> {
  const c = await cookies();
  const token = c.get(COOKIE_NAME)?.value;
  if (!token) return false;
  const payload = verifySigned(token);
  if (!payload) return false;
  const dot = payload.indexOf(".");
  if (dot < 0) return false;
  const user = payload.slice(0, dot);
  const expiresStr = payload.slice(dot + 1);
  const expires = parseInt(expiresStr, 10);
  if (!expires || Date.now() > expires) return false;
  if (user !== ADMIN_USER) return false;
  return true;
}

export async function requireAuth(): Promise<void> {
  if (!(await isAuthed())) {
    redirect("/admin/login");
  }
}

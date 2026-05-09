import { NextResponse } from "next/server";
import { checkCredentials, login } from "@/lib/auth";

/**
 * Receives the login form POST. Validates credentials, sets the signed
 * session cookie, and redirects to /admin. On failure redirects back to
 * /admin/login?error=1 so the page can show an error.
 */
export async function POST(req: Request): Promise<Response> {
  const form = await req.formData();
  const user = String(form.get("username") ?? "");
  const pass = String(form.get("password") ?? "");

  if (!checkCredentials(user, pass)) {
    return NextResponse.redirect(new URL("/admin/login?error=1", req.url), {
      status: 303,
    });
  }

  await login();
  return NextResponse.redirect(new URL("/admin", req.url), { status: 303 });
}

import { NextResponse } from "next/server";
import { appendEnquiry, type EnquirySource } from "@/lib/enquiries";

/**
 * Public endpoint hit by the quote form (and any future contact forms).
 * No auth — anyone can submit. Light validation + honeypot for spam.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — silently accept if filled, do not store.
  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Valid email required" },
      { status: 400 },
    );
  }

  const sourceRaw = String(body.source ?? "quote");
  const source: EnquirySource =
    sourceRaw === "contact" ? "contact" : sourceRaw === "upload" ? "upload" : "quote";

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    req.headers.get("x-real-ip") ||
    "";
  const userAgent = req.headers.get("user-agent") ?? "";

  const enquiry = await appendEnquiry({
    source,
    email,
    name:     typeof body.name     === "string" ? body.name     : undefined,
    product:  typeof body.product  === "string" ? body.product  : undefined,
    quantity: typeof body.quantity === "string" ? body.quantity : undefined,
    paper:    typeof body.paper    === "string" ? body.paper    : undefined,
    finish:   typeof body.finish   === "string" ? body.finish   : undefined,
    message:  typeof body.message  === "string" ? body.message  : undefined,
    ip,
    userAgent,
  });

  return NextResponse.json({ ok: true, id: enquiry.id });
}

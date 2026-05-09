"use client";

import { useState, type FormEvent } from "react";

const PRODUCT_OPTIONS = [
  "Business cards",
  "Brochure",
  "Poster",
  "Packaging",
  "Book / catalog",
  "Banner",
] as const;

const PAPER_OPTIONS = [
  "350gsm matte",
  "100lb gloss",
  "Triplex 600gsm",
  "Recycled kraft",
] as const;

const FINISH_OPTIONS = [
  "None",
  "Soft-touch laminate",
  "Foil stamp",
  "Spot UV",
] as const;

type Status = "idle" | "submitting" | "ok" | "error";

/**
 * Quote form. Submits JSON to /api/enquiry which writes to the local
 * enquiries store. Visible at /#quote and /contact.
 */
export function CTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      source: "quote",
      product:  String(fd.get("product")  ?? ""),
      quantity: String(fd.get("quantity") ?? ""),
      paper:    String(fd.get("paper")    ?? ""),
      finish:   String(fd.get("finish")   ?? ""),
      email:    String(fd.get("email")    ?? ""),
      honeypot: String(fd.get("honeypot") ?? ""),
    };

    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json: { ok: boolean; error?: string } = await res.json();
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error || "Something went wrong. Try again.");
        return;
      }
      setStatus("ok");
    } catch {
      setStatus("error");
      setError("Network error. Try again or call us directly.");
    }
  };

  const sent = status === "ok";

  return (
    <section className="cta" id="quote">
      <div className="wrap">
        <div className="grid">
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                marginBottom: 18,
              }}
            >
              05 — Get a quote
            </div>
            <h2>
              Tell us what you&apos;re <span className="it">printing.</span>
              <br />
              We&apos;ll do the <span className="red">math.</span>
            </h2>
            <p>
              Drop a few details — we&apos;ll come back with a fixed price, paper
              recommendations and a realistic timeline within four working hours.
            </p>
            <div className="actions">
              <a className="btn primary" href="#upload">
                Upload artwork <span className="arr">→</span>
              </a>
              <a className="btn" href="tel:+9611821233">
                Or call us · +961 1 821 233
              </a>
            </div>
          </div>

          <form className="quote-card" onSubmit={handleSubmit} noValidate>
            <div className="top">
              <span className="lbl">Instant Quote</span>
              <span className="badge">~ 30 sec</span>
            </div>

            {/* honeypot — invisible field that real users won't fill */}
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              defaultValue=""
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: 1,
                height: 1,
                opacity: 0,
                pointerEvents: "none",
              }}
            />

            <div className="row2">
              <div className="field">
                <label htmlFor="qc-product">Product</label>
                <select id="qc-product" name="product" defaultValue={PRODUCT_OPTIONS[0]}>
                  {PRODUCT_OPTIONS.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="qc-qty">Quantity</label>
                <input
                  id="qc-qty"
                  name="quantity"
                  type="text"
                  inputMode="numeric"
                  defaultValue="500"
                />
              </div>
            </div>

            <div className="row2">
              <div className="field">
                <label htmlFor="qc-paper">Paper</label>
                <select id="qc-paper" name="paper" defaultValue={PAPER_OPTIONS[0]}>
                  {PAPER_OPTIONS.map((p) => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="qc-finish">Finish</label>
                <select id="qc-finish" name="finish" defaultValue={FINISH_OPTIONS[0]}>
                  {FINISH_OPTIONS.map((f) => (
                    <option key={f}>{f}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="qc-email">Email</label>
              <input
                id="qc-email"
                name="email"
                type="email"
                placeholder="you@studio.com"
                required
              />
            </div>

            <div className="total">
              <span className="lbl">Estimated total</span>
              <span className="val">{sent ? "Sent" : "$ —"}</span>
            </div>

            {error && (
              <p
                role="alert"
                style={{
                  margin: 0,
                  color: "var(--red)",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {error}
              </p>
            )}

            <button type="submit" disabled={status === "submitting"}>
              {sent
                ? "✓ Quote sent — we'll reply within 4 hours"
                : status === "submitting"
                ? "Sending…"
                : "Send me the quote →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

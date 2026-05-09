import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTA } from "@/components/CTA";
import { CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with LAZ Press. KasKas Rd, Beirut, Lebanon. Quote within four hours.",
};

export default function ContactPage() {
  const c = CONTACT.laz;
  return (
    <>
      <PageHeader
        eyebrow="01 — Contact"
        titleLead="Find us in"
        titleEm="Beirut."
        lede="Four phone lines, one email, one address. Most quotes come back within four working hours; rush jobs we usually start the same day."
      />

      {/* CONTACT CARD */}
      <section className="services" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <article
            style={{
              border: "1px solid var(--rule)",
              borderRadius: 16,
              padding: 48,
              background: "var(--ink)",
              color: "#fff",
              boxShadow: "0 24px 60px rgba(20,23,26,0.08)",
              position: "relative",
              overflow: "hidden",
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 10,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: "#9ea1a6",
                marginBottom: 14,
              }}
            >
              The Press
            </div>

            <h2
              style={{
                fontSize: "clamp(34px, 3.5vw, 56px)",
                color: "#fff",
                marginBottom: 28,
              }}
            >
              {c.label}
            </h2>

            <Row label="Address" value={c.address} />
            {c.phones.map((p, idx) => (
              <Row
                key={p}
                label={idx === 0 ? "Phone" : "Mobile"}
                value={p}
                href={`tel:${p.replace(/\s+/g, "")}`}
              />
            ))}
            <Row label="Email" value={c.email} href={`mailto:${c.email}`} />

            <div
              style={{ marginTop: 32, display: "flex", gap: 6 }}
              aria-hidden="true"
            >
              <i style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--cyan)" }} />
              <i style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--magenta)" }} />
              <i style={{ width: 18, height: 18, borderRadius: "50%", background: "var(--yellow)" }} />
              <i style={{ width: 18, height: 18, borderRadius: "50%", background: "#fff" }} />
            </div>
          </article>
        </div>
      </section>

      {/* QUOTE FORM */}
      <CTA />
    </>
  );
}

function Row({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "100px 1fr",
        gap: 16,
        padding: "12px 0",
        borderTop: "1px solid #2a2d31",
        alignItems: "baseline",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 10,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: "#9ea1a6",
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-instrument-serif), serif",
          fontStyle: "italic",
          fontSize: 22,
          letterSpacing: "-0.01em",
        }}
      >
        {href ? (
          <a href={href} style={{ color: "inherit" }}>
            {value}
          </a>
        ) : (
          value
        )}
      </span>
    </div>
  );
}

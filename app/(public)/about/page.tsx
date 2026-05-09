import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ABOUT, SECURE_PRINTING, type SwatchColor } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ten years in Beirut. LAZ Press — print, packaging, branding, web and social, fully handled. Twenty-plus years specialised in security paper.",
};

const swatchVar: Record<SwatchColor, string> = {
  cyan: "var(--cyan)",
  magenta: "var(--magenta)",
  yellow: "var(--yellow)",
  ink: "var(--ink)",
  red: "var(--red)",
  green: "var(--green)",
  orange: "var(--orange)",
  purple: "var(--purple)",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="01 — About"
        titleLead="Your brand,"
        titleEm="fully"
        titleTail="handled."
        lede="LAZ Press is one promise: to design, print and broadcast your brand under one roof, in Beirut, with ten years of practice and a thousand brands to show for it."
      />

      {/* VISION + MISSION */}
      <section className="services" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="head">
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
                02 — Vision &amp; Mission
              </div>
              <h2>
                Everywhere &amp; <span className="it">unforgettable.</span>
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                    marginBottom: 8,
                  }}
                >
                  Our vision
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-2)" }}>
                  {ABOUT.vision}
                </p>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".18em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                    marginBottom: 8,
                  }}
                >
                  Our mission
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-2)" }}>
                  {ABOUT.mission}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREATE · SHARE · PRINT · OWN pillars */}
      <section className="services">
        <div className="wrap">
          <div className="head">
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
                03 — How we work
              </div>
              <h2>
                Create. Share. <span className="red">Print.</span> <span className="it">Own.</span>
              </h2>
            </div>
            <p>
              Four words. The shape of every engagement we run, whether it's a
              one-off business-card order or a ten-channel brand launch.
            </p>
          </div>

          <div className="svc-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {ABOUT.pillars.map((p, i) => (
              <article key={p.title} className="svc">
                <div className="num">
                  <span>{String(i + 1).padStart(2, "0")} / Pillar</span>
                  <span className="dot" style={{ background: swatchVar[p.swatch] }} />
                </div>
                <h3>{p.title}.</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECURE PRINTING SPOTLIGHT */}
      <section className="specs" id="secure-printing">
        <div className="wrap">
          <div className="head">
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "#9ea1a6",
                  marginBottom: 18,
                }}
              >
                04 — Specialty
              </div>
              <h2>
                Secure printing, <span className="it">confidential.</span>
              </h2>
            </div>
            <p>{SECURE_PRINTING.intro}</p>
          </div>

          <div className="spec-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {SECURE_PRINTING.trust.map((t) => (
              <div key={t.lbl} className="spec">
                <div className="lbl">{t.lbl}</div>
                <div className="val">
                  {t.val}
                  <small>{t.sub}</small>
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 32,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 0,
              border: "1px solid #2a2d31",
              borderBottom: 0,
              borderRight: 0,
            }}
          >
            {SECURE_PRINTING.features.map((f) => (
              <div
                key={f}
                style={{
                  padding: 22,
                  borderRight: "1px solid #2a2d31",
                  borderBottom: "1px solid #2a2d31",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 11,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}
              >
                + {f}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

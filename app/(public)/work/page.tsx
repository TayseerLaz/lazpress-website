import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import {
  CASE_STUDIES_DETAILED,
  GALLERIES,
  type SwatchColor,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from LAZ Press — Marvel, Seven Stars Car Rentals, CTI Riyadh, HK Advocates UAE, Uncle Brown, Kidzona, Fitness Center.",
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

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="01 — Selected work"
        titleLead="A few"
        titleEm="recent"
        titleTail="jobs."
        lede="Seven case studies pulled from a thousand-plus engagements. Each one is end-to-end: the naming or branding, the digital roll-out, and the printed pieces that ship from KasKas Road."
      />

      {/* CASE STUDIES — alternating image/text rows */}
      <section className="work" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {CASE_STUDIES_DETAILED.map((c, i) => (
            <article
              key={c.client}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 56,
                alignItems: "center",
                padding: "72px 0",
                borderTop: i === 0 ? "1px solid var(--rule)" : undefined,
                borderBottom: "1px solid var(--rule)",
              }}
              className="case-row"
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "5/4",
                  border: "1px solid var(--rule)",
                  overflow: "hidden",
                  background: "var(--bg-2)",
                  order: i % 2 === 0 ? 0 : 1,
                }}
              >
                <Image
                  src={c.image}
                  alt={`${c.client} — ${c.scope.join(", ")}`}
                  fill
                  sizes="(max-width: 1100px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div>
                <div
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: 11,
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "var(--ink-3)",
                    marginBottom: 14,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: swatchVar[c.swatch],
                    }}
                  />
                  Case {c.index} · {c.scope.join(" · ")}
                </div>
                <h2 style={{ fontSize: "clamp(36px, 4vw, 64px)", marginBottom: 18 }}>
                  {c.client}.
                </h2>
                <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)" }}>
                  {c.longBody}
                </p>
                <div
                  style={{
                    marginTop: 24,
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  {c.scope.map((s) => (
                    <span
                      key={s}
                      style={{
                        padding: "6px 12px",
                        border: "1px solid var(--rule)",
                        borderRadius: 999,
                        fontSize: 12,
                        color: "var(--ink-2)",
                        background: "#fff",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERIES — photography, printing, packaging from PDF page renders */}
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
                02 — Sample galleries
              </div>
              <h2>
                Photo, print, <span className="it">package.</span>
              </h2>
            </div>
            <p>
              Three slices from the studio: the lens we shoot through, the
              presses we run, and the boxes that leave the bindery.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
            className="gallery-grid"
          >
            {GALLERIES.map((g) => (
              <article
                key={g.slug}
                style={{
                  position: "relative",
                  border: "1px solid var(--rule)",
                  background: "#fff",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "relative", aspectRatio: "297/210" }}>
                  <Image
                    src={g.pageRender}
                    alt={`${g.title} sample page`}
                    fill
                    sizes="(max-width: 1100px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: 24 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains-mono), monospace",
                      fontSize: 10,
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                      marginBottom: 8,
                    }}
                  >
                    {g.pages.length} pages · profile
                  </div>
                  <h3 style={{ fontSize: 26, marginBottom: 10 }}>{g.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)" }}>
                    {g.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="cta">
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
                03 — What's next
              </div>
              <h2>
                Got a job in <span className="it">mind?</span>
              </h2>
              <p>
                Tell us what you're printing, branding or launching. Fixed-fee
                quote and a realistic timeline back within four working hours.
              </p>
              <div className="actions">
                <Link className="btn primary" href="/contact">
                  Start a project <span className="arr">→</span>
                </Link>
                <Link className="btn" href="/clients">
                  See all clients
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) {
          .case-row { grid-template-columns: 1fr !important; gap: 24px !important; }
          .case-row > div:first-child { order: 0 !important; }
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import {
  FEATURED_CLIENT,
  CLIENT_INDUSTRIES,
  CLIENT_WALL_PAGES,
  type SwatchColor,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Over a thousand brands worked through LAZ Press — banks, embassies, universities, hospitality, automotive, legal, and FMCG across Lebanon, the UAE, KSA and Qatar.",
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

export default function ClientsPage() {
  return (
    <>
      <PageHeader
        eyebrow="01 — Clients"
        titleLead="A thousand"
        titleEm="brands."
        titleTail="One shop."
        lede="From neighbourhood cafés to embassies. The roster spans banking, insurance, hospitality, automotive, legal, education and government — across Lebanon, the UAE, Saudi Arabia and Qatar."
      />

      {/* FEATURED CLIENT */}
      <section className="quote" style={{ padding: "80px 0" }}>
        <div className="wrap">
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
              marginBottom: 24,
            }}
          >
            02 — Featured engagement
          </div>
          <blockquote>
            <span className="it">{FEATURED_CLIENT.name}</span>
          </blockquote>
          <p
            style={{
              maxWidth: "52ch",
              margin: "32px auto 0",
              fontSize: 17,
              lineHeight: 1.55,
              color: "var(--ink-2)",
              position: "relative",
            }}
          >
            {FEATURED_CLIENT.body}
          </p>
          <div
            style={{
              marginTop: 18,
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 10,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
              position: "relative",
            }}
          >
            {FEATURED_CLIENT.location}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="services" style={{ paddingTop: 80 }}>
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
                03 — Industries served
              </div>
              <h2>
                Eight sectors. <span className="it">Counting.</span>
              </h2>
            </div>
            <p>
              Some industries land on us repeatedly: regulated work where color
              accuracy and discretion both matter, and consumer brands that
              need every surface coordinated.
            </p>
          </div>

          <div
            className="svc-grid"
            style={{ gridTemplateColumns: "repeat(4, 1fr)" }}
          >
            {CLIENT_INDUSTRIES.map((ind, i) => (
              <article key={ind.name} className="svc" style={{ minHeight: 220 }}>
                <div className="num">
                  <span>{String(i + 1).padStart(2, "0")} / Industry</span>
                  <span
                    className="dot"
                    style={{ background: swatchVar[ind.swatch] }}
                  />
                </div>
                <h3 style={{ fontSize: 22 }}>{ind.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT WALL — page renders from the company profile */}
      <section className="services" style={{ background: "var(--bg-2)" }}>
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
                04 — The wall
              </div>
              <h2>
                Six pages of <span className="it">logos.</span>
              </h2>
            </div>
            <p>
              A snapshot of the brand wall from our company profile — every
              logo here represents a relationship that's actually run through
              the studio.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
            className="wall-grid"
          >
            {CLIENT_WALL_PAGES.map((src, i) => (
              <div
                key={src}
                style={{
                  position: "relative",
                  aspectRatio: "297/210",
                  border: "1px solid var(--rule)",
                  background: "#fff",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={src}
                  alt={`Client wall page ${i + 1}`}
                  fill
                  sizes="(max-width: 1100px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
                05 — Become one
              </div>
              <h2>
                Ready to <span className="it">join</span>{" "}
                <span className="red">the wall?</span>
              </h2>
              <p>
                Tell us about the project — print run, brand build, social
                rollout, all of the above. We'll come back inside four hours.
              </p>
              <div className="actions">
                <Link className="btn primary" href="/contact">
                  Start a conversation <span className="arr">→</span>
                </Link>
                <Link className="btn" href="/work">
                  See case studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1100px) {
          .wall-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .wall-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

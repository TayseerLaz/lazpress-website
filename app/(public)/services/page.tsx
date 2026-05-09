import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Process } from "@/components/Process";
import {
  SERVICES_DETAILED,
  EVENT_MANAGEMENT,
  type SwatchColor,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Twelve services across print and digital — offset, digital and 3D printing, packaging, secure paper, branding, web, social, content, photography, paid ads, and event management.",
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

export default function ServicesPage() {
  const print = SERVICES_DETAILED.filter((s) => s.arm === "Print");
  const digital = SERVICES_DETAILED.filter((s) => s.arm === "Digital");

  return (
    <>
      <PageHeader
        eyebrow="01 — Services"
        titleLead="Twelve services."
        titleEm="One"
        titleTail="press."
        lede="Print and digital, offered together. Five ways we put ink on substrate, seven ways we put your brand online — quoted as one engagement, run from one shop."
      />

      {/* PRINT ARM */}
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
                02 — Print · LAZ Press
              </div>
              <h2>
                Ink, paper, <span className="it">finish.</span>
              </h2>
            </div>
            <p>
              Heidelberg six-color offset, two digital lines, a 3D printer, a
              full bindery and a packaging room. Everything we print, finish
              and ship under one roof in Beirut.
            </p>
          </div>

          <div className="svc-grid">
            {print.map((s, i) => (
              <article key={s.category} className="svc">
                <div className="num">
                  <span>
                    {String(i + 1).padStart(2, "0")} / {s.category}
                  </span>
                  <span className="dot" style={{ background: swatchVar[s.swatch] }} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <span className="tag">+ LAZ Press</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL ARM */}
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
                03 — Digital
              </div>
              <h2>
                Brand, web, <span className="it">audience.</span>
              </h2>
            </div>
            <p>
              The other half of the studio. Strategy, design and execution
              that lives online — feeding the print runs we produce next door.
            </p>
          </div>

          <div className="svc-grid">
            {digital.map((s, i) => (
              <article key={s.category} className="svc">
                <div className="num">
                  <span>
                    {String(i + 1).padStart(2, "0")} / {s.category}
                  </span>
                  <span className="dot" style={{ background: swatchVar[s.swatch] }} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <span className="tag">+ Digital</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT MANAGEMENT — single feature row */}
      <section className="cta" style={{ paddingTop: 80, paddingBottom: 80 }}>
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
                04 — Plus
              </div>
              <h2>
                {EVENT_MANAGEMENT.title.split(" ")[0]}{" "}
                <span className="it">{EVENT_MANAGEMENT.title.split(" ")[1]}</span>
              </h2>
              <p>{EVENT_MANAGEMENT.body}</p>
              <div className="actions">
                <Link className="btn primary" href="/contact">
                  Talk about your event <span className="arr">→</span>
                </Link>
              </div>
            </div>
            <div className="quote-card">
              <div className="top">
                <span className="lbl">From the brief to the venue</span>
                <span className="badge">All-in</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Concept, theme and creative direction",
                  "Venue, vendors and logistics",
                  "Stage, signage and on-site print",
                  "Photo and video coverage",
                  "Social capture and post-event content",
                  "Reporting and follow-up",
                ].map((line) => (
                  <li key={line} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--red)",
                      }}
                    />
                    <span style={{ fontSize: 15, color: "var(--ink-2)" }}>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Process />
    </>
  );
}

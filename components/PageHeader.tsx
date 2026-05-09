/**
 * Compact hero used at the top of sub-pages (/about, /services, /work, etc.).
 * Reuses the same h1 reveal animation as the home hero so every page feels
 * consistent visually. No new styles introduced.
 */

type Props = {
  eyebrow: string;
  titleLead: string;
  titleEm?: string;
  titleTail?: string;
  lede: string;
};

export function PageHeader({ eyebrow, titleLead, titleEm, titleTail, lede }: Props) {
  return (
    <section className="hero" style={{ padding: "64px 0 56px" }}>
      <div className="wrap">
        <div style={{ position: "relative", zIndex: 1, maxWidth: "60ch" }}>
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
            {eyebrow}
          </div>
          <h1 style={{ fontSize: "clamp(48px, 7vw, 112px)" }}>
            <span className="reveal d1">
              <span>{titleLead}</span>
            </span>
            {(titleEm || titleTail) && (
              <>
                <br />
                <span className="reveal d2">
                  <span>
                    {titleEm && <span className="it">{titleEm}</span>}
                    {titleEm && titleTail && " "}
                    {titleTail && <span className="red">{titleTail}</span>}
                  </span>
                </span>
              </>
            )}
          </h1>
          <p className="lede">{lede}</p>
        </div>
      </div>
    </section>
  );
}

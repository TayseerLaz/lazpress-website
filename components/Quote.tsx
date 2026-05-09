export function Quote() {
  return (
    <section className="quote" aria-label="Client testimonial">
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
          — From the GM, March 2026
        </div>
        <blockquote>
          “Twenty-four years in, I still don&apos;t ship a job until I&apos;d
          hang it on my own <span className="it">wall.</span>”
        </blockquote>
        <div className="cite">
          <span className="av" aria-hidden="true">
            HL
          </span>
          <span className="who">
            <span className="nm">Hani Laz</span>
            <br />
            <span className="role">General Manager, LAZ Press</span>
          </span>
        </div>
      </div>
    </section>
  );
}

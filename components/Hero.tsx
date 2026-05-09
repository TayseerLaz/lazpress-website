export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="kicker">
              <span className="swatches" aria-hidden="true">
                <i style={{ background: "var(--cyan)" }} />
                <i style={{ background: "var(--magenta)" }} />
                <i style={{ background: "var(--yellow)" }} />
                <i style={{ background: "var(--ink)" }} />
              </span>
              <span>Offset · Digital · Secure · Packaging · Branding</span>
            </div>

            <h1>
              <span className="reveal d1">
                <span>Your brand,</span>
              </span>
              <br />
              <span className="reveal d2">
                <span>
                  <span className="it">fully</span> handled
                </span>
              </span>
              <br />
              <span className="reveal d3">
                <span>
                  <span className="red">end to end.</span>{" "}
                  <span className="stamp">CMYK</span>
                </span>
              </span>
            </h1>

            <p className="lede">
              From naming and branding to packaging, print runs and websites —
              LAZ Press handles every part of your brand under one roof.
              Ten years deep, trusted by over 1,000 companies across Lebanon,
              the UAE, KSA and Qatar.
            </p>

            <div className="actions">
              <a className="btn primary" href="#quote">
                Get an instant quote <span className="arr">→</span>
              </a>
              <a className="btn" href="#work">
                See our work
              </a>
            </div>

            <div className="trust">
              <span className="stack" aria-hidden="true">
                <i>M</i>
                <i>7S</i>
                <i>CT</i>
                <i>+</i>
              </span>
              <span>
                <strong style={{ color: "var(--ink)" }}>1,000+</strong> brands
                handled · 10 years in Beirut · 700+ secure-paper clients
              </span>
            </div>
          </div>

          <div className="hero-illus" aria-hidden="true">
            {/* Registration marks */}
            <svg className="reg-mark r1" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" fill="none" stroke="#15171a" strokeWidth="1" />
              <circle cx="20" cy="20" r="10" fill="none" stroke="#15171a" strokeWidth="1" />
              <line x1="20" y1="0" x2="20" y2="40" stroke="#15171a" />
              <line x1="0" y1="20" x2="40" y2="20" stroke="#15171a" />
            </svg>
            <svg className="reg-mark r2" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="18" fill="none" stroke="#e30613" strokeWidth="1" />
              <circle cx="20" cy="20" r="10" fill="none" stroke="#e30613" strokeWidth="1" />
              <line x1="20" y1="0" x2="20" y2="40" stroke="#e30613" />
              <line x1="0" y1="20" x2="40" y2="20" stroke="#e30613" />
            </svg>

            <div className="print-stack">
              <div className="sheet s1">
                <div className="swatch" />
                <div className="lines">
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="sheet s2">
                <div className="head" />
                <div className="badge">★</div>
                <div className="ttl">
                  Brochure
                  <br />
                  Spring &apos;26
                </div>
                <div className="sub">Offset · 4/4 · 100lb gloss</div>
                <div className="barcode">
                  <i style={{ height: "80%" }} />
                  <i style={{ height: "60%" }} />
                  <i style={{ height: "90%" }} />
                  <i style={{ height: "40%" }} />
                  <i style={{ height: "70%" }} />
                  <i style={{ height: "50%" }} />
                  <i style={{ height: "85%" }} />
                  <i style={{ height: "55%" }} />
                  <i style={{ height: "75%" }} />
                  <i style={{ height: "65%" }} />
                </div>
              </div>

              <div className="sheet s3">
                <div className="num">
                  14<small>Issue</small>
                </div>
                <div className="grid3">
                  <i style={{ background: "var(--cyan)" }} />
                  <i style={{ background: "var(--magenta)" }} />
                  <i style={{ background: "var(--yellow)" }} />
                  <i style={{ background: "#fff" }} />
                  <i style={{ background: "var(--red)" }} />
                  <i style={{ background: "var(--green)" }} />
                  <i style={{ background: "var(--orange)" }} />
                  <i style={{ background: "var(--purple)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

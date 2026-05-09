import { FOOTER_NAV } from "@/lib/content";

export function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="bigword">
          LAZ <span className="it">Press.</span>
        </div>

        <div className="cols">
          <div className="about-col">
            <h5>The Press</h5>
            <p>
              LAZ Press — Beirut. Print, packaging, branding, web and social,
              fully handled under one roof. Ten years in, 1,000+ brands deep.
            </p>
            <div style={{ display: "flex", gap: 6, marginTop: 6 }} aria-hidden="true">
              <i style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--cyan)" }} />
              <i style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--magenta)" }} />
              <i style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--yellow)" }} />
              <i style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--red)" }} />
            </div>
          </div>

          <div>
            <h5>Services</h5>
            <ul>
              {FOOTER_NAV.services.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Studio</h5>
            <ul>
              {FOOTER_NAV.studio.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Visit · Contact</h5>
            <ul>
              {FOOTER_NAV.contact.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bottom">
          <span>© LAZ Press · KasKas Rd, Beirut · Create · Share · Print · Own</span>
          <span className="cmyk" aria-hidden="true">
            <i style={{ background: "var(--cyan)" }} />
            <i style={{ background: "var(--magenta)" }} />
            <i style={{ background: "var(--yellow)" }} />
            <i style={{ background: "#fff" }} />
          </span>
          <span>20+ years in security paper · 700+ institutions</span>
        </div>
      </div>
    </footer>
  );
}

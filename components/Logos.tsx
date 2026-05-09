import { TRUSTED_BRANDS } from "@/lib/content";

export function Logos() {
  return (
    <section className="logos" aria-label="Trusted by">
      <div className="wrap">
        <div className="row">
          <span className="lbl">Trusted by 600+ brands &amp; studios</span>
          <div className="marks">
            {TRUSTED_BRANDS.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

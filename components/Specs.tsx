import { SPECS } from "@/lib/content";

export function Specs() {
  return (
    <section className="specs" id="specs">
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
              04 — The specs
            </div>
            <h2>
              The <span className="it">shop</span>, by the numbers.
            </h2>
          </div>
          <p>
            Three offset presses, two digital lines, a full bindery, and a
            4,500 sq ft floor that smells faintly of ink. We&apos;ve been doing
            this since 2002.
          </p>
        </div>

        <dl className="spec-grid">
          {SPECS.map((spec) => (
            <div key={spec.lbl} className="spec">
              <dt className="lbl">{spec.lbl}</dt>
              <dd className="val">
                {spec.val}
                <small>{spec.sub}</small>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

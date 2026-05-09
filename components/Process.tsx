import { PROCESS_STEPS } from "@/lib/content";

export function Process() {
  return (
    <section className="process" id="process">
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
              02 — How it works
            </div>
            <h2>
              Five steps. <span className="it">Zero</span> surprises.
            </h2>
          </div>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.55,
              maxWidth: "38ch",
              color: "var(--ink-2)",
            }}
          >
            From an emailed PDF to a stack of finished work on your front desk
            — most jobs ship within 5 to 9 business days.
          </p>
        </div>

        <ol className="timeline">
          {PROCESS_STEPS.map((step) => (
            <li key={step.step} className="tnode">
              <div className="dot">{step.step}</div>
              <div className="body">
                <h4>{step.title}</h4>
                <p>{step.body}</p>
                <div className="meta">{step.meta}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

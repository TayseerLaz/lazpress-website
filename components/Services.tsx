import { SERVICES, type Service, type SwatchColor } from "@/lib/content";

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

export function Services() {
  return (
    <section className="services" id="services">
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
              01 — What we print
            </div>
            <h2>
              Six presses, <span className="red">one</span>
              <br />
              obsession with <span className="it">color.</span>
            </h2>
          </div>
          <p>
            From a 50-card run to a 50,000-piece campaign, LAZ Press handles
            the whole job — files, proofs, plates, ink, finish, and delivery.
            No middlemen, no mystery markups.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((svc) => (
            <ServiceCard key={svc.index} service={svc} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="svc">
      <div className="num">
        <span>
          {service.index} / {service.category}
        </span>
        <span
          className="dot"
          style={{ background: swatchVar[service.swatch] }}
          aria-hidden="true"
        />
      </div>
      <h3>
        {service.titleLead} <span className="it">{service.titleEm}</span>
      </h3>
      <p>{service.body}</p>
      <div className="icon" aria-hidden="true">
        <ServiceIcon index={service.index} />
      </div>
      <span className="tag">{service.tag}</span>
    </article>
  );
}

function ServiceIcon({ index }: { index: string }) {
  switch (index) {
    case "01":
      return <OffsetIcon />;
    case "02":
      return <DigitalIcon />;
    case "03":
      return <LargeFormatIcon />;
    case "04":
      return <PackagingIcon />;
    case "05":
      return <StationeryIcon />;
    case "06":
      return <BookbindingIcon />;
    default:
      return null;
  }
}

function OffsetIcon() {
  return (
    <svg width="160" height="100" viewBox="0 0 160 100">
      <rect x="20" y="40" width="120" height="40" fill="#15171a" />
      <circle cx="50" cy="60" r="14" fill="#fff" stroke="#15171a" />
      <circle cx="50" cy="60" r="5" fill="var(--cyan)" />
      <circle cx="80" cy="60" r="14" fill="#fff" stroke="#15171a" />
      <circle cx="80" cy="60" r="5" fill="var(--magenta)" />
      <circle cx="110" cy="60" r="14" fill="#fff" stroke="#15171a" />
      <circle cx="110" cy="60" r="5" fill="var(--yellow)" />
      <g className="float">
        <rect x="40" y="14" width="80" height="22" fill="#fff" stroke="#15171a" />
        <line x1="48" y1="22" x2="112" y2="22" stroke="#15171a" />
        <line x1="48" y1="28" x2="92" y2="28" stroke="#15171a" />
      </g>
      <rect x="20" y="84" width="120" height="6" fill="#15171a" />
    </svg>
  );
}

function DigitalIcon() {
  return (
    <svg width="160" height="100" viewBox="0 0 160 100">
      <rect x="20" y="20" width="120" height="64" rx="6" fill="#fff" stroke="#15171a" strokeWidth="1.5" />
      <rect x="32" y="32" width="96" height="34" fill="var(--magenta)" opacity="0.15" />
      <text x="80" y="55" textAnchor="middle" fontFamily="Instrument Serif" fontStyle="italic" fontSize="22" fill="var(--magenta)">
        Hello
      </text>
      <g className="float">
        <rect x="60" y="74" width="40" height="22" fill="#fff" stroke="#15171a" />
      </g>
      <rect x="40" y="84" width="6" height="6" fill="var(--cyan)" />
      <rect x="50" y="84" width="6" height="6" fill="var(--magenta)" />
      <rect x="60" y="84" width="6" height="6" fill="var(--yellow)" />
      <rect x="70" y="84" width="6" height="6" fill="#15171a" />
    </svg>
  );
}

function LargeFormatIcon() {
  return (
    <svg width="160" height="100" viewBox="0 0 160 100">
      <rect x="20" y="20" width="120" height="60" fill="var(--yellow)" stroke="#15171a" />
      <text x="80" y="58" textAnchor="middle" fontFamily="Manrope" fontWeight="800" fontSize="28" fill="#15171a">
        SALE
      </text>
      <line x1="14" y1="84" x2="146" y2="84" stroke="#15171a" strokeWidth="2" />
      <circle cx="20" cy="20" r="3" fill="#15171a" />
      <circle cx="140" cy="20" r="3" fill="#15171a" />
      <circle cx="20" cy="80" r="3" fill="#15171a" />
      <circle cx="140" cy="80" r="3" fill="#15171a" />
    </svg>
  );
}

function PackagingIcon() {
  return (
    <svg width="160" height="100" viewBox="0 0 160 100">
      <g transform="translate(80 50)">
        <polygon
          points="-30,-22 30,-22 38,-10 38,28 -38,28 -38,-10"
          fill="var(--red)"
          stroke="#15171a"
          strokeWidth="1.5"
        />
        <polygon
          points="-38,-10 38,-10 30,-22 -30,-22"
          fill="#fff"
          stroke="#15171a"
          strokeWidth="1.5"
          opacity="0.95"
        />
        <line x1="-38" y1="-10" x2="38" y2="-10" stroke="#15171a" />
        <text x="0" y="14" textAnchor="middle" fontFamily="Instrument Serif" fontStyle="italic" fontSize="18" fill="#fff">
          LAZ
        </text>
      </g>
    </svg>
  );
}

function StationeryIcon() {
  return (
    <svg width="160" height="100" viewBox="0 0 160 100">
      <g transform="translate(80 50)">
        <rect x="-40" y="-10" width="64" height="36" fill="#fff" stroke="#15171a" strokeWidth="1.2" transform="rotate(-6)" />
        <rect x="-24" y="-22" width="64" height="36" fill="#fff" stroke="#15171a" strokeWidth="1.2" transform="rotate(6)" />
        <text x="-12" y="0" fontFamily="Instrument Serif" fontStyle="italic" fontSize="14" fill="var(--red)" transform="rotate(6)">
          Nora
        </text>
        <line x1="-10" y1="6" x2="20" y2="6" stroke="#15171a" transform="rotate(6)" />
        <text x="-12" y="14" fontFamily="Manrope" fontSize="6" fill="#15171a" transform="rotate(6)">
          CREATIVE DIRECTOR
        </text>
      </g>
    </svg>
  );
}

function BookbindingIcon() {
  return (
    <svg width="160" height="100" viewBox="0 0 160 100">
      <rect x="40" y="20" width="80" height="60" fill="#fff" stroke="#15171a" strokeWidth="1.5" />
      <rect x="40" y="20" width="14" height="60" fill="var(--green)" />
      <line x1="62" y1="36" x2="110" y2="36" stroke="#15171a" />
      <line x1="62" y1="44" x2="100" y2="44" stroke="#15171a" />
      <line x1="62" y1="52" x2="106" y2="52" stroke="#15171a" />
      <line x1="62" y1="60" x2="92" y2="60" stroke="#15171a" />
      <text x="78" y="76" fontFamily="Instrument Serif" fontStyle="italic" fontSize="12" fill="#15171a">
        v.1
      </text>
    </svg>
  );
}

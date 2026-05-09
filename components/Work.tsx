import Image from "next/image";

type Tile = {
  cls: string;
  src: string;
  alt: string;
  scope: string;
  client: string;
};

/**
 * Same grid layout (.t1–.t6 sizes from globals.css).
 * The CSS illustrations are replaced with real case-study photos from the
 * LAZ Press company profile. Labels and hover behavior are unchanged.
 */
const TILES: Tile[] = [
  {
    cls: "t1",
    src: "/case-studies/marvel.webp",
    alt: "Marvel branding and print collateral",
    scope: "01 · Branding · Print Collateral",
    client: "Marvel",
  },
  {
    cls: "t2",
    src: "/case-studies/hk-advocates.webp",
    alt: "HK Advocates social and graphic design",
    scope: "02 · Content · Social · Reels",
    client: "HK Advocates",
  },
  {
    cls: "t3",
    src: "/case-studies/uncle-brown.webp",
    alt: "Uncle Brown brand and event identity",
    scope: "03 · Branding · Event · Social",
    client: "Uncle Brown",
  },
  {
    cls: "t4",
    src: "/case-studies/kidzona.webp",
    alt: "Kidzona naming, signage and brand system",
    scope: "04 · Naming · Branding · Signage",
    client: "Kidzona",
  },
  {
    cls: "t5",
    src: "/case-studies/seven-stars.webp",
    alt: "Seven Stars Car Rentals content production",
    scope: "05 · Content · Social · Production",
    client: "Seven Stars",
  },
  {
    cls: "t6",
    src: "/case-studies/cti.webp",
    alt: "CTI logo and company profile",
    scope: "06 · Branding · Company Profile",
    client: "CTI · Riyadh",
  },
];

export function Work() {
  return (
    <section className="work" id="work">
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
              03 — Selected work
            </div>
            <h2>
              A few <span className="it">recent</span> jobs.
            </h2>
          </div>
          <a className="btn" href="#contact">
            View full portfolio (1,000+) <span className="arr">→</span>
          </a>
        </div>

        <div className="gallery">
          {TILES.map((tile) => (
            <article key={tile.cls} className={`tile ${tile.cls}`}>
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
                }}
              />
              <div className="label" style={{ color: "#fff", zIndex: 2 }}>
                <span>{tile.scope}</span>
                <span className="ttl">{tile.client}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

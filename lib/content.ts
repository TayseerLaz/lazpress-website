/**
 * Single source of truth for site copy.
 * Sourced from the LAZ Press company profile.
 */

export type SwatchColor =
  | "cyan"
  | "magenta"
  | "yellow"
  | "ink"
  | "red"
  | "green"
  | "orange"
  | "purple";

export const BRAND = {
  name: "LAZ Press",
  tagline: "Your brand, fully handled.",
  pillars: ["Create", "Share", "Print", "Own"] as const,
  yearsExperience: 10,
  clientCount: "1000+",
  secureClients: "700+",
} as const;

export const TICKER_ITEMS = [
  "Create · Share · Print · Own",
  "Offset · Digital · 3D Printing",
  "20+ years in security paper",
  "Branding · Web · Social · Print",
  "Trusted by 1000+ brands worldwide",
] as const;

export const NAV_LINKS = [
  { href: "/about",    label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work",     label: "Work" },
  { href: "/clients",  label: "Clients" },
] as const;

/** Real client names featured in the company profile. Used in the logo strip. */
export const TRUSTED_BRANDS = [
  "Marvel",
  "Seven Stars",
  "CTI",
  "HK Advocates",
  "Uncle Brown",
  "Kidzona",
  "Embassy of Qatar",
] as const;

export type Service = {
  index: string;
  category: string;
  swatch: SwatchColor;
  titleLead: string;
  titleEm: string;
  body: string;
  tag: string;
};

/**
 * Six representative cards that cover the full LAZ Press offering.
 * Print services lead (LAZ Press core), digital services close.
 */
export const SERVICES: Service[] = [
  {
    index: "01",
    category: "Offset, Digital & 3D Printing",
    swatch: "cyan",
    titleLead: "Print at",
    titleEm: "any scale.",
    body:
      "Offset for runs of 500 to 50,000. Digital for same-day, short-run, or variable-data jobs. 3D printing for prototypes and creative formats.",
    tag: "+ Offset · Digital · 3D",
  },
  {
    index: "02",
    category: "Packaging & Label Design",
    swatch: "magenta",
    titleLead: "Packaging that",
    titleEm: "moves product.",
    body:
      "Custom dielines, labels, soft-touch laminate, foil and emboss — designed and produced under one roof, prototype before production.",
    tag: "+ Boxes · Labels · Foil",
  },
  {
    index: "03",
    category: "Secure Printing",
    swatch: "yellow",
    titleLead: "Tamper-proof,",
    titleEm: "by design.",
    body:
      "Two decades in security paper. Anti-fraud features, CBS1 chemical paper, bond paper, label books — trusted by 700+ banks, insurers and universities.",
    tag: "+ Bond · CBS1 · Anti-fraud",
  },
  {
    index: "04",
    category: "Branding & Identity",
    swatch: "red",
    titleLead: "Logos,",
    titleEm: "fully built.",
    body:
      "Naming, logo design, brand systems, company profiles, signage, and stationery. We build the identity and we print it — same shop, same standard.",
    tag: "+ Logo · System · Profile",
  },
  {
    index: "05",
    category: "Web & Digital Marketing",
    swatch: "ink",
    titleLead: "Web, social,",
    titleEm: "campaigns.",
    body:
      "Websites, SEO, social media, paid ads and event management — the digital half of an end-to-end brand offering.",
    tag: "+ Web · SEO · Social · Ads",
  },
  {
    index: "06",
    category: "Photography & Video",
    swatch: "green",
    titleLead: "Content that",
    titleEm: "tells the story.",
    body:
      "Professional photography, videography, montage, copywriting and animated reels — production tailored to your brand voice and audience.",
    tag: "+ Photo · Video · Copy",
  },
];

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
  meta: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Brief & quote",
    body:
      "Send specs, sketches or a brand brief. We reply with a fixed-fee quote and timeline within four hours.",
    meta: "Day 0 · 4 hrs",
  },
  {
    step: "02",
    title: "Concept & files",
    body:
      "Branding, design, content. For print jobs we preflight bleeds, fonts, color profiles and overprints before plating.",
    meta: "Day 1 · same-day",
  },
  {
    step: "03",
    title: "Proof & sign-off",
    body: "Digital and hardcopy proofs in 24 hours. Pantone draw-downs and brand reviews on request.",
    meta: "Day 2–3",
  },
  {
    step: "04",
    title: "Produce & finish",
    body:
      "Plates, ink, run, finish. Diecut, foil, lamination, binding, packaging — all under one roof in Beirut.",
    meta: "Day 4–7",
  },
  {
    step: "05",
    title: "Deliver & launch",
    body:
      "Hand-counted, packed and delivered. For digital campaigns: scheduled, launched, measured and optimized.",
    meta: "Day 8–9",
  },
];

export type Spec = { lbl: string; val: string; sub: string };

export const SPECS: Spec[] = [
  { lbl: "Years in business", val: "10+",     sub: "LAZ Press · Beirut" },
  { lbl: "Clients served",    val: "1,000+",  sub: "Local and international brands" },
  { lbl: "Secure-paper trust",val: "700+",    sub: "Banks, insurers, universities" },
  { lbl: "Print methods",     val: "3",       sub: "Offset · Digital · 3D" },
  { lbl: "Service streams",   val: "12",      sub: "Print, branding, digital, events" },
  { lbl: "Featured studies",  val: "8",       sub: "Marvel · Seven Stars · CTI · more" },
  { lbl: "Headquarters",      val: "Beirut",  sub: "KasKas Rd · Lebanon" },
  { lbl: "Reach",             val: "MENA+",   sub: "Lebanon · UAE · KSA · Qatar" },
];

export type CaseStudy = {
  index: string;
  client: string;
  scope: string;
  body: string;
  swatch: SwatchColor;
  page: number;
};

/** Featured case studies pulled from the company profile. */
export const CASE_STUDIES: CaseStudy[] = [
  {
    index: "01",
    client: "Marvel",
    scope: "Branding · Print",
    body: "Logo and complete brand system, plus production of marketing print collateral.",
    swatch: "red",
    page: 8,
  },
  {
    index: "02",
    client: "Seven Stars Car Rentals",
    scope: "Content · Social · Production",
    body:
      "Luxury rental brand in Lebanon. Video scripting, graphic design, production and editing — plus influencer collaborations and giveaway campaigns.",
    swatch: "ink",
    page: 10,
  },
  {
    index: "03",
    client: "CTI",
    scope: "Branding · Company Profile",
    body:
      "Riyadh-based firm. Full identity package: logo design and a company profile that anchors a clean, cohesive brand voice.",
    swatch: "cyan",
    page: 11,
  },
  {
    index: "04",
    client: "HK Advocates",
    scope: "Content · Social · Reels",
    body:
      "UAE law firm. Content creation, copywriting, graphic design and animated reels to grow their digital presence.",
    swatch: "yellow",
    page: 12,
  },
  {
    index: "05",
    client: "Uncle Brown",
    scope: "Branding · Event · Social",
    body:
      "Logo, full branding, opening event production, video editing and ongoing social media management.",
    swatch: "magenta",
    page: 13,
  },
  {
    index: "06",
    client: "Kidzona",
    scope: "Naming · Branding · Signage",
    body:
      "Created the name, designed the logo, built the brand system — including signage, menus, video and social management.",
    swatch: "green",
    page: 14,
  },
];

export const CONTACT = {
  laz: {
    label: "LAZ Press",
    address: "KasKas Rd, Beirut — Lebanon",
    phones: ["00961 1 821 233", "00961 3 856 725", "00961 81 652 110", "00961 70 303 909"],
    email: "lazhani@hotmail.com",
  },
} as const;

/* ---------------- /about page ---------------- */

export const ABOUT = {
  vision:
    "Empowering brands to thrive across both digital and physical worlds through innovative strategies, creative storytelling, high-quality printing, and data-driven results — helping them reach new heights with a presence that's everywhere and unforgettable.",
  mission:
    "Empower local and international businesses to grow and engage their audiences through customized strategies, creative excellence, and seamless brand execution across both digital and physical platforms. LAZ Press delivers comprehensive digital marketing — branding, SEO, web, and content — alongside mastery in all types of printing and production.",
  pillars: [
    {
      title: "Create",
      body: "Naming, brand systems, content, video, photography — the work that defines who you are.",
      swatch: "cyan" as SwatchColor,
    },
    {
      title: "Share",
      body: "Web, social, paid ads, events — putting the brand in front of the right audience at the right time.",
      swatch: "magenta" as SwatchColor,
    },
    {
      title: "Print",
      body: "Offset, digital, 3D, packaging, secure paper, stationery — produced under one roof in Beirut.",
      swatch: "yellow" as SwatchColor,
    },
    {
      title: "Own",
      body: "A presence that's consistent, trusted, and unforgettable — across every surface your customers touch.",
      swatch: "red" as SwatchColor,
    },
  ],
} as const;

export const SECURE_PRINTING = {
  intro:
    "Twenty-plus years of expertise in security paper manufacturing. State-of-the-art anti-fraud features integrated into a single value document, with traditional Arabian font choreography and intricate oriental patterns alongside modern technology.",
  features: [
    "Bond paper",
    "CBS1 chemical protection paper",
    "Label & instruction-book paper",
    "Anti-fraud security features",
    "Tamper-proof finishing",
    "Cultural design — Arabian fonts, oriental patterns",
  ],
  trust: [
    { lbl: "Years specialised", val: "20+",  sub: "Since establishment" },
    { lbl: "Institutions",      val: "700+", sub: "Banks · insurance · universities" },
    { lbl: "Document fraud",    val: "0",    sub: "Tolerated. Ever." },
  ],
} as const;

/* ---------------- /services page ---------------- */

export type ServiceDetail = {
  category: string;
  title: string;
  body: string;
  swatch: SwatchColor;
  arm: "Print" | "Digital";
};

/** All 12 services from the company profile, categorised by which arm delivers them. */
export const SERVICES_DETAILED: ServiceDetail[] = [
  // --- Print (LAZ Press) ---
  {
    category: "Offset, Digital & 3D Printing",
    title: "Print at any scale, speed or creative format.",
    body: "Offset for runs of 500 to 50,000. Digital for same-day, short-run, or variable-data jobs. 3D printing for prototypes and unconventional formats. Heidelberg presses, Pantone-matched output, ISO-grade color accuracy.",
    swatch: "cyan",
    arm: "Print",
  },
  {
    category: "Packaging & Label Design",
    title: "Eye-catching packaging and labels tailored to your brand.",
    body: "Custom dielines, soft-touch laminate, foil stamp and emboss. Labels for FMCG, cosmetics, food and beverage. Always prototyped before production.",
    swatch: "magenta",
    arm: "Print",
  },
  {
    category: "Brochures, Flyers & Menus",
    title: "Sharp, impactful prints for marketing, menus and promotions.",
    body: "Multi-fold brochures, flyers, takeaway menus, lookbooks. Specialty stocks, spot UV, perfect-bound and saddle-stitched.",
    swatch: "yellow",
    arm: "Print",
  },
  {
    category: "Custom Stationery & Business Cards",
    title: "Branded stationery for a strong professional presence.",
    body: "Triplex stocks, edge-paint, letterpress, foil. Business cards, letterheads, envelopes, presentation folders — built to ship as a brand kit.",
    swatch: "red",
    arm: "Print",
  },
  {
    category: "Secure Printing — Confidential",
    title: "Tamper-proof printing for sensitive or official materials.",
    body: "Two decades in security paper. Bond, CBS1 chemical protection, and label-book papers with anti-fraud features, trusted by 700+ banks, insurers and universities.",
    swatch: "ink",
    arm: "Print",
  },
  // --- Digital ---
  {
    category: "Branding",
    title: "Building a unique and memorable brand identity that stands out.",
    body: "Naming, logo, identity systems, voice, brand guidelines and brand books. From challengers to legacy companies repositioning.",
    swatch: "red",
    arm: "Digital",
  },
  {
    category: "Graphic Design",
    title: "Eye-catching designs that communicate your brand message effectively.",
    body: "Posters, social posts, key visuals, presentations, infographics — across every channel where the brand needs to land.",
    swatch: "magenta",
    arm: "Digital",
  },
  {
    category: "Web Design & Development",
    title: "Custom websites designed to enhance UX and drive conversions.",
    body: "Marketing sites, landing pages, e-commerce. Built for performance, SEO, accessibility, and easy editing.",
    swatch: "cyan",
    arm: "Digital",
  },
  {
    category: "Content Creation & Copywriting",
    title: "Creative content tailored to your brand's voice and audience.",
    body: "Long-form articles, scripts, captions, taglines, animated reels. Bilingual capability — Arabic and English.",
    swatch: "yellow",
    arm: "Digital",
  },
  {
    category: "Photography, Videography & Montage",
    title: "Professional production to elevate your visual storytelling.",
    body: "Studio and on-location shoots, product photography, brand films, event coverage, post-production and color grading.",
    swatch: "green",
    arm: "Digital",
  },
  {
    category: "Social Media Management",
    title: "Boost your online presence and engagement.",
    body: "Strategy, content calendars, community management, performance reporting across Instagram, TikTok, LinkedIn, YouTube and more.",
    swatch: "purple",
    arm: "Digital",
  },
  {
    category: "Paid Ad Campaigns",
    title: "Targeted ad campaigns that maximise return on investment.",
    body: "Meta, Google, TikTok and LinkedIn ads. Audience research, creative testing, conversion optimization, and weekly reporting.",
    swatch: "orange",
    arm: "Digital",
  },
];

export const EVENT_MANAGEMENT = {
  title: "Event Management",
  body: "Tailored, seamless and stress-free event production from concept to execution. Brand launches, product reveals, conferences and openings — fully handled.",
} as const;

/* ---------------- /work page ---------------- */

export type CaseStudyDetailed = Omit<CaseStudy, "scope"> & {
  scope: string[];
  longBody: string;
  image: string;
};

export const CASE_STUDIES_DETAILED: CaseStudyDetailed[] = [
  {
    index: "01",
    client: "Marvel",
    scope: ["Branding", "Logo", "Print Collateral"],
    body: "Logo, brand system and print collateral.",
    longBody:
      "For Marvel we developed the logo and complete branding, alongside print materials supporting their marketing efforts. The result is a single, coherent brand voice from screen to shelf.",
    swatch: "red",
    page: 8,
    image: "/case-studies/marvel.webp",
  },
  {
    index: "02",
    client: "Fitness Center",
    scope: ["Production", "Social Media", "Graphic Design", "Print"],
    body: "Full content creation and social media management.",
    longBody:
      "For Fitness Center we delivered full-scale content creation including social media management, graphic design, video production and print solutions — enhancing brand visibility and customer engagement across every touchpoint.",
    swatch: "magenta",
    page: 9,
    image: "/case-studies/seven-stars.webp",
  },
  {
    index: "03",
    client: "Seven Stars Car Rentals",
    scope: ["Content", "Production", "Influencer", "Campaigns"],
    body: "Luxury car rental brand in Lebanon.",
    longBody:
      "For Seven Stars, a luxury car rental brand in Lebanon, we delivered comprehensive content creation including video scripting, graphic design, production and editing. We also managed influencer collaborations and developed creative campaigns — special-occasion giveaways among them — to grow engagement.",
    swatch: "ink",
    page: 10,
    image: "/case-studies/seven-stars.webp",
  },
  {
    index: "04",
    client: "CTI",
    scope: ["Branding", "Company Profile"],
    body: "Riyadh-based identity and profile.",
    longBody:
      "For CTI, a company based in Riyadh, Saudi Arabia, we executed full branding services including the design of their logo and the development of their company profile — establishing a strong, cohesive brand identity ready for the regional market.",
    swatch: "cyan",
    page: 11,
    image: "/case-studies/cti.webp",
  },
  {
    index: "05",
    client: "HK Advocates",
    scope: ["Content", "Copywriting", "Animated Reels", "Social"],
    body: "UAE law firm, content & social.",
    longBody:
      "For HK Advocates, a law firm in the UAE, we provided content creation, copywriting, graphic design and edited animated reels to enhance their digital presence and engage their audience effectively.",
    swatch: "yellow",
    page: 12,
    image: "/case-studies/hk-advocates.webp",
  },
  {
    index: "06",
    client: "Uncle Brown",
    scope: ["Branding", "Event", "Production", "Social Media"],
    body: "Logo, opening event, ongoing social.",
    longBody:
      "For Uncle Brown we handled the logo design, complete branding and the organisation of their opening event. Our services also included graphic design, video production and editing, plus comprehensive social media management to grow their brand presence.",
    swatch: "orange",
    page: 13,
    image: "/case-studies/uncle-brown.webp",
  },
  {
    index: "07",
    client: "Kidzona",
    scope: ["Naming", "Branding", "Signage", "Menu", "Social"],
    body: "Naming, brand system, signage.",
    longBody:
      "For Kidzona we created the name, designed the logo, and established comprehensive branding — including key brand elements such as signage and the menu. Our services also covered video production and social media management to build a strong, consistent brand identity.",
    swatch: "green",
    page: 14,
    image: "/case-studies/kidzona.webp",
  },
];

export type GalleryGroup = {
  slug: string;
  title: string;
  caption: string;
  pageRender: string;
  pages: number[];
};

export const GALLERIES: GalleryGroup[] = [
  {
    slug: "photography",
    title: "Photography",
    caption:
      "Capturing moments with creativity and care — bringing client vision to life through our lens.",
    pageRender: "/profile/page-17.jpg",
    pages: [17, 18, 19],
  },
  {
    slug: "printing",
    title: "Printing",
    caption:
      "Real samples from our presses — offset, digital and 3D — across formats and finishes.",
    pageRender: "/profile/page-20.jpg",
    pages: [20, 21, 22, 23],
  },
  {
    slug: "packaging",
    title: "Packaging",
    caption:
      "Custom packaging and labels — dielines, foil, soft-touch — tailored to brand and product.",
    pageRender: "/profile/page-24.jpg",
    pages: [24, 25, 26],
  },
];

/* ---------------- /clients page ---------------- */

export const FEATURED_CLIENT = {
  name: "Embassy of the State of Qatar",
  location: "Beirut, Lebanon",
  body:
    "Confidential and ceremonial print work for the Embassy of the State of Qatar in Beirut — a partnership built on discretion, precision and meticulous color matching.",
};

export const CLIENT_INDUSTRIES = [
  { name: "Banking & Finance",    swatch: "cyan" as SwatchColor },
  { name: "Insurance",            swatch: "magenta" as SwatchColor },
  { name: "Universities & Education", swatch: "yellow" as SwatchColor },
  { name: "Government & Embassies",   swatch: "red" as SwatchColor },
  { name: "Hospitality & Food",       swatch: "green" as SwatchColor },
  { name: "Automotive & Luxury",      swatch: "ink" as SwatchColor },
  { name: "Legal & Professional",     swatch: "purple" as SwatchColor },
  { name: "Retail & FMCG",            swatch: "orange" as SwatchColor },
];

/** PDF page renders that show the actual client logo wall (pages 27-32). */
export const CLIENT_WALL_PAGES = [27, 28, 29, 30, 31, 32].map(
  (n) => `/profile/page-${String(n).padStart(2, "0")}.jpg`,
);

/* ---------------- /contact page ---------------- */

export const FOOTER_NAV = {
  services: [
    { href: "#services", label: "Offset & Digital Printing" },
    { href: "#services", label: "Packaging & Labels" },
    { href: "#services", label: "Secure Printing" },
    { href: "#services", label: "Branding & Identity" },
    { href: "#services", label: "Web & Digital Marketing" },
    { href: "#services", label: "Photography & Video" },
  ],
  studio: [
    { href: "#process", label: "Process" },
    { href: "#work",    label: "Work" },
    { href: "#specs",   label: "Specs" },
    { href: "/contact", label: "Contact ↗" },
  ],
  contact: [
    { href: "#",                     label: "KasKas Rd, Beirut — Lebanon" },
    { href: "mailto:lazhani@hotmail.com", label: "lazhani@hotmail.com" },
    { href: "tel:+9611821233",       label: "+961 1 821 233" },
    { href: "tel:+9613856725",       label: "+961 3 856 725" },
  ],
} as const;

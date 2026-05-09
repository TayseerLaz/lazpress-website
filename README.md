# LAZ Press

Production Next.js 15 site for LAZ Press — offset & digital print house.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Vanilla CSS (CSS variables, no framework) — matches the original brand system
- `next/font` for self-hosted Google Fonts (zero CLS)
- `next/image` for optimized logo

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run typecheck
```

## Structure

```
app/
  layout.tsx       Root layout — fonts, metadata, scroll reveal + cursor mounting
  page.tsx         Composes all sections in order
  globals.css      Brand system: variables, type, animations, responsive
components/
  Cursor.tsx          Smooth-tracking dot that scales over interactive elements
  ScrollReveal.tsx    IntersectionObserver wiring for `.fade-up` elements
  CmykRule.tsx        Top brand bar (C/M/Y/K stripes)
  Nav.tsx             Sticky nav with logo + section links + CTAs
  Ticker.tsx          Marquee strip
  Hero.tsx            Headline + lede + animated print stack illustration
  Logos.tsx           Trusted-by row
  Services.tsx        Six-card services grid (data-driven)
  Process.tsx         Five-step CMYK timeline (data-driven)
  Work.tsx            Editorial gallery tiles
  Quote.tsx           Pull-quote section
  Specs.tsx           Dark stats grid (data-driven)
  CTA.tsx             Headline + instant-quote form
  Footer.tsx          Big-word footer + nav columns
lib/
  content.ts          Source of truth for services, process, specs, etc.
public/
  lazpress.png        Brand mark
```

## Design notes

- The brand block in the nav uses `lazpress.png` (color wheel + "LAZ PRESS Design • Print" text in one image), replacing the original SVG color wheel + text labels.
- All animations from the original are preserved: ticker scroll, hero reveal text, hero print stack hover, registration mark spin, sticker wobble, quote-card pulse glow, CMYK timeline, fade-up on scroll, custom cursor.
- `prefers-reduced-motion: reduce` disables non-essential motion for accessibility.

## Deploy

Push to Vercel — zero config. Or `npm run build && npm run start` on any Node host.

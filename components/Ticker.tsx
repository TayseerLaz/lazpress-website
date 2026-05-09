import { TICKER_ITEMS } from "@/lib/content";

/**
 * Marquee strip. Doubled list creates a seamless loop with the
 * `translateX(-50%)` keyframe in globals.css.
 */
export function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="ticker" aria-label="Service highlights">
      <div className="track">
        {items.map((text, i) => (
          <span key={`${text}-${i}`}>{text}</span>
        ))}
      </div>
    </div>
  );
}

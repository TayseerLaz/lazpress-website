"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/content";

/**
 * Mobile-only nav drawer. Hidden over 640px via CSS.
 * Locks body scroll when open, closes on link click or Esc.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className={`burger ${open ? "is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-drawer"
        onClick={() => setOpen((v) => !v)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>

      <div
        id="mobile-drawer"
        className={`drawer ${open ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!open}
      >
        <div className="drawer-inner">
          <ul className="drawer-links">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href} style={{ ["--i" as string]: i }}>
                <a href={link.href} onClick={close}>
                  <span className="dot" aria-hidden="true" />
                  {link.label}
                </a>
              </li>
            ))}
            <li style={{ ["--i" as string]: NAV_LINKS.length }}>
              <a href="/contact" onClick={close}>
                <span className="dot" aria-hidden="true" />
                Contact
              </a>
            </li>
          </ul>

          <div className="drawer-actions">
            <a className="btn" href="/contact#quote" onClick={close}>
              Get a quote
            </a>
            <a className="btn primary" href="/contact#upload" onClick={close}>
              Upload artwork <span className="arr">→</span>
            </a>
          </div>

          <div className="drawer-meta">
            <span className="cmyk" aria-hidden="true">
              <i style={{ background: "var(--cyan)" }} />
              <i style={{ background: "var(--magenta)" }} />
              <i style={{ background: "var(--yellow)" }} />
              <i style={{ background: "var(--ink)" }} />
            </span>
            <span>Calibrated to ISO 12647-2 · ΔE &lt; 2</span>
          </div>
        </div>
      </div>
    </>
  );
}

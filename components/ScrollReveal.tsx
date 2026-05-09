"use client";

import { useEffect } from "react";

/**
 * Observes every `.fade-up` element and adds `.in` when ~15% in view.
 * Mounted once at the root layout level — sections stay as server components.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>(".fade-up");

    if (reduceMotion) {
      targets.forEach((t) => t.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );

    targets.forEach((t) => io.observe(t));

    return () => io.disconnect();
  }, []);

  return null;
}

"use client";

import { useEffect, useRef } from "react";

/**
 * Smooth-tracking accent dot. Grows over interactive elements (a, button, .svc, .tile).
 * Hidden via CSS on small screens and when the user prefers reduced motion.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = dotRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let cx = 0;
    let cy = 0;
    let tx = 0;
    let ty = 0;
    let rafId = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };

    const onEnter = () => el.classList.add("big");
    const onLeave = () => el.classList.remove("big");

    const interactiveSelectors = "a, button, .svc, .tile";
    const targets = Array.from(document.querySelectorAll<HTMLElement>(interactiveSelectors));
    targets.forEach((t) => {
      t.addEventListener("mouseenter", onEnter);
      t.addEventListener("mouseleave", onLeave);
    });

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", onEnter);
        t.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}

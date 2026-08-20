"use client";

// Animated, theme-matched aurora.
// Drifting colour blobs in the Torsolution campaign palette
// (orange / purple / green / yellow) over the cream base.
// Pure transform + opacity animation → GPU friendly, and it
// fully stops under prefers-reduced-motion (handled in globals.css).
//
// - default (absolute): sits inside a positioned section, e.g. the hero.
// - fixed: pins to the viewport so it works as a page-wide backdrop
//   that keeps drifting behind content as you scroll.
//
// Self-contained: remove <HeroAurora /> usages + the CSS block to revert.
export default function HeroAurora({ fixed = false }: { fixed?: boolean }) {
  return (
    <div
      className={`hero-aurora pointer-events-none ${
        fixed ? "fixed" : "absolute"
      } inset-0 overflow-hidden`}
      aria-hidden="true"
    >
      <span className="hero-aurora__blob hero-aurora__blob--orange" />
      <span className="hero-aurora__blob hero-aurora__blob--purple" />
      <span className="hero-aurora__blob hero-aurora__blob--green" />
      <span className="hero-aurora__blob hero-aurora__blob--yellow" />
    </div>
  );
}

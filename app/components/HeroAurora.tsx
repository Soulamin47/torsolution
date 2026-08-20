"use client";

// Animated, theme-matched aurora for the hero.
// Drifting colour blobs in the Torsolution campaign palette
// (orange / purple / green / yellow) over the cream base.
// Pure transform + opacity animation → GPU friendly, and it
// fully stops under prefers-reduced-motion (handled in globals.css).
// Self-contained: remove <HeroAurora /> from CampaignHome to revert.
export default function HeroAurora() {
  return (
    <div
      className="hero-aurora pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <span className="hero-aurora__blob hero-aurora__blob--orange" />
      <span className="hero-aurora__blob hero-aurora__blob--purple" />
      <span className="hero-aurora__blob hero-aurora__blob--green" />
      <span className="hero-aurora__blob hero-aurora__blob--yellow" />
    </div>
  );
}

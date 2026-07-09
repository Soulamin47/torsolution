"use client";

// Oversized outlined section number bleeding off the grid.
// Breaks the "everything neatly contained" template feel.
export default function GhostNumber({
  n,
  side = "right",
}: {
  n: string;
  side?: "left" | "right";
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-10 hidden select-none font-mono leading-none md:block"
      style={{
        [side]: "-3vw",
        fontSize: "clamp(140px, 20vw, 300px)",
        WebkitTextStroke: "1px rgba(255,255,255,0.055)",
        color: "transparent",
      }}
    >
      {n}
    </div>
  );
}

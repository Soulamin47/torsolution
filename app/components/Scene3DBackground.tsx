"use client";

// Static fallback for any legacy consumer of Background3D.
// The premium layout no longer loads a continuous WebGL scene.
export default function Scene3DBackground() {
  return <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,#142b3b,transparent_65%)]" />;
}

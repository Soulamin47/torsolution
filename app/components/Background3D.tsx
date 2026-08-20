"use client";

// Client-only loader for the 3D WebGL backdrop.
// Kept in its own file so the heavy three.js scene is code-split and
// never runs during SSR. Mounted once in the root layout so the living
// background sits behind every page.
import dynamic from "next/dynamic";

const Scene3DBackground = dynamic(() => import("./Scene3DBackground"), {
  ssr: false,
});

export default function Background3D() {
  return <Scene3DBackground />;
}

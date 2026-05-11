"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.left = e.clientX + "px";
      ref.current.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-0 -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        width: "600px",
        height: "600px",
        background:
          "radial-gradient(circle, rgba(175,169,236,0.04) 0%, transparent 70%)",
        transition: "left 0.15s ease, top 0.15s ease",
      }}
    />
  );
}

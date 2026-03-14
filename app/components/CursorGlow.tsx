"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX - 350}px, ${e.clientY - 350}px)`;
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-0 h-[700px] w-[700px] rounded-full bg-blue-500/[0.07] blur-[120px] will-change-transform"
      style={{ transition: "transform 0.15s ease-out" }}
      aria-hidden
    />
  );
}

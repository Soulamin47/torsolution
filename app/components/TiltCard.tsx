"use client";

import { useRef, useCallback } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  accent?: string;
}

export default function TiltCard({ children, className = "", style, accent = "#AFA9EC" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const rotY = x * 14;
        const rotX = -y * 10;

        ref.current.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;
        ref.current.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
        ref.current.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
        ref.current.style.setProperty("--glow-opacity", "1");
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    ref.current.style.setProperty("--glow-opacity", "0");
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out ${className}`}
      style={{
        willChange: "transform",
        transformStyle: "preserve-3d",
        "--glow-opacity": "0",
        "--glow-x": "50%",
        "--glow-y": "50%",
        ...style,
      } as React.CSSProperties}
    >
      {/* Glow overlay that follows cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: "var(--glow-opacity)",
          background: `radial-gradient(circle at var(--glow-x) var(--glow-y), ${accent}22 0%, transparent 65%)`,
          zIndex: 1,
        }}
      />
      {children}
    </div>
  );
}

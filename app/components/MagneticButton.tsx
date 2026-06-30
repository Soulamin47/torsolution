"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Radius (in px) within which the cursor activates the magnetic pull. */
  radius?: number;
  /** Fraction of cursor-to-center distance the button moves (0–1). */
  strength?: number;
};

/**
 * Wraps any inline-block element with a subtle Apple-style magnetic hover.
 *
 * - Tracks the global mouse position.
 * - When the cursor is within `radius` of the button center, the button
 *   springs toward it by `strength` × distance.
 * - Beyond the radius, the button returns to its rest position.
 * - Disabled on touch devices (pointer:coarse) and when the OS asks for
 *   reduced motion.
 *
 * Performance: a single rAF-free mousemove listener; the cheap distance
 * check short-circuits when far from the button.
 */
export default function MagneticButton({
  children,
  className,
  radius = 110,
  strength = 0.28,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 280, damping: 22, mass: 0.6 });

  const [enabled, setEnabled] = useState(true);

  // Disable on touch-only devices + when reduced motion is requested.
  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) setEnabled(false);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      // Cheap bounding-box check before the more expensive hypot
      if (Math.abs(dx) > radius + 60 || Math.abs(dy) > radius + 60) {
        x.set(0);
        y.set(0);
        return;
      }

      const dist = Math.hypot(dx, dy);
      if (dist < radius) {
        x.set(dx * strength);
        y.set(dy * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      x.set(0);
      y.set(0);
    };
  }, [enabled, radius, strength, x, y]);

  if (!enabled) {
    return <span className={className}>{children}</span>;
  }

  return (
    <motion.span
      ref={ref}
      style={{ x: springX, y: springY, display: "inline-block" }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

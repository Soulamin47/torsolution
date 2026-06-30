"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PARTICLE_COUNT = 80;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  color: string;
}

const COLORS = ["#AFA9EC", "#5DCAA5", "#85B7EB", "#F0997B"];

function initParticles(): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.3 + Math.random() * 0.5;
    return {
      x: 50,
      y: 50,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      r: 1 + Math.random() * 2.5,
      alpha: 0.6 + Math.random() * 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    };
  });
}

function ParticleCanvas({ phase }: { phase: "idle" | "explode" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>(initParticles());
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      const explodeMultiplier = phase === "explode" ? 1 + elapsed / 180 : 1;

      for (const p of particles.current) {
        if (phase === "explode") {
          p.x += p.vx * explodeMultiplier;
          p.y += p.vy * explodeMultiplier;
          p.alpha -= 0.006;
        } else {
          // orbit slowly around center
          p.x += (50 - p.x) * 0.003 + p.vx * 0.4;
          p.y += (50 - p.y) * 0.003 + p.vy * 0.4;
        }

        const px = cx + ((p.x - 50) / 50) * cx;
        const py = cy + ((p.y - 50) / 50) * cy;

        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [phase]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
}

export default function IntroOverlay({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"idle" | "explode" | "exit">("idle");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Phase: logo appears → pulse → explode → exit
    const t1 = setTimeout(() => setPhase("explode"), 1600);
    const t2 = setTimeout(() => setPhase("exit"), 2200);
    const t3 = setTimeout(() => {
      setVisible(false);
      onDone();
    }, 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  const skip = () => {
    setVisible(false);
    onDone();
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[#09080F] cursor-pointer select-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === "exit" ? 0 : 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          onClick={skip}
        >
          <ParticleCanvas phase={phase === "exit" ? "explode" : phase} />

          {/* Central logo mark */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-5"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={
              phase === "explode" || phase === "exit"
                ? { opacity: 0, scale: 2.5 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: phase === "idle" ? 0.8 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Glow ring */}
            <motion.div
              className="absolute rounded-full"
              style={{ width: 180, height: 180, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
              animate={{
                boxShadow: [
                  "0 0 0px 0px rgba(175,169,236,0)",
                  "0 0 60px 20px rgba(175,169,236,0.25)",
                  "0 0 100px 40px rgba(175,169,236,0.12)",
                ],
              }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Logo SVG */}
            <div className="relative">
              <img
                src="/logo-horizontal.svg"
                alt="TOR_SOLUTION"
                className="h-10 w-auto"
              />
              {/* Scan line */}
              <motion.div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, #A78BFA, transparent)" }}
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <span className="font-mono text-[10px] tracking-[0.25em] text-[#F0EEE8]/25 uppercase">
              Freelance Developer · Brussels
            </span>
          </motion.div>

          {/* Skip hint */}
          <motion.span
            className="absolute bottom-8 font-mono text-[10px] tracking-widest text-[#F0EEE8]/20 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "idle" ? 1 : 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            tap to skip
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

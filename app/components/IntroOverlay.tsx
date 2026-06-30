"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Logo geometry (from icon-color-dark.svg, viewBox 120×120) ────────────────

const NODES = [
  { x: 60, y: 12, color: "#E8EAF0", r: 2.6, glow: false },
  { x: 99, y: 33, color: "#E8EAF0", r: 2.6, glow: false },
  { x: 106, y: 74, color: "#E8EAF0", r: 2.6, glow: false },
  { x: 75, y: 105, color: "#E8EAF0", r: 2.6, glow: false },
  { x: 33, y: 101, color: "#E8EAF0", r: 2.6, glow: false },
  { x: 14, y: 63, color: "#E8EAF0", r: 2.6, glow: false },
  { x: 27, y: 25, color: "#E8EAF0", r: 2.6, glow: false },
  { x: 80, y: 64, color: "#5EEAD4", r: 4.6, glow: true },
  { x: 57, y: 50, color: "#A78BFA", r: 3.8, glow: true },
  { x: 49, y: 80, color: "#5EEAD4", r: 3.2, glow: true },
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0],
  [6, 8], [0, 8], [1, 8], [5, 8],
  [1, 7], [2, 7], [3, 7], [8, 7],
  [3, 9], [4, 9], [5, 9], [8, 9], [7, 9],
];

// ─── Timing ───────────────────────────────────────────────────────────────────
const T_DRAW_START  = 200;
const T_DRAW_END    = 1600;
const T_PULSE_START = 1650;
const T_PULSE_END   = 2100;
const T_EXPLODE     = 2150;
const T_FLASH       = 2500;
const T_FADE_END    = 3000;
const T_TOTAL       = 3200;

function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }
function easeIn(t: number)  { return t * t * t; }
function clamp(v: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, v)); }
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

// ─── Canvas animation ─────────────────────────────────────────────────────────

function useIntroCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  onDone: () => void,
) {
  const startRef = useRef<number | null>(null);
  const rafRef   = useRef<number>(0);
  const doneRef  = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Spawn explosion particles once
    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      color: string; r: number;
      alpha: number;
    };
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Logo scale so it fills ~22vmin in the center
    const logoScale = () => Math.min(canvas.width, canvas.height) * 0.22 / 120;
    const cx = () => canvas.width  / 2;
    const cy = () => canvas.height / 2;

    // Transform logo coords → canvas coords
    const tx = (x: number, scale: number) => cx() + (x - 60) * scale;
    const ty = (y: number, scale: number) => cy() + (y - 60) * scale;

    let exploded = false;

    const spawnParticles = (scale: number) => {
      particles = [];
      // From nodes
      for (const n of NODES) {
        const nx = tx(n.x, scale);
        const ny = ty(n.y, scale);
        const dx = nx - cx();
        const dy = ny - cy();
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const speed = 3 + Math.random() * 5;
        for (let i = 0; i < 3; i++) {
          const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.8;
          particles.push({
            x: nx, y: ny,
            vx: Math.cos(angle) * speed * (0.6 + Math.random()),
            vy: Math.sin(angle) * speed * (0.6 + Math.random()),
            color: n.color,
            r: n.r * scale * (0.5 + Math.random() * 1.2),
            alpha: 1,
          });
        }
      }
      // From edges (midpoint fragments)
      for (const [ai, bi] of EDGES) {
        const a = NODES[ai], b = NODES[bi];
        for (let k = 0; k < 4; k++) {
          const t = 0.2 + Math.random() * 0.6;
          const ex = tx(lerp(a.x, b.x, t), scale);
          const ey = ty(lerp(a.y, b.y, t), scale);
          const dx = ex - cx();
          const dy = ey - cy();
          const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.2;
          const speed = 2 + Math.random() * 6;
          particles.push({
            x: ex, y: ey,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: "#E8EAF0",
            r: (0.6 + Math.random() * 1.4) * scale,
            alpha: 0.7 + Math.random() * 0.3,
          });
        }
      }
    };

    const draw = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;

      if (elapsed > T_TOTAL && !doneRef.current) {
        doneRef.current = true;
        onDone();
        return;
      }

      const W = canvas.width;
      const H = canvas.height;
      const scale = logoScale();

      ctx.clearRect(0, 0, W, H);

      // ── Background opacity ────────────────────────────────────────────────
      let bgAlpha = 1;
      if (elapsed > T_FLASH) {
        bgAlpha = clamp(1 - (elapsed - T_FLASH) / (T_FADE_END - T_FLASH), 0, 1);
        bgAlpha = easeIn(bgAlpha);
      }
      ctx.fillStyle = `rgba(9,8,15,${bgAlpha})`;
      ctx.fillRect(0, 0, W, H);

      // ── Zoom scale on logo during explode ────────────────────────────────
      let logoZoom = 1;
      if (elapsed > T_EXPLODE) {
        const t = clamp((elapsed - T_EXPLODE) / (T_FLASH - T_EXPLODE), 0, 1);
        logoZoom = lerp(1, 2.8, easeIn(t));
      }
      const s = scale * logoZoom;

      // ── DRAW PHASE ────────────────────────────────────────────────────────
      if (elapsed >= T_DRAW_START && elapsed < T_EXPLODE) {
        const drawProgress = clamp(
          (elapsed - T_DRAW_START) / (T_DRAW_END - T_DRAW_START), 0, 1,
        );

        const edgeCount = EDGES.length;
        // Pulse phase glow multiplier
        const isPulse = elapsed >= T_PULSE_START;
        const pulseT = isPulse
          ? clamp((elapsed - T_PULSE_START) / (T_PULSE_END - T_PULSE_START), 0, 1)
          : 0;

        // Draw edges
        for (let i = 0; i < edgeCount; i++) {
          const edgeStart = i / edgeCount;
          const edgeEnd   = (i + 1) / edgeCount;
          const ep = clamp((drawProgress - edgeStart) / (edgeEnd - edgeStart), 0, 1);
          if (ep <= 0) continue;

          const [ai, bi] = EDGES[i];
          const a = NODES[ai], b = NODES[bi];
          const ax = tx(a.x, s), ay = ty(a.y, s);
          const bx = tx(b.x, s), by = ty(b.y, s);

          const endX = lerp(ax, bx, easeOut(ep));
          const endY = lerp(ay, by, easeOut(ep));

          const glowAmount = 4 + pulseT * 12;
          ctx.save();
          ctx.shadowBlur  = glowAmount;
          ctx.shadowColor = "#A78BFA";
          ctx.strokeStyle = `rgba(232,234,240,${0.55 + pulseT * 0.35})`;
          ctx.lineWidth   = 1.2 * (s / (scale));
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(endX, endY);
          ctx.stroke();

          // Sweeping bright head
          if (ep < 1) {
            ctx.shadowBlur  = 18 + pulseT * 20;
            ctx.shadowColor = "#A78BFA";
            ctx.fillStyle   = "#ffffff";
            ctx.beginPath();
            ctx.arc(endX, endY, 2.5 * (s / scale), 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }

        // Draw nodes (appear when their edges are done)
        for (let ni = 0; ni < NODES.length; ni++) {
          const n = NODES[ni];
          // Node appears when any edge connecting to it is drawn
          const hasEdge = EDGES.some(([ai, bi], ei) => {
            if (ai !== ni && bi !== ni) return false;
            const ep = clamp(
              (drawProgress - ei / edgeCount) / (1 / edgeCount), 0, 1,
            );
            return ep > 0.9;
          });
          if (!hasEdge) continue;

          const nx = tx(n.x, s);
          const ny = ty(n.y, s);
          const glowSize = n.glow ? (14 + pulseT * 28) : (6 + pulseT * 16);

          ctx.save();
          ctx.shadowBlur  = glowSize;
          ctx.shadowColor = n.color;
          ctx.fillStyle   = n.color;
          ctx.beginPath();
          ctx.arc(nx, ny, n.r * (s / scale) * (1 + pulseT * 0.4), 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // Pulse rings
        if (isPulse) {
          for (let ring = 0; ring < 2; ring++) {
            const rt = clamp(pulseT - ring * 0.3, 0, 1);
            if (rt <= 0) continue;
            const radius = rt * Math.min(W, H) * 0.25;
            const alpha  = (1 - rt) * 0.5;
            ctx.save();
            ctx.strokeStyle = `rgba(167,139,250,${alpha})`;
            ctx.lineWidth   = 1.5;
            ctx.shadowBlur  = 20;
            ctx.shadowColor = "#A78BFA";
            ctx.beginPath();
            ctx.arc(cx(), cy(), radius, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      // ── EXPLODE PHASE ─────────────────────────────────────────────────────
      if (elapsed >= T_EXPLODE) {
        if (!exploded) {
          exploded = true;
          spawnParticles(scale);
        }

        const dt = 0.016;
        for (const p of particles) {
          p.x += p.vx * 1.08;
          p.y += p.vy * 1.08;
          p.vx *= 1.06;
          p.vy *= 1.06;
          p.alpha *= 0.94;
          if (p.alpha < 0.01) continue;

          ctx.save();
          ctx.shadowBlur  = 12;
          ctx.shadowColor = p.color;
          ctx.fillStyle   = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.beginPath();
          ctx.arc(p.x, p.y, Math.max(0.5, p.r), 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // White flash at peak
        if (elapsed >= T_FLASH - 120 && elapsed < T_FLASH + 180) {
          const ft = clamp((elapsed - (T_FLASH - 120)) / 300, 0, 1);
          const flashA = ft < 0.4
            ? ft / 0.4
            : 1 - (ft - 0.4) / 0.6;
          ctx.fillStyle = `rgba(255,255,255,${flashA * 0.55})`;
          ctx.fillRect(0, 0, W, H);
        }
      }

      // ── Wordmark under logo ───────────────────────────────────────────────
      if (elapsed >= T_DRAW_END - 200 && elapsed < T_EXPLODE) {
        const fadeIn = clamp((elapsed - (T_DRAW_END - 200)) / 400, 0, 1);
        const pulseT2 = elapsed >= T_PULSE_START
          ? clamp((elapsed - T_PULSE_START) / (T_PULSE_END - T_PULSE_START), 0, 1)
          : 0;
        ctx.save();
        ctx.globalAlpha = easeOut(fadeIn);
        ctx.font        = `500 ${Math.round(13 * s / scale)}px 'Space Mono', monospace`;
        ctx.letterSpacing = "0.25em";
        ctx.fillStyle   = `rgba(232,234,240,${0.5 + pulseT2 * 0.4})`;
        ctx.textAlign   = "center";
        ctx.textBaseline = "top";
        const textY = cy() + 58 * scale;
        ctx.shadowBlur  = 12 + pulseT2 * 20;
        ctx.shadowColor = "#A78BFA";
        ctx.fillText("TOR_SOLUTION", cx(), textY);
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [canvasRef, onDone]);
}

// ─── Component ─────────────────────────────────────────────────────────────────

export default function IntroOverlay({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDone = useCallback(() => {
    setVisible(false);
    onDone();
  }, [onDone]);

  const skip = useCallback(() => {
    setVisible(false);
    onDone();
  }, [onDone]);

  useIntroCanvas(canvasRef, handleDone);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[999] cursor-pointer"
      onClick={skip}
      aria-label="Skip intro"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Skip hint */}
      <span
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] uppercase"
        style={{ color: "rgba(232,234,240,0.2)" }}
      >
        tap to skip
      </span>
    </div>
  );
}

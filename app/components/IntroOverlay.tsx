"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Logo geometry (icon-color-dark.svg, viewBox 120×120) ────────────────────
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
  [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],
  [6,8],[0,8],[1,8],[5,8],
  [1,7],[2,7],[3,7],[8,7],
  [3,9],[4,9],[5,9],[8,9],[7,9],
];

// ─── Timing (ms) ─────────────────────────────────────────────────────────────
const T_DRAW_START  = 300;
const T_DRAW_END    = 1800;
const T_PULSE_START = 1850;
const T_READY       = 2300; // logo fully assembled, waiting for scroll

function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }
function easeIn(t: number)  { return t * t * t; }
function clamp(v: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, v)); }
function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

export default function IntroOverlay({ onDone }: { onDone: () => void }) {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(true);
  const [ready, setReady]     = useState(false);   // assembly done
  const [exitT, setExitT]     = useState<number | null>(null); // scroll exit start
  const exitRef    = useRef<number | null>(null);
  const startRef   = useRef<number | null>(null);
  const rafRef     = useRef<number>(0);
  const doneRef    = useRef(false);

  const triggerExit = useCallback(() => {
    if (exitRef.current !== null || doneRef.current) return;
    exitRef.current = performance.now();
    setExitT(exitRef.current);
  }, []);

  const skip = useCallback(() => { triggerExit(); }, [triggerExit]);

  // Scroll triggers exit
  useEffect(() => {
    const onScroll = () => { if (ready) triggerExit(); };
    const onWheel  = () => { if (ready) triggerExit(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel",  onWheel,  { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel",  onWheel);
    };
  }, [ready, triggerExit]);

  // Canvas draw loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    // Logo fills ~48% of the smallest viewport dimension
    const logoScale = () => Math.min(canvas.width, canvas.height) * 0.48 / 120;
    const cx = () => canvas.width  / 2;
    const cy = () => canvas.height / 2 - canvas.height * 0.04; // slightly above center
    const tx = (x: number, s: number) => cx() + (x - 60) * s;
    const ty = (y: number, s: number) => cy() + (y - 60) * s;

    const draw = (ts: number) => {
      if (startRef.current === null) startRef.current = ts;
      const elapsed = ts - startRef.current;

      const W = canvas.width;
      const H = canvas.height;
      const s = logoScale();

      // ── Exit animation (scroll triggered) ──────────────────────────────────
      let exitProgress = 0;
      if (exitRef.current !== null) {
        const exitElapsed = ts - exitRef.current;
        exitProgress = clamp(exitElapsed / 900, 0, 1);
        exitProgress = easeIn(exitProgress);

        if (exitElapsed > 950 && !doneRef.current) {
          doneRef.current = true;
          setVisible(false);
          onDone();
          cancelAnimationFrame(rafRef.current);
          return;
        }
      }

      // ── Background ──────────────────────────────────────────────────────────
      // During exit: bg fades out AND scales up (zoom into logo feel)
      const bgAlpha = exitProgress > 0 ? 1 - exitProgress : 1;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = `rgba(9,8,15,${bgAlpha})`;
      ctx.fillRect(0, 0, W, H);

      // ── Logo zoom-into during exit ──────────────────────────────────────────
      const zoomScale = exitProgress > 0 ? 1 + exitProgress * 3.5 : 1;
      const scale = s * zoomScale;
      const alpha = exitProgress > 0 ? 1 - exitProgress : 1;

      ctx.globalAlpha = alpha;

      // ── Draw phase ──────────────────────────────────────────────────────────
      const drawT = clamp((elapsed - T_DRAW_START) / (T_DRAW_END - T_DRAW_START), 0, 1);
      const pulseT = elapsed >= T_PULSE_START
        ? clamp((elapsed - T_PULSE_START) / 800, 0, 1) : 0;

      if (!ready && elapsed >= T_READY) setReady(true);

      // Edges
      const edgeCount = EDGES.length;
      for (let i = 0; i < edgeCount; i++) {
        const ep = clamp((drawT - i / edgeCount) / (1 / edgeCount), 0, 1);
        if (ep <= 0) continue;
        const [ai, bi] = EDGES[i];
        const a = NODES[ai], b = NODES[bi];
        const ax = tx(a.x, scale), ay = ty(a.y, scale);
        const bx = tx(b.x, scale), by = ty(b.y, scale);
        const ex = lerp(ax, bx, easeOut(ep));
        const ey = lerp(ay, by, easeOut(ep));

        ctx.save();
        ctx.shadowBlur  = 8 + pulseT * 20;
        ctx.shadowColor = "#A78BFA";
        ctx.strokeStyle = `rgba(232,234,240,${0.5 + pulseT * 0.4})`;
        ctx.lineWidth   = 1.5 * (scale / s);
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ex, ey); ctx.stroke();

        // Bright sweep head
        if (ep < 1) {
          ctx.shadowBlur = 28; ctx.shadowColor = "#ffffff";
          ctx.fillStyle  = "#ffffff";
          ctx.beginPath(); ctx.arc(ex, ey, 3.5 * (scale / s), 0, Math.PI * 2); ctx.fill();
        }
        ctx.restore();
      }

      // Nodes
      for (let ni = 0; ni < NODES.length; ni++) {
        const n = NODES[ni];
        const appeared = EDGES.some(([ai, bi], ei) => {
          if (ai !== ni && bi !== ni) return false;
          return clamp((drawT - ei / edgeCount) / (1 / edgeCount), 0, 1) > 0.85;
        });
        if (!appeared) continue;
        ctx.save();
        ctx.shadowBlur  = n.glow ? 24 + pulseT * 40 : 10 + pulseT * 20;
        ctx.shadowColor = n.color;
        ctx.fillStyle   = n.color;
        ctx.beginPath();
        ctx.arc(tx(n.x, scale), ty(n.y, scale), n.r * (scale / s) * (1 + pulseT * 0.5), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Pulse rings (once assembled)
      if (pulseT > 0) {
        for (let ring = 0; ring < 3; ring++) {
          const rt = clamp(pulseT - ring * 0.25, 0, 1);
          if (rt <= 0) continue;
          const radius = rt * Math.min(W, H) * 0.38;
          ctx.save();
          ctx.strokeStyle = `rgba(167,139,250,${(1 - rt) * 0.35})`;
          ctx.lineWidth   = 1.5;
          ctx.shadowBlur  = 24; ctx.shadowColor = "#A78BFA";
          ctx.beginPath(); ctx.arc(cx(), cy(), radius, 0, Math.PI * 2); ctx.stroke();
          ctx.restore();
        }
      }

      // Wordmark below logo (appears after assembly)
      if (drawT >= 0.95) {
        const wt = clamp((elapsed - T_DRAW_END) / 500, 0, 1);
        ctx.save();
        ctx.globalAlpha = easeOut(wt) * alpha;
        const fs = Math.round(22 * scale / s);
        ctx.font = `500 ${fs}px 'Space Mono', monospace`;
        ctx.fillStyle   = `rgba(232,234,240,${0.7 + pulseT * 0.3})`;
        ctx.shadowBlur  = 28 + pulseT * 40; ctx.shadowColor = "#A78BFA";
        ctx.textAlign   = "center"; ctx.textBaseline = "top";
        ctx.fillText("TOR_SOLUTION", cx(), cy() + 68 * scale);
        ctx.restore();
      }

      ctx.globalAlpha = 1;

      // ── Scroll hint ─────────────────────────────────────────────────────────
      if (ready && exitRef.current === null) {
        const blinkT = (Math.sin(ts / 800) + 1) / 2;
        ctx.save();
        ctx.globalAlpha = 0.25 + blinkT * 0.35;
        ctx.font = `400 11px 'Space Mono', monospace`;
        ctx.fillStyle   = "#E8EAF0";
        ctx.textAlign   = "center";
        ctx.textBaseline = "bottom";
        ctx.fillText("SCROLL TO ENTER  ↓", cx(), H - 36);
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", resize); };
  }, [ready, onDone]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[999] cursor-pointer" onClick={skip} aria-label="Skip intro">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { EASE } from "@/lib/animations";

const ACCENT_COLORS = ["#AFA9EC", "#85B7EB", "#5DCAA5", "#5DCAA5"];

// ─── Step visuals (JSX, not translated) ───────────────────────────────────────

const stepVisuals = [
  // 01 — Understand: project brief
  <div
    key="brief"
    style={{
      padding: 20,
      background: "rgba(175,169,236,0.04)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    }}
  >
    <div
      style={{
        fontSize: 9,
        fontFamily: "monospace",
        color: "#AFA9EC",
        letterSpacing: "0.12em",
        marginBottom: 4,
      }}
    >
      PROJECT BRIEF
    </div>
    {[
      { q: "What are you building?", a: "A SaaS platform for..." },
      { q: "Who is your target?", a: "B2B, SMEs in Belgium" },
      { q: "Timeline?", a: "MVP in 6 weeks" },
    ].map((item, i) => (
      <div
        key={i}
        style={{
          padding: "10px 12px",
          background: "rgba(255,255,255,0.03)",
          borderRadius: 6,
          border: "0.5px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>
          {item.q}
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{item.a}</div>
      </div>
    ))}
    <div style={{ marginTop: "auto", display: "flex", gap: 8 }}>
      <div
        style={{
          height: 28,
          flex: 1,
          borderRadius: 4,
          background: "rgba(175,169,236,0.15)",
          border: "0.5px solid rgba(175,169,236,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 9,
          color: "#AFA9EC",
        }}
      >
        Submit brief →
      </div>
    </div>
  </div>,

  // 02 — Plan: scope document
  <div
    key="scope"
    style={{
      padding: 20,
      background: "rgba(133,183,235,0.04)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 8,
    }}
  >
    <div
      style={{
        fontSize: 9,
        fontFamily: "monospace",
        color: "#85B7EB",
        letterSpacing: "0.12em",
        marginBottom: 4,
      }}
    >
      PROJECT SCOPE
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {[
        { label: "Stack", value: "Next.js · Supabase · TypeScript" },
        { label: "Delivery", value: "4 weeks · 2 milestones" },
        { label: "Scope", value: "Auth · Dashboard · API · Deploy" },
      ].map((row, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: 8,
            fontSize: 10,
            padding: "6px 0",
            borderBottom: "0.5px solid rgba(255,255,255,0.04)",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.25)", minWidth: 60 }}>{row.label}</span>
          <span style={{ color: "rgba(255,255,255,0.65)" }}>{row.value}</span>
        </div>
      ))}
    </div>
    <div
      style={{
        marginTop: 10,
        padding: "10px 12px",
        background: "rgba(133,183,235,0.08)",
        borderRadius: 6,
        border: "0.5px solid rgba(133,183,235,0.2)",
        fontSize: 10,
        color: "#85B7EB",
      }}
    >
      ✓ Scope agreed — starting Monday
    </div>
  </div>,

  // 03 — Build: git log terminal
  <div
    key="build"
    style={{
      padding: 20,
      background: "rgba(0,0,0,0.4)",
      fontFamily: "monospace",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 6,
    }}
  >
    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", marginBottom: 8 }}>
      ~/project main
    </div>
    {[
      { hash: "a3f2c1", msg: "feat: auth flow complete", time: "2h ago", color: "#5DCAA5" },
      { hash: "9b1e44", msg: "feat: dashboard layout", time: "5h ago", color: "#5DCAA5" },
      { hash: "c7d823", msg: "fix: mobile responsive", time: "1d ago", color: "#AFA9EC" },
      { hash: "f4a901", msg: "feat: API endpoints", time: "2d ago", color: "#AFA9EC" },
      { hash: "12e3b5", msg: "init: project scaffold", time: "3d ago", color: "rgba(255,255,255,0.3)" },
    ].map((commit, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 9,
          padding: "4px 0",
          borderBottom: "0.5px solid rgba(255,255,255,0.03)",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.2)" }}>{commit.hash}</span>
        <span style={{ color: "rgba(255,255,255,0.55)", flex: 1 }}>{commit.msg}</span>
        <span style={{ color: commit.color, fontSize: 8 }}>{commit.time}</span>
      </div>
    ))}
    <div style={{ marginTop: "auto", fontSize: 9, color: "#5DCAA5" }}>
      ▊ pnpm build — success in 12.4s
    </div>
  </div>,

  // 04 — Ship: deploy dashboard
  <div
    key="deploy"
    style={{
      padding: 20,
      background: "rgba(29,158,117,0.04)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    }}
  >
    <div
      style={{
        fontSize: 9,
        fontFamily: "monospace",
        color: "#5DCAA5",
        letterSpacing: "0.12em",
        marginBottom: 4,
      }}
    >
      DEPLOYMENT
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {[
        { step: "Build", status: "✓ Success" },
        { step: "Tests", status: "✓ 48/48 passed" },
        { step: "Deploy", status: "✓ Production" },
        { step: "Domain", status: "✓ SSL active" },
      ].map((row, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 10,
            padding: "6px 10px",
            background: "rgba(255,255,255,0.02)",
            borderRadius: 4,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.4)" }}>{row.step}</span>
          <span style={{ color: "#5DCAA5" }}>{row.status}</span>
        </div>
      ))}
    </div>
    <div
      style={{
        padding: "10px 12px",
        marginTop: 4,
        background: "rgba(29,158,117,0.1)",
        borderRadius: 6,
        border: "0.5px solid rgba(29,158,117,0.3)",
        fontSize: 10,
        color: "#5DCAA5",
        textAlign: "center",
      }}
    >
      🚀 torsolution.be — Live
    </div>
  </div>,
];

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Process() {
  const { lang } = useLang();
  const t = translations[lang];
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="relative z-10 px-6 sm:px-10 py-28">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-[clamp(22px,3vw,32px)] font-light text-[#F0EEE8]">
            {t.procTitle}
          </h2>
          <p className="mt-2 text-[13px] text-[#F0EEE8]/35">{t.procSubtitle}</p>
        </div>

        {/* Step nav */}
        <div className="relative mb-0">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute top-[4px] left-0 right-0 h-px z-0"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />

          <div className="relative grid grid-cols-4 z-10">
            {t.procSteps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className="flex flex-col items-start pr-4 text-left"
              >
                {/* Dot */}
                <div
                  className="w-[10px] h-[10px] rounded-full border mb-5 transition-all duration-300"
                  style={{
                    borderColor:
                      active === idx ? ACCENT_COLORS[idx] : "rgba(255,255,255,0.15)",
                    background: "#09080F",
                    boxShadow:
                      active === idx ? `0 0 8px ${ACCENT_COLORS[idx]}60` : "none",
                  }}
                />

                {/* Large number */}
                <div
                  aria-hidden="true"
                  className="font-mono text-[40px] font-bold leading-none select-none mb-2 transition-all duration-300"
                  style={{
                    color:
                      active === idx ? ACCENT_COLORS[idx] : "rgba(255,255,255,0.06)",
                  }}
                >
                  {s.n}
                </div>

                {/* Title */}
                <div
                  className="text-[12px] font-medium transition-colors duration-300 hidden sm:block"
                  style={{
                    color:
                      active === idx ? "#F0EEE8" : "rgba(255,255,255,0.3)",
                  }}
                >
                  {s.title}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-xl"
          style={{
            minHeight: 240,
            border: "0.5px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Mockup */}
          <div
            className="overflow-hidden"
            style={{ borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}
          >
            <div className="md:hidden" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.28, ease: EASE }}
                style={{ height: "100%", minHeight: 220 }}
              >
                {stepVisuals[active]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="p-8 flex flex-col justify-center"
              style={{ borderLeft: "0.5px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="font-mono text-[10px] tracking-widest uppercase mb-4"
                style={{ color: ACCENT_COLORS[active] }}
              >
                {String(active + 1).padStart(2, "0")} / 04
              </div>
              <h3 className="text-[20px] font-medium text-[#F0EEE8] mb-3">
                {t.procSteps[active].title}
              </h3>
              <p className="text-[13px] text-[#F0EEE8]/45 leading-relaxed">
                {t.procSteps[active].desc}
              </p>

              {/* Prev / Next */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setActive(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className="px-4 py-2 text-[12px] border border-white/[0.1] rounded-[4px] text-[#F0EEE8]/50 disabled:opacity-20 hover:border-white/25 hover:text-[#F0EEE8]/80 transition"
                >
                  ← Prev
                </button>
                <button
                  onClick={() =>
                    setActive(Math.min(t.procSteps.length - 1, active + 1))
                  }
                  disabled={active === t.procSteps.length - 1}
                  className="px-4 py-2 text-[12px] rounded-[4px] disabled:opacity-20 hover:opacity-80 transition"
                  style={{
                    border: `0.5px solid ${ACCENT_COLORS[active]}`,
                    color: ACCENT_COLORS[active],
                  }}
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

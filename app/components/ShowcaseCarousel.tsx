"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { EASE } from "@/lib/animations";

// ─── 3D coverflow carousel of the four domains ────────────────────────────────
// Framer-ImageWheel style: center card faces you, side cards tilt away in
// perspective. Drag left/right, arrows, or click a side card to navigate.

const SLIDES = [
  {
    key: "web",
    accent: "#AFA9EC",
    title: { en: "Web apps", fr: "Apps web" },
    tag: { en: "Next.js · SaaS · Dashboards", fr: "Next.js · SaaS · Dashboards" },
  },
  {
    key: "mobile",
    accent: "#5DCAA5",
    title: { en: "Mobile apps", fr: "Apps mobiles" },
    tag: { en: "Flutter · iOS & Android", fr: "Flutter · iOS & Android" },
  },
  {
    key: "ai",
    accent: "#EF9F27",
    title: { en: "AI automation", fr: "Automatisation IA" },
    tag: { en: "LLM agents · Workflows", fr: "Agents LLM · Workflows" },
  },
  {
    key: "platform",
    accent: "#85B7EB",
    title: { en: "Business platforms", fr: "Plateformes métier" },
    tag: { en: "ERP-lite · Internal tools", fr: "ERP-lite · Outils internes" },
  },
] as const;

// ─── Rich mockup visuals ───────────────────────────────────────────────────────

function WebVisual() {
  return (
    <div className="flex h-full flex-col bg-[#0D0B14]">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#FF5F57]/70" />
        <span className="h-2 w-2 rounded-full bg-[#FFBD2E]/70" />
        <span className="h-2 w-2 rounded-full bg-[#28C840]/70" />
        <span className="ml-3 rounded bg-white/[0.05] px-3 py-0.5 font-mono text-[9px] text-white/30">
          app.yourproduct.com
        </span>
      </div>
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-[120px] shrink-0 space-y-1 border-r border-white/[0.05] p-3">
          {["Dashboard", "Customers", "Billing", "Reports", "Settings"].map((item, i) => (
            <div
              key={item}
              className="rounded px-2 py-1.5 font-mono text-[9px]"
              style={{
                background: i === 0 ? "rgba(175,169,236,0.14)" : "transparent",
                color: i === 0 ? "#AFA9EC" : "rgba(255,255,255,0.3)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
        {/* Main */}
        <div className="flex-1 space-y-3 p-4">
          <div className="grid grid-cols-3 gap-2">
            {[["MRR", "€24.8k", "+12%"], ["Users", "3 412", "+8%"], ["Churn", "1.9%", "−0.4%"]].map(([l, v, d]) => (
              <div key={l} className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2.5">
                <div className="font-mono text-[8px] text-white/25">{l}</div>
                <div className="mt-1 text-[15px] font-medium text-white/85">{v}</div>
                <div className="font-mono text-[8px] text-[#5DCAA5]">{d}</div>
              </div>
            ))}
          </div>
          {/* Bar chart */}
          <div className="rounded-md border border-white/[0.06] bg-white/[0.02] p-3">
            <div className="mb-2 font-mono text-[8px] text-white/25">REVENUE — LAST 12 WEEKS</div>
            <div className="flex h-[64px] items-end gap-1">
              {[35, 48, 42, 60, 55, 72, 66, 80, 74, 88, 92, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: i >= 10 ? "#AFA9EC" : "rgba(175,169,236,0.25)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div
      className="flex h-full items-center justify-center"
      style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(93,202,165,0.08), #090F0D)" }}
    >
      {/* Phone frame */}
      <div className="h-[85%] w-[168px] overflow-hidden rounded-[26px] border border-white/[0.12] bg-[#0A100E] shadow-2xl shadow-black/60">
        {/* Status bar */}
        <div className="flex items-center justify-between px-4 pt-2.5 pb-1 font-mono text-[8px] text-white/40">
          <span>9:41</span>
          <span className="flex gap-1"><span>●●●</span><span>▮</span></span>
        </div>
        <div className="px-3 pt-2">
          <div className="text-[13px] font-medium text-white/90">Good morning</div>
          <div className="font-mono text-[8px] text-white/30">3 tasks today</div>
        </div>
        {/* Cards */}
        <div className="mt-3 space-y-2 px-3">
          <div className="rounded-xl bg-[#5DCAA5]/15 border border-[#5DCAA5]/25 p-2.5">
            <div className="font-mono text-[8px] text-[#5DCAA5]">NEXT BOOKING</div>
            <div className="mt-1 text-[11px] text-white/85">14:30 — Client call</div>
          </div>
          {["Send invoice #204", "Review designs"].map((t) => (
            <div key={t} className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] p-2.5">
              <span className="h-3 w-3 rounded-full border border-white/20" />
              <span className="text-[10px] text-white/60">{t}</span>
            </div>
          ))}
        </div>
        {/* Tab bar */}
        <div className="mt-3 flex justify-around border-t border-white/[0.06] py-2.5">
          {["⌂", "▤", "＋", "◎", "☰"].map((c, i) => (
            <span key={i} className="text-[12px]" style={{ color: i === 0 ? "#5DCAA5" : "rgba(255,255,255,0.25)" }}>
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AiVisual() {
  return (
    <div className="flex h-full flex-col bg-[#0E0C08]">
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
        <span className="font-mono text-[9px] tracking-[0.14em] text-[#EF9F27]">AI PIPELINE</span>
        <span className="flex items-center gap-1.5 font-mono text-[8px] text-[#5DCAA5]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5DCAA5]" style={{ boxShadow: "0 0 6px #5DCAA5" }} />
          running
        </span>
      </div>
      {/* Chat */}
      <div className="space-y-2.5 p-4">
        <div className="ml-auto w-fit max-w-[75%] rounded-lg rounded-br-sm bg-[#EF9F27]/15 border border-[#EF9F27]/25 px-3 py-2 text-[10px] text-white/80">
          Classify these 240 support emails and draft replies
        </div>
        <div className="w-fit max-w-[80%] rounded-lg rounded-bl-sm border border-white/[0.07] bg-white/[0.03] px-3 py-2 text-[10px] text-white/60">
          Done. 231 auto-replied, 9 escalated to you.
          <span className="ml-1 inline-block h-[10px] w-[5px] animate-pulse bg-[#EF9F27]/70 align-middle" />
        </div>
      </div>
      {/* Workflow nodes */}
      <div className="mt-auto p-4">
        <div className="mb-2 font-mono text-[8px] text-white/25">WORKFLOW</div>
        <div className="flex items-center gap-1">
          {["INBOX", "LLM", "CRM", "REPLY"].map((n, i) => (
            <div key={n} className="flex flex-1 items-center gap-1">
              <div
                className="flex-1 rounded-md border px-2 py-2 text-center font-mono text-[8px]"
                style={{
                  borderColor: i === 1 ? "rgba(239,159,39,0.5)" : "rgba(255,255,255,0.08)",
                  background: i === 1 ? "rgba(239,159,39,0.12)" : "rgba(255,255,255,0.02)",
                  color: i === 1 ? "#EF9F27" : "rgba(255,255,255,0.45)",
                }}
              >
                {n}
              </div>
              {i < 3 && <span className="text-[9px] text-white/20">→</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlatformVisual() {
  return (
    <div className="flex h-full flex-col bg-[#090C0F]">
      <div className="flex items-center gap-4 border-b border-white/[0.06] px-4 py-2.5">
        <span className="font-mono text-[9px] tracking-[0.12em] text-[#85B7EB]">OPERATIONS</span>
        {["Stock", "Orders", "Team"].map((tab, i) => (
          <span key={tab} className="font-mono text-[8px]" style={{ color: i === 0 ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.25)" }}>
            {tab}
          </span>
        ))}
      </div>
      <div className="space-y-3 p-4">
        <div className="grid grid-cols-3 gap-2">
          {[["Sites", "3"], ["Assets", "1 327"], ["Alerts", "2"]].map(([l, v], i) => (
            <div key={l} className="rounded-md border border-white/[0.06] bg-white/[0.02] p-2.5">
              <div className="font-mono text-[8px] text-white/25">{l}</div>
              <div className="mt-1 text-[15px] font-medium" style={{ color: i === 2 ? "#F0997B" : "rgba(255,255,255,0.85)" }}>
                {v}
              </div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-md border border-white/[0.06]">
          {[
            ["Laptops — Site A", "1 240", "OK", "#5DCAA5"],
            ["Tablets — Site B", "87", "Low", "#EF9F27"],
            ["Headsets — Site C", "0", "Out", "#F0997B"],
            ["Monitors — Site A", "312", "OK", "#5DCAA5"],
          ].map(([name, qty, status, color], i) => (
            <div
              key={name}
              className="flex items-center justify-between px-3 py-2 text-[10px]"
              style={{ background: i % 2 ? "rgba(255,255,255,0.015)" : "transparent" }}
            >
              <span className="text-white/55">{name}</span>
              <span className="flex items-center gap-3">
                <span className="font-mono text-white/70">{qty}</span>
                <span
                  className="rounded-full px-2 py-0.5 font-mono text-[8px]"
                  style={{ color, background: `${color}1A`, border: `0.5px solid ${color}40` }}
                >
                  {status}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const VISUALS = [WebVisual, MobileVisual, AiVisual, PlatformVisual];

// ─── Carousel ──────────────────────────────────────────────────────────────────

export default function ShowcaseCarousel() {
  const { lang } = useLang();
  const [index, setIndex] = useState(0);
  const count = SLIDES.length;
  const copy = {
    en: {
      eyebrow: "Visual showcase",
      title: "The level of finish, at a glance",
      hint: "Drag, click or use the arrows",
      previous: "Previous visual",
      next: "Next visual",
      show: "Show",
    },
    fr: {
      eyebrow: "Aperçu en images",
      title: "Le niveau de finition, en un coup d’œil",
      hint: "Glissez, cliquez ou utilisez les flèches",
      previous: "Visuel précédent",
      next: "Visuel suivant",
      show: "Afficher",
    },
  }[lang];

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  return (
    <section
      aria-labelledby="showcase-title"
      className="relative z-10 overflow-hidden px-6 py-24 sm:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[min(92vw,980px)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-70 blur-3xl transition-colors duration-700"
        style={{
          background: `radial-gradient(ellipse, ${SLIDES[index].accent}18 0%, transparent 68%)`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent"
      />
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-[#AFA9EC]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#AFA9EC]">
                {copy.eyebrow}
              </span>
            </div>
            <h2
              id="showcase-title"
              className="max-w-2xl text-[clamp(24px,3vw,34px)] font-light tracking-[-0.02em] text-[#F0EEE8]"
            >
              {copy.title}
            </h2>
          </div>
          <span className="hidden font-mono text-[11px] text-[#F0EEE8]/25 sm:block">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* 3D stage */}
      <motion.div
        role="region"
        aria-roledescription="carousel"
        aria-label={copy.eyebrow}
        className="relative mx-auto h-[430px] max-w-6xl cursor-grab active:cursor-grabbing"
        style={{ perspective: 1400 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.12}
        onDragEnd={(_, info) => {
          if (info.offset.x < -60) go(1);
          else if (info.offset.x > 60) go(-1);
        }}
      >
        {SLIDES.map((slide, i) => {
          // shortest signed offset for circular order (-2..2)
          let offset = i - index;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;

          const abs = Math.abs(offset);
          const Visual = VISUALS[i];

          return (
            <motion.div
              key={slide.key}
              className="absolute left-1/2 top-0 w-[min(80vw,640px)]"
              animate={{
                x: `calc(-50% + ${offset * 46}%)`,
                rotateY: offset * -30,
                scale: 1 - abs * 0.13,
                opacity: abs > 1 ? 0.15 : abs === 1 ? 0.5 : 1,
                zIndex: 10 - abs,
              }}
              transition={{ duration: 0.55, ease: EASE }}
              style={{ transformStyle: "preserve-3d" }}
              onClick={() => offset !== 0 && go(offset > 0 ? 1 : -1)}
              aria-hidden={offset !== 0}
            >
              <div
                className="overflow-hidden rounded-xl border bg-[#0C0B12]"
                style={{
                  height: 360,
                  borderColor: offset === 0 ? `${slide.accent}59` : "rgba(255,255,255,0.08)",
                  boxShadow:
                    offset === 0
                      ? `0 0 60px -12px ${slide.accent}4D, 0 30px 60px -20px rgba(0,0,0,0.8)`
                      : "0 30px 60px -20px rgba(0,0,0,0.8)",
                }}
              >
                <Visual />
              </div>
              {/* Caption */}
              <div
                className="mt-4 flex items-baseline justify-between px-1 transition-opacity duration-300"
                style={{ opacity: offset === 0 ? 1 : 0 }}
              >
                <span className="text-[15px] font-medium text-[#F0EEE8]">
                  {slide.title[lang]}
                </span>
                <span className="font-mono text-[10px]" style={{ color: slide.accent }}>
                  {slide.tag[lang]}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Controls */}
      <div className="relative mt-6 flex items-center justify-center gap-6">
        <button
          onClick={() => go(-1)}
          aria-label={copy.previous}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-[#0C0B12]/70 text-[#F0EEE8]/60 backdrop-blur transition hover:-translate-x-0.5 hover:border-white/30 hover:text-[#F0EEE8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AFA9EC]"
        >
          ←
        </button>
        <div className="flex gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setIndex(i)}
              aria-label={`${copy.show} ${s.title[lang]}`}
              aria-current={i === index ? "true" : undefined}
              className="h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AFA9EC]"
              style={{
                width: i === index ? 24 : 6,
                background: i === index ? s.accent : "rgba(255,255,255,0.15)",
              }}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label={copy.next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-[#0C0B12]/70 text-[#F0EEE8]/60 backdrop-blur transition hover:translate-x-0.5 hover:border-white/30 hover:text-[#F0EEE8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#AFA9EC]"
        >
          →
        </button>
      </div>
      <div className="relative mt-4 flex items-center justify-center gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-[#F0EEE8]/25">
        <span className="sm:hidden">
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
        <span aria-hidden="true" className="hidden h-px w-5 bg-white/10 sm:block" />
        <span>{copy.hint}</span>
      </div>
    </section>
  );
}

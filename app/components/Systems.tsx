"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { fadeUp, stagger } from "@/lib/animations";
import { localizedHref } from "@/lib/locale";
import TiltCard from "./TiltCard";
import GhostNumber from "./GhostNumber";

// Map the home-section ordering to the /work/[slug] URLs.
const PROJECT_SLUGS = ["bloom", "onstage", "torstock", "torfix"];

// ─── Per-project config ────────────────────────────────────────────────────────

const PROJECT_META = [
  { accent: "#AFA9EC", tagBg: "#26215C" },
  { accent: "#F0997B", tagBg: "#4A1B0C" },
  { accent: "#5DCAA5", tagBg: "#04342C" },
  { accent: "#85B7EB", tagBg: "#042C53" },
];

// ─── Browser chrome ────────────────────────────────────────────────────────────

function BrowserBar() {
  return (
    <div
      className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06]"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      <span className="w-2 h-2 rounded-full bg-[#FF5F57] opacity-70" />
      <span className="w-2 h-2 rounded-full bg-[#FFBD2E] opacity-70" />
      <span className="w-2 h-2 rounded-full bg-[#28C840] opacity-70" />
    </div>
  );
}

// ─── Mockup UIs ────────────────────────────────────────────────────────────────

function MockupBloom() {
  return (
    <div className="flex h-full flex-col" style={{ padding: 12, background: "#0D0B14" }}>
      <div className="mb-2.5 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.1em] text-[#AFA9EC]">BLOOM</span>
        <span className="flex gap-3 text-[8px]">
          <span className="text-white/70 border-b border-[#AFA9EC] pb-0.5">For You</span>
          <span className="text-white/25">Following</span>
        </span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-1.5">
        {[
          { label: "▶ AI Film · 2:34", views: "12.4k", bg: "radial-gradient(ellipse at 30% 20%, rgba(175,169,236,0.35), rgba(175,169,236,0.08))" },
          { label: "♪ AI Music · 3:12", views: "8.1k", bg: "radial-gradient(ellipse at 70% 30%, rgba(133,183,235,0.3), rgba(175,169,236,0.06))" },
        ].map((t) => (
          <div key={t.label} className="relative flex flex-col justify-between overflow-hidden rounded-md border border-[#AFA9EC]/20 p-1.5" style={{ background: t.bg }}>
            <span className="self-end rounded-full bg-black/40 px-1.5 py-0.5 font-mono text-[7px] text-[#AFA9EC]">♥ {t.views}</span>
            <span className="text-[8px] text-white/60">{t.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1.5">
        <span className="font-mono text-[7px] text-white/30">TRENDING</span>
        <span className="text-[8px] text-white/55">#aicinema · 240 posts</span>
        <span className="font-mono text-[8px] text-[#5DCAA5]">↑ 34%</span>
      </div>
    </div>
  );
}

function MockupOnstage() {
  return (
    <div className="flex h-full flex-col" style={{ padding: 12, background: "#0F0B09" }}>
      <div className="mb-2 flex items-center gap-2">
        <div className="h-7 w-7 shrink-0 rounded-full border border-[#F0997B]/30" style={{ background: "radial-gradient(circle at 35% 30%, rgba(240,153,123,0.5), rgba(240,153,123,0.12))" }} />
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 text-[9px] font-medium text-[#F0EEE8]">
            Aria Nova <span className="rounded-full bg-[#F0997B]/15 px-1.5 font-mono text-[6px] text-[#F0997B]">PRO</span>
          </div>
          <div className="text-[8px] text-white/30">Jazz · Brussels · ★ 4.9 (56)</div>
        </div>
        <div className="ml-auto shrink-0 rounded bg-[#F0997B]/15 border border-[#F0997B]/30 px-2 py-1 text-[8px] text-[#F0997B]">
          Book →
        </div>
      </div>
      <div className="mb-1.5 font-mono text-[7px] tracking-[0.08em] text-white/25">UPCOMING DATES</div>
      <div className="flex flex-1 flex-col gap-1">
        {[
          ["Jun 14 · Bozar", "2 left", "#F0997B"],
          ["Jun 28 · Ancienne Belgique", "Available", "rgba(255,255,255,0.3)"],
          ["Jul 05 · Flagey", "Sold out", "rgba(255,255,255,0.2)"],
        ].map(([d, s, c]) => (
          <div key={d} className="flex items-center justify-between rounded bg-white/[0.03] px-2 py-1 text-[8px]">
            <span className="text-white/50">{d}</span>
            <span style={{ color: c }}>{s}</span>
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex items-center justify-between rounded-md border border-[#F0997B]/20 bg-[#F0997B]/8 px-2 py-1.5">
        <span className="text-[8px] text-white/55">New booking request</span>
        <span className="font-mono text-[7px] text-[#F0997B]">● 2 min ago</span>
      </div>
    </div>
  );
}

function MockupTorStock() {
  return (
    <div className="flex h-full flex-col" style={{ padding: 12, background: "#090F0D" }}>
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[9px] tracking-[0.08em] text-[#5DCAA5]">TORSTOCK</span>
        <span className="flex gap-2 font-mono text-[7px]">
          <span className="rounded bg-[#5DCAA5]/12 px-1.5 py-0.5 text-[#5DCAA5]">Site A</span>
          <span className="px-1.5 py-0.5 text-white/25">Site B</span>
          <span className="px-1.5 py-0.5 text-white/25">Site C</span>
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-px overflow-hidden rounded-md border border-white/[0.06]">
        {[
          ["Laptops cliniciens", "1 240", "OK", "#5DCAA5"],
          ["Tablettes consult.", "87", "Low", "#EF9F27"],
          ["Casques VoIP", "0", "Out", "#F0997B"],
        ].map(([name, qty, status, color], i) => (
          <div key={name} className="flex items-center justify-between px-2 py-[5px] text-[8px]" style={{ background: i % 2 ? "rgba(255,255,255,0.015)" : "rgba(255,255,255,0.03)" }}>
            <span className="text-white/55">{name}</span>
            <span className="flex items-center gap-2">
              <span className="font-mono text-white/75">{qty}</span>
              <span className="rounded-full px-1.5 py-px font-mono text-[7px]" style={{ color, background: `${color}1A`, border: `0.5px solid ${color}40` }}>{status}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex items-center justify-between rounded-md border border-[#5DCAA5]/25 bg-[#5DCAA5]/8 px-2 py-1.5">
        <span className="text-[8px] text-white/60">✓ Restock order sent — Casques VoIP</span>
        <span className="font-mono text-[7px] text-[#5DCAA5]">auto</span>
      </div>
    </div>
  );
}

function MockupTorfix() {
  return (
    <div className="flex h-full flex-col" style={{ padding: 12, background: "#090C0F" }}>
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-[9px] text-[#85B7EB]">TORFIX</span>
        <span className="flex gap-2.5 font-mono text-[7px]">
          <span className="text-white/60 border-b border-[#85B7EB] pb-0.5">Agenda</span>
          <span className="text-white/25">Clients</span>
          <span className="text-white/25">Caisse</span>
        </span>
      </div>
      <div className="mb-2 grid grid-cols-3 gap-1.5">
        {[["RDV auj.", "8"], ["Clients", "34"], ["CA sem.", "€2.1k"]].map(([l, v]) => (
          <div key={l} className="rounded border border-[#85B7EB]/15 bg-[#85B7EB]/6 p-1.5">
            <div className="text-[7px] text-white/30">{l}</div>
            <div className="text-[12px] font-medium text-[#F0EEE8]">{v}</div>
          </div>
        ))}
      </div>
      <div className="mb-1 font-mono text-[7px] text-white/25">AUJOURD&apos;HUI</div>
      <div className="flex flex-1 flex-col gap-1">
        {[
          ["14:30", "Marie Dubois · Coupe + couleur", true],
          ["16:00", "Karim B. · Barbe + coupe", false],
        ].map(([time, label, next]) => (
          <div key={time as string} className="flex items-center gap-2 rounded bg-white/[0.03] px-2 py-1 text-[8px]" style={{ borderLeft: `2px solid ${next ? "#85B7EB" : "rgba(133,183,235,0.25)"}` }}>
            <span className="font-mono text-[#85B7EB]">{time}</span>
            <span className="truncate text-white/55">{label}</span>
            {next ? <span className="ml-auto shrink-0 rounded-full bg-[#85B7EB]/15 px-1.5 font-mono text-[6px] text-[#85B7EB]">NEXT</span> : null}
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex items-center justify-between rounded-md border border-white/[0.06] bg-white/[0.02] px-2 py-1">
        <span className="text-[7px] text-white/35">SMS rappel envoyé · Marie D.</span>
        <span className="font-mono text-[7px] text-[#5DCAA5]">✓</span>
      </div>
    </div>
  );
}

const MOCKUPS = [MockupBloom, MockupOnstage, MockupTorStock, MockupTorfix];

// ─── Main component ────────────────────────────────────────────────────────────

export default function Systems() {
  const { lang } = useLang();
  const t = translations[lang];
  const workIndexHref = localizedHref("/work", lang);
  const viewAllLabel = lang === "fr" ? "Voir tous les projets →" : "View all work →";

  return (
    <section id="systems" className="relative z-10 overflow-hidden px-6 sm:px-10 py-28">
      <GhostNumber n="02" side="left" />
      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 flex items-baseline justify-between"
        >
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(22px,3vw,32px)] font-light text-[#F0EEE8]"
          >
            {t.sysTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[13px] text-[#F0EEE8]/35 hidden sm:block"
          >
            {t.sysSubtitle}
          </motion.p>
        </motion.div>

        {/* 2×2 card grid */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {t.sysItems.map((s, idx) => {
            const meta = PROJECT_META[idx] ?? PROJECT_META[0];
            const Mockup = MOCKUPS[idx] ?? MOCKUPS[0];
            const slug = PROJECT_SLUGS[idx] ?? PROJECT_SLUGS[0];
            const detailHref = localizedHref(`/work/${slug}`, lang);

            return (
              <motion.div
                key={s.number}
                variants={fadeUp}
              >
              <TiltCard
                accent={meta.accent}
                className="group flex flex-col overflow-hidden rounded-xl h-full"
                style={{
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <Link href={detailHref} className="flex flex-col h-full">
                {/* Browser mockup zone */}
                <div className="shrink-0" style={{ height: 200 }}>
                  <BrowserBar />
                  <div style={{ height: "calc(200px - 33px)", overflow: "hidden" }}>
                    <Mockup />
                  </div>
                </div>

                {/* Info zone */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Number + Live badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="font-mono text-[10px] transition-colors duration-300"
                      style={{ color: meta.accent }}
                    >
                      {s.number}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1D9E75]" style={{ boxShadow: "0 0 5px #1D9E75" }} />
                      </span>
                      <span className="font-mono text-[10px] text-[#1D9E75]">Live</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] font-medium text-[#F0EEE8] mb-2">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-[#F0EEE8]/45 leading-relaxed line-clamp-3 mb-4 flex-1">
                    {s.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-1 rounded-[2px]"
                        style={{ background: meta.tagBg, color: meta.accent }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <span
                    className="text-[12px] transition-all duration-200 group-hover:underline underline-offset-2"
                    style={{ color: meta.accent }}
                  >
                    {t.exploreSystem} →
                  </span>
                </div>
                </Link>
              </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View all */}
        <div className="mt-10 flex justify-center">
          <Link
            href={workIndexHref}
            className="inline-flex items-center gap-2 rounded-[4px] border border-white/[0.15] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#F0EEE8]/55 transition-colors hover:bg-white/[0.04] hover:text-[#F0EEE8]"
          >
            {viewAllLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

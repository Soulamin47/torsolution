"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { EASE } from "@/lib/animations";

// ─── Per-service config (index matches capItems order) ────────────────────────

const SERVICE_META = [
  { accent: "#AFA9EC", symbol: "</>",  area: "web",      large: true  }, // Web
  { accent: "#5DCAA5", symbol: "◎",    area: "mobile",   large: false }, // Mobile
  { accent: "#EF9F27", symbol: "∿",    area: "ai",       large: false }, // AI
  { accent: "#85B7EB", symbol: "⊞",    area: "platform", large: true  }, // Platform
  { accent: "#F0997B", symbol: "⬡",    area: "web3",     large: false }, // Web3
  { accent: "#D4537E", symbol: "#",    area: "social",   large: false }, // Social
];

// Tech pills shown in the "Web" large card
const WEB_TECH = ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"];

export default function Capabilities() {
  const { lang } = useLang();
  const t = translations[lang];

  // Re-order items to match grid-template-areas order:
  // web(0) mobile(1) ai(2) platform(3) web3(4) social(5)
  // capItems order: Web(0) Mobile(1) Platform(2) AI(3) Web3(4) Social(5)
  // We map by area so the visual order matches the grid areas.
  const ordered = [
    { item: t.capItems[0], meta: SERVICE_META[0] }, // web
    { item: t.capItems[1], meta: SERVICE_META[1] }, // mobile
    { item: t.capItems[3], meta: SERVICE_META[2] }, // ai  (capItems[3])
    { item: t.capItems[2], meta: SERVICE_META[3] }, // platform (capItems[2])
    { item: t.capItems[4], meta: SERVICE_META[4] }, // web3
    { item: t.capItems[5], meta: SERVICE_META[5] }, // social
  ];

  return (
    <section id="capabilities" className="relative z-10 px-6 sm:px-10 py-20">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12 flex items-baseline justify-between"
        >
          <div>
            <h2 className="text-[clamp(22px,3vw,32px)] font-light text-[#F0EEE8]">
              {t.capTitle}
            </h2>
            <p className="mt-2 text-[13px] text-[#F0EEE8]/35 max-w-md">
              {t.capSubtitle}
            </p>
          </div>
          <span className="font-mono text-[11px] text-[#F0EEE8]/25 shrink-0 ml-6 hidden sm:block">
            06 services
          </span>
        </motion.div>

        {/* Bento grid — desktop */}
        <div
          className="hidden md:grid gap-px"
          style={{
            background: "rgba(255,255,255,0.06)",
            gridTemplateAreas: `
              "web     web     mobile"
              "ai      platform platform"
              "web3    social  social"
            `,
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "auto auto auto",
          }}
        >
          {ordered.map(({ item, meta }, idx) => (
            <BentoCard
              key={meta.area}
              item={item}
              meta={meta}
              idx={idx}
            />
          ))}
        </div>

        {/* Mobile — single column */}
        <div
          className="md:hidden grid gap-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          {ordered.map(({ item, meta }, idx) => (
            <BentoCard
              key={`mob-${meta.area}`}
              item={item}
              meta={meta}
              idx={idx}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── Card component ────────────────────────────────────────────────────────────

function BentoCard({
  item,
  meta,
  idx,
}: {
  item: { title: string; desc: string; tag: string; icon: string };
  meta: { accent: string; symbol: string; area: string; large: boolean };
  idx: number;
}) {
  const isWebLarge = meta.area === "web";
  const isPlatformLarge = meta.area === "platform";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: idx * 0.07, ease: EASE }}
      whileHover={{ backgroundColor: "rgba(255,255,255,0.015)" }}
      className="relative overflow-hidden flex flex-col"
      style={{
        gridArea: meta.area,
        backgroundColor: "#09080F",
        padding: meta.large ? 32 : 24,
      }}
    >
      {/* Large bg symbol */}
      <motion.div
        aria-hidden="true"
        className="absolute top-4 right-6 select-none pointer-events-none font-mono"
        style={{ fontSize: 90, opacity: 0.04, color: meta.accent, lineHeight: 1 }}
        whileHover={{ opacity: 0.07, scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        {meta.symbol}
      </motion.div>

      {/* Icon monogram */}
      <div
        className="inline-flex items-center justify-center font-mono text-[12px] shrink-0"
        style={{
          width: 36,
          height: 36,
          borderRadius: 6,
          border: "0.5px solid rgba(255,255,255,0.1)",
          background: `${meta.accent}14`,
          color: meta.accent,
          marginBottom: 20,
        }}
      >
        {item.icon}
      </div>

      {/* Title */}
      <h3 className="text-[16px] font-medium text-[#F0EEE8] mb-2">{item.title}</h3>

      {/* Description */}
      <p
        className="text-[13px] text-[#F0EEE8]/40 leading-[1.7]"
        style={{ flex: isWebLarge || isPlatformLarge ? "unset" : 1 }}
      >
        {item.desc}
      </p>

      {/* Web large — tech pills */}
      {isWebLarge && (
        <div className="mt-4 flex flex-wrap gap-2">
          {["Next.js", "TypeScript", "Tailwind", "PostgreSQL"].map((tech) => (
            <span
              key={tech}
              className="text-[9px] font-mono opacity-30 border border-white/10 px-2 py-1 rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Platform large — mini stats */}
      {isPlatformLarge && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="p-3 rounded bg-white/[0.02] border border-white/5">
            <div className="text-[18px] font-medium text-[#F0EEE8]/80">4</div>
            <div className="font-mono text-[9px] text-[#F0EEE8]/25 mt-1">
              plateformes livrées
            </div>
          </div>
          <div className="p-3 rounded bg-white/[0.02] border border-white/5">
            <div className="text-[18px] font-medium text-[#F0EEE8]/80">100%</div>
            <div className="font-mono text-[9px] text-[#F0EEE8]/25 mt-1">
              clients satisfaits
            </div>
          </div>
        </div>
      )}

      {/* Tag — pushed to bottom */}
      <div className="mt-auto pt-5">
        <span
          className="font-mono text-[9px] px-[10px] py-[4px] rounded-[3px]"
          style={{
            border: `0.5px solid ${meta.accent}4D`,
            color: meta.accent,
            background: `${meta.accent}14`,
          }}
        >
          {item.tag}
        </span>
      </div>
    </motion.div>
  );
}

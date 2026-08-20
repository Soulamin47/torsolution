"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { EASE } from "@/lib/animations";
import { localizedHref } from "@/lib/locale";
import GhostNumber from "./GhostNumber";

// ─── Per-service config (index matches capItems order) ────────────────────────
// `slug` matches the /services/[slug] route.

const SERVICE_META = [
  { accent: "#AFA9EC", symbol: "</>",  area: "web",      large: true,  slug: "web",           shipped: "Onstage" },
  { accent: "#5DCAA5", symbol: "◎",    area: "mobile",   large: false, slug: "mobile",        shipped: "Torfix" },
  { accent: "#EF9F27", symbol: "∿",    area: "ai",       large: false, slug: "ai-automation", shipped: "Bloom" },
  { accent: "#85B7EB", symbol: "⊞",    area: "platform", large: true,  slug: "platforms",     shipped: "TorStock" },
  { accent: "#F0997B", symbol: "⬡",    area: "web3",     large: false, slug: "web3",          shipped: null },
  { accent: "#D4537E", symbol: "#",    area: "social",   large: false, slug: "social",        shipped: "Bloom" },
] as const;

// Tech pills shown in the "Web" large card
const WEB_TECH = ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"];

export default function Capabilities() {
  const { lang } = useLang();
  const t = translations[lang];
  const servicesIndexHref = localizedHref("/services", lang);
  const viewAllLabel = lang === "fr" ? "Voir tous les services →" : "View all services →";

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
    <section id="capabilities" className="relative z-10 overflow-hidden px-6 sm:px-10 py-20">
      <GhostNumber n="01" side="right" />
      <div className="relative mx-auto max-w-5xl">

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
            {String(t.capItems.length).padStart(2, "0")} {t.capServicesLabel}
          </span>
        </motion.div>

        {/* Bento grid — desktop */}
        <div
          className="hidden overflow-hidden rounded-[20px] md:grid md:gap-px"
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
              labels={{
                platforms: t.capPlatformsDelivered,
                clients: t.capClientsSatisfied,
              }}
            />
          ))}
        </div>

        {/* Mobile — single column */}
        <div
          className="grid gap-px overflow-hidden rounded-[20px] md:hidden"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          {ordered.map(({ item, meta }, idx) => (
            <BentoCard
              key={`mob-${meta.area}`}
              item={item}
              meta={meta}
              idx={idx}
              labels={{
                platforms: t.capPlatformsDelivered,
                clients: t.capClientsSatisfied,
              }}
            />
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 flex justify-center">
          <Link
            href={servicesIndexHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#F0EEE8]/55 transition-colors hover:bg-white/[0.04] hover:text-[#F0EEE8]"
          >
            {viewAllLabel}
          </Link>
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
  labels,
}: {
  item: { title: string; desc: string; tag: string; icon: string };
  meta: {
    accent: string;
    symbol: string;
    area: string;
    large: boolean;
    slug: string;
    shipped: string | null;
  };
  idx: number;
  labels: { platforms: string; clients: string };
}) {
  const { lang } = useLang();
  const isWebLarge = meta.area === "web";
  const isPlatformLarge = meta.area === "platform";
  const detailHref = localizedHref(`/services/${meta.slug}`, lang);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: idx * 0.07, ease: EASE }}
      whileHover={{ backgroundColor: "rgba(255,255,255,0.015)" }}
      className="group relative overflow-hidden flex flex-col"
      style={{
        gridArea: meta.area,
        backgroundColor: "#09080F",
        padding: meta.large ? 32 : 24,
      }}
    >
      <Link
        href={detailHref}
        className="absolute inset-0 z-10"
        aria-label={item.title}
      />
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
          {WEB_TECH.map((tech) => (
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
              {labels.platforms}
            </div>
          </div>
          <div className="p-3 rounded bg-white/[0.02] border border-white/5">
            <div className="text-[18px] font-medium text-[#F0EEE8]/80">100%</div>
            <div className="font-mono text-[9px] text-[#F0EEE8]/25 mt-1">
              {labels.clients}
            </div>
          </div>
        </div>
      )}

      {/* Tag + shipped ref — pushed to bottom */}
      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
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
        {meta.shipped && (
          <span className="flex items-center gap-1.5 font-mono text-[9px] text-[#F0EEE8]/35">
            <span
              className="inline-block h-1 w-1 rounded-full"
              style={{ background: "#1D9E75", boxShadow: "0 0 5px #1D9E75" }}
            />
            {lang === "fr" ? "En prod : " : "Live: "}
            {meta.shipped}
          </span>
        )}
      </div>
    </motion.div>
  );
}

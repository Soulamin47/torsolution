"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { EASE, fadeUp, stagger } from "@/lib/animations";

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number | null = null;

    const step = (ts: number) => {
      if (startTime === null) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOut cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return count;
}

function StatItem({
  label,
  value,
  prefix = "",
  suffix,
  sub,
}: {
  label: string;
  value: number;
  prefix?: string;
  suffix: string;
  sub: string;
}) {
  const count = useCountUp(value, 1800);

  return (
    <div className="min-w-0 px-4 py-4 sm:flex-1 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0">
      <div className="font-mono text-[10px] uppercase tracking-wider text-[#F0EEE8]/25 mb-2.5">
        {label}
      </div>
      <div className="text-[22px] font-medium text-[#F0EEE8] leading-none tabular-nums">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-[12px] text-[#F0EEE8]/35">{sub}</div>
    </div>
  );
}

function HeroConsole() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative hidden min-h-[360px] md:block"
    >
      <div className="absolute inset-0 rounded-[10px] border border-white/[0.08] bg-[#0C0B12]/70 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#F0997B]/80" />
            <span className="h-2 w-2 rounded-full bg-[#EF9F27]/80" />
            <span className="h-2 w-2 rounded-full bg-[#5DCAA5]/80" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#F0EEE8]/25">
            live build room
          </span>
        </div>

        <div className="grid h-[calc(100%-45px)] grid-rows-[1fr_auto] p-5">
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Discovery", value: "01", color: "#AFA9EC" },
              { label: "Prototype", value: "02", color: "#85B7EB" },
              { label: "Build", value: "03", color: "#5DCAA5" },
              { label: "Launch", value: "04", color: "#F0997B" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.12, duration: 0.45, ease: EASE }}
                className="relative overflow-hidden rounded-[6px] border border-white/[0.08] bg-white/[0.03] p-4"
              >
                <span
                  className="absolute right-3 top-3 h-2 w-2 rounded-full"
                  style={{ background: item.color, boxShadow: `0 0 16px ${item.color}` }}
                />
                <div className="font-mono text-[28px] leading-none text-[#F0EEE8]/80">
                  {item.value}
                </div>
                <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-[#F0EEE8]/30">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 rounded-[6px] border border-[#5DCAA5]/20 bg-[#5DCAA5]/10 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#5DCAA5]">
                conversion path
              </span>
              <span className="font-mono text-[10px] text-[#F0EEE8]/30">ready</span>
            </div>
            <div className="space-y-2">
              {[82, 64, 91].map((width, index) => (
                <div key={index} className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    className="h-full rounded-full bg-[#5DCAA5]"
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ delay: 0.8 + index * 0.15, duration: 0.8, ease: EASE }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="relative px-6 sm:px-10 pt-36 pb-0 overflow-hidden">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Zone haute */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-12 pb-14 md:grid-cols-[1fr_0.9fr] md:items-center"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-6 h-px bg-[#AFA9EC]" />
              <span className="font-mono text-[11px] text-[#F0EEE8]/40 tracking-wide">
                {t.heroBadge}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[clamp(34px,5vw,64px)] font-light leading-[1.1] tracking-tight text-[#F0EEE8]"
            >
              <span className="block">{t.heroLine1}</span>
              <span className="block">
                {t.heroLine2}{" "}
                <em className="not-italic text-[#F0EEE8]/40">
                  {t.heroLine2italic}
                </em>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 text-[14px] leading-relaxed text-[#F0EEE8]/45 max-w-[400px]"
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3 items-center"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#AFA9EC] px-6 py-3 text-[13px] font-medium text-[#09080F] transition-opacity hover:opacity-90"
              >
                {t.startProject}
              </a>
              <a
                href="#systems"
                className="inline-flex items-center justify-center rounded-[4px] border border-white/[0.15] px-6 py-3 text-[13px] font-medium text-[#F0EEE8] transition-colors hover:bg-white/[0.04]"
              >
                {t.viewSystems}
              </a>

              <div className="flex items-center gap-2 ml-2">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1D9E75]" style={{ boxShadow: "0 0 6px #1D9E75" }} />
                </span>
                <span className="font-mono text-[10px] text-[#F0EEE8]/35 tracking-wide">
                  {t.availability}
                </span>
              </div>
            </motion.div>
          </div>

          <HeroConsole />
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06]" />

        {/* Zone basse — stats */}
        <div className="grid grid-cols-1 divide-y divide-white/[0.06] py-6 sm:flex sm:divide-x sm:divide-y-0 sm:py-10">
          {t.heroStats.map((stat) => (
            <StatItem
              key={stat.label}
              label={stat.label}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              sub={stat.sub}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { fadeUp, stagger } from "@/lib/animations";
import { localizedHref } from "@/lib/locale";
import MagneticButton from "./MagneticButton";
import dynamic from "next/dynamic";
const ProductOrbital = dynamic(() => import("./ProductOrbital"), { ssr: false });

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

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang];
  const workHref = localizedHref("/work", lang);

  return (
    <section className="hero-section relative min-h-[calc(100svh-20px)] overflow-hidden px-6 pb-0 pt-28 sm:px-10 md:pt-32">

      {/* Dot grid — subtle, behind particles */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 40%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-[44%] h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Zone haute */}
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid items-center gap-2 pb-10 md:grid-cols-[1.05fr_0.95fr] md:gap-4"
        >
          <div>
            <motion.div
              variants={fadeUp}
              className="mb-8 flex items-center gap-3"
            >
              <div className="h-px w-8 bg-[#a7f3d0]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a7f3d0]">
                {t.heroBadge}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-[720px] text-[clamp(46px,6.4vw,86px)] font-light leading-[0.96] tracking-[-0.055em] text-[#f7f5ef]"
            >
              <span className="block">{t.heroLine1}</span>
              <span className="block">
                {t.heroLine2}{" "}
                <em className="hero-gradient not-italic">
                  {t.heroLine2italic}
                </em>
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-[510px] text-[15px] leading-7 text-[#F0EEE8]/48"
            >
              {t.heroSubtitle}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton>
                <a
                  href="#contact"
                  className="hero-primary-button inline-flex items-center justify-center rounded-full bg-[#a7f3d0] px-7 py-3.5 text-[13px] font-medium text-[#08110e] transition-transform hover:scale-[1.03]"
                >
                  {t.startProject}
                </a>
              </MagneticButton>
              <MagneticButton>
                <Link
                  href={workHref}
                  className="inline-flex items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.025] px-7 py-3.5 text-[13px] font-medium text-[#F0EEE8] backdrop-blur-md transition-colors hover:bg-white/[0.07]"
                >
                  {t.viewSystems}
                </Link>
              </MagneticButton>

              <div className="ml-2 flex items-center gap-2">
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

          <motion.div variants={fadeUp} className="relative -mx-6 md:mx-0">
            <ProductOrbital />
            <div className="pointer-events-none absolute left-[8%] top-[18%] rounded-full border border-white/10 bg-[#0d0c13]/70 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-white/45 backdrop-blur-xl">01 · Strategy</div>
            <div className="pointer-events-none absolute right-[4%] top-[30%] rounded-full border border-[#a7f3d0]/20 bg-[#0d0c13]/70 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#a7f3d0] backdrop-blur-xl">02 · Product</div>
            <div className="pointer-events-none absolute bottom-[21%] left-[14%] rounded-full border border-[#c4b5fd]/20 bg-[#0d0c13]/70 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#c4b5fd] backdrop-blur-xl">03 · Launch</div>
          </motion.div>
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

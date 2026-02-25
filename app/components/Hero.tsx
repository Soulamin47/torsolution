"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden px-8 pt-14 pb-20">

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-220px] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* Subtle engineering grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 backdrop-blur-sm"
        >
          {lang === "en"
            ? "Advanced Product Engineer"
            : "Ingénieur Produit Avancé"}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {t.heroTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg"
        >
          {t.heroSubtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#systems"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <span className="relative z-10">
              {t.viewSystems} →
            </span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            {t.startProject}
          </a>
        </motion.div>

        {/* Scroll hint */}
        <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-widest text-gray-400">
          <span>{lang === "en" ? "Scroll" : "Défiler"}</span>
          <span className="inline-block h-px w-10 bg-white/15" />
        </div>

      </div>
    </section>
  );
}
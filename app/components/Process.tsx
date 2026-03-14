"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";

const stepStyles = [
  { num: "text-blue-400",    icon: "bg-blue-500/15 text-blue-300",    ring: "border-blue-500/20" },
  { num: "text-violet-400",  icon: "bg-violet-500/15 text-violet-300", ring: "border-violet-500/20" },
  { num: "text-cyan-400",    icon: "bg-cyan-500/15 text-cyan-300",     ring: "border-cyan-500/20" },
  { num: "text-emerald-400", icon: "bg-emerald-500/15 text-emerald-300",ring: "border-emerald-500/20" },
];

export default function Process() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="process" className="px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.procTitle}</h2>
          <p className="mt-3 text-gray-400">{t.procSubtitle}</p>
        </motion.div>

        {/* Steps grid */}
        <div className="relative grid gap-4 md:grid-cols-4">
          {/* Connector line */}
          <div className="pointer-events-none absolute top-[2.6rem] left-[12.5%] right-[12.5%] hidden h-px bg-gradient-to-r from-blue-500/25 via-cyan-500/20 to-emerald-500/25 md:block" />

          {t.procSteps.map((s, idx) => {
            const c = stepStyles[idx];
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="flex flex-col"
              >
                {/* Icon — centered on timeline */}
                <div className="relative z-10 flex justify-start md:justify-center mb-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${c.ring} bg-[#0d0d12] text-lg ${c.icon}`}>
                    {s.icon}
                  </div>
                </div>

                {/* Card — uniform height */}
                <div className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.055]">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-xs ${c.num}`}>{s.n}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-gray-500">
                      {s.timing}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 sm:flex-row sm:gap-10"
        >
          {t.procGuarantees.map((g, i) => (
            <div key={g} className="flex items-center gap-2 text-sm text-gray-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400/70" />
              {g}
              {i < t.procGuarantees.length - 1 && (
                <span className="hidden sm:block ml-8 h-4 w-px bg-white/10" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

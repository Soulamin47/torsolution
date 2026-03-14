"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";

const iconStyles: Record<string, { bg: string; text: string; glow: string }> = {
  Web:        { bg: "bg-blue-500/15",   text: "text-blue-300",   glow: "group-hover:shadow-blue-500/20" },
  Mobile:     { bg: "bg-cyan-500/15",   text: "text-cyan-300",   glow: "group-hover:shadow-cyan-500/20" },
  Platforms:  { bg: "bg-violet-500/15", text: "text-violet-300", glow: "group-hover:shadow-violet-500/20" },
  Social:     { bg: "bg-pink-500/15",   text: "text-pink-300",   glow: "group-hover:shadow-pink-500/20" },
  AI:         { bg: "bg-emerald-500/15",text: "text-emerald-300",glow: "group-hover:shadow-emerald-500/20" },
  Web3:       { bg: "bg-orange-500/15", text: "text-orange-300", glow: "group-hover:shadow-orange-500/20" },
  IA:         { bg: "bg-emerald-500/15",text: "text-emerald-300",glow: "group-hover:shadow-emerald-500/20" },
  Plateformes:{ bg: "bg-violet-500/15", text: "text-violet-300", glow: "group-hover:shadow-violet-500/20" },
};

export default function Capabilities() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="capabilities" className="px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.capTitle}</h2>
          <p className="mt-3 max-w-2xl text-gray-400">{t.capSubtitle}</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {t.capItems.map((it, idx) => {
            const style = iconStyles[it.tag] ?? iconStyles["Web"];
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-xl ${style.glow}`}
              >
                {/* Card glow on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-white/[0.03] to-transparent" />

                <div className="relative">
                  {/* Icon */}
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${style.bg} ${style.text} text-lg font-bold`}>
                    {it.icon}
                  </div>

                  {/* Tag */}
                  <div className="absolute top-0 right-0">
                    <span className={`rounded-full border border-current/20 px-2.5 py-0.5 text-[10px] font-medium ${style.text} bg-current/10`}>
                      {it.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold">{it.title}</h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{it.desc}</p>

                  <p className="mt-4 font-mono text-[11px] text-gray-600">{it.tech}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

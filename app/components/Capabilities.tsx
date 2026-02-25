"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";

export default function Capabilities() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="capabilities" className="px-8 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.capTitle}
          </h2>
          <p className="mt-3 max-w-2xl text-gray-300">{t.capSubtitle}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.capItems.map((it: any, idx: number) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition hover:border-white/20 hover:bg-white/7"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-sm text-gray-100">
                  {it.icon}
                </div>
                <h3 className="text-lg font-semibold">{it.title}</h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-300">
                {it.desc}
              </p>

              <div className="mt-5 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
                {it.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
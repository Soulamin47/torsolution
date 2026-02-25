"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";

export default function Process() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="process" className="px-8 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.procTitle}
          </h2>
          <p className="mt-3 text-gray-300">{t.procSubtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {t.procSteps.map((s: any, idx: number) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/7"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-blue-200">{s.n}</span>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-sm">
                  {s.icon}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
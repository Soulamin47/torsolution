"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";

export default function TrustBar() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="px-6 pb-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4"
        >
          {t.trustStats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-1 bg-[#07070A] px-6 py-5 text-center"
            >
              <span className="text-2xl font-semibold tracking-tight text-blue-300">
                {stat.value}
              </span>
              <span className="text-xs text-gray-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

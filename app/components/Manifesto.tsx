"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { EASE } from "@/lib/animations";

// Single opinionated phrase between Process and AboutMe.
// Designed as a visual / emotional pause — full bleed, no CTA, no decoration.

const COPY = {
  en: {
    eyebrow: "WHAT I BELIEVE",
    line1: "I build for the second year of use,",
    line2: "not the first week.",
    aside: "The first sprint is easy. The fifth year is the hard part.",
  },
  fr: {
    eyebrow: "CE EN QUOI JE CROIS",
    line1: "Je construis des produits faits pour durer,",
    line2: "pas pour briller une semaine.",
    aside: "Livrer vite est facile. Tenir dans le temps, beaucoup moins.",
  },
};

export default function Manifesto() {
  const { lang } = useLang();
  const copy = COPY[lang];

  return (
    <section
      aria-label={copy.eyebrow}
      className="relative z-10 overflow-hidden border-y border-white/[0.06]"
      style={{
        background:
          "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(175,169,236,0.06) 0%, transparent 70%)",
      }}
    >
      {/* Vertical accent line on the left */}
      <div className="mx-auto max-w-5xl px-6 sm:px-10 py-28 md:py-36">
        <div className="grid gap-12 md:grid-cols-[auto_1fr] md:items-start md:gap-16">
          {/* Eyebrow column */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex items-center gap-3 md:flex-col md:items-start md:gap-4 md:pt-3"
          >
            <span className="h-px w-7 bg-[#AFA9EC] md:w-px md:h-12" />
            <span
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#AFA9EC]"
              style={{
                writingMode: "horizontal-tb",
              }}
            >
              {copy.eyebrow}
            </span>
          </motion.div>

          {/* The phrase */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-[clamp(28px,4.2vw,52px)] font-light leading-[1.15] tracking-tight text-[#F0EEE8]"
            >
              <span className="block">{copy.line1}</span>
              <span className="block italic text-[#F0EEE8]/55">{copy.line2}</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              className="mt-10 max-w-md text-[13px] leading-relaxed text-[#F0EEE8]/35 font-mono"
            >
              — {copy.aside}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

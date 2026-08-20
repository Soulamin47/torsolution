"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";

const COPY = {
  fr: {
    eyebrow: "De l'idée au lancement",
    title: "Un parcours clair. Un produit qui prend vie.",
    subtitle: "Quatre étapes, un seul interlocuteur et aucune zone grise entre la stratégie et la mise en ligne.",
    steps: [
      { n: "01", tag: "Vision", title: "Clarifier", text: "On transforme l'intuition en objectif concret, avec les bons utilisateurs et la bonne priorité." },
      { n: "02", tag: "Expérience", title: "Donner envie", text: "Une direction visuelle forte et des parcours évidents qui inspirent confiance dès le premier regard." },
      { n: "03", tag: "Produit", title: "Construire", text: "Web, mobile ou IA : une base rapide, propre et pensée pour évoluer sans tout recommencer." },
      { n: "04", tag: "Lancement", title: "Faire grandir", text: "Mise en ligne, mesure et accompagnement pour transformer le lancement en véritable départ." },
    ],
  },
  en: {
    eyebrow: "From idea to launch",
    title: "A clear journey. A product coming alive.",
    subtitle: "Four steps, one point of contact and no grey area between strategy and launch.",
    steps: [
      { n: "01", tag: "Vision", title: "Clarify", text: "We turn intuition into a concrete goal, with the right users and the right priority." },
      { n: "02", tag: "Experience", title: "Create desire", text: "A strong visual direction and obvious journeys that build trust from the first look." },
      { n: "03", tag: "Product", title: "Build", text: "Web, mobile or AI: a fast, clean foundation designed to evolve without starting over." },
      { n: "04", tag: "Launch", title: "Grow", text: "Deployment, measurement and support to turn the launch into a genuine beginning." },
    ],
  },
};

export default function ScrollStory() {
  const { lang } = useLang();
  const copy = COPY[lang];

  return (
    <section className="relative px-6 py-20 sm:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-8 border-b border-white/[0.07] pb-10 md:grid-cols-[1fr_0.7fr]">
          <div>
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#a7f3d0]">
              <span className="h-px w-8 bg-[#a7f3d0]" />{copy.eyebrow}
            </div>
            <h2 className="max-w-3xl text-[clamp(34px,4.6vw,62px)] font-light leading-[1.02] tracking-[-0.045em] text-[#f7f5ef]">{copy.title}</h2>
          </div>
          <p className="max-w-md text-[14px] leading-7 text-white/42 md:justify-self-end">{copy.subtitle}</p>
        </div>

        <div className="relative mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-8 hidden h-px bg-gradient-to-r from-[#a7f3d0]/0 via-[#a7f3d0]/35 to-[#c4b5fd]/0 lg:block" />
          {copy.steps.map((step, index) => (
            <motion.article
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6, rotateX: 2, rotateY: index % 2 ? -2 : 2 }}
              className="group relative min-h-[270px] overflow-hidden rounded-[20px] border border-white/[0.08] bg-[#0d0c13]/78 p-6 shadow-[0_25px_80px_rgba(0,0,0,.15)] backdrop-blur-xl [transform-style:preserve-3d]"
            >
              <div className="absolute -right-5 -top-8 font-mono text-[92px] font-bold leading-none text-white/[0.025]">{step.n}</div>
              <div className="relative flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#a7f3d0]/25 bg-[#a7f3d0]/[0.06] font-mono text-[10px] text-[#a7f3d0] shadow-[0_0_28px_rgba(167,243,208,.08)]">{step.n}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/28">{step.tag}</span>
              </div>
              <h3 className="relative mt-14 text-[25px] font-light tracking-[-0.03em] text-[#f7f5ef]">{step.title}</h3>
              <p className="relative mt-4 text-[13px] leading-6 text-white/40">{step.text}</p>
              <div className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#a7f3d0] to-[#c4b5fd] transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

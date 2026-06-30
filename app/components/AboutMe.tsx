"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { EASE, fadeUp, stagger } from "@/lib/animations";

// ─── Voice — keep this raw and personal ───────────────────────────────────────
// This is the place on the site where the "I" actually becomes a face. Do not
// soften it into LinkedIn-speak. If you want to change a sentence, change it
// in your own voice.

const COPY = {
  en: {
    eyebrow: "BEHIND THE SCENES",
    hi: "Hi, I'm Amin.",
    paragraphs: [
      "I've been curious about how computers work since I was a kid — the kind of kid who took the family PC apart on a Sunday and put it back together (mostly) by Sunday night. That curiosity never really went away. It just turned into a job.",
      "Over the years I've ended up touching almost every layer of the stack — from clinical IT inside hospitals to startup MVPs to AI tooling. The projects I love most are the ones where what I ship replaces a spreadsheet someone, somewhere, hates.",
      "What I care about: code that's still readable in two years, products that actually go to production, and telling clients honestly when they don't need the thing they think they need.",
    ],
    cares: [
      "Ship over polish.",
      "Honest scope, honest invoices.",
      "Tech is a tool, not the goal.",
    ],
    signature: "— Amin, Brussels",
    photoAlt: "Amin Torkhani, freelance developer based in Brussels",
  },
  fr: {
    eyebrow: "DANS LES COULISSES",
    hi: "Bonjour, moi c'est Amin.",
    paragraphs: [
      "L'informatique me passionne depuis l'enfance. Très jeune, je passais mes dimanches à démonter l'ordinateur familial pour comprendre comment il fonctionnait, avant de le remonter — pas toujours du premier coup. Cette curiosité ne m'a jamais quitté ; elle est simplement devenue mon métier.",
      "En une dizaine d'années, j'ai travaillé sur presque toutes les couches d'une application — des systèmes informatiques hospitaliers aux MVP de startups, jusqu'aux outils d'intelligence artificielle. Les projets qui me tiennent le plus à cœur sont ceux où je remplace un processus manuel — souvent un tableur devenu ingérable — par un outil que les équipes utilisent vraiment au quotidien.",
      "Ce qui compte pour moi : un code encore lisible dans deux ans, des produits qui atteignent réellement la production, et la franchise de dire à un client quand il n'a pas besoin de ce qu'il pense vouloir.",
    ],
    cares: [
      "Livrer d'abord, peaufiner ensuite.",
      "Un périmètre clair, des factures sans surprise.",
      "La technique est un moyen, pas une fin.",
    ],
    signature: "— Amin, Bruxelles",
    photoAlt: "Amin Torkhani, développeur freelance basé à Bruxelles",
  },
};

export default function AboutMe() {
  const { lang } = useLang();
  const copy = COPY[lang];

  return (
    <section
      id="about"
      className="relative z-10 px-6 sm:px-10 py-24 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-14 md:grid-cols-[280px_1fr] md:items-start lg:gap-20"
        >
          {/* Photo column — slight tilt to break the geometric rigidity */}
          <motion.div variants={fadeUp} className="relative mx-auto md:mx-0">
            <div
              className="relative overflow-hidden rounded-[6px] shadow-2xl shadow-black/40"
              style={{
                width: 240,
                aspectRatio: "4 / 5",
                transform: "rotate(-1.6deg)",
                border: "0.5px solid rgba(255,255,255,0.08)",
              }}
            >
              <Image
                src="/amin.png"
                alt={copy.photoAlt}
                width={560}
                height={700}
                priority
                className="h-full w-full object-cover"
              />
              {/* Soft brand tint over the photo */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(175,169,236,0.05) 0%, transparent 40%, rgba(9,8,15,0.35) 100%)",
                }}
              />
            </div>

            {/* Sticker / handwritten-feel marker */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-4 hidden rotate-[8deg] md:block"
            >
              <div
                className="rounded-[4px] border border-[#AFA9EC]/40 bg-[#0C0B12]/95 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#AFA9EC] shadow-xl shadow-black/30"
                style={{ textShadow: "0 0 12px rgba(175,169,236,0.4)" }}
              >
                ● {lang === "fr" ? "Bruxelles" : "Brussels"} · BE
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <div>
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-[#AFA9EC]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#AFA9EC]">
                {copy.eyebrow}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-[clamp(32px,4.6vw,52px)] font-light italic leading-[1.05] tracking-tight text-[#F0EEE8]"
            >
              {copy.hi}
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-6 space-y-5">
              {copy.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="max-w-2xl text-[15px] leading-[1.8] text-[#F0EEE8]/65"
                >
                  {p}
                </p>
              ))}
            </motion.div>

            {/* "What I care about" — short pill list */}
            <motion.ul
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-2"
              aria-label={copy.eyebrow}
            >
              {copy.cares.map((line, i) => (
                <motion.li
                  key={line}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                  className="rounded-[4px] border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-mono text-[11px] text-[#F0EEE8]/55"
                >
                  {line}
                </motion.li>
              ))}
            </motion.ul>

            {/* Signature */}
            <motion.div
              variants={fadeUp}
              className="mt-8 inline-block font-mono text-[12px] italic text-[#F0EEE8]/45"
            >
              {copy.signature}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

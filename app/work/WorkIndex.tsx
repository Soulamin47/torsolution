"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { EASE, fadeUp, stagger } from "@/lib/animations";
import type { WorkEntry } from "@/lib/work";
import BackLink from "@/app/components/BackLink";
import TiltCard from "@/app/components/TiltCard";
import { localizedHref } from "@/lib/locale";

export default function WorkIndex({ work }: { work: WorkEntry[] }) {
  const { lang } = useLang();

  const labels = {
    eyebrow: lang === "fr" ? "Projets" : "Work",
    title:
      lang === "fr"
        ? "Quelques produits livrés."
        : "Selected products shipped.",
    subtitle:
      lang === "fr"
        ? "Quatre projets en production — chacun avec son contexte, son vrai problème, et ce qui a été livré."
        : "Four production-grade projects — each with its context, problem and what was shipped.",
    read: lang === "fr" ? "Lire l'étude de cas →" : "Read the case →",
  };

  return (
    <section className="relative z-10 overflow-hidden px-6 pb-24 pt-20 sm:px-10">
      <div className="pointer-events-none absolute -left-28 top-10 h-96 w-96 rounded-full bg-[#ff7a59]/15 blur-[90px]" />
      <div className="relative mx-auto max-w-6xl">
        <BackLink href={localizedHref("/", lang)} />

        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="mt-10 mb-12"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="h-px w-7 bg-[#AFA9EC]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#AFA9EC]">
              {labels.eyebrow}
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-[clamp(42px,6vw,76px)] font-medium leading-[.96] tracking-[-.055em] text-[#15141a]"
          >
            {labels.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-2xl text-[14px] leading-relaxed text-[#F0EEE8]/55"
          >
            {labels.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {work.map((project, idx) => {
            const copy = project[lang];
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: EASE }}
                className="h-full"
              >
                <TiltCard
                  accent={project.accent}
                  className="h-full rounded-[24px]"
                >
                <Link
                  href={localizedHref(`/work/${project.slug}`, lang)}
                  className="group relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-[24px] border border-black/[0.08] bg-white/60 p-7 shadow-[0_22px_70px_rgba(30,25,20,.07)] transition hover:-translate-y-1 hover:border-black/[0.16] hover:bg-white/85"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.14em]"
                      style={{ color: project.accent }}
                    >
                      {copy.tag}
                    </span>
                    {project.status === "live" && (
                      <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#1D9E75]">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1D9E75] opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1D9E75]" />
                        </span>
                        Live
                      </span>
                    )}
                  </div>

                  <h2 className="mt-8 text-[32px] font-medium tracking-[-.04em] text-[#15141a]">
                    {copy.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[13px] leading-6 text-black/48">
                    {copy.tagline}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {copy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[3px] px-2 py-0.5 font-mono text-[10px]"
                        style={{
                          background: `${project.accent}22`,
                          color: project.accent,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span
                    className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] transition-transform group-hover:translate-x-1"
                    style={{ color: project.accent }}
                  >
                    {labels.read}
                  </span>
                </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

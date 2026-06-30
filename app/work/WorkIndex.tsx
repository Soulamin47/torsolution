"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { EASE, fadeUp, stagger } from "@/lib/animations";
import type { WorkEntry } from "@/lib/work";
import BackLink from "@/app/components/BackLink";

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
    <section className="relative z-10 px-6 sm:px-10 pt-20 pb-20">
      <div className="mx-auto max-w-5xl">
        <BackLink href="/" />

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
            className="text-[clamp(28px,4vw,46px)] font-light leading-[1.1] tracking-tight text-[#F0EEE8]"
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
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.18]"
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

                  <h2 className="text-[24px] font-medium text-[#F0EEE8]">
                    {copy.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[#F0EEE8]/50">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

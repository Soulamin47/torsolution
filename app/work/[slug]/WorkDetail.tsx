"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/app/providers/LangProvider";
import { siteConfig } from "@/lib/site";
import { EASE, fadeUp, stagger } from "@/lib/animations";
import type { WorkEntry } from "@/lib/work";
import BackLink from "@/app/components/BackLink";
import MagneticButton from "@/app/components/MagneticButton";

export default function WorkDetail({ project }: { project: WorkEntry }) {
  const { lang } = useLang();
  const copy = project[lang];
  const accent = project.accent;

  const labels = {
    context: lang === "fr" ? "Le contexte" : "Context",
    problem: lang === "fr" ? "Le vrai problème" : "The problem",
    approach: lang === "fr" ? "L'approche" : "Approach",
    outcome: lang === "fr" ? "Le résultat" : "Outcome",
    role: lang === "fr" ? "Rôle" : "Role",
    timeline: lang === "fr" ? "Durée" : "Timeline",
    stack: lang === "fr" ? "Stack" : "Stack",
    similar: lang === "fr" ? "Parler d'un projet similaire" : "Discuss a similar project",
    seeOthers: lang === "fr" ? "Voir les autres projets" : "See other work",
    backHome: lang === "fr" ? "Retour à l'accueil" : "Back to home",
    live: lang === "fr" ? "En production" : "Live",
  };

  const whatsappText = encodeURIComponent(
    lang === "fr"
      ? `Bonjour, j'aimerais parler d'un projet du même genre que ${copy.title}.`
      : `Hi, I want to discuss a project similar to ${copy.title}.`,
  );

  return (
    <>
      {/* Hero */}
      <section className="relative px-6 sm:px-10 pt-20 pb-14">
        <div className="mx-auto max-w-4xl">
          <BackLink href="/" />

          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="mt-10"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <span className="h-px w-7" style={{ background: accent }} />
              <span
                className="font-mono text-[11px] uppercase tracking-[0.16em]"
                style={{ color: accent }}
              >
                {copy.tag}
              </span>
              {project.status === "live" && (
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#1D9E75]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1D9E75] opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1D9E75]" />
                  </span>
                  {labels.live}
                </span>
              )}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[clamp(38px,5.5vw,62px)] font-light leading-[1.05] tracking-tight text-[#F0EEE8]"
            >
              {copy.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-[17px] leading-relaxed text-[#F0EEE8]/55"
            >
              {copy.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-px overflow-hidden rounded-[6px] bg-white/[0.06] sm:grid-cols-3"
            >
              <div className="bg-[#09080F] p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#F0EEE8]/25">
                  {labels.role}
                </div>
                <div className="mt-2 text-[13px] text-[#F0EEE8]/70">{copy.role}</div>
              </div>
              <div className="bg-[#09080F] p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#F0EEE8]/25">
                  {labels.timeline}
                </div>
                <div className="mt-2 text-[13px] text-[#F0EEE8]/70">{copy.timeline}</div>
              </div>
              <div className="bg-[#09080F] p-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#F0EEE8]/25">
                  {labels.stack}
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {copy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[2px] px-2 py-0.5 font-mono text-[10px]"
                      style={{
                        background: `${accent}22`,
                        color: accent,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Section accent={accent} eyebrow={labels.context}>
        <p className="text-[15px] leading-[1.75] text-[#F0EEE8]/65 max-w-3xl">
          {copy.intro}
        </p>
        <p className="mt-5 text-[14px] leading-[1.75] text-[#F0EEE8]/50 max-w-3xl">
          {copy.context}
        </p>
      </Section>

      <Section accent={accent} eyebrow={labels.problem}>
        <p className="text-[15px] leading-[1.75] text-[#F0EEE8]/65 max-w-3xl">
          {copy.problem}
        </p>
      </Section>

      <Section accent={accent} eyebrow={labels.approach}>
        <div className="grid gap-px overflow-hidden rounded-[8px] bg-white/[0.06] sm:grid-cols-2">
          {copy.approach.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: EASE }}
              className="bg-[#09080F] p-6"
            >
              <h3 className="text-[15px] font-medium text-[#F0EEE8] mb-2">
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-[#F0EEE8]/45">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section accent={accent} eyebrow={labels.outcome}>
        <ul className="space-y-3">
          {copy.outcome.map((line, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: idx * 0.08, ease: EASE }}
              className="flex items-start gap-3 rounded-[6px] border border-white/[0.08] bg-white/[0.02] px-5 py-4"
            >
              <span
                aria-hidden="true"
                className="mt-1 inline-flex h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
              />
              <span className="text-[14px] leading-relaxed text-[#F0EEE8]/70">{line}</span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-2">
          {copy.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-[4px] border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-[#F0EEE8]/55"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      {/* Footer CTA */}
      <section className="relative z-10 px-6 sm:px-10 py-20">
        <div className="mx-auto max-w-3xl rounded-[8px] border border-white/[0.08] bg-[#0C0B12]/70 p-8 text-center shadow-2xl shadow-black/30 backdrop-blur">
          <h2 className="text-[24px] font-light text-[#F0EEE8]">
            {lang === "fr"
              ? "Un projet du même genre en tête ?"
              : "Something similar in mind?"}
          </h2>
          <p className="mt-3 text-[13px] text-[#F0EEE8]/45">
            {lang === "fr"
              ? "Dites-moi où vous en êtes — je reviens vers vous sous 24h."
              : "Tell me where you stand — I get back within 24h."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <MagneticButton>
              <a
                href={`${siteConfig.whatsapp}?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-[4px] bg-[#5DCAA5] px-6 py-3 text-[13px] font-medium text-[#06100D] transition hover:bg-[#76ddb9]"
              >
                {labels.similar}
              </a>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-[4px] border border-white/[0.15] px-6 py-3 text-[13px] font-medium text-[#F0EEE8]/65 transition-colors hover:bg-white/[0.04] hover:text-[#F0EEE8]"
              >
                {labels.seeOthers}
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({
  eyebrow,
  accent,
  children,
}: {
  eyebrow: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative z-10 px-6 sm:px-10 py-14 border-t border-white/[0.04]">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-7" style={{ background: accent }} />
          <span
            className="font-mono text-[10px] uppercase tracking-[0.16em]"
            style={{ color: accent }}
          >
            {eyebrow}
          </span>
        </div>
        {children}
      </div>
    </section>
  );
}

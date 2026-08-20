"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/app/providers/LangProvider";
import { siteConfig } from "@/lib/site";
import { EASE, fadeUp, stagger } from "@/lib/animations";
import type { ServiceEntry } from "@/lib/services";
import BackLink from "@/app/components/BackLink";
import MagneticButton from "@/app/components/MagneticButton";
import { localizedHref } from "@/lib/locale";

export default function ServiceDetail({ service }: { service: ServiceEntry }) {
  const { lang } = useLang();
  const copy = service[lang];
  const accent = service.accent;

  const ctaLabels = {
    contact: lang === "fr" ? "Lancer un projet" : "Start a project",
    whatsapp: lang === "fr" ? "En parler sur WhatsApp" : "Chat on WhatsApp",
    other: lang === "fr" ? "Voir les autres services" : "See other services",
    overview: lang === "fr" ? "En quelques mots" : "Overview",
    whatYouGet: lang === "fr" ? "Ce que vous recevez" : "What you get",
    process: lang === "fr" ? "Comment je travaille" : "How I work",
    stack: lang === "fr" ? "Stack technique" : "Tech stack",
    timeline: lang === "fr" ? "Durée" : "Timeline",
    pricing: lang === "fr" ? "Tarifs" : "Pricing",
    faq: lang === "fr" ? "Questions fréquentes" : "Frequently asked",
  };

  const whatsappText = encodeURIComponent(
    lang === "fr"
      ? `Bonjour, je suis intéressé par le service « ${copy.title} ». On peut en parler ?`
      : `Hi, I'm interested in the "${copy.title}" service. Can we talk?`,
  );

  return (
    <>
      {/* Hero */}
      <section className="relative px-6 sm:px-10 pt-20 pb-16">
        <div className="mx-auto max-w-4xl">
          <BackLink href={localizedHref("/", lang)} />

          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="mt-10"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="h-px w-7" style={{ background: accent }} />
              <span
                className="font-mono text-[11px] uppercase tracking-[0.16em]"
                style={{ color: accent }}
              >
                {copy.tag}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-[clamp(42px,6vw,74px)] font-medium leading-[.96] tracking-[-.055em] text-[#15141a]"
            >
              {copy.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-[16px] leading-relaxed text-[#F0EEE8]/55"
            >
              {copy.tagline}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <MagneticButton>
                <Link
                  href={`${localizedHref("/", lang)}#contact`}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[13px] font-medium text-[#09080F] transition-opacity hover:opacity-90"
                  style={{ background: accent }}
                >
                  {ctaLabels.contact}
                </Link>
              </MagneticButton>
              <MagneticButton>
                <a
                  href={`${siteConfig.whatsapp}?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#1D9E75]/40 bg-[#1D9E75]/10 px-6 py-3.5 text-[13px] font-medium text-[#167a5d] transition-colors hover:bg-[#1D9E75]/15"
                >
                  {ctaLabels.whatsapp}
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <Section accent={accent} eyebrow={ctaLabels.overview}>
        <p className="text-[15px] leading-[1.75] text-[#F0EEE8]/65 max-w-3xl">
          {copy.intro}
        </p>
      </Section>

      {/* What you get */}
      <Section accent={accent} eyebrow={ctaLabels.whatYouGet}>
        <div className="grid gap-px overflow-hidden rounded-[20px] bg-white/[0.06] sm:grid-cols-2">
          {copy.whatYouGet.map((item, idx) => (
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

      {/* Process */}
      <Section accent={accent} eyebrow={ctaLabels.process}>
        <ol className="space-y-4">
          {copy.process.map((step, idx) => (
            <motion.li
              key={step.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: EASE }}
              className="rounded-[18px] border border-white/[0.08] bg-white/[0.02] p-5 sm:flex sm:items-start sm:gap-5"
            >
              <span
                className="block font-mono text-[10px] uppercase tracking-[0.14em] shrink-0 sm:min-w-[180px]"
                style={{ color: accent }}
              >
                {step.label}
              </span>
              <span className="mt-2 block text-[13px] leading-relaxed text-[#F0EEE8]/60 sm:mt-0">
                {step.desc}
              </span>
            </motion.li>
          ))}
        </ol>
      </Section>

      {/* Stack + timeline + pricing */}
      <Section accent={accent} eyebrow={ctaLabels.stack}>
        <div className="flex flex-wrap gap-2">
          {copy.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-[4px] border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-[#F0EEE8]/55"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-[20px] bg-white/[0.06] sm:grid-cols-2">
          <div className="bg-[#09080F] p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#F0EEE8]/25">
              {ctaLabels.timeline}
            </div>
            <div className="mt-2 text-[15px] text-[#F0EEE8]/80">{copy.timeline}</div>
          </div>
          <div className="bg-[#09080F] p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#F0EEE8]/25">
              {ctaLabels.pricing}
            </div>
            <div className="mt-2 text-[15px] text-[#F0EEE8]/80">{copy.pricing}</div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section accent={accent} eyebrow={ctaLabels.faq}>
        <dl className="space-y-3">
          {copy.faq.map((entry) => (
            <details
              key={entry.q}
              className="group rounded-[18px] border border-white/[0.08] bg-white/[0.02] p-5 transition-colors hover:border-white/[0.15]"
            >
              <summary className="cursor-pointer list-none">
                <span className="flex items-start justify-between gap-4">
                  <span className="text-[14px] font-medium text-[#F0EEE8]">{entry.q}</span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-[14px] text-[#F0EEE8]/35 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-[13px] leading-relaxed text-[#F0EEE8]/55">
                {entry.a}
              </p>
            </details>
          ))}
        </dl>
      </Section>

      {/* Footer CTA */}
      <section className="relative z-10 px-6 sm:px-10 py-20">
        <div className="mx-auto max-w-3xl rounded-[24px] border border-white/[0.08] bg-[#0C0B12]/70 p-8 text-center shadow-2xl shadow-black/10 backdrop-blur">
          <h2 className="text-[24px] font-light text-[#F0EEE8]">
            {lang === "fr"
              ? "On se lance ?"
              : "Ready to start?"}
          </h2>
          <p className="mt-3 text-[13px] text-[#F0EEE8]/45">
            {lang === "fr"
              ? "Décrivez-moi votre projet en quelques lignes — je reviens vers vous sous 24h."
              : "Tell me about your project in a few lines — I get back within 24h."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <MagneticButton>
              <Link
                href={`${localizedHref("/", lang)}#contact`}
                className="inline-flex items-center justify-center rounded-full bg-[#7c5cff] px-6 py-3.5 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
              >
                {ctaLabels.contact}
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href={localizedHref("/services", lang)}
                className="inline-flex items-center justify-center rounded-full border border-black/[0.15] px-6 py-3.5 text-[13px] font-medium text-black/65 transition-colors hover:bg-white/60 hover:text-black"
              >
                {ctaLabels.other}
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

"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { siteConfig } from "@/lib/site";
import { EASE } from "@/lib/animations";
import MagneticButton from "./MagneticButton";
import NeonFrame from "./NeonFrame";

type OptionKey = "mvp" | "automation" | "mobile" | "platform";

const COPY = {
  en: {
    eyebrow: "Interactive project scan",
    title: "What are we building first?",
    subtitle:
      "Pick a direction and the page sketches a first delivery plan. It is quick, concrete, and built to move a real conversation forward.",
    cta: "Send this plan on WhatsApp",
    email: "Prefer email",
    timeline: "Estimated first version",
    deliverable: "First deliverable",
    stack: "Likely stack",
    momentum: "Launch momentum",
    options: {
      mvp: {
        label: "Startup MVP",
        title: "Launchable MVP",
        time: "3-6 weeks",
        deliverable: "Clickable product, core flow, deploy pipeline",
        stack: ["Next.js", "Auth", "Database", "Payments"],
        score: 86,
        message:
          "Hi, I want to discuss a startup MVP with Torsolution. Can we plan a first version?",
      },
      automation: {
        label: "AI automation",
        title: "AI workflow",
        time: "1-3 weeks",
        deliverable: "Automated process, admin view, handover docs",
        stack: ["OpenAI", "API", "n8n", "Dashboard"],
        score: 92,
        message:
          "Hi, I want to discuss an AI automation project with Torsolution.",
      },
      mobile: {
        label: "Mobile app",
        title: "Mobile product",
        time: "4-8 weeks",
        deliverable: "iOS/Android app, polished UI, production build",
        stack: ["Flutter", "Firebase", "API", "Analytics"],
        score: 78,
        message:
          "Hi, I want to discuss a mobile app project with Torsolution.",
      },
      platform: {
        label: "Business platform",
        title: "Internal platform",
        time: "3-7 weeks",
        deliverable: "Dashboard, roles, workflows, reporting",
        stack: ["Next.js", "PostgreSQL", "Prisma", "Vercel"],
        score: 88,
        message:
          "Hi, I want to discuss a business platform with Torsolution.",
      },
    },
  },
  fr: {
    eyebrow: "Diagnostic projet interactif",
    title: "On construit quoi en premier ?",
    subtitle:
      "Choisissez une direction, le site vous esquisse un premier plan de livraison. Rapide, concret, et pensé pour lancer une vraie discussion.",
    cta: "Envoyer ce plan sur WhatsApp",
    email: "Plutôt par email",
    timeline: "Première version estimée",
    deliverable: "Premier livrable",
    stack: "Stack probable",
    momentum: "Élan de lancement",
    options: {
      mvp: {
        label: "MVP startup",
        title: "Un MVP prêt à lancer",
        time: "3 à 6 semaines",
        deliverable: "Produit utilisable, parcours principal, mise en ligne",
        stack: ["Next.js", "Auth", "Base de données", "Paiements"],
        score: 86,
        message:
          "Bonjour, je voudrais discuter d'un MVP startup avec Torsolution. On peut planifier une première version ?",
      },
      automation: {
        label: "Automatisation IA",
        title: "Un workflow IA",
        time: "1 à 3 semaines",
        deliverable: "Process automatisé, vue admin, documentation pour l'équipe",
        stack: ["OpenAI", "API", "n8n", "Dashboard"],
        score: 92,
        message:
          "Bonjour, je voudrais discuter d'un projet d'automatisation IA avec Torsolution.",
      },
      mobile: {
        label: "App mobile",
        title: "Un produit mobile",
        time: "4 à 8 semaines",
        deliverable: "App iOS/Android, UI soignée, build de production",
        stack: ["Flutter", "Firebase", "API", "Analytics"],
        score: 78,
        message:
          "Bonjour, je voudrais discuter d'un projet d'application mobile avec Torsolution.",
      },
      platform: {
        label: "Plateforme métier",
        title: "Une plateforme interne",
        time: "3 à 7 semaines",
        deliverable: "Dashboard, rôles, workflows, reporting",
        stack: ["Next.js", "PostgreSQL", "Prisma", "Vercel"],
        score: 88,
        message:
          "Bonjour, je voudrais discuter d'une plateforme métier avec Torsolution.",
      },
    },
  },
};

const OPTION_KEYS: OptionKey[] = ["mvp", "automation", "mobile", "platform"];

export default function ProjectLauncher() {
  const { lang } = useLang();
  const copy = COPY[lang];
  const [active, setActive] = useState<OptionKey>("automation");
  const option = copy.options[active];

  const whatsappHref = useMemo(
    () => `${siteConfig.whatsapp}?text=${encodeURIComponent(option.message)}`,
    [option.message],
  );

  return (
    <section className="relative z-10 px-6 py-20 sm:px-10 md:py-24">
      <NeonFrame radius={22} className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[20px] bg-[#0C0B12] shadow-2xl shadow-black/30">
        <div className="grid md:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-white/[0.06] p-6 sm:p-8 md:border-b-0 md:border-r">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-[#5DCAA5]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#5DCAA5]">
                {copy.eyebrow}
              </span>
            </div>
            <h2 className="text-[clamp(24px,3vw,38px)] font-light leading-tight text-[#F0EEE8]">
              {copy.title}
            </h2>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-[#F0EEE8]/45">
              {copy.subtitle}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-2">
              {OPTION_KEYS.map((key) => {
                const selected = key === active;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActive(key)}
                    className={`relative min-h-16 rounded-[12px] border px-4 py-3 text-left transition ${
                      selected
                        ? "border-[#AFA9EC]/60 bg-[#AFA9EC]/12 text-[#F0EEE8]"
                        : "border-white/[0.08] bg-white/[0.02] text-[#F0EEE8]/45 hover:border-white/[0.18] hover:text-[#F0EEE8]/75"
                    }`}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em]">
                      {copy.options[key].label}
                    </span>
                    {selected && (
                      <motion.span
                        layoutId="launcher-dot"
                        className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-[#AFA9EC]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative min-h-[420px] p-6 sm:p-8"
          >
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-56 w-56 rounded-full blur-3xl"
              style={{ background: "rgba(175,169,236,0.12)" }}
            />
            <div className="relative">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#F0EEE8]/25">
                    Torsolution plan
                  </div>
                  <h3 className="mt-3 text-[28px] font-medium text-[#F0EEE8]">
                    {option.title}
                  </h3>
                </div>
                <div className="rounded-[12px] border border-[#5DCAA5]/30 bg-[#5DCAA5]/10 px-3 py-2 text-right">
                  <div className="font-mono text-[9px] uppercase text-[#5DCAA5]/70">
                    {copy.momentum}
                  </div>
                  <div className="mt-1 text-xl font-medium text-[#5DCAA5]">
                    {option.score}%
                  </div>
                </div>
              </div>

              <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  className="h-full rounded-full bg-[#5DCAA5]"
                  initial={{ width: 0 }}
                  animate={{ width: `${option.score}%` }}
                  transition={{ duration: 0.7, ease: EASE }}
                />
              </div>

              <dl className="mt-8 grid gap-px overflow-hidden rounded-[14px] border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2">
                <div className="bg-[#09080F] p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#F0EEE8]/25">
                    {copy.timeline}
                  </dt>
                  <dd className="mt-2 text-[18px] text-[#F0EEE8]">{option.time}</dd>
                </div>
                <div className="bg-[#09080F] p-5">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#F0EEE8]/25">
                    {copy.deliverable}
                  </dt>
                  <dd className="mt-2 text-[13px] leading-relaxed text-[#F0EEE8]/60">
                    {option.deliverable}
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#F0EEE8]/25">
                  {copy.stack}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {option.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] text-[#F0EEE8]/55"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <MagneticButton>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#5DCAA5] px-5 py-3 text-[13px] font-medium text-[#06100D] transition hover:bg-[#76ddb9]"
                  >
                    {copy.cta}
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center justify-center rounded-full border border-white/[0.12] px-5 py-3 text-[13px] font-medium text-[#F0EEE8]/65 transition hover:bg-white/[0.04] hover:text-[#F0EEE8]"
                  >
                    {copy.email}
                  </a>
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </NeonFrame>
    </section>
  );
}

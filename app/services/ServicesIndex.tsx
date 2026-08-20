"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { EASE, fadeUp, stagger } from "@/lib/animations";
import type { ServiceEntry } from "@/lib/services";
import BackLink from "@/app/components/BackLink";
import TiltCard from "@/app/components/TiltCard";
import { localizedHref } from "@/lib/locale";

export default function ServicesIndex({ services }: { services: ServiceEntry[] }) {
  const { lang } = useLang();

  const labels = {
    eyebrow: lang === "fr" ? "Services" : "Services",
    title:
      lang === "fr"
        ? "Six terrains, une seule promesse : livrer."
        : "Six tracks, one promise: ship it.",
    subtitle:
      lang === "fr"
        ? "Du web aux applis mobiles, de l'IA aux plateformes métier — choisissez le service qui correspond à votre projet pour en savoir plus."
        : "From web to mobile, AI to internal platforms — pick the track that matches your project to learn more.",
    explore: lang === "fr" ? "Découvrir →" : "Explore →",
  };

  return (
    <section className="relative z-10 overflow-hidden px-6 pb-24 pt-20 sm:px-10">
      <div className="pointer-events-none absolute -right-28 top-0 h-96 w-96 rounded-full bg-[#7c5cff]/15 blur-[90px]" />
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => {
            const copy = service[lang];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: EASE }}
                className="h-full"
              >
                <TiltCard accent={service.accent} className="h-full rounded-[22px]">
                <Link
                  href={localizedHref(`/services/${service.slug}`, lang)}
                  className="group relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-[22px] border border-black/[0.08] bg-white/55 p-7 shadow-[0_20px_60px_rgba(30,25,20,.06)] backdrop-blur transition hover:-translate-y-1 hover:border-black/[0.16] hover:bg-white/80"
                >
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-5 select-none font-mono leading-none"
                    style={{
                      color: service.accent,
                      opacity: 0.08,
                      fontSize: 64,
                    }}
                  >
                    {service.icon}
                  </span>

                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.14em]"
                    style={{ color: service.accent }}
                  >
                    {copy.tag}
                  </span>
                  <h2 className="mt-10 text-[25px] font-medium tracking-[-.03em] text-[#15141a]">
                    {copy.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[13px] leading-6 text-black/48">
                    {copy.tagline}
                  </p>

                  <span
                    className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] transition-transform group-hover:translate-x-1"
                    style={{ color: service.accent }}
                  >
                    {labels.explore}
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

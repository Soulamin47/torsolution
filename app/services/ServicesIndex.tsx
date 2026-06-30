"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { EASE, fadeUp, stagger } from "@/lib/animations";
import type { ServiceEntry } from "@/lib/services";
import BackLink from "@/app/components/BackLink";

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
          {services.map((service, idx) => {
            const copy = service[lang];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: EASE }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[8px] border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-white/[0.18]"
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
                  <h2 className="mt-3 text-[20px] font-medium text-[#F0EEE8]">
                    {copy.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[#F0EEE8]/50">
                    {copy.tagline}
                  </p>

                  <span
                    className="mt-6 inline-flex items-center gap-1.5 font-mono text-[11px] transition-transform group-hover:translate-x-1"
                    style={{ color: service.accent }}
                  >
                    {labels.explore}
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

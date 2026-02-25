"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";

const systems = [
  {
    number: "01",
    title: "Enterprise Analytics Platform",
    desc: "Real-time data processing and visualization dashboard for a B2B SaaS platform. Designed for scale with low-latency responses and robust backend architecture.",
    tags: ["React", "Node.js", "PostgreSQL", "Redis"],
    image: "/system-1.jpg",
  },
  {
    number: "02",
    title: "AI-Powered Assistant System",
    desc: "Conversational platform designed for structured learning and guided interactions, with modular orchestration and scalable deployment patterns.",
    tags: ["LLMs", "Automation", "RAG", "Cloud"],
    image: "/system-2.jpg",
  },
];

export default function Systems() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="systems" className="px-8 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.sysTitle}
          </h2>
          <p className="mt-3 text-gray-300">{t.sysSubtitle}</p>
        </div>

        <div className="mt-14 space-y-14">
          {systems.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="grid gap-10 items-center md:grid-cols-2"
            >
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-3 text-sm text-blue-200">
                  <span className="text-blue-300">{s.number}</span>
                  <span className="h-px w-12 bg-white/10" />
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  {s.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-300">
                  {s.desc}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-blue-200 hover:text-blue-100 transition"
                >
                  {t.exploreSystem} ↗
                </a>
              </div>

              <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-indigo-500/10" />
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-[320px] w-full object-cover opacity-90"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
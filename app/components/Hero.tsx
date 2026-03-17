"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";

const terminalLines = [
  { text: "$ init new-project --client=you", delay: 0, color: "text-gray-400" },
  { text: "✓ Requirements defined", delay: 0.3, color: "text-green-400" },
  { text: "✓ Architecture designed", delay: 0.6, color: "text-green-400" },
  { text: "✓ Features built & tested", delay: 0.9, color: "text-green-400" },
  { text: "✓ Deployed to production", delay: 1.2, color: "text-blue-400" },
];

const stack = ["Next.js", "Flutter", "TypeScript", "OpenAI", "Supabase", "Solidity"];

function TerminalVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="float relative"
    >
      {/* Glow behind terminal */}
      <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-blue-500/10 blur-2xl" />

      {/* Terminal window */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d10] shadow-2xl">
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
          <div className="h-3 w-3 rounded-full bg-red-500/70" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <div className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-3 font-mono text-xs text-gray-500">~/torsolution</span>
        </div>

        {/* Body */}
        <div className="space-y-3 p-6 font-mono text-sm">
          {terminalLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + line.delay }}
              className={line.color}
            >
              {line.text}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="mt-2 flex items-center gap-1 text-gray-400"
          >
            <span className="text-blue-400">{">"}</span>
            <span className="ml-1 text-white">ready for your project</span>
            <span className="animate-pulse text-blue-400">▋</span>
          </motion.div>
        </div>
      </div>

      {/* Tech stack badges */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2.4 }}
        className="mt-4 flex flex-wrap gap-2"
      >
        {stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-gray-400 transition hover:border-blue-400/30 hover:text-blue-300"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* Floating stat cards */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.6 }}
        className="float-delay mt-4 grid grid-cols-3 gap-3 sm:grid-cols-3"
      >
        {[
          { label: "Experience", value: "8+ yrs" },
          { label: "Delivery", value: "< 4 wks" },
          { label: "Response", value: "< 24 h" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center"
          >
            <div className="text-sm font-semibold text-blue-300">{s.value}</div>
            <div className="mt-0.5 text-[10px] text-gray-500">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section className="px-6 pt-10 pb-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-8 py-14 sm:px-12">
          {/* Background gradients */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-indigo-600/8" />
          <div className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-indigo-500/8 blur-3xl" />

          <div className="relative grid gap-14 lg:grid-cols-2 lg:items-center">
            {/* Left — content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs text-gray-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                {t.heroBadge}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                {t.heroTitle}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="mt-5 max-w-xl text-base leading-relaxed text-gray-300"
              >
                {t.heroSubtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  {t.startProject}
                </a>
                <a
                  href="#systems"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {t.viewSystems}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="mt-8 space-y-2"
              >
                {t.heroPoints.map((p) => (
                  <div key={p} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="h-1 w-1 rounded-full bg-blue-400" />
                    {p}
                  </div>
                ))}
              </motion.div>

              {t.availability && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6 text-sm text-gray-400"
                >
                  {t.availability}
                </motion.div>
              )}
            </div>

            {/* Right — terminal visual */}
            <div className="hidden lg:block">
              <TerminalVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

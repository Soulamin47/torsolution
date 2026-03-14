"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";

// ── Mini app previews ──────────────────────────────────────────
function AnalyticsPreview() {
  const bars = [
    { label: "Revenue", pct: 87, color: "bg-blue-400" },
    { label: "Leads", pct: 64, color: "bg-blue-300" },
    { label: "Uptime", pct: 99, color: "bg-cyan-400" },
    { label: "Conversion", pct: 42, color: "bg-indigo-400" },
  ];
  return (
    <div className="space-y-2.5 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-gray-300">Live Dashboard</span>
        <span className="flex items-center gap-1 text-[10px] text-green-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" /> Live
        </span>
      </div>
      {bars.map((b) => (
        <div key={b.label} className="flex items-center gap-2">
          <span className="w-20 shrink-0 text-[10px] text-gray-500">{b.label}</span>
          <div className="flex-1 rounded-full bg-white/10 h-1.5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${b.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`h-1.5 rounded-full ${b.color}`}
            />
          </div>
          <span className="w-8 text-right text-[10px] text-gray-400">{b.pct}%</span>
        </div>
      ))}
    </div>
  );
}

function ChatPreview() {
  const msgs = [
    { from: "user", text: "Summarize this week's KPIs" },
    { from: "ai", text: "Sales +12%, leads at 84, avg response time down 30%." },
    { from: "user", text: "Trigger the weekly report" },
    { from: "ai", text: "Done — sent to 6 recipients ✓" },
  ];
  return (
    <div className="space-y-2 p-4">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-indigo-400" />
        <span className="text-[11px] font-semibold text-gray-300">AI Assistant</span>
      </div>
      {msgs.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: m.from === "user" ? 10 : -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className={`max-w-[80%] rounded-xl px-3 py-1.5 text-[10px] leading-relaxed ${
            m.from === "user"
              ? "ml-auto bg-white/10 text-gray-300"
              : "bg-indigo-500/20 text-indigo-200"
          }`}
        >
          {m.text}
        </motion.div>
      ))}
    </div>
  );
}

function InventoryPreview() {
  const rows = [
    { name: "Product A", sku: "SKU-001", stock: 142, status: "ok" },
    { name: "Product B", sku: "SKU-002", stock: 8,   status: "low" },
    { name: "Product C", sku: "SKU-003", stock: 350, status: "ok" },
    { name: "Product D", sku: "SKU-004", stock: 0,   status: "out" },
  ];
  const badge = { ok: "text-green-400", low: "text-orange-400", out: "text-red-400" };
  const label = { ok: "In stock", low: "⚠ Low", out: "✕ Out" };
  return (
    <div className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-gray-300">Stock Overview</span>
        <span className="text-[10px] text-gray-500">3 warehouses · live</span>
      </div>
      <div className="grid grid-cols-3 px-1 mb-1 text-[10px] text-gray-600">
        <span>Item</span><span className="text-center">Units</span><span className="text-right">Status</span>
      </div>
      {rows.map((r, i) => (
        <motion.div
          key={r.sku}
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="grid grid-cols-3 rounded-lg px-1 py-1 text-[10px] hover:bg-white/5"
        >
          <span className="text-gray-300">{r.name}</span>
          <span className={`text-center font-mono ${badge[r.status as keyof typeof badge]}`}>{r.stock}</span>
          <span className={`text-right ${badge[r.status as keyof typeof badge]}`}>{label[r.status as keyof typeof label]}</span>
        </motion.div>
      ))}
    </div>
  );
}

const previews = [AnalyticsPreview, ChatPreview, InventoryPreview];

const cardAccents = [
  { border: "hover:border-blue-500/30",   glow: "from-blue-500/8",    num: "text-blue-400" },
  { border: "hover:border-indigo-500/30", glow: "from-indigo-500/8",  num: "text-indigo-400" },
  { border: "hover:border-emerald-500/30",glow: "from-emerald-500/8", num: "text-emerald-400" },
];

export default function Systems() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="systems" className="px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.sysTitle}</h2>
          <p className="mt-3 text-gray-400">{t.sysSubtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {t.sysItems.map((s, idx) => {
            const Preview = previews[idx];
            const accent = cardAccents[idx];
            return (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 ${accent.border} hover:bg-white/[0.05]`}
              >
                {/* Glow on hover */}
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${accent.glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                {/* Mini app preview */}
                <div className="relative border-b border-white/10 bg-[#0d0d12]">
                  {/* Window chrome */}
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                    <div className="h-2 w-2 rounded-full bg-white/20" />
                    <div className="h-2 w-2 rounded-full bg-white/20" />
                    <div className="h-2 w-2 rounded-full bg-white/20" />
                    <div className="ml-2 h-3.5 flex-1 rounded bg-white/5" />
                  </div>
                  <Preview />
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col p-6">
                  <div className={`mb-1 text-xs font-mono ${accent.num}`}>{s.number}</div>
                  <h3 className="text-lg font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{s.desc}</p>

                  {/* Problem / Outcome */}
                  <div className="mt-5 space-y-2 rounded-xl border border-white/10 bg-black/20 p-4 text-xs">
                    <div className="flex gap-2">
                      <span className="shrink-0 text-gray-500">{t.sysObjectiveLabel}</span>
                      <span className="text-gray-300">{s.objective}</span>
                    </div>
                    <div className="h-px bg-white/5" />
                    <div className="flex gap-2">
                      <span className="shrink-0 text-gray-500">{t.sysOutcomeLabel}</span>
                      <span className="text-gray-200">{s.outcome}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className={`mt-5 inline-flex items-center gap-1 text-sm font-medium transition ${accent.num} hover:gap-2`}
                  >
                    {t.exploreSystem}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

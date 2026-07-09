"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { EASE } from "@/lib/animations";
import { siteConfig } from "@/lib/site";
import GhostNumber from "./GhostNumber";
import NeonFrame from "./NeonFrame";

const ACCENT_COLORS = ["#AFA9EC", "#85B7EB", "#5DCAA5", "#5DCAA5"];

// ─── Step visuals (left panel mockups) ────────────────────────────────────────

const stepVisuals = [
  // 01 — Understand: project brief
  <div
    key="brief"
    style={{
      padding: 20,
      background: "rgba(175,169,236,0.04)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    }}
  >
    <div
      style={{
        fontSize: 9,
        fontFamily: "monospace",
        color: "#AFA9EC",
        letterSpacing: "0.12em",
        marginBottom: 4,
      }}
    >
      PROJECT BRIEF
    </div>
    {[
      { q: "What are you building?", a: "A SaaS platform for..." },
      { q: "Who is your target?", a: "B2B, SMEs in Belgium" },
      { q: "Timeline?", a: "MVP in 6 weeks" },
    ].map((item, i) => (
      <div
        key={i}
        style={{
          padding: "10px 12px",
          background: "rgba(255,255,255,0.03)",
          borderRadius: 6,
          border: "0.5px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={{ fontSize: 9, color: "rgba(255,255,255,0.3)", marginBottom: 4 }}>
          {item.q}
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{item.a}</div>
      </div>
    ))}
    <div style={{ marginTop: "auto", display: "flex", gap: 8 }}>
      <div
        style={{
          height: 28,
          flex: 1,
          borderRadius: 4,
          background: "rgba(175,169,236,0.15)",
          border: "0.5px solid rgba(175,169,236,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 9,
          color: "#AFA9EC",
        }}
      >
        Submit brief →
      </div>
    </div>
  </div>,

  // 02 — Plan: scope document
  <div
    key="scope"
    style={{
      padding: 20,
      background: "rgba(133,183,235,0.04)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 8,
    }}
  >
    <div
      style={{
        fontSize: 9,
        fontFamily: "monospace",
        color: "#85B7EB",
        letterSpacing: "0.12em",
        marginBottom: 4,
      }}
    >
      PROJECT SCOPE
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {[
        { label: "Stack", value: "Next.js · Supabase · TypeScript" },
        { label: "Delivery", value: "4 weeks · 2 milestones" },
        { label: "Scope", value: "Auth · Dashboard · API · Deploy" },
      ].map((row, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            gap: 8,
            fontSize: 10,
            padding: "6px 0",
            borderBottom: "0.5px solid rgba(255,255,255,0.04)",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.25)", minWidth: 60 }}>{row.label}</span>
          <span style={{ color: "rgba(255,255,255,0.65)" }}>{row.value}</span>
        </div>
      ))}
    </div>
    <div
      style={{
        marginTop: 10,
        padding: "10px 12px",
        background: "rgba(133,183,235,0.08)",
        borderRadius: 6,
        border: "0.5px solid rgba(133,183,235,0.2)",
        fontSize: 10,
        color: "#85B7EB",
      }}
    >
      ✓ Scope agreed — starting Monday
    </div>
  </div>,

  // 03 — Build: git log terminal
  <div
    key="build"
    style={{
      padding: 20,
      background: "rgba(0,0,0,0.4)",
      fontFamily: "monospace",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 6,
    }}
  >
    <div style={{ fontSize: 9, color: "rgba(255,255,255,0.25)", marginBottom: 8 }}>
      ~/project main
    </div>
    {[
      { hash: "a3f2c1", msg: "feat: auth flow complete", time: "2h ago", color: "#5DCAA5" },
      { hash: "9b1e44", msg: "feat: dashboard layout", time: "5h ago", color: "#5DCAA5" },
      { hash: "c7d823", msg: "fix: mobile responsive", time: "1d ago", color: "#AFA9EC" },
      { hash: "f4a901", msg: "feat: API endpoints", time: "2d ago", color: "#AFA9EC" },
      { hash: "12e3b5", msg: "init: project scaffold", time: "3d ago", color: "rgba(255,255,255,0.3)" },
    ].map((commit, i) => (
      <div
        key={i}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 9,
          padding: "4px 0",
          borderBottom: "0.5px solid rgba(255,255,255,0.03)",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.2)" }}>{commit.hash}</span>
        <span style={{ color: "rgba(255,255,255,0.55)", flex: 1 }}>{commit.msg}</span>
        <span style={{ color: commit.color, fontSize: 8 }}>{commit.time}</span>
      </div>
    ))}
    <div style={{ marginTop: "auto", fontSize: 9, color: "#5DCAA5" }}>
      ▊ pnpm build — success in 12.4s
    </div>
  </div>,

  // 04 — Ship: deploy dashboard
  <div
    key="deploy"
    style={{
      padding: 20,
      background: "rgba(29,158,117,0.04)",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 10,
    }}
  >
    <div
      style={{
        fontSize: 9,
        fontFamily: "monospace",
        color: "#5DCAA5",
        letterSpacing: "0.12em",
        marginBottom: 4,
      }}
    >
      DEPLOYMENT
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {[
        { step: "Build", status: "✓ Success" },
        { step: "Tests", status: "✓ 48/48 passed" },
        { step: "Deploy", status: "✓ Production" },
        { step: "Domain", status: "✓ SSL active" },
      ].map((row, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 10,
            padding: "6px 10px",
            background: "rgba(255,255,255,0.02)",
            borderRadius: 4,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.4)" }}>{row.step}</span>
          <span style={{ color: "#5DCAA5" }}>{row.status}</span>
        </div>
      ))}
    </div>
    <div
      style={{
        padding: "10px 12px",
        marginTop: 4,
        background: "rgba(29,158,117,0.1)",
        borderRadius: 6,
        border: "0.5px solid rgba(29,158,117,0.3)",
        fontSize: 10,
        color: "#5DCAA5",
        textAlign: "center",
      }}
    >
      🚀 torsolution.be — Live
    </div>
  </div>,
];

// ─── Pill choice component ─────────────────────────────────────────────────────

function Pills({
  options,
  value,
  onChange,
  accent,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  accent: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className="px-3 py-1.5 text-[11px] rounded-[4px] border transition-all duration-200"
          style={{
            borderColor: value === opt ? accent : "rgba(255,255,255,0.12)",
            color: value === opt ? accent : "rgba(255,255,255,0.4)",
            background: value === opt ? `${accent}18` : "transparent",
          }}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

// ─── Form state type ───────────────────────────────────────────────────────────

type FormData = {
  projectType: string;
  projectDesc: string;
  budget: string;
  deadline: string;
  hasDesign: string;
  name: string;
  email: string;
  whatsapp: string;
};

const INIT: FormData = {
  projectType: "",
  projectDesc: "",
  budget: "",
  deadline: "",
  hasDesign: "",
  name: "",
  email: "",
  whatsapp: "",
};

// ─── Component ─────────────────────────────────────────────────────────────────

export default function Process() {
  const { lang } = useLang();
  const t = translations[lang];
  const w = t.procWizard;
  const [active, setActive] = useState(0);
  const [form, setForm] = useState<FormData>(INIT);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function setField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function buildWhatsAppUrl() {
    const lines = [
      `*${lang === "fr" ? "Brief TorSolution" : "TorSolution Brief"}*`,
      "",
      `*${w.summaryLabels.type}:* ${form.projectType || "—"}`,
      `*${w.summaryLabels.desc}:* ${form.projectDesc || "—"}`,
      `*${w.summaryLabels.budget}:* ${form.budget || "—"}`,
      `*${w.summaryLabels.deadline}:* ${form.deadline || "—"}`,
      `*${w.summaryLabels.design}:* ${form.hasDesign || "—"}`,
      `*${w.summaryLabels.name}:* ${form.name || "—"}`,
      `*${w.summaryLabels.email}:* ${form.email || "—"}`,
      ...(form.whatsapp ? [`*${w.summaryLabels.whatsapp}:* ${form.whatsapp}`] : []),
    ].join("\n");
    return `${siteConfig.whatsapp}?text=${encodeURIComponent(lines)}`;
  }

  async function handleSubmit() {
    setSending(true);
    const message = [
      `${w.summaryLabels.type}: ${form.projectType}`,
      `${w.summaryLabels.desc}: ${form.projectDesc}`,
      `${w.summaryLabels.budget}: ${form.budget}`,
      `${w.summaryLabels.deadline}: ${form.deadline}`,
      `${w.summaryLabels.design}: ${form.hasDesign}`,
      form.whatsapp ? `${w.summaryLabels.whatsapp}: ${form.whatsapp}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Brief: ${form.projectType}`,
          message,
        }),
      });
    } catch {
      // WhatsApp still opens if email fails
    }

    window.open(buildWhatsAppUrl(), "_blank");
    setSending(false);
    setSent(true);
  }

  const accent = ACCENT_COLORS[active];

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "monospace",
    fontSize: 9,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.3)",
    marginBottom: 8,
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.03)",
    border: "0.5px solid rgba(255,255,255,0.1)",
    borderRadius: 4,
    padding: "8px 10px",
    fontSize: 12,
    color: "#F0EEE8",
    outline: "none",
  };

  const summaryRows = [
    { label: w.summaryLabels.type, value: form.projectType },
    { label: w.summaryLabels.desc, value: form.projectDesc },
    { label: w.summaryLabels.budget, value: form.budget },
    { label: w.summaryLabels.deadline, value: form.deadline },
    { label: w.summaryLabels.design, value: form.hasDesign },
    { label: w.summaryLabels.name, value: form.name },
    { label: w.summaryLabels.email, value: form.email },
    ...(form.whatsapp ? [{ label: w.summaryLabels.whatsapp, value: form.whatsapp }] : []),
  ];

  return (
    <section id="process" className="relative z-10 overflow-hidden px-6 sm:px-10 py-28">
      <GhostNumber n="03" side="left" />
      <div className="relative mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-[clamp(22px,3vw,32px)] font-light text-[#F0EEE8]">
            {t.procTitle}
          </h2>
          <p className="mt-2 text-[13px] text-[#F0EEE8]/35">{t.procSubtitle}</p>
        </div>

        {/* Step nav */}
        <div className="relative mb-0">
          <div
            aria-hidden="true"
            className="absolute top-[4px] left-0 right-0 h-px z-0"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <div className="relative grid grid-cols-4 z-10">
            {t.procSteps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className="flex flex-col items-start pr-4 text-left"
              >
                <div
                  className="w-[10px] h-[10px] rounded-full border mb-5 transition-all duration-300"
                  style={{
                    borderColor:
                      active === idx ? ACCENT_COLORS[idx] : "rgba(255,255,255,0.15)",
                    background: "#09080F",
                    boxShadow:
                      active === idx ? `0 0 8px ${ACCENT_COLORS[idx]}60` : "none",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="font-mono text-[40px] font-bold leading-none select-none mb-2 transition-all duration-300"
                  style={{
                    color:
                      active === idx ? ACCENT_COLORS[idx] : "rgba(255,255,255,0.06)",
                  }}
                >
                  {s.n}
                </div>
                <div
                  className="text-[12px] font-medium transition-colors duration-300 hidden sm:block"
                  style={{
                    color: active === idx ? "#F0EEE8" : "rgba(255,255,255,0.3)",
                  }}
                >
                  {s.title}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <NeonFrame radius={12} className="mt-8" colors={["#AFA9EC", "#5DCAA5"]} speed={9}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[10px] bg-[#0C0B12]"
          style={{ minHeight: 240 }}
        >
          {/* Left — mockup visual */}
          <div
            className="overflow-hidden"
            style={{ borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.28, ease: EASE }}
                style={{ height: "100%", minHeight: 220 }}
              >
                {stepVisuals[active]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — wizard form */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: EASE }}
              className="p-8 flex flex-col justify-between"
              style={{ borderLeft: "0.5px solid rgba(255,255,255,0.06)" }}
            >
              <div>
                {/* Step counter + title */}
                <div
                  className="font-mono text-[10px] tracking-widest uppercase mb-3"
                  style={{ color: accent }}
                >
                  {String(active + 1).padStart(2, "0")} / 04
                </div>
                <h3 className="text-[18px] font-medium text-[#F0EEE8] mb-5">
                  {t.procSteps[active].title}
                </h3>

                {/* ── Step 0: Understand ── */}
                {active === 0 && (
                  <div className="flex flex-col gap-5">
                    <div>
                      <label style={labelStyle}>{w.projectTypeQ}</label>
                      <Pills
                        options={w.projectTypeOptions}
                        value={form.projectType}
                        onChange={(v) => setField("projectType", v)}
                        accent={accent}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>{w.projectDescQ}</label>
                      <textarea
                        value={form.projectDesc}
                        onChange={(e) => setField("projectDesc", e.target.value)}
                        placeholder={w.projectDescPlaceholder}
                        rows={3}
                        style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                      />
                    </div>
                  </div>
                )}

                {/* ── Step 1: Plan ── */}
                {active === 1 && (
                  <div className="flex flex-col gap-5">
                    <div>
                      <label style={labelStyle}>{w.budgetQ}</label>
                      <Pills
                        options={w.budgetOptions}
                        value={form.budget}
                        onChange={(v) => setField("budget", v)}
                        accent={accent}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>{w.deadlineQ}</label>
                      <Pills
                        options={w.deadlineOptions}
                        value={form.deadline}
                        onChange={(v) => setField("deadline", v)}
                        accent={accent}
                      />
                    </div>
                  </div>
                )}

                {/* ── Step 2: Build ── */}
                {active === 2 && (
                  <div className="flex flex-col gap-5">
                    <div>
                      <label style={labelStyle}>{w.designQ}</label>
                      <Pills
                        options={w.designOptions}
                        value={form.hasDesign}
                        onChange={(v) => setField("hasDesign", v)}
                        accent={accent}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label style={labelStyle}>{w.nameLabel}</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setField("name", e.target.value)}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>{w.emailLabel}</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setField("email", e.target.value)}
                          style={inputStyle}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={labelStyle}>{w.whatsappLabel}</label>
                      <input
                        type="tel"
                        value={form.whatsapp}
                        onChange={(e) => setField("whatsapp", e.target.value)}
                        placeholder={w.whatsappPlaceholder}
                        style={inputStyle}
                      />
                    </div>
                  </div>
                )}

                {/* ── Step 3: Ship — Summary brief card ── */}
                {active === 3 && (
                  <div
                    style={{
                      background: "rgba(93,202,165,0.04)",
                      border: "0.5px solid rgba(93,202,165,0.15)",
                      borderRadius: 8,
                      padding: "14px 16px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "monospace",
                        fontSize: 9,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#5DCAA5",
                        marginBottom: 12,
                      }}
                    >
                      {w.summaryTitle}
                    </div>
                    <div className="flex flex-col gap-2">
                      {summaryRows.map((row) => (
                        <div key={row.label} className="flex gap-2 text-[11px]">
                          <span
                            style={{
                              color: "rgba(255,255,255,0.3)",
                              minWidth: 72,
                              flexShrink: 0,
                            }}
                          >
                            {row.label}
                          </span>
                          <span
                            style={{
                              color: row.value
                                ? "rgba(255,255,255,0.75)"
                                : "rgba(255,255,255,0.2)",
                            }}
                          >
                            {row.value || "—"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setActive(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className="px-4 py-2 text-[12px] border border-white/[0.1] rounded-[4px] text-[#F0EEE8]/50 disabled:opacity-20 hover:border-white/25 hover:text-[#F0EEE8]/80 transition"
                >
                  ← {w.prev}
                </button>

                {active < 3 ? (
                  <button
                    onClick={() => setActive(active + 1)}
                    className="px-4 py-2 text-[12px] rounded-[4px] hover:opacity-80 transition"
                    style={{
                      border: `0.5px solid ${accent}`,
                      color: accent,
                    }}
                  >
                    {w.next} →
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={sending || sent || !form.name || !form.email}
                    className="px-5 py-2 text-[12px] rounded-[4px] transition disabled:opacity-40"
                    style={{
                      background: "rgba(93,202,165,0.1)",
                      border: "0.5px solid #5DCAA5",
                      color: "#5DCAA5",
                    }}
                  >
                    {sent
                      ? `✓ ${lang === "fr" ? "Envoyé !" : "Sent!"}`
                      : sending
                      ? w.sendingBtn
                      : w.sendBtn}
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        </NeonFrame>

      </div>
    </section>
  );
}

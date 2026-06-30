"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { fadeUp, stagger, EASE } from "@/lib/animations";
import { localizedHref } from "@/lib/locale";
import TiltCard from "./TiltCard";

// Map the home-section ordering to the /work/[slug] URLs.
const PROJECT_SLUGS = ["bloom", "onstage", "torstock", "torfix"];

// ─── Per-project config ────────────────────────────────────────────────────────

const PROJECT_META = [
  { accent: "#AFA9EC", tagBg: "#26215C" },
  { accent: "#F0997B", tagBg: "#4A1B0C" },
  { accent: "#5DCAA5", tagBg: "#04342C" },
  { accent: "#85B7EB", tagBg: "#042C53" },
];

// ─── Browser chrome ────────────────────────────────────────────────────────────

function BrowserBar() {
  return (
    <div
      className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06]"
      style={{ background: "rgba(255,255,255,0.03)" }}
    >
      <span className="w-2 h-2 rounded-full bg-[#FF5F57] opacity-70" />
      <span className="w-2 h-2 rounded-full bg-[#FFBD2E] opacity-70" />
      <span className="w-2 h-2 rounded-full bg-[#28C840] opacity-70" />
    </div>
  );
}

// ─── Mockup UIs ────────────────────────────────────────────────────────────────

function MockupBloom() {
  return (
    <div style={{ padding: 12, background: "#0D0B14", height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontFamily: "monospace", fontSize: 10, color: "#AFA9EC", letterSpacing: "0.1em" }}>BLOOM</span>
        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>FOR YOU</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        <div style={{ height: 72, borderRadius: 6, background: "rgba(175,169,236,0.12)", border: "0.5px solid rgba(175,169,236,0.2)", display: "flex", alignItems: "flex-end", padding: 6 }}>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>▶ AI Film · 2:34</span>
        </div>
        <div style={{ height: 72, borderRadius: 6, background: "rgba(175,169,236,0.08)", border: "0.5px solid rgba(175,169,236,0.15)", display: "flex", alignItems: "flex-end", padding: 6 }}>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>♪ AI Music · 3:12</span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: 10, paddingTop: 8, borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <span style={{ fontSize: 10, color: "#AFA9EC" }}>⊞</span>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>♡</span>
        <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)" }}>◎</span>
      </div>
    </div>
  );
}

function MockupOnstage() {
  return (
    <div style={{ padding: 12, background: "#0F0B09", height: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(240,153,123,0.2)", border: "0.5px solid rgba(240,153,123,0.3)", flexShrink: 0 }} />
        <div>
          <div style={{ fontSize: 9, color: "#F0EEE8", fontWeight: 500 }}>Aria Nova</div>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.3)" }}>Jazz · Brussels</div>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 8, padding: "3px 8px", borderRadius: 3, background: "rgba(240,153,123,0.15)", color: "#F0997B", border: "0.5px solid rgba(240,153,123,0.3)", flexShrink: 0 }}>
          Book
        </div>
      </div>
      <div style={{ fontSize: 8, color: "rgba(255,255,255,0.25)", marginBottom: 6, letterSpacing: "0.08em" }}>UPCOMING DATES</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 8, padding: "4px 6px", background: "rgba(255,255,255,0.03)", borderRadius: 3 }}>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>Jun 14 · Bozar</span>
          <span style={{ color: "#F0997B" }}>2 left</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 8, padding: "4px 6px", background: "rgba(255,255,255,0.03)", borderRadius: 3 }}>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>Jun 28 · Ancienne Belgique</span>
          <span style={{ color: "rgba(255,255,255,0.3)" }}>Available</span>
        </div>
      </div>
    </div>
  );
}

function MockupTorStock() {
  return (
    <div style={{ padding: 12, background: "#090F0D", height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <span style={{ fontSize: 9, color: "#5DCAA5", fontFamily: "monospace", letterSpacing: "0.08em" }}>TORSTOCK</span>
        <span style={{ fontSize: 8, color: "rgba(93,202,165,0.6)" }}>● 3 sites · live</span>
      </div>
      <table style={{ width: "100%", fontSize: 8, borderCollapse: "collapse" }}>
        <tbody>
          <tr style={{ color: "rgba(255,255,255,0.25)" }}>
            <td style={{ padding: "2px 0" }}>Asset</td>
            <td style={{ textAlign: "right" }}>Units</td>
            <td style={{ textAlign: "right" }}>Status</td>
          </tr>
          <tr>
            <td style={{ padding: "3px 0", color: "rgba(255,255,255,0.6)" }}>Laptops cliniciens</td>
            <td style={{ textAlign: "right", color: "#F0EEE8" }}>1 240</td>
            <td style={{ textAlign: "right", color: "#5DCAA5" }}>OK</td>
          </tr>
          <tr>
            <td style={{ padding: "3px 0", color: "rgba(255,255,255,0.6)" }}>Tablettes consult.</td>
            <td style={{ textAlign: "right", color: "#F0EEE8" }}>87</td>
            <td style={{ textAlign: "right", color: "#EF9F27" }}>⚠ Low</td>
          </tr>
          <tr>
            <td style={{ padding: "3px 0", color: "rgba(255,255,255,0.6)" }}>Casques VoIP</td>
            <td style={{ textAlign: "right", color: "#F0EEE8" }}>0</td>
            <td style={{ textAlign: "right", color: "#F0997B" }}>✕ Out</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function MockupTorfix() {
  return (
    <div style={{ padding: 12, background: "#090C0F", height: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
        <span style={{ fontSize: 9, color: "#85B7EB", fontFamily: "monospace" }}>TORFIX</span>
        <span style={{ fontSize: 8, color: "rgba(255,255,255,0.3)" }}>Dashboard</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 8 }}>
        <div style={{ padding: 6, borderRadius: 4, background: "rgba(133,183,235,0.08)", border: "0.5px solid rgba(133,183,235,0.15)" }}>
          <div style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", marginBottom: 2 }}>RDV aujourd&apos;hui</div>
          <div style={{ fontSize: 14, fontWeight: 500, color: "#F0EEE8" }}>8</div>
        </div>
        <div style={{ padding: 6, borderRadius: 4, background: "rgba(133,183,235,0.05)", border: "0.5px solid rgba(133,183,235,0.1)" }}>
          <div style={{ fontSize: 7, color: "rgba(255,255,255,0.3)", marginBottom: 2 }}>Clients actifs</div>
          <div style={{ fontSize: 14, fontWeight: 500, color: "#F0EEE8" }}>34</div>
        </div>
      </div>
      <div style={{ fontSize: 7, color: "rgba(255,255,255,0.25)", marginBottom: 4 }}>PROCHAIN RDV</div>
      <div style={{ fontSize: 8, padding: "5px 6px", background: "rgba(255,255,255,0.03)", borderRadius: 3, borderLeft: "2px solid #85B7EB", color: "rgba(255,255,255,0.6)" }}>
        14:30 — Marie Dubois · Coupe + couleur
      </div>
    </div>
  );
}

const MOCKUPS = [MockupBloom, MockupOnstage, MockupTorStock, MockupTorfix];

// ─── Main component ────────────────────────────────────────────────────────────

export default function Systems() {
  const { lang } = useLang();
  const t = translations[lang];
  const workIndexHref = localizedHref("/work", lang);
  const viewAllLabel = lang === "fr" ? "Voir tous les projets →" : "View all work →";

  return (
    <section id="systems" className="relative z-10 px-6 sm:px-10 py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 flex items-baseline justify-between"
        >
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(22px,3vw,32px)] font-light text-[#F0EEE8]"
          >
            {t.sysTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[13px] text-[#F0EEE8]/35 hidden sm:block"
          >
            {t.sysSubtitle}
          </motion.p>
        </motion.div>

        {/* 2×2 card grid */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {t.sysItems.map((s, idx) => {
            const meta = PROJECT_META[idx] ?? PROJECT_META[0];
            const Mockup = MOCKUPS[idx] ?? MOCKUPS[0];
            const slug = PROJECT_SLUGS[idx] ?? PROJECT_SLUGS[0];
            const detailHref = localizedHref(`/work/${slug}`, lang);

            return (
              <motion.div
                key={s.number}
                variants={fadeUp}
              >
              <TiltCard
                accent={meta.accent}
                className="group flex flex-col overflow-hidden rounded-xl h-full"
                style={{
                  border: "0.5px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <Link href={detailHref} className="flex flex-col h-full">
                {/* Browser mockup zone */}
                <div className="shrink-0" style={{ height: 200 }}>
                  <BrowserBar />
                  <div style={{ height: "calc(200px - 33px)", overflow: "hidden" }}>
                    <Mockup />
                  </div>
                </div>

                {/* Info zone */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Number + Live badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="font-mono text-[10px] transition-colors duration-300"
                      style={{ color: meta.accent }}
                    >
                      {s.number}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1D9E75]" style={{ boxShadow: "0 0 5px #1D9E75" }} />
                      </span>
                      <span className="font-mono text-[10px] text-[#1D9E75]">Live</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] font-medium text-[#F0EEE8] mb-2">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-[#F0EEE8]/45 leading-relaxed line-clamp-3 mb-4 flex-1">
                    {s.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-1 rounded-[2px]"
                        style={{ background: meta.tagBg, color: meta.accent }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA link */}
                  <span
                    className="text-[12px] transition-all duration-200 group-hover:underline underline-offset-2"
                    style={{ color: meta.accent }}
                  >
                    {t.exploreSystem} →
                  </span>
                </div>
                </Link>
              </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View all */}
        <div className="mt-10 flex justify-center">
          <Link
            href={workIndexHref}
            className="inline-flex items-center gap-2 rounded-[4px] border border-white/[0.15] px-6 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[#F0EEE8]/55 transition-colors hover:bg-white/[0.04] hover:text-[#F0EEE8]"
          >
            {viewAllLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

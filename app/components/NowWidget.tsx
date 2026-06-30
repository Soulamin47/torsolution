"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/app/providers/LangProvider";
import { NOW } from "@/lib/now";

function formatBrussels(date: Date): string {
  return date.toLocaleTimeString("en-GB", {
    timeZone: "Europe/Brussels",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function useBrusselsTime(): string {
  // Start empty during SSR so server and first client render match,
  // then fill in the real time after mount. Avoids hydration mismatch.
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setTime(formatBrussels(new Date()));
    const id = setInterval(() => setTime(formatBrussels(new Date())), 30_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function NowWidget() {
  const { lang } = useLang();
  const copy = NOW[lang];
  const time = useBrusselsTime();
  const [open, setOpen] = useState(true);

  const labels = {
    now: lang === "fr" ? "EN CE MOMENT" : "NOW",
    brussels: lang === "fr" ? "BRUXELLES" : "BRUSSELS",
    building: lang === "fr" ? "Je code" : "Building",
    reading: lang === "fr" ? "Je lis" : "Reading",
    shipped: lang === "fr" ? "Dernière livraison" : "Last shipped",
    collapse: lang === "fr" ? "Réduire" : "Collapse",
    expand: lang === "fr" ? "Agrandir" : "Expand",
  };

  return (
    <div
      // Bottom-left, hidden on small screens (the FloatingWhatsApp button
      // owns the bottom-right corner, the cookie banner owns the centre).
      className="pointer-events-none fixed bottom-5 left-5 z-[260] hidden sm:block"
    >
      <div
        className={`pointer-events-auto overflow-hidden rounded-[8px] border border-white/[0.08] bg-[#0C0B12]/85 shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-300 ${
          open ? "w-[280px]" : "w-[56px]"
        }`}
      >
        {/* Header — clickable to toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? labels.collapse : labels.expand}
          className="flex w-full items-center gap-2 px-3 py-2.5 text-left transition-colors hover:bg-white/[0.03]"
        >
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1D9E75] opacity-75" />
            <span
              className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1D9E75]"
              style={{ boxShadow: "0 0 6px #1D9E75" }}
            />
          </span>
          {open ? (
            <span className="flex w-full items-center justify-between gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#F0EEE8]/55">
                {labels.now} · {labels.brussels}
              </span>
              <span className="font-mono text-[10px] tabular-nums text-[#F0EEE8]/40">
                {time || "—"}
              </span>
            </span>
          ) : (
            <span className="sr-only">{labels.now}</span>
          )}
        </button>

        {/* Body — collapsible */}
        {open && (
          <div className="border-t border-white/[0.06] px-3 pt-2.5 pb-3 space-y-2">
            <Row label={labels.building} value={copy.building} accent="#AFA9EC" />
            <Row label={labels.reading} value={copy.reading} accent="#85B7EB" />
            <Row
              label={labels.shipped}
              value={`${copy.lastShipped.name} · ${copy.lastShipped.label}`}
              accent="#5DCAA5"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <span
        className="mt-1.5 inline-block h-px w-3 shrink-0"
        style={{ background: accent }}
      />
      <div className="min-w-0 flex-1">
        <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#F0EEE8]/30">
          {label}
        </div>
        <div className="mt-0.5 truncate text-[12px] text-[#F0EEE8]/70" title={value}>
          {value}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useLang } from "@/app/providers/LangProvider";

// Full-bleed oversized scrolling type band — editorial / studio look.
// Outlined text, one accent word filled, slow constant drift.

export default function BigMarquee() {
  const { lang } = useLang();
  const words =
    lang === "fr"
      ? ["APPS WEB", "MOBILE", "AUTOMATISATION IA", "PLATEFORMES", "WEB3"]
      : ["WEB APPS", "MOBILE", "AI AUTOMATION", "PLATFORMS", "WEB3"];

  const Row = () => (
    <span className="flex shrink-0 items-center">
      {words.map((w, i) => (
        <span key={w} className="flex items-center">
          <span
            className="px-6 text-[clamp(52px,9vw,130px)] font-light leading-none tracking-tight whitespace-nowrap"
            style={
              i === 2
                ? { color: "#AFA9EC", opacity: 0.85 }
                : {
                    WebkitTextStroke: "1px rgba(240,238,232,0.22)",
                    color: "transparent",
                  }
            }
          >
            {w}
          </span>
          <span className="text-[20px] text-[#5DCAA5]/60 select-none">✦</span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      aria-hidden="true"
      className="relative z-10 overflow-hidden border-y border-white/[0.06] py-8 select-none"
    >
      <div
        className="flex w-max"
        style={{ animation: "marquee-left 38s linear infinite" }}
      >
        <Row />
        <Row />
      </div>
    </div>
  );
}

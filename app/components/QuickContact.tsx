"use client";

import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { siteConfig } from "@/lib/site";

export default function QuickContact() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <div
      className="border-t border-b border-white/[0.06]"
      style={{ background: "rgba(175,169,236,0.03)" }}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="text-[28px] font-light italic text-[#F0EEE8]/75 leading-tight">
          {t.quickCtaTitle}
        </p>

        <div className="flex items-center gap-8">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] text-[#F0EEE8]/40 hover:text-[#F0EEE8]/80 transition-colors underline underline-offset-4 decoration-white/20"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-[12px] text-[#F0EEE8]/40 hover:text-[#F0EEE8]/80 transition-colors underline underline-offset-4 decoration-white/20"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}

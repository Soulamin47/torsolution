"use client";

import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <footer className="px-6 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            {/* Brand */}
            <div>
              <div className="text-sm font-semibold">Torsolution</div>
              <div className="mt-1 text-xs text-gray-500">{t.footerTagline}</div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 block text-xs text-gray-500 transition hover:text-white"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-xs text-gray-500 transition hover:text-green-400"
              >
                WhatsApp · +32 466 38 65 65
              </a>
            </div>

            {/* Nav links */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500">
              <a className="hover:text-white transition" href="#systems">{t.navSystems}</a>
              <a className="hover:text-white transition" href="#capabilities">{t.navCapabilities}</a>
              <a className="hover:text-white transition" href="#process">{t.navProcess}</a>
              <a className="hover:text-white transition" href="#contact">{t.navContact}</a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-600">{t.footerCopyright}</p>
            <div className="flex gap-4 text-xs text-gray-600">
              <a href="/legal" className="hover:text-gray-400 transition">{t.footerLegal}</a>
              <span className="opacity-30">·</span>
              <a href="/privacy" className="hover:text-gray-400 transition">{t.footerPrivacy}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

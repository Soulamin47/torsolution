"use client";

import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <footer className="px-8 pb-10">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-semibold">Torsolution</div>
          <div className="mt-1 text-xs text-gray-400">
            {t.footerTagline}
          </div>
        </div>

        <div className="flex gap-3 text-xs text-gray-400">
          <a className="hover:text-white transition" href="#systems">
            {t.navSystems}
          </a>
          <a className="hover:text-white transition" href="#capabilities">
            {t.navCapabilities}
          </a>
          <a className="hover:text-white transition" href="#process">
            {t.navProcess}
          </a>
        </div>
      </div>
    </footer>
  );
}
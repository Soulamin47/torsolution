"use client";

import Link from "next/link";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { siteConfig } from "@/lib/site";
import { localizedHref } from "@/lib/locale";

const PROJECTS = ["Bloom", "Onstage", "TorStock", "Torfix"];

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
    >
      <path
        d="M5.6 18.5 6.5 15A7.4 7.4 0 1 1 9 17.4l-3.4 1.1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.5-.1.7l-.4.5c.5.9 1.2 1.6 2.2 2.1l.5-.5c.2-.2.4-.2.7-.1l1.4.6c.3.1.4.3.4.6v.4c0 .4-.2.7-.5.9-.5.3-1.4.4-2.7-.2-1.4-.6-2.6-1.5-3.6-2.7-1-1.1-1.6-2.5-1.6-3.2 0-.2.1-.4.2-.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang];
  const homeRoot = localizedHref("/", lang);

  const links = [
    { href: localizedHref("/work", lang), label: t.navSystems },
    { href: localizedHref("/services", lang), label: t.navCapabilities },
    { href: `${homeRoot}#process`, label: t.navProcess },
    { href: `${homeRoot}#contact`, label: t.navContact },
    { href: `mailto:${siteConfig.email}`, label: siteConfig.email },
  ];

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 py-8 space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={homeRoot}
            className="inline-flex items-center transition-opacity hover:opacity-80"
            aria-label="Torsolution"
          >
            <img
              src="/logo-horizontal.svg"
              alt="TOR_SOLUTION"
              className="h-9 w-auto opacity-80"
            />
          </Link>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {links.map(({ href, label }) => (
              <Link
                key={href + label}
                href={href}
                className="font-mono text-[11px] text-[#F0EEE8]/30 hover:text-[#F0EEE8]/60 transition-colors"
              >
                {label}
              </Link>
            ))}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[#5DCAA5]/70 hover:text-[#5DCAA5] transition-colors"
              aria-label="WhatsApp +32466386565"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp
            </a>
            <Link
              href={localizedHref("/privacy", lang)}
              className="font-mono text-[11px] text-[#F0EEE8]/30 hover:text-[#F0EEE8]/60 transition-colors"
            >
              {lang === "fr" ? "Confidentialité" : "Privacy"}
            </Link>
            <Link
              href={localizedHref("/legal", lang)}
              className="font-mono text-[11px] text-[#F0EEE8]/30 hover:text-[#F0EEE8]/60 transition-colors"
            >
              {lang === "fr" ? "Mentions légales" : "Legal"}
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-white/[0.04] pt-5">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {PROJECTS.map((p) => (
              <Link
                key={p}
                href={localizedHref(`/work/${p.toLowerCase()}`, lang)}
                className="font-mono text-[10px] text-[#F0EEE8]/20 hover:text-[#F0EEE8]/50 transition-colors"
              >
                {p}
              </Link>
            ))}
          </div>
          <span className="font-mono text-[11px] text-[#F0EEE8]/20">
            © {new Date().getFullYear()} Torsolution
          </span>
        </div>
      </div>
    </footer>
  );
}

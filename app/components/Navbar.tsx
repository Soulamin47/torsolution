"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "@/app/providers/LangProvider";
import type { Lang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { localizedHref } from "@/lib/locale";

function LangToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  return (
    <div className="flex items-center gap-2 font-mono text-[11px] text-[#F0EEE8]/30">
      <button
        type="button"
        onClick={() => setLang("en")}
        className={
          lang === "en"
            ? "text-[#F0EEE8]/80"
            : "hover:text-[#F0EEE8]/60 transition-colors"
        }
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span>/</span>
      <button
        type="button"
        onClick={() => setLang("fr")}
        className={
          lang === "fr"
            ? "text-[#F0EEE8]/80"
            : "hover:text-[#F0EEE8]/60 transition-colors"
        }
        aria-pressed={lang === "fr"}
      >
        FR
      </button>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Real pages get full URLs (locale-aware). Anchors (#process, #contact)
  // live on the home page — we prefix them with the locale root so they
  // also work when the user is currently on /services/* or /work/*.
  const homeRoot = localizedHref("/", lang);
  const links = [
    { href: localizedHref("/work", lang), label: t.navSystems, real: true },
    { href: localizedHref("/services", lang), label: t.navCapabilities, real: true },
    { href: `${homeRoot}#process`, label: t.navProcess, real: false },
    { href: `${homeRoot}#contact`, label: t.navContact, real: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/[0.06] bg-[#09080F]/90 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={homeRoot}
          className="group transition-opacity hover:opacity-90"
          aria-label="Torsolution"
        >
          <img
            src="/logo-horizontal.svg"
            alt="TOR_SOLUTION"
            height={32}
            className="h-11 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[11px] uppercase tracking-[0.1em] text-[#F0EEE8]/40 hover:text-[#F0EEE8]/80 transition-colors"
            >
              {label}
            </Link>
          ))}

          <div className="h-3 w-px bg-white/10" />

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1D9E75]" />
            </span>
            <span className="font-mono text-[10px] text-[#F0EEE8]/30 tracking-wide">
              {t.navStatus}
            </span>
          </div>

          <div className="h-3 w-px bg-white/10" />
          <LangToggle lang={lang} setLang={setLang} />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            onClick={() => setOpen((v) => !v)}
            className="font-mono text-[11px] text-[#F0EEE8]/40 hover:text-[#F0EEE8]/80 transition-colors"
            aria-label="Menu"
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#09080F]/95 backdrop-blur-sm md:hidden">
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          <div className="relative z-10 pt-20 px-6">
            <div className="space-y-1">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-4 border-b border-white/[0.06] font-mono text-[11px] uppercase tracking-[0.1em] text-[#F0EEE8]/40 hover:text-[#F0EEE8]/80 transition-colors"
                >
                  {label}
                </Link>
              ))}
              <div className="pt-6 flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1D9E75]" />
                </span>
                <span className="font-mono text-[10px] text-[#F0EEE8]/30 tracking-wide">
                  {t.navStatus}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

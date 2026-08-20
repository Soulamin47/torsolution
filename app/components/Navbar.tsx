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
  theme,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: "dark" | "light";
}) {
  return (
    <div className={`flex items-center gap-2 font-mono text-[11px] ${theme === "light" ? "text-black/35" : "text-[#F0EEE8]/30"}`}>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={
          lang === "en"
            ? theme === "light" ? "text-black/80" : "text-[#F0EEE8]/80"
            : theme === "light" ? "transition-colors hover:text-black/65" : "hover:text-[#F0EEE8]/60 transition-colors"
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
            ? theme === "light" ? "text-black/80" : "text-[#F0EEE8]/80"
            : theme === "light" ? "transition-colors hover:text-black/65" : "hover:text-[#F0EEE8]/60 transition-colors"
        }
        aria-pressed={lang === "fr"}
      >
        FR
      </button>
    </div>
  );
}

export default function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
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
      className="fixed left-0 top-0 z-50 w-full px-3 pt-3"
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 sm:px-7 ${
        scrolled || open
          ? theme === "light"
            ? "border-black/[0.09] bg-[#f8f5ed]/82 shadow-[0_18px_70px_rgba(43,35,25,.12)] backdrop-blur-xl"
            : "border-white/[0.09] bg-[#09080F]/78 shadow-[0_18px_70px_rgba(0,0,0,.35)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}>
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
            className={`h-9 w-auto ${theme === "light" ? "invert" : ""}`}
          />
        </Link>

        {/* Desktop nav */}
        <div className={`hidden items-center gap-8 md:flex ${theme === "light" ? "[&>a]:!text-black/55 [&>a:hover]:!text-black" : ""}`}>
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
            <span className={`font-mono text-[10px] tracking-wide ${theme === "light" ? "text-black/42" : "text-[#F0EEE8]/30"}`}>
              {t.navStatus}
            </span>
          </div>

          <div className="h-3 w-px bg-white/10" />
          <LangToggle lang={lang} setLang={setLang} theme={theme} />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <LangToggle lang={lang} setLang={setLang} theme={theme} />
          <button
            onClick={() => setOpen((v) => !v)}
            className={`font-mono text-[11px] transition-colors ${theme === "light" ? "text-black/50 hover:text-black" : "text-[#F0EEE8]/40 hover:text-[#F0EEE8]/80"}`}
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

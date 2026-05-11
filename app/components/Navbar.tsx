"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";

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

  const LangToggle = () => (
    <div className="flex items-center gap-2 font-mono text-[11px] text-[#F0EEE8]/30">
      <button
        onClick={() => setLang("en")}
        className={
          lang === "en"
            ? "text-[#F0EEE8]/80"
            : "hover:text-[#F0EEE8]/60 transition-colors"
        }
      >
        EN
      </button>
      <span>/</span>
      <button
        onClick={() => setLang("fr")}
        className={
          lang === "fr"
            ? "text-[#F0EEE8]/80"
            : "hover:text-[#F0EEE8]/60 transition-colors"
        }
      >
        FR
      </button>
    </div>
  );

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
        <a href="#" className="font-mono text-[13px] tracking-widest text-[#F0EEE8]/80 hover:text-[#F0EEE8] transition-colors">
          TOR<span className="text-[#AFA9EC]">_</span>SOLUTION
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#systems", label: t.navSystems },
            { href: "#capabilities", label: t.navCapabilities },
            { href: "#process", label: t.navProcess },
            { href: "#contact", label: t.navContact },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[11px] uppercase tracking-[0.1em] text-[#F0EEE8]/40 hover:text-[#F0EEE8]/80 transition-colors"
            >
              {label}
            </a>
          ))}

          <div className="h-3 w-px bg-white/10" />

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1D9E75]" />
            </span>
            <span className="font-mono text-[10px] text-[#F0EEE8]/30 tracking-wide">
              Available · Brussels
            </span>
          </div>

          <div className="h-3 w-px bg-white/10" />
          <LangToggle />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <LangToggle />
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
              {[
                { href: "#systems", label: t.navSystems },
                { href: "#capabilities", label: t.navCapabilities },
                { href: "#process", label: t.navProcess },
                { href: "#contact", label: t.navContact },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-4 border-b border-white/[0.06] font-mono text-[11px] uppercase tracking-[0.1em] text-[#F0EEE8]/40 hover:text-[#F0EEE8]/80 transition-colors"
                >
                  {label}
                </a>
              ))}
              <div className="pt-6 flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1D9E75] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1D9E75]" />
                </span>
                <span className="font-mono text-[10px] text-[#F0EEE8]/30 tracking-wide">
                  Available · Brussels
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

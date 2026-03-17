"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // check position on mount
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <a href={href} className="font-medium hover:text-white transition-colors duration-200">
      {label}
    </a>
  );

  const MobileItem = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 hover:bg-white/10 transition"
    >
      {label}
    </a>
  );

  const LangToggle = () => (
    <div className="flex items-center gap-2 text-sm text-gray-400">
      <button
        onClick={() => setLang("en")}
        className={lang === "en" ? "text-white font-medium" : "hover:text-white transition"}
      >
        EN
      </button>
      <span className="opacity-40">/</span>
      <button
        onClick={() => setLang("fr")}
        className={lang === "fr" ? "text-white font-medium" : "hover:text-white transition"}
      >
        FR
      </button>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 overflow-visible ${
        scrolled || open
          ? "backdrop-blur-md bg-black/45 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className={`w-full px-6 sm:px-10 transition-all duration-300 ${scrolled ? "py-1" : "py-3"}`}>
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center">
            <Image
              src="/logo-icon.png"
              alt="Torsolution"
              width={160}
              height={160}
              className="object-contain transition-all duration-300"
              style={{ width: scrolled ? 72 : 160, height: scrolled ? 72 : 160 }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10 text-base tracking-wide text-gray-300">
            <NavLink href="#systems" label={t.navSystems} />
            <NavLink href="#capabilities" label={t.navCapabilities} />
            <NavLink href="#process" label={t.navProcess} />
            <NavLink href="#contact" label={t.navContact} />
            <span className="opacity-20">|</span>
            <LangToggle />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <LangToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
              aria-label="Menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden">
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          <div className="relative z-10 pt-[84px] px-6">
            <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/60 p-4 space-y-3">
              <MobileItem href="#systems" label={t.navSystems} />
              <MobileItem href="#capabilities" label={t.navCapabilities} />
              <MobileItem href="#process" label={t.navProcess} />
              <MobileItem href="#contact" label={t.navContact} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

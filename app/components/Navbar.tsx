"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/app/providers/LangProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const Item = ({
    href,
    label,
  }: {
    href: string;
    label: string;
  }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 hover:bg-white/10 transition"
    >
      {label}
    </a>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || open
          ? "backdrop-blur-md bg-black/50 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <div className="text-lg font-semibold tracking-wide">Torsolution</div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#systems" className="hover:text-white transition">
            {lang === "en" ? "Systems" : "Systèmes"}
          </a>
          <a href="#capabilities" className="hover:text-white transition">
            {lang === "en" ? "Capabilities" : "Compétences"}
          </a>
          <a href="#process" className="hover:text-white transition">
            {lang === "en" ? "Process" : "Processus"}
          </a>
          <a href="#contact" className="hover:text-white transition">
            {lang === "en" ? "Contact" : "Contact"}
          </a>

          <div className="flex items-center gap-2 text-xs text-gray-400 ml-2">
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-white" : "hover:text-white"}
            >
              EN
            </button>
            <span>/</span>
            <button
              onClick={() => setLang("fr")}
              className={lang === "fr" ? "text-white" : "hover:text-white"}
            >
              FR
            </button>
          </div>
        </div>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-white" : "hover:text-white"}
            >
              EN
            </button>
            <span>/</span>
            <button
              onClick={() => setLang("fr")}
              className={lang === "fr" ? "text-white" : "hover:text-white"}
            >
              FR
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
            aria-label="Open menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
  <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4 text-gray-200">
    <a
      href="#systems"
      onClick={() => setOpen(false)}
      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm hover:bg-white/10 transition"
    >
      {lang === "en" ? "Systems" : "Systèmes"}
    </a>

    <a
      href="#capabilities"
      onClick={() => setOpen(false)}
      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm hover:bg-white/10 transition"
    >
      {lang === "en" ? "Capabilities" : "Compétences"}
    </a>

    <a
      href="#process"
      onClick={() => setOpen(false)}
      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm hover:bg-white/10 transition"
    >
      {lang === "en" ? "Process" : "Processus"}
    </a>

    <a
      href="#contact"
      onClick={() => setOpen(false)}
      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm hover:bg-white/10 transition"
    >
      {lang === "en" ? "Contact" : "Contact"}
    </a>
  </div>
)}
    </nav>
  );
}
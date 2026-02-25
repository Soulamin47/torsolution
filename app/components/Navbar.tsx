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

  // lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
      className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 hover:bg-white/10 transition"
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
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-6">
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4 space-y-3">
              <Item
                href="#systems"
                label={lang === "en" ? "Systems" : "Systèmes"}
              />
              <Item
                href="#capabilities"
                label={lang === "en" ? "Capabilities" : "Compétences"}
              />
              <Item
                href="#process"
                label={lang === "en" ? "Process" : "Processus"}
              />
              <Item
                href="#contact"
                label={lang === "en" ? "Contact" : "Contact"}
              />
            </div>

            <div className="mt-4 text-xs text-gray-400">
              {lang === "en"
                ? "Tip: tap outside to close."
                : "Astuce : touche l’extérieur pour fermer."}
            </div>

            {/* Click outside area to close */}
            <button
              onClick={() => setOpen(false)}
              className="fixed inset-0 w-full h-full"
              aria-label="Close menu"
              style={{ background: "transparent" }}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
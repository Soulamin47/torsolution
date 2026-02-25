"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/app/providers/LangProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-black/45 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-8 py-5 flex justify-between items-center">
        
        {/* LEFT - Logo */}
        <div>
          <div className="text-lg font-semibold tracking-wide">
            Torsolution
          </div>
          <div className="text-xs text-gray-400">
            {lang === "en"
              ? "Advanced Product Engineering"
              : "Ingénierie Produit Avancée"}
          </div>
        </div>

        {/* RIGHT - Links + Language */}
        <div className="flex items-center gap-8">

          {/* Navigation */}
          <div className="flex gap-8 text-sm text-gray-300">
            <a href="#systems" className="hover:text-white transition">
              {lang === "en" ? "Systems" : "Systèmes"}
            </a>
            <a href="#process" className="hover:text-white transition">
              {lang === "en" ? "Process" : "Processus"}
            </a>
            <a href="#contact" className="hover:text-white transition">
              {lang === "en" ? "Contact" : "Contact"}
            </a>
          </div>

          {/* Language Switch */}
          <div className="flex gap-2 text-xs text-gray-400 border-l border-white/10 pl-6">
            <button
              onClick={() => setLang("en")}
              className={`transition hover:text-white ${
                lang === "en" ? "text-white" : ""
              }`}
            >
              EN
            </button>
            <span>/</span>
            <button
              onClick={() => setLang("fr")}
              className={`transition hover:text-white ${
                lang === "fr" ? "text-white" : ""
              }`}
            >
              FR
            </button>
          </div>

        </div>
      </div>

      {/* Premium glow line when scrolled */}
      {scrolled && (
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
      )}
    </nav>
  );
}
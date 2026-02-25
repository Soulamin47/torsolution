"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang } from "@/app/providers/LangProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll ONLY when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <a href={href} className="hover:text-white transition">
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || open
          ? "backdrop-blur-md bg-black/45 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* FULL WIDTH BAR */}
      <div className="w-full px-6 sm:px-10 py-4">
        {/* NICE CONTAINER */}
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3">
           <img
            src="/logo-icon.png"
            alt="Torsolution"
            width={34}
            height={34}
            style={{ display: "block" }}
        />
         <div className="flex flex-col leading-tight">
         <span className="text-lg font-semibold tracking-wide">Torsolution</span>
         <span className="text-[11px] text-gray-400">Advanced Product Engineering</span>
       </div>
     </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <NavLink
              href="#systems"
              label={lang === "en" ? "Systems" : "Systèmes"}
            />
            <NavLink
              href="#capabilities"
              label={lang === "en" ? "Capabilities" : "Compétences"}
            />
            <NavLink
              href="#process"
              label={lang === "en" ? "Process" : "Processus"}
            />
            <NavLink href="#contact" label="Contact" />

            <div className="ml-2 flex items-center gap-2 text-xs text-gray-400">
              <span className="opacity-40">|</span>
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

          {/* Mobile */}
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
              aria-label="Menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden">
          {/* click outside closes */}
          <div className="absolute inset-0" onClick={() => setOpen(false)} />

          {/* menu content ABOVE overlay */}
          <div className="relative z-10 pt-[84px] px-6">
            <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/60 p-4 space-y-3">
              <MobileItem
                href="#systems"
                label={lang === "en" ? "Systems" : "Systèmes"}
              />
              <MobileItem
                href="#capabilities"
                label={lang === "en" ? "Capabilities" : "Compétences"}
              />
              <MobileItem
                href="#process"
                label={lang === "en" ? "Process" : "Processus"}
              />
              <MobileItem href="#contact" label="Contact" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
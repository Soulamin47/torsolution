"use client";

import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { siteConfig } from "@/lib/site";

const PROJECTS = ["Bloom", "Onstage", "TorStock", "Torfix"];

export default function Footer() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 py-8 space-y-6">
        {/* Top row: logo + nav */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[11px] tracking-widest text-[#F0EEE8]/30">
            TOR<span className="text-[#AFA9EC]/50">_</span>SOLUTION
          </span>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { href: "#systems", label: t.navSystems },
              { href: "#capabilities", label: t.navCapabilities },
              { href: "#process", label: t.navProcess },
              { href: "#contact", label: t.navContact },
              { href: `mailto:${siteConfig.email}`, label: siteConfig.email },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[11px] text-[#F0EEE8]/30 hover:text-[#F0EEE8]/60 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row: projects + copyright */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-white/[0.04] pt-5">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {PROJECTS.map((p) => (
              <span
                key={p}
                className="font-mono text-[10px] text-[#F0EEE8]/20"
              >
                {p}
              </span>
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

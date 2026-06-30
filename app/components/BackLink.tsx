"use client";

import Link from "next/link";
import { useLang } from "@/app/providers/LangProvider";

export default function BackLink({ href, fallbackLabel }: { href: string; fallbackLabel?: { en: string; fr: string } }) {
  const { lang } = useLang();
  const label = fallbackLabel
    ? fallbackLabel[lang]
    : lang === "fr"
      ? "Retour à l'accueil"
      : "Back to home";

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#F0EEE8]/35 transition-colors hover:text-[#F0EEE8]/70"
    >
      <span aria-hidden="true">←</span>
      {label}
    </Link>
  );
}

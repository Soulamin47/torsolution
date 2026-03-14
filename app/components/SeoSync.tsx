"use client";

import { useEffect } from "react";
import { useLang } from "@/app/providers/LangProvider";

export default function SeoSync() {
  const { lang } = useLang();

  useEffect(() => {
    document.title =
      lang === "en"
        ? "Torsolution | Freelance Developer — Web, Mobile & AI"
        : "Torsolution | Développeur Freelance — Web, Mobile & IA";

    const desc =
      lang === "en"
        ? "Freelance developer based in Brussels. I build fast, reliable web & mobile products, business platforms and AI-powered tools."
        : "Développeur freelance basé à Bruxelles. Je conçois et développe des applications web, mobile, des plateformes métier et des outils IA fiables et performants.";

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;

    document.documentElement.lang = lang;
  }, [lang]); // only lang as dependency

  return null;
}

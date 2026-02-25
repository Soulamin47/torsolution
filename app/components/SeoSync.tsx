"use client";

import { useEffect } from "react";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";

export default function SeoSync() {
  const { lang } = useLang();
  const t = translations[lang];

  useEffect(() => {
    // Title
    const title =
      lang === "en"
        ? "Torsolution | Advanced Product Engineering"
        : "Torsolution | Ingénierie Produit Avancée";
    document.title = title;

    // Meta description
    const desc =
      lang === "en"
        ? "Engineering high-performance digital systems: web, mobile, AI & scalable architectures."
        : "Ingénierie de systèmes numériques haute performance : web, mobile, IA et architectures évolutives.";

    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;

    // Update html lang
    document.documentElement.lang = lang;
  }, [lang, t]);

  return null;
}
"use client";

import Link from "next/link";
import { useLang } from "@/app/providers/LangProvider";
import { siteConfig } from "@/lib/site";
import { localizedHref } from "@/lib/locale";

const content = {
  en: {
    title: "Legal notices",
    sections: [
      {
        heading: "Publisher",
        body: [
          "Company name: Torsolution",
          "Legal status: Freelance / Self-employed",
          "Registered address: Brussels, Belgium",
          "BCE / KBO number: [YOUR BCE NUMBER]",
          "VAT number: BE [YOUR VAT NUMBER]",
          `Email: ${siteConfig.email}`,
          `Website: ${siteConfig.url}`,
        ],
      },
      {
        heading: "Publication director",
        body: ["The publication director is the owner of Torsolution."],
      },
      {
        heading: "Hosting",
        body: [
          "This website is hosted by Vercel Inc.",
          "340 Pine Street, Suite 701",
          "San Francisco, CA 94104, United States",
          "vercel.com",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "All content on this website (texts, images, graphics, logo) is the exclusive property of Torsolution and is protected by Belgian and international copyright law.",
          "Any reproduction, distribution or use without prior written permission is strictly prohibited.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "Torsolution makes every effort to provide accurate and up-to-date information, but cannot be held responsible for errors, omissions or results obtained through the use of this information.",
        ],
      },
    ],
  },
  fr: {
    title: "Mentions légales",
    sections: [
      {
        heading: "Éditeur",
        body: [
          "Dénomination : Torsolution",
          "Statut juridique : Indépendant / Freelance",
          "Siège social : Bruxelles, Belgique",
          "Numéro BCE / KBO : [VOTRE NUMÉRO BCE]",
          "Numéro de TVA : BE [VOTRE NUMÉRO TVA]",
          `Email : ${siteConfig.email}`,
          `Site web : ${siteConfig.url}`,
        ],
      },
      {
        heading: "Responsable de publication",
        body: ["Le responsable de publication est le propriétaire de Torsolution."],
      },
      {
        heading: "Hébergement",
        body: [
          "Ce site est hébergé par Vercel Inc.",
          "340 Pine Street, Suite 701",
          "San Francisco, CA 94104, États-Unis",
          "vercel.com",
        ],
      },
      {
        heading: "Propriété intellectuelle",
        body: [
          "L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo) est la propriété exclusive de Torsolution et est protégé par les lois belges et internationales relatives au droit d'auteur.",
          "Toute reproduction, diffusion ou utilisation sans autorisation écrite préalable est strictement interdite.",
        ],
      },
      {
        heading: "Responsabilité",
        body: [
          "Torsolution met tout en œuvre pour fournir des informations exactes et à jour, mais ne peut être tenu responsable des erreurs, omissions ou résultats obtenus par l'utilisation de ces informations.",
        ],
      },
    ],
  },
};

export default function LegalContent() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <section className="bg-[#f3f0e8] px-6 py-24 text-[#15141a] sm:px-8">
      <div className="mx-auto max-w-3xl rounded-[24px] border border-black/[0.08] bg-white/55 p-7 shadow-[0_30px_90px_rgba(30,25,20,.07)] md:p-12">
        <Link
          href={localizedHref("/", lang)}
          className="mb-10 inline-flex items-center gap-2 text-sm text-black/40 transition hover:text-black"
        >
          ← {lang === "fr" ? "Retour" : "Back"}
        </Link>
        <h1 className="text-[clamp(36px,5vw,58px)] font-medium tracking-[-.05em]">{c.title}</h1>
        <div className="mt-10 space-y-10">
          {c.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-base font-semibold text-[#15141a]">{s.heading}</h2>
              <ul className="mt-3 space-y-1.5">
                {s.body.map((line, i) => (
                  <li key={i} className="text-sm leading-relaxed text-black/48">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

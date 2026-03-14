"use client";

import { useLang } from "@/app/providers/LangProvider";
import { siteConfig } from "@/lib/site";

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

export default function LegalPage() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <main className="min-h-screen bg-[#07070A] text-white px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white">
          ← {lang === "fr" ? "Retour" : "Back"}
        </a>
        <h1 className="text-3xl font-semibold tracking-tight">{c.title}</h1>
        <div className="mt-10 space-y-10">
          {c.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-base font-semibold text-white">{s.heading}</h2>
              <ul className="mt-3 space-y-1.5">
                {s.body.map((line, i) => (
                  <li key={i} className="text-sm text-gray-400">{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

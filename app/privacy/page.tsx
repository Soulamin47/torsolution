"use client";

import { useLang } from "@/app/providers/LangProvider";
import { siteConfig } from "@/lib/site";

const content = {
  en: {
    title: "Privacy policy",
    intro: "Torsolution is committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR – EU 2016/679) and Belgian law.",
    sections: [
      {
        heading: "Data controller",
        body: [
          `Torsolution — ${siteConfig.email}`,
          "Brussels, Belgium",
        ],
      },
      {
        heading: "Data collected",
        body: [
          "When you submit the contact form, we collect: your name, email address, and the content of your message.",
          "We do not collect any sensitive data. We do not use tracking cookies or analytics tools.",
          "The only cookie used is a functional cookie to remember your language preference (EN/FR).",
        ],
      },
      {
        heading: "Purpose and legal basis",
        body: [
          "Your data is collected solely to respond to your inquiry (legitimate interest, Art. 6.1.f GDPR).",
          "We do not use your data for marketing, profiling or third-party sharing.",
        ],
      },
      {
        heading: "Data retention",
        body: [
          "Your data is kept only as long as necessary to respond to your request, and for a maximum of 3 years in our email records.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Under the GDPR, you have the right to: access, rectify, erase, limit or object to the processing of your data.",
          `To exercise your rights, contact us at: ${siteConfig.email}`,
          "You also have the right to lodge a complaint with the Belgian Data Protection Authority (APD/GBA): www.dataprotectionauthority.be",
        ],
      },
      {
        heading: "Security",
        body: [
          "We take appropriate technical and organisational measures to protect your data against loss, unauthorised access or disclosure.",
        ],
      },
      {
        heading: "Updates",
        body: [
          `This policy was last updated on ${new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}.`,
        ],
      },
    ],
  },
  fr: {
    title: "Politique de confidentialité",
    intro: "Torsolution s'engage à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et à la législation belge.",
    sections: [
      {
        heading: "Responsable du traitement",
        body: [
          `Torsolution — ${siteConfig.email}`,
          "Bruxelles, Belgique",
        ],
      },
      {
        heading: "Données collectées",
        body: [
          "Lors de la soumission du formulaire de contact, nous collectons : votre nom, votre adresse e-mail et le contenu de votre message.",
          "Nous ne collectons aucune donnée sensible. Nous n'utilisons pas de cookies de traçage ni d'outils d'analytics.",
          "Le seul cookie utilisé est un cookie fonctionnel permettant de mémoriser votre préférence de langue (FR/EN).",
        ],
      },
      {
        heading: "Finalité et base légale",
        body: [
          "Vos données sont collectées uniquement pour répondre à votre demande (intérêt légitime, Art. 6.1.f RGPD).",
          "Nous n'utilisons pas vos données à des fins marketing, de profilage ou de transmission à des tiers.",
        ],
      },
      {
        heading: "Durée de conservation",
        body: [
          "Vos données sont conservées uniquement le temps nécessaire pour répondre à votre demande, et au maximum 3 ans dans nos archives e-mail.",
        ],
      },
      {
        heading: "Vos droits",
        body: [
          "Conformément au RGPD, vous disposez du droit d'accès, de rectification, d'effacement, de limitation ou d'opposition au traitement de vos données.",
          `Pour exercer vos droits, contactez-nous à : ${siteConfig.email}`,
          "Vous avez également le droit d'introduire une réclamation auprès de l'Autorité de Protection des Données (APD/GBA) : www.autoriteprotectiondonnees.be",
        ],
      },
      {
        heading: "Sécurité",
        body: [
          "Nous prenons les mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'accès non autorisé ou la divulgation.",
        ],
      },
      {
        heading: "Mises à jour",
        body: [
          `Cette politique a été mise à jour le ${new Date().toLocaleDateString("fr-BE", { year: "numeric", month: "long", day: "numeric" })}.`,
        ],
      },
    ],
  },
};

export default function PrivacyPage() {
  const { lang } = useLang();
  const c = content[lang];

  return (
    <main className="min-h-screen bg-[#07070A] text-white px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <a href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-white">
          ← {lang === "fr" ? "Retour" : "Back"}
        </a>
        <h1 className="text-3xl font-semibold tracking-tight">{c.title}</h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-400">{c.intro}</p>
        <div className="mt-10 space-y-8">
          {c.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-base font-semibold text-white">{s.heading}</h2>
              <ul className="mt-3 space-y-2">
                {s.body.map((line, i) => (
                  <li key={i} className="text-sm leading-relaxed text-gray-400">{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

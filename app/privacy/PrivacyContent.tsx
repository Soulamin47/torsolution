"use client";

import Link from "next/link";
import { useLang } from "@/app/providers/LangProvider";
import { siteConfig } from "@/lib/site";
import { localizedHref } from "@/lib/locale";

const content = {
  en: {
    title: "Privacy policy",
    intro:
      "Torsolution is committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR – EU 2016/679) and Belgian law.",
    sections: [
      {
        heading: "Data controller",
        body: [`Torsolution — ${siteConfig.email}`, "Brussels, Belgium"],
      },
      {
        heading: "Data collected",
        body: [
          "When you submit the contact form, we collect: your name, email address, and the content of your message.",
          "We do not collect any sensitive data. We do not use tracking cookies or analytics tools.",
          "Your language is determined by the page URL (EN/FR). Some pages may store interface preferences locally in your browser.",
        ],
      },
      {
        heading: "Purpose and legal basis",
        body: [
          "Your data is collected solely to respond to your inquiry (legitimate interest, Art. 6.1.f GDPR).",
          "We do not use your data for marketing or profiling, and we do not share it with third parties other than the service providers listed below.",
        ],
      },
      {
        heading: "Service providers and transfers",
        body: [
          "Hosting: Vercel Inc. (United States) hosts this website and processes technical connection data (IP address, browser) to deliver it.",
          "Email delivery: messages sent through the contact form are delivered by our email provider (Resend, Inc., United States, or our mailbox provider).",
          "WhatsApp: if you choose to contact us via WhatsApp, your message is processed by WhatsApp (Meta Platforms Ireland Ltd.) under its own privacy policy.",
          "Transfers outside the European Union rely on appropriate safeguards (EU–US Data Privacy Framework or the European Commission's standard contractual clauses).",
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
          "This policy was last updated on 12 October 2026.",
        ],
      },
    ],
  },
  fr: {
    title: "Politique de confidentialité",
    intro:
      "Torsolution s'engage à protéger vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et à la législation belge.",
    sections: [
      {
        heading: "Responsable du traitement",
        body: [`Torsolution — ${siteConfig.email}`, "Bruxelles, Belgique"],
      },
      {
        heading: "Données collectées",
        body: [
          "Lors de la soumission du formulaire de contact, nous collectons : votre nom, votre adresse e-mail et le contenu de votre message.",
          "Nous ne collectons aucune donnée sensible. Nous n'utilisons pas de cookies de traçage ni d'outils d'analytics.",
          "La langue est déterminée par l’adresse de la page (FR/EN). Certaines pages peuvent enregistrer des préférences d’interface localement dans votre navigateur.",
        ],
      },
      {
        heading: "Finalité et base légale",
        body: [
          "Vos données sont collectées uniquement pour répondre à votre demande (intérêt légitime, Art. 6.1.f RGPD).",
          "Nous n'utilisons pas vos données à des fins marketing ou de profilage, et nous ne les transmettons à aucun tiers en dehors des prestataires listés ci-dessous.",
        ],
      },
      {
        heading: "Prestataires et transferts",
        body: [
          "Hébergement : Vercel Inc. (États-Unis) héberge ce site et traite les données techniques de connexion (adresse IP, navigateur) nécessaires à son affichage.",
          "Envoi des e-mails : les messages du formulaire de contact sont acheminés par notre prestataire e-mail (Resend, Inc., États-Unis, ou notre fournisseur de messagerie).",
          "WhatsApp : si vous choisissez de nous contacter via WhatsApp, votre message est traité par WhatsApp (Meta Platforms Ireland Ltd.) selon sa propre politique de confidentialité.",
          "Les transferts hors de l'Union européenne reposent sur des garanties appropriées (EU–US Data Privacy Framework ou clauses contractuelles types de la Commission européenne).",
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
          "Cette politique a été mise à jour le 12 octobre 2026.",
        ],
      },
    ],
  },
};

export default function PrivacyContent() {
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
        <p className="mt-4 text-sm leading-relaxed text-black/48">{c.intro}</p>
        <div className="mt-10 space-y-8">
          {c.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-base font-semibold text-[#15141a]">{s.heading}</h2>
              <ul className="mt-3 space-y-2">
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

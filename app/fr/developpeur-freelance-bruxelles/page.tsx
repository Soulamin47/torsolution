import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";
import LocalLanding from "@/app/components/LocalLanding";
import JsonLd from "@/app/components/JsonLd";
import { siteConfig } from "@/lib/site";

const enUrl = `${siteConfig.url}/freelance-developer-brussels`;
const frUrl = `${siteConfig.url}/fr/developpeur-freelance-bruxelles`;

export const metadata: Metadata = {
  title: "Développeur Freelance Bruxelles — Web, Mobile & IA",
  description: "Développeur freelance basé à Bruxelles pour vos applications web, mobiles, plateformes métier et automatisations IA. Un interlocuteur de l'idée au lancement.",
  keywords: ["développeur freelance Bruxelles", "développeur web Bruxelles", "création application Bruxelles", "développeur Next.js Belgique", "développeur Flutter Bruxelles"],
  alternates: { canonical: frUrl, languages: { en: enUrl, fr: frUrl, "x-default": enUrl } },
  openGraph: { type: "website", url: frUrl, title: "Développeur Freelance Bruxelles — Torsolution", description: "Création de produits web, mobiles et IA à Bruxelles.", images: ["/og"] },
};

export default function DeveloppeurBruxellesPage() {
  const schemas = [{ "@context": "https://schema.org", "@type": "ProfessionalService", name: "Torsolution", url: frUrl, email: siteConfig.email, areaServed: ["Bruxelles", "Belgique"], serviceType: ["Développement web", "Application mobile", "Automatisation IA"] }];
  return <PageShell><JsonLd schemas={schemas} /><LocalLanding lang="fr" /></PageShell>;
}

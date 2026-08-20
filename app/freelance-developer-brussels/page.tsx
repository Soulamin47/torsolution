import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";
import LocalLanding from "@/app/components/LocalLanding";
import JsonLd from "@/app/components/JsonLd";
import { siteConfig } from "@/lib/site";

const enUrl = `${siteConfig.url}/freelance-developer-brussels`;
const frUrl = `${siteConfig.url}/fr/developpeur-freelance-bruxelles`;

export const metadata: Metadata = {
  title: "Freelance Developer Brussels — Web, Mobile & AI",
  description: "Brussels-based freelance developer for web applications, mobile apps, business platforms and AI automation. Direct collaboration from scope to launch.",
  keywords: ["freelance developer Brussels", "web developer Brussels", "app developer Belgium", "Next.js developer Brussels", "Flutter developer Brussels"],
  alternates: { canonical: enUrl, languages: { en: enUrl, fr: frUrl, "x-default": enUrl } },
  openGraph: { type: "website", url: enUrl, title: "Freelance Developer Brussels — Torsolution", description: "Web, mobile and AI product development in Brussels.", images: ["/og"] },
};

export default function BrusselsDeveloperPage() {
  const schemas = [{ "@context": "https://schema.org", "@type": "ProfessionalService", name: "Torsolution", url: enUrl, email: siteConfig.email, areaServed: ["Brussels", "Belgium"], serviceType: ["Web development", "Mobile app development", "AI automation"] }];
  return <PageShell><JsonLd schemas={schemas} /><LocalLanding lang="en" /></PageShell>;
}

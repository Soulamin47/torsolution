import type { Metadata } from "next";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { buildAlternates } from "@/lib/locale";
import { servicesIndexSchema } from "@/lib/schemas";
import PageShell from "@/app/components/PageShell";
import JsonLd from "@/app/components/JsonLd";
import ServicesIndex from "@/app/services/ServicesIndex";

export const metadata: Metadata = {
  title: "Services — Développeur freelance web, mobile et IA",
  description:
    "Services de développement freelance basés à Bruxelles — applications web, mobile, plateformes métier, automatisation IA, Web3 et plateformes sociales.",
  alternates: buildAlternates("/services", "fr"),
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/fr/services`,
    title: "Services — Torsolution",
    description:
      "Services de développement freelance — web, mobile, plateformes, IA, Web3, social.",
    siteName: siteConfig.name,
    locale: "fr_BE",
    alternateLocale: ["en_US"],
    images: ["/og"],
  },
};

export default function FrServicesPage() {
  return (
    <PageShell>
      <JsonLd schemas={servicesIndexSchema(services, "fr")} />
      <ServicesIndex services={services} />
    </PageShell>
  );
}

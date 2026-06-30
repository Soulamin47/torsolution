import type { Metadata } from "next";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { buildAlternates } from "@/lib/locale";
import { servicesIndexSchema } from "@/lib/schemas";
import PageShell from "@/app/components/PageShell";
import JsonLd from "@/app/components/JsonLd";
import ServicesIndex from "./ServicesIndex";

export const metadata: Metadata = {
  title: "Services — Freelance development for web, mobile and AI",
  description:
    "End-to-end freelance development services from Brussels — web apps, mobile apps, internal platforms, AI automation, Web3 and social platforms.",
  alternates: buildAlternates("/services"),
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/services`,
    title: "Services — Torsolution",
    description:
      "Freelance development services from Brussels — web, mobile, platforms, AI, Web3, social.",
    siteName: siteConfig.name,
    locale: "en_US",
    alternateLocale: ["fr_BE"],
    images: ["/og"],
  },
};

export default function ServicesPage() {
  return (
    <PageShell>
      <JsonLd schemas={servicesIndexSchema(services, "en")} />
      <ServicesIndex services={services} />
    </PageShell>
  );
}

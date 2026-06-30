import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { buildAlternates } from "@/lib/locale";
import { serviceSchemas } from "@/lib/schemas";
import PageShell from "@/app/components/PageShell";
import JsonLd from "@/app/components/JsonLd";
import ServiceDetail from "@/app/services/[slug]/ServiceDetail";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.fr.title} — Développement freelance ${service.fr.tag}`;
  const description = service.fr.tagline + " " + service.fr.intro.slice(0, 140);
  const canonicalPath = `/services/${service.slug}`;

  return {
    title,
    description,
    keywords: service.metaKeywords,
    alternates: buildAlternates(canonicalPath, "fr"),
    openGraph: {
      type: "article",
      url: `${siteConfig.url}/fr${canonicalPath}`,
      title,
      description,
      siteName: siteConfig.name,
      locale: "fr_BE",
      alternateLocale: ["en_US"],
      images: ["/og"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og"],
    },
  };
}

export default async function FrServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <PageShell>
      <JsonLd schemas={serviceSchemas(service, "fr")} />
      <ServiceDetail service={service} />
    </PageShell>
  );
}

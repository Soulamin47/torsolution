import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getService } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { buildAlternates } from "@/lib/locale";
import { serviceSchemas } from "@/lib/schemas";
import PageShell from "@/app/components/PageShell";
import JsonLd from "@/app/components/JsonLd";
import ServiceDetail from "./ServiceDetail";

// SEO: pre-render every service URL at build time
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

  const title = `${service.en.title} — Freelance ${service.en.tag} development`;
  const description = service.en.tagline + " " + service.en.intro.slice(0, 140);
  const canonicalPath = `/services/${service.slug}`;

  return {
    title,
    description,
    keywords: service.metaKeywords,
    alternates: buildAlternates(canonicalPath),
    openGraph: {
      type: "article",
      url: `${siteConfig.url}${canonicalPath}`,
      title,
      description,
      siteName: siteConfig.name,
      locale: "en_US",
      alternateLocale: ["fr_BE"],
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

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <PageShell>
      <JsonLd schemas={serviceSchemas(service, "en")} />
      <ServiceDetail service={service} />
    </PageShell>
  );
}

import type { Metadata } from "next";
import { buildAlternates } from "@/lib/locale";
import PrivacyContent from "./PrivacyContent";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Torsolution collects, uses and protects your personal data under the GDPR: contact form data, service providers, retention and your rights.",
  alternates: buildAlternates("/privacy"),
};

export default function PrivacyPage() {
  return <PageShell><PrivacyContent /></PageShell>;
}

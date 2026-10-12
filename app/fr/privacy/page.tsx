import type { Metadata } from "next";
import { buildAlternates } from "@/lib/locale";
import PrivacyContent from "@/app/privacy/PrivacyContent";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment Torsolution collecte, utilise et protège vos données personnelles selon le RGPD : formulaire de contact, prestataires, conservation et vos droits.",
  alternates: buildAlternates("/privacy", "fr"),
};

export default function FrPrivacyPage() {
  return <PageShell><PrivacyContent /></PageShell>;
}

import type { Metadata } from "next";
import { buildAlternates } from "@/lib/locale";
import PrivacyContent from "@/app/privacy/PrivacyContent";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité — Torsolution.",
  alternates: buildAlternates("/privacy", "fr"),
};

export default function FrPrivacyPage() {
  return <PrivacyContent />;
}

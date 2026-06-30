import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import ProjectLauncher from "@/app/components/ProjectLauncher";
import TechStack from "@/app/components/TechStack";
import Capabilities from "@/app/components/Capabilities";
import Systems from "@/app/components/Systems";
import Process from "@/app/components/Process";
import Manifesto from "@/app/components/Manifesto";
import AboutMe from "@/app/components/AboutMe";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import CursorSpotlight from "@/app/components/CursorSpotlight";
import BackgroundOrbs from "@/app/components/BackgroundOrbs";
import CookieBanner from "@/app/components/CookieBanner";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import NowWidget from "@/app/components/NowWidget";
import JsonLd from "@/app/components/JsonLd";
import { homeSchemas } from "@/lib/schemas";
import { buildAlternates } from "@/lib/locale";
import { siteConfig } from "@/lib/site";

const description =
  "Développeur freelance basé à Bruxelles. Je conçois et développe des applications web, mobile, des plateformes métier et des outils IA fiables et performants.";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Développeur Freelance — Web, Mobile & IA`,
  description,
  alternates: buildAlternates("/", "fr"),
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/fr`,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Développeur Freelance — Web, Mobile & IA`,
    description,
    locale: "fr_BE",
    alternateLocale: ["en_US"],
    images: ["/og"],
  },
};

export default function FrHome() {
  return (
    <main className="min-h-screen bg-[#09080F] text-[#F0EEE8] pt-20 overflow-x-hidden">
      <BackgroundOrbs />
      <CursorSpotlight />
      <div className="relative z-10">
        <JsonLd schemas={homeSchemas("fr")} />
        <Navbar />
        <Hero />
        <ProjectLauncher />
        <TechStack />
        <Capabilities />
        <Systems />
        <Process />
        <Manifesto />
        <AboutMe />
        <CTA />
        <Footer />
        <CookieBanner />
        <FloatingWhatsApp />
        <NowWidget />
      </div>
    </main>
  );
}

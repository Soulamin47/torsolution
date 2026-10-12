import type { Metadata } from "next";
import Link from "next/link";
import { headers } from "next/headers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { detectLocale, localizedHref } from "@/lib/locale";

export const metadata: Metadata = {
  title: "404",
  robots: { index: false, follow: true },
};

const COPY = {
  en: {
    eyebrow: "Error 404",
    heading: "This page does not exist.",
    intro: "The link may be outdated or the address mistyped. Here is where you can go instead.",
    home: "Back to home",
  },
  fr: {
    eyebrow: "Erreur 404",
    heading: "Cette page n’existe pas.",
    intro: "Le lien est peut-être obsolète ou l’adresse mal saisie. Voici où continuer.",
    home: "Retour à l’accueil",
  },
};

export default async function NotFound() {
  const lang = detectLocale((await headers()).get("x-pathname"));
  const c = COPY[lang];
  const fr = lang === "fr";

  return (
    <div className="premium-shell">
      <Navbar />
      <main className="info-page" id="main-content">
        <header className="premium-container info-header">
          <p className="premium-eyebrow">{c.eyebrow}</p>
          <h1>{c.heading}</h1>
          <p className="premium-intro">{c.intro}</p>
        </header>
        <section className="premium-container info-next">
          <div className="premium-actions">
            <Link className="premium-button" href={localizedHref("/", lang)}>{c.home} ↗</Link>
            <Link className="premium-link" href={localizedHref("/services", lang)}>Services →</Link>
            <Link className="premium-link" href={localizedHref("/work", lang)}>{fr ? "Réalisations" : "Work"} →</Link>
            <Link className="premium-link" href={localizedHref("/contact", lang)}>Contact →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CTA from "./CTA";
import { infoPages, type InfoPageKind } from "@/lib/info-pages";
import { localizedHref, type Locale } from "@/lib/locale";

export default function InfoPage({ kind, lang }: { kind: InfoPageKind; lang: Locale }) {
  const content = infoPages[lang][kind];
  const fr = lang === "fr";
  return (
    <div className="premium-shell">
      <Navbar />
      <main className="info-page">
        <header className="premium-container info-header">
          <Link className="premium-link" href={localizedHref("/", lang)}>{fr ? "Accueil" : "Home"} /</Link>
          <p className="premium-eyebrow">{kind === "method" ? (fr ? "Méthode" : "Process") : kind === "about" ? (fr ? "À propos" : "About") : "Contact"}</p>
          <h1>{content.heading}</h1>
          <p className="premium-intro">{content.intro}</p>
        </header>
        {kind === "about" && <div className="premium-container"><Image src="/amin.png" alt="Amin Torkhani" width={340} height={420} className="info-portrait" /></div>}
        {content.sections.length > 0 && <div className="premium-container info-sections">
          {content.sections.map((section, index) => <section className="info-section" key={section.title}>
            <span className="premium-eyebrow">0{index + 1}</span>
            <h2>{section.title}</h2>
            <div><p>{section.text}</p><p className="info-detail">{section.detail}</p></div>
          </section>)}
        </div>}
        {kind === "contact" ? <CTA /> : <section className="premium-container info-next">
          <h2>{fr ? "Et votre projet ?" : "What about your project?"}</h2>
          <div className="premium-actions"><Link className="premium-button" href={localizedHref("/contact", lang)}>{fr ? "Parlons-en" : "Let’s talk"} ↗</Link><Link className="premium-link" href={localizedHref("/work", lang)}>{fr ? "Voir les réalisations" : "Explore the work"} →</Link><Link className="premium-link" href={localizedHref("/services", lang)}>{fr ? "Explorer les services" : "Explore services"} →</Link></div>
        </section>}
      </main>
      <Footer />
    </div>
  );
}

"use client";
import Image from "next/image";
import LogoSpace from "./LogoSpace";
import Link from "next/link";
import { useLang } from "@/app/providers/LangProvider";
import { localizedHref } from "@/lib/locale";
const COPY = {
  fr: {
    badge: "Développeur indépendant · Bruxelles",
    titleA: "Bien pensé.",
    titleB: "Bien construit.",
    titleC: "Tout simplement.",
    subtitle: "Je transforme les idées ambitieuses en expériences web, mobile et IA qui se comprennent vite, inspirent confiance et sont prêtes à grandir.",
    primary: "Discuter de votre projet",
    secondary: "Découvrir les projets",
    availability: "2 places disponibles ce trimestre",
    signals: ["8+ ans d'expérience", "4 produits en ligne", "Bruxelles · Remote", "Réponse sous 24h"],
    tensionEyebrow: "Le vrai enjeu",
    tensionTitle: "Les gens n'achètent pas votre technologie.",
    tensionAccent: "Ils achètent la confiance qu'elle leur donne.",
    tensionText: "Un produit peut être techniquement excellent et rester invisible. Mon rôle est de réunir la stratégie, le design et le développement pour que votre valeur soit évidente dès les premières secondes.",
    transformations: [
      { before: "Une idée difficile à expliquer", after: "Une promesse que l'on comprend immédiatement", color: "#ff7a59" },
      { before: "Une interface qui ressemble aux autres", after: "Une expérience avec une vraie personnalité", color: "#7c5cff" },
      { before: "Un projet qui reste en préparation", after: "Un produit en ligne, mesurable et évolutif", color: "#00a878" },
    ],
    workEyebrow: "La preuve par le produit",
    workTitle: "Quelques projets, beaucoup de détails.",
    workText: "Une plateforme créative, une réservation, un inventaire. Des usages différents, la même attention à ce qui se passe derrière l’écran.",
    works: [
      { name: "Bloom", type: "Plateforme sociale IA", result: "Contenu, musique et vidéo réunis dans une expérience créative.", color: "#ffcf4a", slug: "bloom" },
      { name: "Onstage", type: "Marketplace mobile", result: "Artistes et organisateurs connectés dans un parcours de réservation fluide.", color: "#bca7ff", slug: "onstage" },
      { name: "TorStock", type: "Plateforme métier", result: "Le parc informatique hospitalier rendu visible et pilotable en temps réel.", color: "#70e1c1", slug: "torstock" },
    ],
    offerEyebrow: "Une offre simple",
    offerTitle: "Tout ce qu'il faut pour passer de « j'ai une idée » à « c'est en ligne ».",
    offers: [
      { n: "01", title: "Cadrer", text: "Positionnement, utilisateurs, fonctionnalités et priorité. On décide ce qui crée vraiment de la valeur avant d'écrire du code.", tags: ["Stratégie", "Atelier", "Roadmap"] },
      { n: "02", title: "Créer", text: "Une identité visuelle et une expérience qui donnent une impression de qualité avant même que l'utilisateur ait tout exploré.", tags: ["UX/UI", "Prototype", "Motion"] },
      { n: "03", title: "Construire", text: "Une application web, mobile ou IA rapide, fiable et maintenable, avec des fondations prévues pour la suite.", tags: ["Next.js", "Flutter", "IA"] },
      { n: "04", title: "Lancer", text: "Mise en production, analytics, suivi et améliorations. Le lancement devient le début de l'apprentissage, pas la fin du projet.", tags: ["Déploiement", "Mesure", "Support"] },
    ],
    founderEyebrow: "Votre interlocuteur",
    founderTitle: "Derrière le code, Amin.",
    founderText: "J’aime comprendre comment les choses fonctionnent — et comment les rendre plus simples. Sur votre projet, c’est avec moi que vous échangez, du premier croquis aux derniers ajustements. Si une fonctionnalité peut attendre, je vous le dis.",
    founderPoints: ["Conseil honnête, même quand il faut réduire le périmètre", "Communication directe, sans chef de projet intermédiaire", "Code et accès entièrement remis à votre équipe"],
    founderCta: "Découvrir mon approche",
  },
  en: {
    badge: "Independent developer · Brussels",
    titleA: "Thought through.",
    titleB: "Built with care.",
    titleC: "Made to last.",
    subtitle: "I turn ambitious ideas into web, mobile and AI experiences that feel clear, build trust and are ready to grow.",
    primary: "Discuss your project",
    secondary: "Explore the work",
    availability: "2 project slots available this quarter",
    signals: ["8+ years experience", "4 live products", "Brussels · Remote", "Reply within 24h"],
    tensionEyebrow: "The real challenge",
    tensionTitle: "People do not buy your technology.",
    tensionAccent: "They buy the confidence it gives them.",
    tensionText: "A product can be technically excellent and remain invisible. I bring strategy, design and development together so your value feels obvious within seconds.",
    transformations: [
      { before: "An idea that is hard to explain", after: "A promise people understand instantly", color: "#ff7a59" },
      { before: "An interface that looks like everything else", after: "An experience with a real personality", color: "#7c5cff" },
      { before: "A project stuck in preparation", after: "A live, measurable and extendable product", color: "#00a878" },
    ],
    workEyebrow: "Proof through product",
    workTitle: "Selected work. Every detail considered.",
    workText: "A creative platform, a booking, an inventory. Different uses, the same attention to what happens behind the screen.",
    works: [
      { name: "Bloom", type: "AI social platform", result: "Content, music and video combined into one creative experience.", color: "#ffcf4a", slug: "bloom" },
      { name: "Onstage", type: "Mobile marketplace", result: "Artists and organizers connected through a fluid booking journey.", color: "#bca7ff", slug: "onstage" },
      { name: "TorStock", type: "Business platform", result: "Hospital IT inventory made visible and manageable in real time.", color: "#70e1c1", slug: "torstock" },
    ],
    offerEyebrow: "One simple offer",
    offerTitle: "Everything needed to move from “I have an idea” to “it is live”.",
    offers: [
      { n: "01", title: "Frame", text: "Positioning, users, features and priorities. We decide what creates real value before writing code.", tags: ["Strategy", "Workshop", "Roadmap"] },
      { n: "02", title: "Create", text: "A visual identity and experience that signal quality before users have explored every feature.", tags: ["UX/UI", "Prototype", "Motion"] },
      { n: "03", title: "Build", text: "A fast, reliable and maintainable web, mobile or AI product with foundations made for what comes next.", tags: ["Next.js", "Flutter", "AI"] },
      { n: "04", title: "Launch", text: "Production, analytics, follow-up and improvements. Launch becomes the start of learning, not the end.", tags: ["Deploy", "Measure", "Support"] },
    ],
    founderEyebrow: "Your point of contact",
    founderTitle: "Behind the code, Amin.",
    founderText: "I like understanding how things work — and finding ways to make them simpler. On your project, you work with me, from the first sketch to the final adjustments. If a feature can wait, I’ll tell you.",
    founderPoints: ["Honest advice, even when the scope should be smaller", "Direct communication with no project-manager layer", "Code and accounts fully handed over to your team"],
    founderCta: "Discover my approach",
  },
};


export default function CampaignHome() {
  const { lang } = useLang();
  const c = COPY[lang];
  const fr = lang === "fr";
  return <div className="premium-home">
    <section className="premium-hero premium-container">
      <div>
        <p className="premium-eyebrow">{c.badge}</p>
        <h1>{c.titleA}<br />{c.titleB}<br /><span>{c.titleC}</span></h1>
        <p className="premium-intro">{fr ? "Je suis Amin, développeur indépendant à Bruxelles. Je conçois des applications web, mobile et des outils IA, avec autant de soin pour leur fonctionnement que pour les personnes qui les utilisent." : "I’m Amin, an independent developer in Brussels. I build web applications, mobile products and AI tools, paying as much attention to how they work as to the people using them."}</p>
        <div className="premium-actions"><a className="premium-button" href={localizedHref("/contact", lang)}>{c.primary} <span aria-hidden="true">↗</span></a><Link className="premium-link" href={localizedHref('/work', lang)}>{c.secondary} <span aria-hidden="true">→</span></Link></div>
        <p className="premium-note">{fr ? "Basé à Bruxelles · Collaboration en Belgique et à distance" : "Based in Brussels · Working across Belgium and remotely"}</p>
      </div>
      <div className="studio-logo"><LogoSpace /></div>
    </section>
    <nav className="service-paths premium-container" aria-label={fr ? "Explorer les expertises" : "Explore expertise"}>
      {[
        { slug: "web", title: fr ? "Applications web" : "Web applications", text: fr ? "Des interfaces claires. Des outils faits pour votre métier." : "Clear interfaces. Tools built around your business.", tag: "Next.js · React", icon: "M4 6h24v20H4z M4 11h24 M8 8.5h1 M12 8.5h1 M11 16l-3 3 3 3 M21 16l3 3-3 3" },
        { slug: "mobile", title: fr ? "Produits mobiles" : "Mobile products", text: fr ? "Votre produit, à portée de main. Sur iOS et Android." : "Your product, close at hand. On iOS and Android.", tag: "Flutter · iOS · Android", icon: "M10 3h12a2 2 0 012 2v22a2 2 0 01-2 2H10a2 2 0 01-2-2V5a2 2 0 012-2z M13 7h6 M14 25h4" },
        { slug: "ai-automation", title: fr ? "IA & automatisation" : "AI & automation", text: fr ? "Moins de tâches répétitives. Plus de temps pour l’essentiel." : "Less repetitive work. More time for what matters.", tag: fr ? "Intégrations · Workflows" : "Integrations · Workflows", icon: "M6 16h8 M18 16h8 M16 6v8 M16 18v8 M12 12l8 8 M12 20l8-8 M3 13h6v6H3z M23 13h6v6h-6z M13 3h6v6h-6z M13 23h6v6h-6z" },
      ].map((service, index) => (
        <Link className="service-path" key={service.slug} href={localizedHref(`/services/${service.slug}`, lang)}>
          <div className="service-path-top">
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={service.icon} /></svg>
            <span className="service-path-index">0{index + 1}</span>
          </div>
          <h2>{service.title}</h2>
          <p>{service.text}</p>
          <div className="service-path-bottom"><span>{service.tag}</span><span className="service-path-arrow" aria-hidden="true">↗</span></div>
          <span className="service-path-action">{fr ? "Explorer ce service" : "Explore this service"} <span aria-hidden="true">→</span></span>
        </Link>
      ))}
    </nav>
    <section className="premium-section premium-container" id="projects">
      <p className="premium-eyebrow">{fr ? "Réalisations sélectionnées" : "Selected work"}</p><div className="premium-section-heading"><h2>{c.workTitle}</h2><p>{c.workText}</p></div>
      <div className="premium-projects">{c.works.map((work, i) => <Link className="premium-project" href={localizedHref('/work/' + work.slug, lang)} key={work.slug}><div className="premium-project-top"><span>0{i + 1} / {work.type}</span><span aria-hidden="true">↗</span></div><h3>{work.name}</h3><p>{work.result}</p><span className="premium-project-link">{fr ? "Découvrir le projet" : "View project"} →</span></Link>)}</div>
    </section>
    <section className="premium-process" id="process"><div className="premium-section premium-container"><p className="premium-eyebrow">{fr ? "Une méthode claire" : "A clear process"}</p><h2>{fr ? "On commence par en parler." : "It starts with a conversation."}</h2><p className="premium-founder-text">{fr ? "Un premier échange, un périmètre clair, puis des étapes que nous validons ensemble." : "A first conversation, a clear scope, then milestones we review together."}</p><Link className="premium-link" href={localizedHref("/method", lang)}>{fr ? "Découvrir la méthode de travail" : "Discover the working process"} →</Link><div className="premium-steps">{c.offers.map(offer => <article key={offer.n}><span className="premium-step-number">{offer.n}</span><h3>{offer.title}</h3><p>{offer.text}</p></article>)}</div></div></section>
    <section className="premium-section premium-container premium-founder"><div className="premium-portrait"><Image src="/amin.png" alt="Amin Torkhani" fill sizes="(max-width: 760px) 85vw, 340px" className="object-cover" /></div><div><p className="premium-eyebrow">{c.founderEyebrow}</p><h2>{c.founderTitle}</h2><p className="premium-founder-text">{c.founderText}</p><ul>{c.founderPoints.map(point => <li key={point}><span aria-hidden="true">✓</span>{point}</li>)}</ul><Link className="premium-link" href={localizedHref("/about", lang)}>{c.founderCta} →</Link></div></section>
  </div>;
}

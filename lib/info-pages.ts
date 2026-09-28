import type { Metadata } from "next";
import { buildAlternates, localizedHref, type Locale } from "./locale";
import { siteConfig } from "./site";

export type InfoPageKind = "method" | "about" | "contact";
export const infoPages = {
  fr: {
    method: { title: "Méthode de travail — Développement web et mobile", heading: "On commence par en parler.", description: "Du premier échange à la livraison : découvrez comment Amin cadre, conçoit et développe votre application web, mobile ou outil IA.", intro: "Avant de choisir une technologie, on précise le problème à résoudre. Voici comment nous avançons ensemble, avec des décisions et des livrables à chaque étape.", sections: [
      { title: "Comprendre votre besoin", text: "Nous échangeons sur votre activité, vos utilisateurs et ce qui vous ralentit aujourd’hui. Vous pouvez venir avec un cahier des charges, quelques exemples ou simplement une idée.", detail: "À définir ensemble : les priorités, les contraintes, le budget et le périmètre d’une première version." },
      { title: "Dessiner le parcours", text: "Nous organisons les écrans et les actions importantes. Les choix d’interface se discutent à partir des usages : trouver une information, réserver, gérer un stock ou accomplir une tâche.", detail: "À valider : les parcours, les écrans clés et les règles métier avant leur développement." },
      { title: "Construire et vérifier", text: "Le développement avance par étapes présentables. Vous pouvez donner votre avis sur un produit qui prend forme, et nous vérifions les parcours essentiels, les erreurs possibles et l’affichage sur les appareils concernés.", detail: "À suivre : les démonstrations, les retours et les ajustements de périmètre explicitement convenus." },
      { title: "Livrer et préparer la suite", text: "Nous préparons la mise en ligne, les accès et la prise en main. Les besoins de maintenance et les évolutions sont discutés séparément, selon l’usage réel du produit.", detail: "À transmettre : le code, les accès et les informations nécessaires pour exploiter le projet." },
    ] },
    about: { title: "À propos d’Amin — Développeur indépendant à Bruxelles", heading: "Derrière le code, Amin.", description: "Amin, développeur indépendant à Bruxelles : applications web, mobile, plateformes métier et outils IA. Découvrez mon approche et mes projets.", intro: "Je conçois et développe des applications web, mobile et des outils IA. J’aime comprendre comment les choses fonctionnent — et trouver comment les rendre plus simples.", sections: [
      { title: "Un échange direct", text: "Du premier croquis aux derniers ajustements, vous échangez avec la personne qui construit votre produit. Les questions techniques et les choix de conception se discutent dans le même échange.", detail: "Basé à Bruxelles, je travaille avec vous en Belgique ou à distance." },
      { title: "Partir de l’usage", text: "Une fonctionnalité a du sens si elle aide quelqu’un à faire quelque chose. Je m’intéresse au parcours complet, aux détails qui compliquent une tâche et à ce qui doit rester simple à maintenir.", detail: "Si une fonctionnalité peut attendre, je vous le dis : le périmètre mérite autant d’attention que le code." },
      { title: "Des terrains différents", text: "Bloom, Onstage et TorStock illustrent des contextes différents : création de contenu, réservation et gestion de parc informatique. Les fiches projets détaillent les besoins et les solutions.", detail: "Mes outils incluent notamment Next.js, React, TypeScript et Flutter, selon les besoins du projet." },
    ] },
    contact: { title: "Contact — Parlons de votre projet web, mobile ou IA", heading: "Parlons de ce que vous avez en tête.", description: "Contactez Amin, développeur freelance à Bruxelles, pour discuter de votre application web, mobile ou projet d’automatisation IA.", intro: "Décrivez votre activité, ce que vous souhaitez améliorer et, si vous les connaissez, votre calendrier et votre budget. Un premier message suffit : pas besoin d’un cahier des charges complet.", sections: [] },
  },
  en: {
    method: { title: "Working process — Web and mobile development", heading: "It starts with a conversation.", description: "From first conversation to delivery: how Amin scopes, designs and builds your web application, mobile product or AI tool.", intro: "Before choosing a technology, we define the problem to solve. Here is how we work together, with decisions and deliverables at each stage.", sections: [
      { title: "Understand the need", text: "We discuss your business, your users and what slows you down today. You can bring a specification, a few examples or just an idea.", detail: "Define together: priorities, constraints, budget and the scope of a first version." },
      { title: "Design the journey", text: "We map the key screens and actions. Interface decisions start with actual tasks: finding information, booking, managing inventory or completing a workflow.", detail: "Review: user journeys, key screens and business rules before development." },
      { title: "Build and check", text: "Development progresses in stages you can review. You give feedback as the product takes shape, while we check essential journeys, possible errors and the relevant devices.", detail: "Follow: demonstrations, feedback and explicitly agreed scope changes." },
      { title: "Deliver and plan ahead", text: "We prepare deployment, account access and handover. Maintenance and future changes are discussed separately, based on how the product is used.", detail: "Hand over: source code, access and the information needed to operate the project." },
    ] },
    about: { title: "About Amin — Independent developer in Brussels", heading: "Behind the code, Amin.", description: "Meet Amin, an independent developer in Brussels building web applications, mobile products, business platforms and AI tools.", intro: "I design and build web applications, mobile products and AI tools. I like understanding how things work — and finding ways to make them simpler.", sections: [
      { title: "Direct communication", text: "From the first sketch to the final adjustments, you talk with the person building your product. Technical questions and design choices belong in the same conversation.", detail: "Based in Brussels, I work with you in Belgium or remotely." },
      { title: "Start with the task", text: "A feature matters when it helps someone do something. I care about the whole journey, the details that make tasks harder and what needs to stay maintainable.", detail: "If a feature can wait, I will tell you: scope deserves as much care as code." },
      { title: "Different contexts", text: "Bloom, Onstage and TorStock cover different needs: content creation, booking and IT inventory. Their project pages explain the needs and solutions.", detail: "My tools include Next.js, React, TypeScript and Flutter, depending on the project." },
    ] },
    contact: { title: "Contact — Discuss your web, mobile or AI project", heading: "Tell me what you have in mind.", description: "Contact Amin, a freelance developer in Brussels, to discuss your web application, mobile product or AI automation project.", intro: "Tell me about your business, what you want to improve and, if you know them, your timeline and budget. A first message is enough; you do not need a complete specification.", sections: [] },
  },
};

export function infoMetadata(kind: InfoPageKind, lang: Locale): Metadata {
  const { title, description } = infoPages[lang][kind];
  return {
    title, description, alternates: buildAlternates(`/${kind}`, lang),
    openGraph: { title, description, type: "website", url: siteConfig.url + localizedHref(`/${kind}`, lang), locale: lang === "fr" ? "fr_BE" : "en_US", alternateLocale: [lang === "fr" ? "en_US" : "fr_BE"], images: ["/og"] },
    twitter: { card: "summary_large_image", title, description, images: ["/og"] },
  };
}

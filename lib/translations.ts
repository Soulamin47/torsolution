export type Translation = {
  // Navbar / global
  tagline: string;
  navSystems: string;
  navCapabilities: string;
  navProcess: string;
  navContact: string;

  // Hero
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  viewSystems: string;
  startProject: string;
  scroll: string;
  heroPoints: string[];
  availability: string;

  // Capabilities
  capTitle: string;
  capSubtitle: string;
  capItems: { title: string; desc: string; tag: string; icon: string; tech: string }[];

  // Systems
  sysTitle: string;
  sysSubtitle: string;
  exploreSystem: string;
  sysObjectiveLabel: string;
  sysOutcomeLabel: string;
  sysItems: {
    number: string;
    title: string;
    desc: string;
    objective: string;
    outcome: string;
    tags: string[];
    image: string;
  }[];

  // Process
  procTitle: string;
  procSubtitle: string;
  procSteps: { n: string; title: string; desc: string; icon: string; timing: string }[];
  procGuarantees: string[];

  // CTA
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  ctaCall: string;
  ctaBrief: string;
  ctaResponse: string;

  // Contact form
  contactName: string;
  contactEmail: string;
  contactSubject: string;
  contactMessage: string;
  contactSend: string;
  contactSuccess: string;
  contactError: string;

  // Footer
  footerTagline: string;
  footerLegal: string;
  footerPrivacy: string;
  footerCopyright: string;

  // TrustBar
  trustStats: { value: string; label: string }[];

  // CTA trust badges
  ctaTrustBadges: string[];

  // Cookie banner
  cookieText: string;
  cookieAccept: string;
  cookieDecline: string;
};

export const translations: Record<"en" | "fr", Translation> = {
  en: {
    // Navbar / global
    tagline: "Web · Mobile · AI — Brussels",
    navSystems: "Work",
    navCapabilities: "Expertise",
    navProcess: "Process",
    navContact: "Contact",

    // Hero
    heroBadge: "Full-Stack Engineer · Brussels · Available",
    heroTitle: "I build the product. You build the company.",
    heroSubtitle:
      "I handle the entire technical side of your digital project — website, mobile app, internal tool or AI solution. You tell me what you need. I design, build, test and launch it.",
    viewSystems: "See my work",
    startProject: "Let's talk",
    scroll: "Scroll",
    heroPoints: [
      "Delivered in weeks, not months",
      "Web, mobile, AI & Web3 — all in-house",
      "One engineer. Full ownership.",
    ],
    availability: "🟢 Open to new projects · Brussels / Remote",

    // Capabilities
    capTitle: "What I build",
    capSubtitle:
      "From websites to AI tools — I cover the full spectrum of digital product development, end to end.",
    capItems: [
      {
        title: "Websites & web apps",
        desc: "A website or web application that loads instantly, works on every screen and grows with your business. You focus on your product — I handle all the complexity behind the scenes.",
        tag: "Web",
        icon: "</>",
        tech: "Next.js · React · TypeScript · Node.js · PostgreSQL",
      },
      {
        title: "Mobile apps",
        desc: "An app for iPhone and Android — built once, released on both stores. It looks and feels like a real native app, in half the time of traditional development.",
        tag: "Mobile",
        icon: "📱",
        tech: "Flutter · Dart · iOS · Android · REST APIs",
      },
      {
        title: "Business platforms",
        desc: "A custom tool to manage your operations: dashboard, back-office, internal portal. Built around the way your team actually works — not adapted from a generic template.",
        tag: "Platforms",
        icon: "▦",
        tech: "Next.js · Supabase · PostgreSQL · Recharts · Prisma",
      },
      {
        title: "Social media platforms",
        desc: "A platform to manage content, campaigns and interactions across your social channels in one place. Clear workflows, publishing calendar and performance tracking for your team.",
        tag: "Social",
        icon: "#",
        tech: "Next.js · API Integrations · Automation · Analytics",
      },
      {
        title: "AI & automation",
        desc: "I integrate AI into your workflows to automate repetitive tasks, answer recurring questions and save your team hours every week — without replacing the tools they already use.",
        tag: "AI",
        icon: "◈",
        tech: "OpenAI · LangChain · n8n · Python · Webhooks",
      },
      {
        title: "Web3 & blockchain",
        desc: "Smart contracts and blockchain systems, only when they genuinely add value to your product. I'll give you an honest answer before we build anything.",
        tag: "Web3",
        icon: "◇",
        tech: "Solidity · Ethers.js · Hardhat · EVM · IPFS",
      },
    ],

    // Systems
    sysTitle: "Work",
    sysSubtitle: "Real projects, built from the ground up. Each one in production, used daily.",
    exploreSystem: "Start a similar project →",
    sysObjectiveLabel: "Problem",
    sysOutcomeLabel: "Outcome",
    sysItems: [
      {
        number: "01",
        title: "Real-time analytics & reporting platform",
        desc: "A B2B dashboard built from scratch — live metrics, dynamic filters, exportable reports. The kind of tool that replaces six spreadsheets and two weekly meetings.",
        objective: "Give operations teams a single, real-time view of what's actually happening.",
        outcome: "Hours saved on manual reporting every week. Decisions made on live data, not yesterday's exports.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "B2B"],
        image: "/system-1.jpg",
      },
      {
        number: "02",
        title: "AI assistant & workflow automation",
        desc: "A conversational AI trained on internal knowledge — answers recurring questions, routes requests and triggers automated workflows, all inside the tools the team already uses.",
        objective: "Kill the repetitive support load and the manual hand-offs eating up the team's time.",
        outcome: "Support volume dropped. Response times cut. Hours of manual work automated, every single week.",
        tags: ["AI", "LLM", "LangChain", "Next.js"],
        image: "/system-2.jpg",
      },
      {
        number: "03",
        title: "Inventory & stock management platform",
        desc: "A centralized platform to track stock across multiple warehouses in real time. Automatic reorder alerts, movement history, supplier management — replacing spreadsheets and phone calls with one live system.",
        objective: "Give a distribution business full, real-time visibility over stock levels across 3 locations.",
        outcome: "Stockouts eliminated. Inventory accuracy drastically improved. Hours of manual reconciliation gone every week.",
        tags: ["Next.js", "PostgreSQL", "Real-time", "ERP", "B2B"],
        image: "/system-1.jpg",
      },
    ],

    // Process
    procTitle: "How I work",
    procSubtitle: "Transparent by design. You know exactly where things stand at every step — from brief to launch.",
    procSteps: [
      {
        n: "01",
        title: "Understand the problem",
        desc: "Before writing a line of code, I make sure we're solving the right thing. I ask the hard questions, push back on vague briefs and align on what success actually looks like.",
        icon: "💡",
        timing: "Day 1",
      },
      {
        n: "02",
        title: "Define the build",
        desc: "Scope, stack, timeline — written down, agreed on. You know exactly what you're getting before we start. No scope creep, no moving targets.",
        icon: "⚡",
        timing: "Days 2–3",
      },
      {
        n: "03",
        title: "Build & iterate",
        desc: "Short cycles, regular updates, real feedback loops. You follow the build as it happens — full visibility, no waiting months for a big reveal.",
        icon: "🧱",
        timing: "Weeks 1–4",
      },
      {
        n: "04",
        title: "Ship & hand over",
        desc: "I handle deployment, CI/CD and the first weeks post-launch. Then I hand it over clean — documented, tested and ready to grow.",
        icon: "🚀",
        timing: "Launch day",
      },
    ],
    procGuarantees: [
      "3–4 weeks on average",
      "Weekly progress updates",
      "Full handover included",
    ],

    // CTA
    ctaTitle: "Got a project?",
    ctaSubtitle: "Tell me what you're building. I'll come back with a clear proposal — no pitch deck, no fluff.",
    ctaButton: "Send a message",
    ctaCall: "Book a 15-min call",
    ctaBrief: "Send a brief",
    ctaResponse: "Response within 24 business hours.",

    // Contact form
    contactName: "Your name",
    contactEmail: "Your email",
    contactSubject: "Subject (optional)",
    contactMessage: "Tell me about your project...",
    contactSend: "Send message",
    contactSuccess: "✓ Message sent — I'll get back to you shortly.",
    contactError: "Something went wrong. Please try again or email me directly.",

    // Footer
    footerTagline: "Full-stack engineer · Brussels / Remote · Torsolution.be",
    footerLegal: "Legal notices",
    footerPrivacy: "Privacy policy",
    footerCopyright: `© ${new Date().getFullYear()} Torsolution. All rights reserved.`,

    // TrustBar
    trustStats: [
      { value: "8+", label: "Years of experience" },
      { value: "< 4 wks", label: "Average delivery" },
      { value: "< 24h", label: "Response time" },
      { value: "100%", label: "Code ownership" },
    ],

    // CTA trust badges
    ctaTrustBadges: [
      "No commitment required",
      "Clear proposal within 48h",
      "Full code ownership transferred",
      "NDA available on request",
    ],

    // Cookie banner
    cookieText: "This site uses cookies to remember your language preference and improve your experience.",
    cookieAccept: "Accept",
    cookieDecline: "Decline",
  },

  fr: {
    // Navbar / global
    tagline: "Web · Mobile · IA — Bruxelles",
    navSystems: "Réalisations",
    navCapabilities: "Expertise",
    navProcess: "Méthode",
    navContact: "Contact",

    // Hero
    heroBadge: "Ingénieur full-stack · Bruxelles · Disponible",
    heroTitle: "Je construis le produit. Vous construisez l'entreprise.",
    heroSubtitle:
      "Je prends en charge toute la partie technique de votre projet digital — site web, application mobile, outil interne ou solution IA. Vous décrivez ce dont vous avez besoin. Je conçois, développe, teste et lance.",
    viewSystems: "Voir mes projets",
    startProject: "Parlons-en",
    scroll: "Défiler",
    heroPoints: [
      "Livré en semaines, pas en mois",
      "Web, mobile, IA & Web3 — tout en interne",
      "Un seul interlocuteur, de A à Z.",
    ],
    availability: "🟢 Disponible · Bruxelles / Remote",

    // Capabilities
    capTitle: "Ce que je construis",
    capSubtitle:
      "Du site vitrine à la solution IA sur mesure — je prends en charge l'intégralité du développement, de la conception au déploiement.",
    capItems: [
      {
        title: "Sites & applications web",
        desc: "Un site ou une application web qui charge instantanément, fonctionne sur tous les écrans et grandit avec votre activité. Vous vous concentrez sur votre produit — je gère toute la complexité technique en coulisses.",
        tag: "Web",
        icon: "</>",
        tech: "Next.js · React · TypeScript · Node.js · PostgreSQL",
      },
      {
        title: "Applications mobile",
        desc: "Une app pour iPhone et Android — développée une fois, publiée sur les deux stores. Elle ressemble et se comporte comme une vraie app native, en deux fois moins de temps qu'un développement traditionnel.",
        tag: "Mobile",
        icon: "📱",
        tech: "Flutter · Dart · iOS · Android · REST APIs",
      },
      {
        title: "Plateformes métier",
        desc: "Un outil sur mesure pour piloter votre activité : dashboard, back-office, portail interne. Conçu autour de la façon dont votre équipe travaille vraiment — pas adapté d'un template générique.",
        tag: "Plateformes",
        icon: "▦",
        tech: "Next.js · Supabase · PostgreSQL · Recharts · Prisma",
      },
      {
        title: "Plateformes réseaux sociaux",
        desc: "Une plateforme pour gérer vos contenus, campagnes et interactions sur vos réseaux sociaux au même endroit. Planning éditorial, publication et suivi des performances pour toute l'équipe.",
        tag: "Social",
        icon: "#",
        tech: "Next.js · Intégrations API · Automatisation · Analytics",
      },
      {
        title: "IA & automatisation",
        desc: "J'intègre l'intelligence artificielle dans vos processus pour automatiser les tâches répétitives, répondre aux questions récurrentes et faire gagner des heures à votre équipe chaque semaine — sans remplacer les outils qu'elle utilise déjà.",
        tag: "IA",
        icon: "◈",
        tech: "OpenAI · LangChain · n8n · Python · Webhooks",
      },
      {
        title: "Web3 & blockchain",
        desc: "Des smart contracts et systèmes blockchain, uniquement quand ils apportent une vraie valeur à votre produit. Je vous donne une réponse honnête avant de construire quoi que ce soit.",
        tag: "Web3",
        icon: "◇",
        tech: "Solidity · Ethers.js · Hardhat · EVM · IPFS",
      },
    ],

    // Systems
    sysTitle: "Réalisations",
    sysSubtitle: "Des projets construits de A à Z. Chacun en production, utilisé au quotidien.",
    exploreSystem: "Démarrer un projet similaire →",
    sysObjectiveLabel: "Problème",
    sysOutcomeLabel: "Résultat",
    sysItems: [
      {
        number: "01",
        title: "Plateforme d'analytics & reporting en temps réel",
        desc: "Un dashboard B2B construit de zéro — métriques live, filtres dynamiques, rapports exportables. Le genre d'outil qui remplace six tableurs et deux réunions hebdomadaires.",
        objective: "Donner aux équipes opérationnelles une vue unique et temps réel de ce qui se passe vraiment.",
        outcome: "Des heures de reporting manuel économisées chaque semaine. Des décisions prises sur des données en temps réel, plus sur les exports de la veille.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "B2B"],
        image: "/system-1.jpg",
      },
      {
        number: "02",
        title: "Assistant IA & automatisation de workflows",
        desc: "Un assistant IA entraîné sur la base de connaissance interne — répond aux questions récurrentes, oriente les demandes et déclenche des traitements automatisés, directement depuis les outils que l'équipe utilise déjà.",
        objective: "Supprimer la charge de support répétitive et les transferts manuels qui grignotent le temps de l'équipe.",
        outcome: "Volume de support en baisse. Temps de réponse réduits. Des heures de travail manuel automatisées, chaque semaine.",
        tags: ["IA", "LLM", "LangChain", "Next.js"],
        image: "/system-2.jpg",
      },
      {
        number: "03",
        title: "Plateforme de gestion des stocks & inventaire",
        desc: "Une plateforme centralisée pour suivre les stocks sur plusieurs entrepôts en temps réel. Alertes de réapprovisionnement automatiques, historique des mouvements, gestion des fournisseurs — pour remplacer tableurs et appels téléphoniques par un seul système live.",
        objective: "Donner à une entreprise de distribution une visibilité totale et temps réel sur ses stocks dans 3 sites.",
        outcome: "Ruptures de stock éliminées. Précision de l'inventaire nettement améliorée. Des heures de réconciliation manuelle supprimées chaque semaine.",
        tags: ["Next.js", "PostgreSQL", "Temps réel", "ERP", "B2B"],
        image: "/system-1.jpg",
      },
    ],

    // Process
    procTitle: "Ma méthode",
    procSubtitle: "Tout est transparent. Vous savez à chaque étape où en est votre projet — du brief au lancement.",
    procSteps: [
      {
        n: "01",
        title: "Comprendre le problème",
        desc: "Avant d'écrire une ligne de code, je m'assure qu'on résout le bon problème. Je pose les questions difficiles, je pousse sur les briefs vagues et je verrouille ce que le succès veut dire concrètement.",
        icon: "💡",
        timing: "Jour 1",
      },
      {
        n: "02",
        title: "Cadrer le projet",
        desc: "Périmètre, choix techniques, planning — écrit noir sur blanc, validé ensemble. Vous savez exactement ce que vous obtenez avant qu'on commence. Le budget est connu, les délais sont tenus.",
        icon: "⚡",
        timing: "Jours 2–3",
      },
      {
        n: "03",
        title: "Construire & itérer",
        desc: "Développement en cycles courts, retours réguliers, ajustements au fil de l'eau. Vous suivez l'avancement en continu — pas d'attente de plusieurs semaines sans nouvelles.",
        icon: "🧱",
        timing: "Semaines 1–4",
      },
      {
        n: "04",
        title: "Livrer & transmettre",
        desc: "Je gère le déploiement, la CI/CD et les premières semaines post-lancement. Puis je transmets proprement — documenté, testé, prêt à évoluer.",
        icon: "🚀",
        timing: "Jour J",
      },
    ],
    procGuarantees: [
      "3–4 semaines en moyenne",
      "Points hebdomadaires",
      "Passation complète incluse",
    ],

    // CTA
    ctaTitle: "Un projet ?",
    ctaSubtitle: "Dites-moi ce que vous construisez. Je reviens avec une proposition claire — pas de pitch deck, pas de blabla.",
    ctaButton: "Envoyer un message",
    ctaCall: "Réserver un appel de 15 min",
    ctaBrief: "Envoyer un brief",
    ctaResponse: "Réponse sous 24h ouvrées.",

    // Contact form
    contactName: "Votre nom",
    contactEmail: "Votre email",
    contactSubject: "Sujet (optionnel)",
    contactMessage: "Décrivez votre projet...",
    contactSend: "Envoyer",
    contactSuccess: "✓ Message envoyé — je reviens vers vous rapidement.",
    contactError: "Une erreur s'est produite. Réessayez ou contactez-moi directement par email.",

    // Footer
    footerTagline: "Ingénieur full-stack · Bruxelles / Remote · Torsolution.be",
    footerLegal: "Mentions légales",
    footerPrivacy: "Politique de confidentialité",
    footerCopyright: `© ${new Date().getFullYear()} Torsolution. Tous droits réservés.`,

    // TrustBar
    trustStats: [
      { value: "8+", label: "Années d'expérience" },
      { value: "< 4 sem", label: "Délai moyen de livraison" },
      { value: "< 24h", label: "Temps de réponse" },
      { value: "100%", label: "Propriété du code" },
    ],

    // CTA trust badges
    ctaTrustBadges: [
      "Sans engagement",
      "Proposition claire sous 48h",
      "Propriété totale du code",
      "NDA disponible sur demande",
    ],

    // Cookie banner
    cookieText: "Ce site utilise des cookies pour mémoriser votre préférence de langue et améliorer votre expérience.",
    cookieAccept: "Accepter",
    cookieDecline: "Refuser",
  },
};

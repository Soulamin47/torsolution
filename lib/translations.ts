export type Translation = {
  // Navbar / global
  tagline: string;
  navSystems: string;
  navCapabilities: string;
  navProcess: string;
  navContact: string;

  // Hero
  heroBadge: string;
  heroLine1: string;
  heroLine2: string;
  heroLine2italic: string;
  heroTitle: string;
  heroSubtitle: string;
  viewSystems: string;
  startProject: string;
  scroll: string;
  heroPoints: string[];
  availability: string;
  heroStats: {
    label: string;
    value: number;
    prefix?: string;
    suffix: string;
    sub: string;
  }[];
  trustStats: { value: string; label: string }[];

  // Capabilities
  capTitle: string;
  capSubtitle: string;
  capItems: { title: string; desc: string; tag: string; icon: string }[];

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
    objective?: string;
    outcome?: string;
    tags: string[];
    image?: string;
  }[];

  // Process
  procTitle: string;
  procSubtitle: string;
  procSteps: { n: string; title: string; desc: string; icon: string }[];

  // Quick contact
  quickCtaTitle: string;

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

  // Cookie banner
  cookieText: string;
  cookieDecline: string;
  cookieAccept: string;

  // Footer
  footerTagline: string;
};

export const translations: Record<"en" | "fr", Translation> = {
  en: {
    // Navbar / global
    tagline: "Web · Mobile · AI — Brussels",
    navSystems: "Work",
    navCapabilities: "Services",
    navProcess: "Process",
    navContact: "Contact",

    // Hero
    heroBadge: "Full-stack engineer · Brussels / Remote",
    heroLine1: "I build the product.",
    heroLine2: "You build",
    heroLine2italic: "the company.",
    heroTitle: "I build the product. You build the company.",
    heroSubtitle:
      "Freelance developer based in Brussels — I help startups, agencies and businesses ship web apps, mobile apps, internal tools and AI platforms. From first commit to live product.",
    viewSystems: "See my work",
    startProject: "Let's talk",
    scroll: "Scroll",
    heroPoints: [
      "Delivered in weeks, not months",
      "Clean code, built to last",
      "One point of contact — no agency overhead",
    ],
    availability: "Available for new projects — Brussels / Remote",
    heroStats: [
      { label: "PROJECTS", value: 4, suffix: "", sub: "Live & delivered" },
      { label: "EXPERIENCE", value: 8, suffix: "+", sub: "Years full-stack" },
      { label: "RESPONSE", value: 24, prefix: "<", suffix: "h", sub: "Avg. reply time" },
    ],
    trustStats: [
      { value: "4+", label: "Products shipped" },
      { value: "8+", label: "Years experience" },
      { value: "<24h", label: "Average reply" },
      { value: "BE", label: "Brussels based" },
    ],

    // Capabilities
    capTitle: "What I build",
    capSubtitle:
      "End-to-end development for products that need to be fast, solid and maintainable.",
    capItems: [
      {
        title: "Web applications",
        desc: "Custom web apps built with Next.js or React — fast, responsive and ready to scale.",
        tag: "Web",
        icon: "</>",
      },
      {
        title: "Mobile apps",
        desc: "Cross-platform mobile apps with Flutter. One codebase, iOS and Android, polished UI.",
        tag: "Mobile",
        icon: "[]",
      },
      {
        title: "Business platforms",
        desc: "Dashboards, admin panels and internal tools to manage your operations and team.",
        tag: "Platform",
        icon: "DB",
      },
      {
        title: "AI & automation",
        desc: "Smart workflows, chatbots and AI integrations that save time and improve quality.",
        tag: "AI",
        icon: "AI",
      },
      {
        title: "Web3 & blockchain",
        desc: "Smart contracts and dApps when it genuinely makes sense for your product.",
        tag: "Web3",
        icon: "◇",
      },
      {
        title: "Social platforms",
        desc: "Creator-focused platforms and community tools built for engagement and growth.",
        tag: "Social",
        icon: "#",
      },
    ],

    // Systems
    sysTitle: "Selected work",
    sysSubtitle: "A few products I've shipped.",
    exploreSystem: "Discuss a similar project",
    sysObjectiveLabel: "Goal",
    sysOutcomeLabel: "Result",
    sysItems: [
      {
        number: "01",
        title: "Bloom",
        desc: "AI-generated content platform — feed, music, short films",
        tags: ["AI", "Social", "Next.js"],
      },
      {
        number: "02",
        title: "Onstage",
        desc: "Platform for artistic performers and event booking",
        tags: ["Platform", "Flutter", "B2C"],
      },
      {
        number: "03",
        title: "TorStock",
        desc: "Real-time inventory management for hospital environments",
        tags: ["B2B", "Healthcare", "React"],
      },
      {
        number: "04",
        title: "Torfix",
        desc: "Digital tools & automation for local SMEs",
        tags: ["SaaS", "SME", "Next.js"],
      },
    ],

    // Process
    procTitle: "How I work",
    procSubtitle: "A straightforward process — no surprises, no delays.",
    procSteps: [
      {
        n: "01",
        title: "Understand your goal",
        desc: "We clarify what you need, who uses it and what success looks like. No vague briefs.",
        icon: "01",
      },
      {
        n: "02",
        title: "Plan the solution",
        desc: "I define the scope, tech stack and timeline. You know exactly what you're getting.",
        icon: "02",
      },
      {
        n: "03",
        title: "Build & test",
        desc: "I develop iteratively with quality checks. You follow progress throughout.",
        icon: "03",
      },
      {
        n: "04",
        title: "Ship & support",
        desc: "I handle deployment, monitor the launch and stay available for what comes next.",
        icon: "04",
      },
    ],

    // Quick contact
    quickCtaTitle: "Got a project?",

    // CTA
    ctaTitle: "Got a project in mind?",
    ctaSubtitle:
      "Tell me what you're building. I'll get back to you within 24 hours.",
    ctaButton: "Send a message",
    ctaCall: "Book a 15-min call",
    ctaBrief: "Send a brief",
    ctaResponse: "Reply within 24 business hours.",

    // Contact form
    contactName: "Your name",
    contactEmail: "Your email",
    contactSubject: "Subject (optional)",
    contactMessage: "Tell me about your project...",
    contactSend: "Send message",
    contactSuccess: "✓ Message sent — I'll get back to you shortly.",

    // Cookie banner
    cookieText: "We use essential cookies to keep the site running smoothly.",
    cookieDecline: "Decline",
    cookieAccept: "Accept",

    // Footer
    footerTagline: "Freelance developer · Brussels / Remote · Torsolution.be",
  },

  fr: {
    // Navbar / global
    tagline: "Web · Mobile · IA — Bruxelles",
    navSystems: "Projets",
    navCapabilities: "Services",
    navProcess: "Méthode",
    navContact: "Contact",

    // Hero
    heroBadge: "Ingénieur full-stack · Bruxelles / Remote",
    heroLine1: "Je conçois le produit.",
    heroLine2: "Vous bâtissez",
    heroLine2italic: "l'entreprise.",
    heroTitle: "Je conçois le produit. Vous bâtissez l'entreprise.",
    heroSubtitle:
      "Développeur freelance basé à Bruxelles — j'accompagne startups, agences et entreprises dans la création d'apps web, mobile, d'outils internes et de plateformes IA. Du premier commit au produit en ligne.",
    viewSystems: "Voir mes projets",
    startProject: "Parlons-en",
    scroll: "Défiler",
    heroPoints: [
      "Livré en semaines, pas en mois",
      "Code propre, pensé pour durer",
      "Un seul interlocuteur — sans overhead d'agence",
    ],
    availability: "Disponible pour de nouveaux projets — Bruxelles / Remote",
    heroStats: [
      { label: "PROJETS", value: 4, suffix: "", sub: "Livrés en production" },
      { label: "EXPÉRIENCE", value: 8, suffix: "+", sub: "Ans full-stack" },
      { label: "RÉPONSE", value: 24, prefix: "<", suffix: "h", sub: "Délai moyen" },
    ],
    trustStats: [
      { value: "4+", label: "Produits livrés" },
      { value: "8+", label: "Ans d'expérience" },
      { value: "<24h", label: "Réponse moyenne" },
      { value: "BE", label: "Basé à Bruxelles" },
    ],

    // Capabilities
    capTitle: "Ce que je développe",
    capSubtitle:
      "Du développement complet pour des produits rapides, fiables et maintenables.",
    capItems: [
      {
        title: "Applications web",
        desc: "Applications web sur mesure avec Next.js ou React — rapides, responsives et prêtes à évoluer.",
        tag: "Web",
        icon: "</>",
      },
      {
        title: "Applications mobile",
        desc: "Apps cross-platform avec Flutter. Un seul codebase, iOS et Android, UI soignée.",
        tag: "Mobile",
        icon: "[]",
      },
      {
        title: "Plateformes métier",
        desc: "Dashboards, back-offices et outils internes pour piloter vos opérations.",
        tag: "Plateforme",
        icon: "DB",
      },
      {
        title: "IA & automatisation",
        desc: "Workflows intelligents, chatbots et intégrations IA pour gagner du temps.",
        tag: "IA",
        icon: "AI",
      },
      {
        title: "Web3 & blockchain",
        desc: "Smart contracts et dApps quand c'est vraiment pertinent pour votre produit.",
        tag: "Web3",
        icon: "◇",
      },
      {
        title: "Plateformes sociales",
        desc: "Plateformes sociales pour créateurs et communautés, pensées pour l'engagement.",
        tag: "Social",
        icon: "#",
      },
    ],

    // Systems
    sysTitle: "Projets réalisés",
    sysSubtitle: "Quelques produits que j'ai livrés.",
    exploreSystem: "Discuter d'un projet similaire",
    sysObjectiveLabel: "Objectif",
    sysOutcomeLabel: "Résultat",
    sysItems: [
      {
        number: "01",
        title: "Bloom",
        desc: "Plateforme de contenu généré par IA — feed, musique, courts-métrages",
        tags: ["IA", "Social", "Next.js"],
      },
      {
        number: "02",
        title: "Onstage",
        desc: "Plateforme pour artistes et réservation d'événements",
        tags: ["Plateforme", "Flutter", "B2C"],
      },
      {
        number: "03",
        title: "TorStock",
        desc: "Gestion d'inventaire en temps réel pour environnements hospitaliers",
        tags: ["B2B", "Santé", "React"],
      },
      {
        number: "04",
        title: "Torfix",
        desc: "Outils digitaux & automatisation pour PME locales",
        tags: ["SaaS", "PME", "Next.js"],
      },
    ],

    // Process
    procTitle: "Ma méthode",
    procSubtitle: "Un processus clair et honnête — sans surprises, sans retards.",
    procSteps: [
      {
        n: "01",
        title: "Comprendre votre besoin",
        desc: "On clarifie ensemble ce dont vous avez besoin, qui l'utilise et ce que le succès veut dire.",
        icon: "01",
      },
      {
        n: "02",
        title: "Planifier la solution",
        desc: "Je définis le périmètre, la stack et le calendrier. Vous savez exactement ce que vous obtenez.",
        icon: "02",
      },
      {
        n: "03",
        title: "Développer & tester",
        desc: "Je développe en itérations avec des contrôles qualité. Vous suivez l'avancement tout au long.",
        icon: "03",
      },
      {
        n: "04",
        title: "Livrer & accompagner",
        desc: "Je gère le déploiement, surveille le lancement et reste disponible pour la suite.",
        icon: "04",
      },
    ],

    // Quick contact
    quickCtaTitle: "Un projet en tête ?",

    // CTA
    ctaTitle: "Un projet en tête ?",
    ctaSubtitle: "Dites-moi ce que vous construisez. Je vous réponds sous 24h.",
    ctaButton: "Envoyer un message",
    ctaCall: "Réserver un appel de 15 min",
    ctaBrief: "Envoyer un brief",
    ctaResponse: "Réponse sous 24h ouvrées.",

    // Contact form
    contactName: "Votre nom",
    contactEmail: "Votre email",
    contactSubject: "Sujet (optionnel)",
    contactMessage: "Parlez-moi de votre projet...",
    contactSend: "Envoyer",
    contactSuccess: "✓ Message envoyé — je reviens vers vous rapidement.",

    // Cookie banner
    cookieText: "Nous utilisons des cookies essentiels pour assurer le bon fonctionnement du site.",
    cookieDecline: "Refuser",
    cookieAccept: "Accepter",

    // Footer
    footerTagline: "Développeur freelance · Bruxelles / Remote · Torsolution.be",
  },
};

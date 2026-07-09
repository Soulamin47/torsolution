export type Translation = {
  // Navbar / global
  tagline: string;
  navSystems: string;
  navCapabilities: string;
  navProcess: string;
  navContact: string;
  navStatus: string;

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
  capServicesLabel: string;
  capPlatformsDelivered: string;
  capClientsSatisfied: string;
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
  procWizard: {
    projectTypeQ: string;
    projectTypeOptions: string[];
    projectDescQ: string;
    projectDescPlaceholder: string;
    budgetQ: string;
    budgetOptions: string[];
    deadlineQ: string;
    deadlineOptions: string[];
    designQ: string;
    designOptions: string[];
    nameLabel: string;
    emailLabel: string;
    whatsappLabel: string;
    whatsappPlaceholder: string;
    summaryTitle: string;
    summaryLabels: {
      type: string;
      desc: string;
      budget: string;
      deadline: string;
      design: string;
      name: string;
      email: string;
      whatsapp: string;
    };
    sendBtn: string;
    sendingBtn: string;
    prev: string;
    next: string;
  };

  // Quick contact
  quickCtaTitle: string;

  // CTA
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  ctaCall: string;
  ctaBrief: string;
  ctaWhatsapp: string;
  ctaResponse: string;

  // Contact form
  contactName: string;
  contactEmail: string;
  contactSubject: string;
  contactMessage: string;
  contactSend: string;
  contactSending: string;
  contactSuccess: string;
  contactError: string;

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
    navStatus: "Available · Brussels",

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
    capTitle: "Services, end to end",
    capSubtitle:
      "Six ways to work together — each one backed by products already live in production, from Bloom to TorStock.",
    capServicesLabel: "services",
    capPlatformsDelivered: "platforms delivered",
    capClientsSatisfied: "happy clients",
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
        desc: "Real-time IT asset inventory for hospital environments",
        tags: ["B2B", "Healthcare IT", "React"],
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

    procWizard: {
      projectTypeQ: "What type of project?",
      projectTypeOptions: ["MVP", "Mobile App", "AI Automation", "Business Platform", "Other"],
      projectDescQ: "Describe in one sentence what you want to build",
      projectDescPlaceholder: "e.g. A platform that lets users book…",
      budgetQ: "What is your estimated budget?",
      budgetOptions: ["< 5k€", "5–15k€", "15–30k€", "30k€+", "Let's discuss"],
      deadlineQ: "What is your deadline?",
      deadlineOptions: ["ASAP", "1 month", "2–3 months", "6 months+"],
      designQ: "Do you already have a design or mockups?",
      designOptions: ["Yes", "No", "In progress"],
      nameLabel: "Your name",
      emailLabel: "Your email",
      whatsappLabel: "WhatsApp number (optional)",
      whatsappPlaceholder: "+32 4XX XXX XXX",
      summaryTitle: "YOUR BRIEF",
      summaryLabels: {
        type: "Type",
        desc: "Idea",
        budget: "Budget",
        deadline: "Deadline",
        design: "Design",
        name: "Name",
        email: "Email",
        whatsapp: "WhatsApp",
      },
      sendBtn: "Send my brief",
      sendingBtn: "Sending…",
      prev: "Prev",
      next: "Next",
    },

    // Quick contact
    quickCtaTitle: "Got a project?",

    // CTA
    ctaTitle: "Got a project in mind?",
    ctaSubtitle:
      "Tell me what you're building. I'll get back to you within 24 hours.",
    ctaButton: "Send a message",
    ctaCall: "Book a 15-min call",
    ctaBrief: "Send a brief",
    ctaWhatsapp: "WhatsApp",
    ctaResponse: "Reply within 24 business hours.",

    // Contact form
    contactName: "Your name",
    contactEmail: "Your email",
    contactSubject: "Subject (optional)",
    contactMessage: "Tell me about your project...",
    contactSend: "Send message",
    contactSending: "Sending...",
    contactSuccess: "✓ Message sent — I'll get back to you shortly.",
    contactError: "The message could not be sent. Please email me directly.",

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
    navStatus: "Disponible · Bruxelles",

    // Hero
    heroBadge: "Ingénieur full-stack · Bruxelles / Remote",
    heroLine1: "Je construis le produit.",
    heroLine2: "Vous construisez",
    heroLine2italic: "l'entreprise.",
    heroTitle: "Je construis le produit. Vous construisez l'entreprise.",
    heroSubtitle:
      "Développeur freelance à Bruxelles. J'aide startups, agences et entreprises à concevoir et déployer leurs applications web et mobiles, leurs outils internes et leurs plateformes IA. De la première ligne de code à la mise en production.",
    viewSystems: "Voir mes projets",
    startProject: "On en parle",
    scroll: "Défiler",
    heroPoints: [
      "En semaines, pas en mois",
      "Un code propre, pensé pour durer",
      "Un seul interlocuteur — pas trois chefs de projet",
    ],
    availability: "Disponible pour de nouveaux projets — Bruxelles / Remote",
    heroStats: [
      { label: "PROJETS", value: 4, suffix: "", sub: "En production" },
      { label: "EXPÉRIENCE", value: 8, suffix: "+", sub: "Années de code" },
      { label: "RÉPONSE", value: 24, prefix: "<", suffix: "h", sub: "Délai moyen" },
    ],
    trustStats: [
      { value: "4+", label: "Produits livrés" },
      { value: "8+", label: "Années d'expérience" },
      { value: "<24h", label: "Réponse moyenne" },
      { value: "BE", label: "Basé à Bruxelles" },
    ],

    // Capabilities
    capTitle: "Des services de bout en bout",
    capSubtitle:
      "Six façons de travailler ensemble — chacune adossée à des produits déjà en production, de Bloom à TorStock.",
    capServicesLabel: "services",
    capPlatformsDelivered: "plateformes livrées",
    capClientsSatisfied: "clients satisfaits",
    capItems: [
      {
        title: "Applications web",
        desc: "Des apps web sur mesure en Next.js ou React. Rapides, responsives, prêtes à grandir avec vous.",
        tag: "Web",
        icon: "</>",
      },
      {
        title: "Applications mobiles",
        desc: "Des apps iOS et Android en Flutter. Un seul code, deux stores, une UI vraiment soignée.",
        tag: "Mobile",
        icon: "[]",
      },
      {
        title: "Plateformes métier",
        desc: "Dashboards, back-offices et outils internes pour piloter vos opérations et votre équipe.",
        tag: "Plateforme",
        icon: "DB",
      },
      {
        title: "IA & automatisation",
        desc: "Workflows intelligents, chatbots et intégrations IA qui font gagner du temps et améliorent la qualité.",
        tag: "IA",
        icon: "AI",
      },
      {
        title: "Web3 & blockchain",
        desc: "Smart contracts et dApps, quand ça a vraiment du sens pour votre produit. Pas pour le hype.",
        tag: "Web3",
        icon: "◇",
      },
      {
        title: "Plateformes sociales",
        desc: "Plateformes pour créateurs et outils communautaires, pensés pour l'engagement et la croissance.",
        tag: "Social",
        icon: "#",
      },
    ],

    // Systems
    sysTitle: "Sélection de projets",
    sysSubtitle: "Quelques produits livrés.",
    exploreSystem: "Parler d'un projet similaire",
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
        desc: "Plateforme de booking pour artistes et organisateurs d'événements",
        tags: ["Plateforme", "Flutter", "B2C"],
      },
      {
        number: "03",
        title: "TorStock",
        desc: "Gestion de parc IT en temps réel pour environnements hospitaliers",
        tags: ["B2B", "IT Santé", "React"],
      },
      {
        number: "04",
        title: "Torfix",
        desc: "Outils numériques et automatisation pour PME locales",
        tags: ["SaaS", "PME", "Next.js"],
      },
    ],

    // Process
    procTitle: "Ma méthode",
    procSubtitle: "Une méthode claire. Pas de mauvaise surprise, pas de retard.",
    procSteps: [
      {
        n: "01",
        title: "Comprendre votre objectif",
        desc: "On clarifie ce dont vous avez besoin, qui va l'utiliser et à quoi ressemble la réussite. Pas de brief flou.",
        icon: "01",
      },
      {
        n: "02",
        title: "Cadrer la solution",
        desc: "Je définis le périmètre, la stack et le planning. Vous savez exactement ce qui sera livré.",
        icon: "02",
      },
      {
        n: "03",
        title: "Développer & tester",
        desc: "Je développe par itérations, avec des contrôles qualité à chaque étape. Vous voyez le produit avancer en direct.",
        icon: "03",
      },
      {
        n: "04",
        title: "Livrer & accompagner",
        desc: "Je gère la mise en production, je surveille le lancement, et je reste là pour la suite.",
        icon: "04",
      },
    ],

    procWizard: {
      projectTypeQ: "Quel type de projet ?",
      projectTypeOptions: ["MVP", "App mobile", "Automation IA", "Plateforme métier", "Autre"],
      projectDescQ: "Décrivez en une phrase ce que vous voulez construire",
      projectDescPlaceholder: "ex. Une plateforme qui permet aux utilisateurs de…",
      budgetQ: "Quel est votre budget estimé ?",
      budgetOptions: ["< 5k€", "5–15k€", "15–30k€", "30k€+", "À discuter"],
      deadlineQ: "Quelle est votre deadline ?",
      deadlineOptions: ["ASAP", "1 mois", "2–3 mois", "6 mois+"],
      designQ: "Avez-vous déjà un design ou des maquettes ?",
      designOptions: ["Oui", "Non", "En cours"],
      nameLabel: "Votre nom",
      emailLabel: "Votre email",
      whatsappLabel: "Votre numéro WhatsApp (optionnel)",
      whatsappPlaceholder: "+32 4XX XXX XXX",
      summaryTitle: "VOTRE BRIEF",
      summaryLabels: {
        type: "Type",
        desc: "Idée",
        budget: "Budget",
        deadline: "Deadline",
        design: "Design",
        name: "Nom",
        email: "Email",
        whatsapp: "WhatsApp",
      },
      sendBtn: "Envoyer mon brief",
      sendingBtn: "Envoi en cours…",
      prev: "Préc.",
      next: "Suivant",
    },

    // Quick contact
    quickCtaTitle: "Un projet en tête ?",

    // CTA
    ctaTitle: "Un projet en tête ?",
    ctaSubtitle: "Dites-moi ce que vous construisez. Je vous réponds sous 24h.",
    ctaButton: "Envoyer un message",
    ctaCall: "Planifier un appel de 15 min",
    ctaBrief: "Envoyer un brief",
    ctaWhatsapp: "WhatsApp",
    ctaResponse: "Réponse sous 24h ouvrées.",

    // Contact form
    contactName: "Votre nom",
    contactEmail: "Votre email",
    contactSubject: "Sujet (facultatif)",
    contactMessage: "Parlez-moi de votre projet…",
    contactSend: "Envoyer",
    contactSending: "Envoi…",
    contactSuccess: "✓ Message bien reçu — je reviens vers vous rapidement.",
    contactError: "Le message n'est pas parti. Écrivez-moi directement par email.",

    // Cookie banner
    cookieText: "On utilise uniquement des cookies essentiels au bon fonctionnement du site.",
    cookieDecline: "Refuser",
    cookieAccept: "Accepter",

    // Footer
    footerTagline: "Développeur freelance · Bruxelles / Remote · Torsolution.be",
  },
};

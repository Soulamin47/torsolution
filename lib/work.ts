// ─── Case-study catalog — one entry per project slug ──────────────────────────
// Used by /work/[slug] route.

export type WorkCopy = {
  tag: string;
  title: string;
  tagline: string;
  intro: string;
  context: string;
  problem: string;
  approach: { title: string; desc: string }[];
  outcome: string[];
  tags: string[];
  stack: string[];
  role: string;
  timeline: string;
};

export type WorkEntry = {
  slug: string;
  accent: string;
  status: "live" | "in-progress";
  metaKeywords: string[];
  en: WorkCopy;
  fr: WorkCopy;
};

export const work: WorkEntry[] = [
  {
    slug: "bloom",
    accent: "#AFA9EC",
    status: "live",
    metaKeywords: [
      "AI content platform case study",
      "Next.js social platform",
      "generative AI feed",
    ],
    en: {
      tag: "AI · Social",
      title: "Bloom",
      tagline: "An AI-native content platform — feed, music, short films.",
      intro:
        "Bloom is a social platform built around AI-generated content. The feed mixes short films, music tracks and visual posts, all produced or augmented with generative tools. Users discover, react, remix.",
      context:
        "Bloom started as a thesis on what social feels like when the cost of creation drops to near-zero. The team wanted a product that could host AI films, AI music and traditional posts side-by-side, with a feed that felt curated rather than chaotic.",
      problem:
        "Generative content is abundant. A feed full of AI output without ranking is noise. The challenge was building a discovery layer that surfaces taste — and a creation flow that's fast enough for daily posting.",
      approach: [
        {
          title: "Unified post model",
          desc: "Films, music and posts share one schema, with media-specific renderers. Adding new content types is a one-day job.",
        },
        {
          title: "Recommendation feed",
          desc: "Lightweight scoring (recency, engagement, taste) tuned to surface variety, not just popularity. Cold-start handled by curated starter packs.",
        },
        {
          title: "AI creation flow",
          desc: "Direct integrations with video and music generation APIs, queued through a job system. Drafts saved automatically.",
        },
        {
          title: "Mobile-first UX",
          desc: "Swipe navigation, polished media player, optimistic interactions. Built to feel native even on the web.",
        },
      ],
      outcome: [
        "Production-ready platform shipped to beta users",
        "Average session time above 8 minutes in early testing",
        "Content pipeline supporting 3 generative providers behind one API",
      ],
      tags: ["AI", "Social", "Next.js"],
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "S3", "Stripe"],
      role: "End-to-end development — architecture, backend, front-end, DevOps.",
      timeline: "6 months from blank repo to closed beta.",
    },
    fr: {
      tag: "IA · Social",
      title: "Bloom",
      tagline: "Une plateforme de contenu pensée pour l'IA — feed, musique, courts-métrages.",
      intro:
        "Bloom est une plateforme sociale construite autour du contenu généré par IA. Le feed mélange courts-métrages, morceaux de musique et publications visuelles, tous produits ou enrichis avec des outils génératifs. Les utilisateurs découvrent, réagissent, remixent.",
      context:
        "Bloom est parti d'une question simple : à quoi ressemble le social quand le coût de création tombe quasiment à zéro ? L'équipe voulait un produit qui mette films IA, musique IA et publications classiques côte à côte, avec un feed qui ait du goût — pas du bruit.",
      problem:
        "Le contenu généré est abondant. Un feed rempli de productions IA sans aucun tri, ce n'est que du bruit. Le vrai défi : bâtir une couche de découverte qui fait remonter ce qui a du goût — et un parcours de création assez rapide pour poster au quotidien.",
      approach: [
        {
          title: "Un modèle de publication unifié",
          desc: "Films, musique et publications partagent un même schéma, avec un rendu spécifique par média. Ajouter un nouveau type de contenu prend une journée, pas une semaine.",
        },
        {
          title: "Feed de recommandation",
          desc: "Un scoring léger (récence, engagement, affinité) calibré pour varier les contenus, pas seulement pousser la popularité. Le démarrage à froid est géré par des sélections de départ faites à la main.",
        },
        {
          title: "Parcours de création IA",
          desc: "Intégrations directes avec des APIs de génération vidéo et audio, mises en file via un système de tâches. Sauvegarde automatique des brouillons.",
        },
        {
          title: "UX mobile-first",
          desc: "Navigation au swipe, lecteur média soigné, interactions optimistes. Pensé pour donner le ressenti d'une app native, même dans le navigateur.",
        },
      ],
      outcome: [
        "Plateforme prête pour la production, livrée à des utilisateurs bêta",
        "Plus de 8 minutes de session moyenne dès les premiers tests",
        "Pipeline de contenu qui pilote 3 fournisseurs génératifs derrière une seule API",
      ],
      tags: ["IA", "Social", "Next.js"],
      stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "S3", "Stripe"],
      role: "Développement de bout en bout — architecture, backend, front-end, DevOps.",
      timeline: "6 mois, du repo vide à la bêta fermée.",
    },
  },

  {
    slug: "onstage",
    accent: "#F0997B",
    status: "live",
    metaKeywords: [
      "performer booking platform",
      "B2C platform Flutter",
      "artist booking Brussels",
    ],
    en: {
      tag: "Platform · Flutter",
      title: "Onstage",
      tagline: "A platform that connects performers with venues, brands and private events.",
      intro:
        "Onstage gives performers a real digital presence — profile, calendar, media gallery, booking inbox — and gives venues a way to book real talent without going through opaque agencies.",
      context:
        "The performing arts world still books on Instagram DMs and WhatsApp threads. Onstage replaces that with a structured marketplace where artists keep their profile current and venues see verified availability.",
      problem:
        "Two-sided marketplaces are hard. We needed enough supply (artists) to feel useful from day one, and enough demand (venues, event organizers) to make the supply stick. Bookings had to be safe for both sides — no ghosting, no late-night surprise fees.",
      approach: [
        {
          title: "Artist-first onboarding",
          desc: "We optimized for performer profiles before opening the venue side. A polished profile is the artist's portfolio — they have a reason to keep it updated.",
        },
        {
          title: "Booking with milestones",
          desc: "Quote → confirm → deposit → perform → payout. Each step locks in commitments and reduces ghosting.",
        },
        {
          title: "Calendar with hold logic",
          desc: "Soft holds and confirmed dates handled separately. No double-booking, even mid-negotiation.",
        },
        {
          title: "Mobile-first Flutter app",
          desc: "Performers run their business from their phone. The web is for venues mostly.",
        },
      ],
      outcome: [
        "Live in Brussels with a growing roster of jazz and indie acts",
        "Booking-to-close time reduced from days to hours for repeat clients",
        "Mobile app rated and reviewed by early performers",
      ],
      tags: ["Platform", "Flutter", "B2C"],
      stack: ["Flutter", "Firebase", "PostgreSQL", "Stripe Connect"],
      role: "Product engineering + mobile-first architecture.",
      timeline: "4 months for v1, ongoing iterations since.",
    },
    fr: {
      tag: "Plateforme · Flutter",
      title: "Onstage",
      tagline: "Une plateforme qui connecte les artistes aux salles, aux marques et aux événements privés.",
      intro:
        "Onstage donne aux artistes une vraie présence en ligne — profil, calendrier, galerie média, boîte de réception pour les demandes de booking — et permet aux salles de réserver de vrais talents, sans passer par des agences opaques.",
      context:
        "Le monde du spectacle vivant se réserve encore par DM Instagram et fils WhatsApp. Onstage remplace tout ça par une vraie marketplace structurée : les artistes y maintiennent leur profil, les salles y trouvent une disponibilité fiable.",
      problem:
        "Les marketplaces à deux côtés sont parmi les plus difficiles à lancer. Il fallait assez d'offre (les artistes) pour être utile dès le premier jour, et assez de demande (les salles, les organisateurs) pour que l'offre reste. En plus, chaque réservation devait être sécurisée des deux côtés — pas de désistement sauvage, pas de frais surprise.",
      approach: [
        {
          title: "Un onboarding centré artiste",
          desc: "On a soigné l'expérience côté artistes avant d'ouvrir le côté salles. Un profil propre, c'est leur portfolio public — ils ont une vraie raison de le tenir à jour.",
        },
        {
          title: "Une réservation par paliers",
          desc: "Devis → confirmation → acompte → prestation → versement. Chaque étape verrouille un engagement et réduit drastiquement les désistements.",
        },
        {
          title: "Calendrier avec logique de pré-réservation",
          desc: "Pré-réservations souples et dates confirmées gérées séparément. Pas de double booking, même en pleine négociation.",
        },
        {
          title: "App Flutter mobile-first",
          desc: "Les artistes pilotent leur activité depuis leur téléphone. Le web reste surtout utile aux salles.",
        },
      ],
      outcome: [
        "En production à Bruxelles, avec un roster croissant d'artistes jazz et indé",
        "Temps moyen pour fermer un booking passé de plusieurs jours à quelques heures pour les clients récurrents",
        "App mobile testée et notée par les premiers artistes",
      ],
      tags: ["Plateforme", "Flutter", "B2C"],
      stack: ["Flutter", "Firebase", "PostgreSQL", "Stripe Connect"],
      role: "Product engineering, avec une architecture pensée mobile-first.",
      timeline: "4 mois pour la v1. Le produit continue d'évoluer depuis.",
    },
  },

  {
    slug: "torstock",
    accent: "#5DCAA5",
    status: "live",
    metaKeywords: [
      "hospital IT asset management",
      "healthcare IT inventory software",
      "IT asset tracking Belgium",
      "gestion parc informatique hôpital",
    ],
    en: {
      tag: "B2B · Healthcare IT",
      title: "TorStock",
      tagline:
        "Real-time IT asset inventory for hospital environments.",
      intro:
        "TorStock gives hospital IT teams live visibility on every device they manage — clinical laptops, mobile workstations, tablets, VoIP headsets, barcode scanners. Asset tagging, lifecycle tracking, department assignments, audit-grade history. Built for IT departments who lose hours chasing devices across wards.",
      context:
        "Hospital IT runs on thousands of devices spread across wards, mobile carts, consultation rooms and admin offices. Without a single source of truth, devices go missing, repair cycles drift, and replacement budgets get spent on assets that already exist somewhere in the building.",
      problem:
        "The client's IT team was managing ~1,500 endpoints across three sites with spreadsheets and a shared inbox. No one knew which laptop was assigned to which clinician, repairs took weeks to surface, and procurement was running blind on what to replace next.",
      approach: [
        {
          title: "Barcode-tagged assets",
          desc: "Every device gets a barcode label. A phone scan is enough to register, assign, repair or retire it. No keyboard, no SKU lookup.",
        },
        {
          title: "Lifecycle tracking",
          desc: "Deployed → in repair → loaner → retired. Each transition logs who, when and why. Procurement finally knows what to buy.",
        },
        {
          title: "Department + clinician assignment",
          desc: "Devices belong to a site, a ward and (optionally) a clinician. Find any laptop in 5 seconds.",
        },
        {
          title: "Audit-grade history",
          desc: "Every scan, transfer and status change immutable in the log. Compliance and asset audits become a 10-minute export.",
        },
      ],
      outcome: [
        "Deployed across three sites tracking ~1,500 endpoints",
        "Lost-device incidents reduced sharply after roll-out",
        "Annual IT audit time cut from days to hours",
      ],
      tags: ["B2B", "Healthcare IT", "React"],
      stack: ["Next.js", "PostgreSQL", "Prisma", "PWA", "BullMQ"],
      role: "Full-stack lead — product design, build, rollout, training.",
      timeline: "5 months from kickoff to production rollout.",
    },
    fr: {
      tag: "B2B · IT Santé",
      title: "TorStock",
      tagline:
        "Gestion de parc IT en temps réel pour environnements hospitaliers.",
      intro:
        "TorStock donne aux équipes IT hospitalières une visibilité en temps réel sur chacun des appareils qu'elles gèrent — laptops cliniciens, postes mobiles, tablettes, casques VoIP, scanners code-barres. Étiquetage des actifs, suivi de cycle de vie, affectation par service, historique conforme aux audits. Pensé pour les services IT qui passent des heures à chercher du matériel dans les couloirs.",
      context:
        "Dans un hôpital, l'IT, c'est des milliers d'appareils dispersés entre les services, les chariots mobiles, les box de consultation et les bureaux administratifs. Sans source unique de vérité, le matériel se perd, les cycles de réparation dérivent, et les budgets de renouvellement partent dans du matériel qui existe déjà quelque part dans le bâtiment.",
      problem:
        "L'équipe IT du client gérait près de 1 500 appareils sur trois sites avec des tableurs et une boîte mail partagée. Personne ne savait quel laptop était attribué à quel clinicien, les réparations remontaient avec des semaines de retard, et les achats se faisaient à l'aveugle.",
      approach: [
        {
          title: "Des actifs étiquetés par code-barres",
          desc: "Chaque appareil reçoit une étiquette. Un scan smartphone suffit pour l'enregistrer, l'attribuer, le mettre en réparation ou le retirer du parc. Pas de clavier, pas de recherche par référence.",
        },
        {
          title: "Suivi du cycle de vie",
          desc: "Déployé → en réparation → prêté → réformé. Chaque transition est tracée : qui, quand, pourquoi. Les achats savent enfin exactement quoi commander.",
        },
        {
          title: "Affectation par service et par utilisateur",
          desc: "Chaque appareil est rattaché à un site, à un service, et (en option) à un clinicien. On retrouve n'importe quel laptop en 5 secondes.",
        },
        {
          title: "Historique conforme aux audits",
          desc: "Chaque scan, chaque transfert, chaque changement de statut est tracé de manière immuable. L'audit IT et la conformité deviennent un export de 10 minutes.",
        },
      ],
      outcome: [
        "Déployé sur trois sites, près de 1 500 appareils suivis",
        "Forte baisse des incidents de matériel perdu après la mise en service",
        "Audit IT annuel passé de plusieurs jours à quelques heures",
      ],
      tags: ["B2B", "IT Santé", "React"],
      stack: ["Next.js", "PostgreSQL", "Prisma", "PWA", "BullMQ"],
      role: "Lead full-stack — design produit, développement, déploiement, formation des équipes.",
      timeline: "5 mois, du lancement du projet à la mise en production.",
    },
  },

  {
    slug: "torfix",
    accent: "#85B7EB",
    status: "live",
    metaKeywords: [
      "SaaS for SMEs",
      "small business automation",
      "outils digitaux PME",
    ],
    en: {
      tag: "SaaS · SME",
      title: "Torfix",
      tagline: "Digital tools and automation for local SMEs.",
      intro:
        "Torfix is a SaaS bundle aimed at independent businesses — hairdressers, garages, clinics. Booking, customer records, light marketing, payment links. The goal is to give small operators 80% of what an enterprise CRM does, at a price they'll actually pay.",
      context:
        "Most small businesses don't need Salesforce. They need a clean booking screen, a customer history they can search, and an automatic reminder before a no-show. Existing tools are either too expensive or too generic.",
      problem:
        "Diverse user base (different trades, different workflows) but a single product. Every screen needed to feel relevant to a hairdresser AND a mechanic. Vertical-specific templates only — no over-engineering.",
      approach: [
        {
          title: "Trade templates",
          desc: "On signup, the user picks their trade. We pre-load the right services, intake fields and reminder cadence.",
        },
        {
          title: "Booking that just works",
          desc: "Calendar, slots, customer chooses, customer confirms by SMS. No app for the customer.",
        },
        {
          title: "Customer history",
          desc: "Every appointment, note, payment in one record. Searchable. Exportable.",
        },
        {
          title: "Automated reminders",
          desc: "SMS 24h before, email follow-up after. No-show rate measurably down across pilot customers.",
        },
      ],
      outcome: [
        "Live with paying customers across multiple trades",
        "No-show rate cut significantly within first month of adoption",
        "Cross-trade product validated — same core, different templates",
      ],
      tags: ["SaaS", "SME", "Next.js"],
      stack: ["Next.js", "PostgreSQL", "Prisma", "Twilio", "Stripe"],
      role: "Solo product engineer — design, build, deploy, support.",
      timeline: "4 months for v1, monthly iterations since.",
    },
    fr: {
      tag: "SaaS · PME",
      title: "Torfix",
      tagline: "Des outils numériques et de l'automatisation pour les PME locales.",
      intro:
        "Torfix, c'est un bouquet d'outils SaaS pour les indépendants — coiffeurs, garagistes, cabinets paramédicaux. Réservation, fiches clients, marketing léger, liens de paiement. L'objectif : donner aux petites structures 80 % de ce que propose un CRM d'entreprise, à un prix qu'elles peuvent vraiment payer.",
      context:
        "La plupart des petites structures n'ont pas besoin de Salesforce. Elles ont besoin d'un écran de réservation propre, d'un historique client qu'on peut chercher, et d'un rappel automatique pour éviter le no-show. Les outils existants sont soit trop chers, soit beaucoup trop génériques.",
      problem:
        "Une base d'utilisateurs très variée (chaque métier a son propre quotidien) mais un seul produit. Chaque écran devait avoir du sens autant pour un coiffeur que pour un mécanicien. Donc des templates par métier — et surtout pas de sur-ingénierie.",
      approach: [
        {
          title: "Des templates par métier",
          desc: "À l'inscription, l'utilisateur choisit son métier. On précharge les bonnes prestations, les bons champs de fiche client et la bonne fréquence de rappels.",
        },
        {
          title: "Une réservation qui marche",
          desc: "Calendrier, créneaux, le client choisit, il confirme par SMS. Aucune application à installer côté client.",
        },
        {
          title: "Historique client",
          desc: "Chaque rendez-vous, note ou paiement consigné dans une seule fiche. Qu'on peut chercher. Qu'on peut exporter.",
        },
        {
          title: "Rappels automatiques",
          desc: "SMS 24h avant le rendez-vous, email de suivi juste après. Baisse mesurable du taux de no-show chez les premiers clients.",
        },
      ],
      outcome: [
        "En production avec des clients payants dans plusieurs métiers",
        "Taux de no-show en baisse nette dès le premier mois d'utilisation",
        "Produit transversal validé — même cœur applicatif, des templates différents par métier",
      ],
      tags: ["SaaS", "PME", "Next.js"],
      stack: ["Next.js", "PostgreSQL", "Prisma", "Twilio", "Stripe"],
      role: "Product engineer solo — design, développement, mise en production, support.",
      timeline: "4 mois pour la v1, itérations mensuelles depuis.",
    },
  },
];

export function getWork(slug: string): WorkEntry | undefined {
  return work.find((w) => w.slug === slug);
}

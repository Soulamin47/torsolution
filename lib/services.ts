// ─── Service catalog — one entry per service slug ─────────────────────────────
// Used by /services/[slug] route and (later) by the home Capabilities section.

export type ServiceCopy = {
  tag: string;
  title: string;
  tagline: string;
  intro: string;
  whatYouGet: { title: string; desc: string }[];
  process: { label: string; desc: string }[];
  stack: string[];
  timeline: string;
  pricing: string;
  faq: { q: string; a: string }[];
};

export type ServiceEntry = {
  slug: string;
  accent: string; // hex
  icon: string;
  metaKeywords: string[];
  en: ServiceCopy;
  fr: ServiceCopy;
};

export const services: ServiceEntry[] = [
  {
    slug: "web",
    accent: "#AFA9EC",
    icon: "</>",
    metaKeywords: [
      "Next.js developer Brussels",
      "freelance web developer Belgium",
      "React developer Brussels",
      "développeur web freelance Bruxelles",
    ],
    en: {
      tag: "Web",
      title: "Web applications",
      tagline:
        "Production-grade web apps with Next.js, React and TypeScript.",
      intro:
        "I design and ship custom web applications for startups, agencies and businesses. Marketing sites that convert, dashboards your team actually uses, SaaS products built to scale. Every project is delivered with clean code, modern tooling and a deploy pipeline you can hand to anyone.",
      whatYouGet: [
        {
          title: "Custom Next.js app",
          desc: "Server-rendered, fast, SEO-friendly. Built on the same stack used by Vercel, Notion and Linear.",
        },
        {
          title: "Design system & UI",
          desc: "Tailwind-based component library, dark mode ready, polished interactions and motion.",
        },
        {
          title: "Auth, payments, database",
          desc: "Wired up with Supabase, PostgreSQL or your provider of choice. Stripe-ready when you need it.",
        },
        {
          title: "Deploy & ops",
          desc: "Production deploy on Vercel or your infra, CI/CD, monitoring, error tracking — handed over with docs.",
        },
      ],
      process: [
        {
          label: "Week 1 — Discovery",
          desc: "We map the product, the users and the success metrics. You leave with a clear scope.",
        },
        {
          label: "Week 2 — Foundations",
          desc: "Design system, auth, database, base layout. You see the shape early.",
        },
        {
          label: "Weeks 3-5 — Build",
          desc: "Feature iterations, weekly demos, you steer in real time.",
        },
        {
          label: "Week 6 — Ship",
          desc: "Polish, deploy, monitor, document. You own the product fully.",
        },
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase", "Vercel"],
      timeline: "3 to 8 weeks for a first launchable version",
      pricing: "From €6k for an MVP — fixed scope, fixed price.",
      faq: [
        {
          q: "Do you work with an existing design?",
          a: "Yes. Send me your Figma — I integrate it pixel-accurate. If you don't have one, I can design the product with you.",
        },
        {
          q: "Can you take over a half-built project?",
          a: "Often yes. I audit the codebase first, give you an honest read on what's salvageable, then we agree on a plan.",
        },
        {
          q: "What happens after launch?",
          a: "I stay reachable for the first month at no extra cost. After that, retainer or hourly — your call.",
        },
      ],
    },
    fr: {
      tag: "Web",
      title: "Applications web",
      tagline:
        "Des applications web sur mesure en Next.js, React et TypeScript.",
      intro:
        "Je conçois et je livre des applications web pour des startups, des agences et des entreprises. Des sites marketing qui convertissent, des dashboards que votre équipe utilise vraiment, des produits SaaS qui tiennent la charge. Du code propre, des outils modernes, et un pipeline de déploiement que vous pouvez reprendre à tout moment.",
      whatYouGet: [
        {
          title: "Une app Next.js sur mesure",
          desc: "Rendue côté serveur, rapide, taillée pour le SEO. La même stack que celle utilisée par Vercel, Notion ou Linear.",
        },
        {
          title: "Design system & UI",
          desc: "Bibliothèque de composants en Tailwind, dark mode, animations et interactions au cordeau.",
        },
        {
          title: "Auth, paiements, base de données",
          desc: "Supabase, PostgreSQL ou votre fournisseur. Stripe prêt à brancher quand vous en avez besoin.",
        },
        {
          title: "Déploiement & ops",
          desc: "Production sur Vercel ou votre infra, CI/CD, monitoring, suivi des erreurs — le tout livré avec la doc.",
        },
      ],
      process: [
        {
          label: "Semaine 1 — Découverte",
          desc: "On cartographie le produit, les utilisateurs et les métriques de succès. Vous repartez avec un périmètre clair.",
        },
        {
          label: "Semaine 2 — Fondations",
          desc: "Design system, auth, base de données, layout. Vous voyez tout de suite à quoi le produit va ressembler.",
        },
        {
          label: "Semaines 3-5 — Construction",
          desc: "Itérations, démos chaque semaine, vous donnez le cap au fur et à mesure.",
        },
        {
          label: "Semaine 6 — Livraison",
          desc: "Polish final, déploiement, monitoring, doc. Le produit vous appartient entièrement.",
        },
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase", "Vercel"],
      timeline: "3 à 8 semaines pour une première version utilisable",
      pricing: "À partir de 6 000 € pour un MVP — périmètre fixe, prix fixe.",
      faq: [
        {
          q: "Vous travaillez à partir d'un design existant ?",
          a: "Oui. Envoyez-moi votre Figma, je l'intègre au pixel près. Si vous n'en avez pas, on peut concevoir le produit ensemble.",
        },
        {
          q: "Vous pouvez reprendre un projet déjà commencé ?",
          a: "Souvent oui. Je commence par auditer le code, je vous dis honnêtement ce qui est récupérable, et on cale un plan ensemble.",
        },
        {
          q: "Et après le lancement ?",
          a: "Je reste joignable le premier mois, sans surcoût. Ensuite on peut passer au forfait ou à l'heure — vous choisissez.",
        },
      ],
    },
  },

  {
    slug: "mobile",
    accent: "#5DCAA5",
    icon: "[]",
    metaKeywords: [
      "Flutter developer Brussels",
      "freelance mobile app developer Belgium",
      "iOS Android developer",
      "développeur Flutter Bruxelles",
    ],
    en: {
      tag: "Mobile",
      title: "Mobile apps",
      tagline:
        "Cross-platform iOS and Android apps built with Flutter.",
      intro:
        "One codebase, two app stores, native performance. I build mobile products from idea to App Store submission — auth, sync, payments, push notifications and offline support included. Flutter gives you 90% of the speed of native at half the cost.",
      whatYouGet: [
        { title: "iOS + Android app", desc: "Single Flutter codebase, native feel, polished animations." },
        { title: "Backend & sync", desc: "Firebase or custom API, real-time sync, offline-first data." },
        { title: "App Store submission", desc: "Provisioning, screenshots, store listings — I handle the paperwork." },
        { title: "Analytics & crash reporting", desc: "Firebase Analytics + Crashlytics so you know what's happening post-launch." },
      ],
      process: [
        { label: "Week 1 — Scope", desc: "Flows, screens, integrations. Clear list of what ships v1." },
        { label: "Weeks 2-3 — Core flows", desc: "Auth, navigation, key screens. Internal TestFlight build by week 3." },
        { label: "Weeks 4-6 — Build", desc: "Features, polish, edge cases. You test daily." },
        { label: "Week 7+ — Stores", desc: "Submission, review responses, launch." },
      ],
      stack: ["Flutter", "Dart", "Firebase", "REST/GraphQL", "Riverpod", "TestFlight"],
      timeline: "4 to 10 weeks to App Store / Play Store",
      pricing: "From €8k for a v1 — depending on backend complexity.",
      faq: [
        {
          q: "Why Flutter and not React Native?",
          a: "Flutter renders its own UI, which means consistent design and smoother animations across iOS and Android. I find it faster to ship and easier to maintain.",
        },
        {
          q: "Can I publish under my own developer accounts?",
          a: "Yes, that's recommended. I'll guide you through setting up Apple Developer and Google Play Console — you own everything.",
        },
        {
          q: "Do you support the app after launch?",
          a: "First month included. After that we set up a maintenance retainer if you want — usually 3-5 days a month covers updates and OS releases.",
        },
      ],
    },
    fr: {
      tag: "Mobile",
      title: "Applications mobiles",
      tagline:
        "Des apps iOS et Android multiplateformes en Flutter.",
      intro:
        "Une seule base de code, deux stores, des perfs quasi natives. Je construis vos produits mobiles de l'idée jusqu'à la mise en ligne sur l'App Store — auth, synchro, paiements, notifications push et mode hors-ligne inclus. Avec Flutter, vous avez 90 % de la fluidité du natif pour moitié moins cher.",
      whatYouGet: [
        { title: "App iOS + Android", desc: "Un seul code Flutter, le ressenti natif, des animations soignées." },
        { title: "Backend & synchro", desc: "Firebase ou API sur mesure, synchro temps réel, données offline-first." },
        { title: "Mise en ligne sur les stores", desc: "Provisioning, captures d'écran, fiches store — je m'occupe de toute la paperasse." },
        { title: "Analytics & crash reporting", desc: "Firebase Analytics + Crashlytics. Vous voyez ce qui se passe après le lancement." },
      ],
      process: [
        { label: "Semaine 1 — Périmètre", desc: "Parcours, écrans, intégrations. Une liste claire de ce qui sort en v1." },
        { label: "Semaines 2-3 — Parcours clés", desc: "Auth, navigation, écrans principaux. Premier build TestFlight dès la semaine 3." },
        { label: "Semaines 4-6 — Construction", desc: "Fonctionnalités, polish, cas limites. Vous testez tous les jours." },
        { label: "Semaine 7+ — Stores", desc: "Soumission, réponses aux retours des stores, lancement." },
      ],
      stack: ["Flutter", "Dart", "Firebase", "REST/GraphQL", "Riverpod", "TestFlight"],
      timeline: "4 à 10 semaines, jusqu'à l'App Store et au Play Store",
      pricing: "À partir de 8 000 € pour une v1 — selon la complexité du backend.",
      faq: [
        {
          q: "Pourquoi Flutter plutôt que React Native ?",
          a: "Flutter dessine sa propre UI, ce qui donne un design cohérent et des animations vraiment fluides sur iOS comme sur Android. Pour moi, c'est plus rapide à livrer et plus simple à maintenir dans le temps.",
        },
        {
          q: "Je peux publier sur mes propres comptes développeur ?",
          a: "Oui, c'est même recommandé. Je vous accompagne pour configurer Apple Developer et Google Play Console — vous gardez la propriété complète.",
        },
        {
          q: "Et le suivi après le lancement ?",
          a: "Le premier mois est inclus. Après, on peut caler un forfait de maintenance si vous voulez — en général 3 à 5 jours par mois suffisent.",
        },
      ],
    },
  },

  {
    slug: "platforms",
    accent: "#85B7EB",
    icon: "DB",
    metaKeywords: [
      "internal tools developer",
      "dashboard developer Brussels",
      "admin panel freelance",
      "plateforme métier Bruxelles",
    ],
    en: {
      tag: "Platform",
      title: "Business platforms",
      tagline:
        "Dashboards, admin panels and internal tools that replace spreadsheets and manual ops.",
      intro:
        "Most companies lose hours every week to spreadsheets, copy-paste workflows and Slack messages that should be automated. I build the internal platform you keep meaning to build — clean UI, role-based access, real reporting and the right amount of automation.",
      whatYouGet: [
        { title: "Custom dashboard", desc: "Built for your real workflow, not a generic template. Fast and easy to extend." },
        { title: "Roles & permissions", desc: "Admin, manager, staff — each role sees only what they need." },
        { title: "Reports & exports", desc: "Real-time KPIs, CSV/PDF exports, scheduled emails to your team." },
        { title: "Integrations", desc: "Hooks into your existing tools — Stripe, Slack, Notion, your accounting software." },
      ],
      process: [
        { label: "Week 1 — Audit", desc: "I shadow your current workflow. The output is a one-page system map." },
        { label: "Week 2 — Schema & wireframes", desc: "Data model and screens — agreed before any code." },
        { label: "Weeks 3-5 — Build", desc: "Core flows shipped to staging weekly. Your team tests in parallel." },
        { label: "Week 6 — Rollout", desc: "Data migration, training, switch-over. Old workflow archived." },
      ],
      stack: ["Next.js", "PostgreSQL", "Prisma", "NextAuth", "Tailwind", "Vercel"],
      timeline: "3 to 7 weeks depending on workflow complexity",
      pricing: "From €5k — most internal tools land between €5k and €15k.",
      faq: [
        {
          q: "Can it connect to our existing database?",
          a: "Yes. I work with PostgreSQL, MySQL, SQL Server, or whatever you're on. If your data lives in spreadsheets today, I'll migrate it.",
        },
        {
          q: "How do you handle user training?",
          a: "I record short Loom videos per feature and run one live walkthrough session. Most teams are autonomous within a week.",
        },
        {
          q: "Can we extend it ourselves later?",
          a: "Yes. Clean code, real documentation, and I'm happy to onboard your future developer.",
        },
      ],
    },
    fr: {
      tag: "Plateforme",
      title: "Plateformes métier",
      tagline:
        "Des dashboards, back-offices et outils internes qui remplacent les tableurs et les process manuels.",
      intro:
        "La plupart des entreprises perdent des heures chaque semaine dans des tableurs, du copier-coller et des messages Slack qui devraient être automatisés. Je construis la plateforme interne que vous repoussez depuis trop longtemps — UI propre, accès par rôle, vrais rapports, et juste ce qu'il faut d'automatisation pour faire la différence.",
      whatYouGet: [
        { title: "Un dashboard sur mesure", desc: "Pensé pour votre vrai quotidien, pas un template générique. Rapide à utiliser, facile à faire évoluer." },
        { title: "Rôles & permissions", desc: "Admin, manager, équipe terrain — chacun ne voit que ce qui le concerne." },
        { title: "Rapports & exports", desc: "KPI en temps réel, exports CSV/PDF, envoi automatique par email à votre équipe." },
        { title: "Intégrations", desc: "Connecté à vos outils existants — Stripe, Slack, Notion, votre logiciel de compta." },
      ],
      process: [
        { label: "Semaine 1 — Audit", desc: "Je vous observe travailler avec votre process actuel. Résultat : une carte du système sur une seule page." },
        { label: "Semaine 2 — Schéma & maquettes", desc: "Modèle de données et écrans — validés ensemble avant qu'une seule ligne de code soit écrite." },
        { label: "Semaines 3-5 — Construction", desc: "Des fonctionnalités livrées en pré-prod chaque semaine. Votre équipe teste en parallèle." },
        { label: "Semaine 6 — Bascule", desc: "Migration des données, formation, mise en route. L'ancien process est archivé." },
      ],
      stack: ["Next.js", "PostgreSQL", "Prisma", "NextAuth", "Tailwind", "Vercel"],
      timeline: "3 à 7 semaines selon la complexité du process",
      pricing: "À partir de 5 000 € — la plupart des projets se situent entre 5 000 et 15 000 €.",
      faq: [
        {
          q: "Ça peut se brancher sur notre base de données existante ?",
          a: "Oui. Je travaille avec PostgreSQL, MySQL, SQL Server, ou ce que vous avez. Et si vos données vivent encore dans des tableurs, je les migre.",
        },
        {
          q: "Vous formez nos utilisateurs ?",
          a: "J'enregistre des courtes vidéos Loom pour chaque fonctionnalité et j'anime une session en direct. La plupart des équipes sont autonomes en une semaine.",
        },
        {
          q: "On pourra l'étendre nous-mêmes plus tard ?",
          a: "Oui. Code propre, doc claire — et je peux briefer votre futur développeur sans difficulté.",
        },
      ],
    },
  },

  {
    slug: "ai-automation",
    accent: "#EF9F27",
    icon: "AI",
    metaKeywords: [
      "AI automation freelance",
      "OpenAI integration Belgium",
      "n8n developer freelance",
      "automatisation IA freelance",
    ],
    en: {
      tag: "AI",
      title: "AI & automation",
      tagline:
        "Smart workflows, chatbots and AI integrations that save real hours each week.",
      intro:
        "AI is most valuable when it's wired into the boring parts of your business. I build workflows that summarize, classify, extract, draft and route — chatbots that actually answer, automations that talk to your stack, and integrations that don't fall over the first time the API changes.",
      whatYouGet: [
        { title: "AI workflows", desc: "Process emails, documents, support tickets, leads — automatically classified and routed." },
        { title: "Custom chatbots", desc: "Trained on your docs and processes, on your site or inside Slack." },
        { title: "n8n / Zapier setups", desc: "Visual automations connecting your tools, monitored and documented." },
        { title: "OpenAI / Claude integrations", desc: "Direct API integrations when you need more control than a no-code tool." },
      ],
      process: [
        { label: "Week 1 — Process map", desc: "We identify the 3-5 highest-ROI automations. The rest waits." },
        { label: "Week 2 — Prototype", desc: "First automation in production. You see real time saved." },
        { label: "Weeks 3-4 — Roll out", desc: "Remaining flows, monitoring, documentation." },
      ],
      stack: ["OpenAI", "Anthropic Claude", "Python", "LangChain", "n8n", "Zapier", "Make"],
      timeline: "1 to 4 weeks per automation pack",
      pricing: "From €2k for a focused automation pack.",
      faq: [
        {
          q: "Will my data be safe?",
          a: "We pick providers that allow opt-out of training and we structure prompts to never expose secrets. For sensitive data, I can run open-source models locally.",
        },
        {
          q: "Can my team maintain the automations?",
          a: "Yes. I prefer tools like n8n because non-developers can read and adjust them. Hand-off is part of the project.",
        },
        {
          q: "What's a realistic ROI?",
          a: "Most automations I ship save between 2 and 15 hours per week per process. The first one usually pays for the project.",
        },
      ],
    },
    fr: {
      tag: "IA",
      title: "IA & automatisation",
      tagline:
        "Des workflows intelligents, des chatbots et des intégrations IA qui font économiser de vraies heures chaque semaine.",
      intro:
        "L'IA est vraiment utile quand on la branche sur les parties chiantes du quotidien. Je construis des workflows qui résument, classent, extraient, rédigent et routent — des chatbots qui répondent réellement, des automatisations qui parlent à votre stack, et des intégrations qui ne cassent pas au premier changement d'API.",
      whatYouGet: [
        { title: "Workflows IA", desc: "Traiter emails, documents, tickets, leads — classés et routés automatiquement, sans intervention humaine." },
        { title: "Chatbots sur mesure", desc: "Entraînés sur vos docs et vos process, déployés sur votre site ou directement dans Slack." },
        { title: "n8n / Zapier", desc: "Des automatisations visuelles qui connectent vos outils, supervisées et documentées." },
        { title: "Intégrations OpenAI / Claude", desc: "Des intégrations API directes quand vous voulez plus de contrôle qu'un outil no-code." },
      ],
      process: [
        { label: "Semaine 1 — Cartographie", desc: "On identifie les 3 à 5 automatisations qui rapportent le plus. Le reste peut attendre." },
        { label: "Semaine 2 — Prototype", desc: "Première automatisation en production. Vous mesurez le temps réellement gagné." },
        { label: "Semaines 3-4 — Déploiement", desc: "Le reste des workflows, le monitoring, la documentation." },
      ],
      stack: ["OpenAI", "Anthropic Claude", "Python", "LangChain", "n8n", "Zapier", "Make"],
      timeline: "1 à 4 semaines par pack d'automatisations",
      pricing: "À partir de 2 000 € pour un pack ciblé.",
      faq: [
        {
          q: "Mes données sont-elles protégées ?",
          a: "On choisit des fournisseurs qui permettent de refuser que vos données servent à l'entraînement, et on structure les prompts pour ne jamais exposer de secrets. Pour les données vraiment sensibles, je peux déployer des modèles open source en local.",
        },
        {
          q: "Mon équipe peut-elle entretenir les automatisations ?",
          a: "Oui. Je préfère des outils comme n8n justement parce qu'un profil non-développeur peut les lire et les ajuster. La passation fait partie du projet.",
        },
        {
          q: "C'est quoi un ROI réaliste ?",
          a: "La plupart des automatisations que je livre économisent 2 à 15 heures par semaine, par process. La première rembourse souvent le projet entier.",
        },
      ],
    },
  },

  {
    slug: "web3",
    accent: "#F0997B",
    icon: "◇",
    metaKeywords: [
      "Web3 developer Belgium",
      "smart contract freelance",
      "Solidity developer Brussels",
      "dApp developer freelance",
    ],
    en: {
      tag: "Web3",
      title: "Web3 & blockchain",
      tagline:
        "Smart contracts, dApps and on-chain integrations — only when it genuinely makes sense.",
      intro:
        "I don't push Web3 on projects that don't need it. But when it fits — token-gated access, on-chain provenance, decentralized identity, payments outside traditional rails — I build the contracts, the front-end and the audit trail. Solidity, Ethers and Hardhat are tools I use daily.",
      whatYouGet: [
        { title: "Smart contracts", desc: "Solidity contracts written, tested, audited, deployed to mainnet or L2." },
        { title: "dApp front-end", desc: "Wallet connect, transaction UX, gas-aware flows — built with Next.js + wagmi." },
        { title: "Off-chain plumbing", desc: "Indexers, webhooks, subgraphs — the boring half of every Web3 product." },
        { title: "Security & gas review", desc: "Internal audit, gas profiling, deployment checklists. Optional external audit." },
      ],
      process: [
        { label: "Week 1 — Architecture", desc: "Chain, contracts, data flows. We decide what goes on-chain and what doesn't." },
        { label: "Weeks 2-3 — Contracts", desc: "Implementation, unit tests, testnet deploy." },
        { label: "Weeks 4-5 — dApp", desc: "Front-end, wallet flows, end-to-end testing." },
        { label: "Week 6 — Mainnet", desc: "Audit pass, deploy, monitoring." },
      ],
      stack: ["Solidity", "Ethers.js", "Hardhat", "Foundry", "wagmi", "Next.js", "The Graph"],
      timeline: "4 to 10 weeks depending on contract complexity",
      pricing: "From €8k — varies a lot based on audit needs.",
      faq: [
        {
          q: "Do I really need Web3?",
          a: "Probably not. I'll tell you straight if a regular database serves you better. When Web3 wins, it's usually because of trustless ownership or jurisdiction-neutral payments.",
        },
        {
          q: "Which chains do you work on?",
          a: "Mostly Ethereum, Base, Optimism, Arbitrum and Polygon. Solana on request for specific use cases.",
        },
        {
          q: "What about audits?",
          a: "I do an internal audit and use static analyzers. For mainnet money-handling contracts, an external audit is non-negotiable — I'll connect you with firms I trust.",
        },
      ],
    },
    fr: {
      tag: "Web3",
      title: "Web3 & blockchain",
      tagline:
        "Smart contracts, dApps et intégrations on-chain — uniquement quand ça a du sens.",
      intro:
        "Je ne vous pousse pas vers le Web3 si votre projet n'en a pas besoin. Mais quand c'est vraiment pertinent — accès réservés via token, traçabilité on-chain, identité décentralisée, paiements en dehors des rails classiques — je construis les contrats, le front et la traçabilité d'audit. Solidity, Ethers et Hardhat sont des outils que j'utilise au quotidien.",
      whatYouGet: [
        { title: "Smart contracts", desc: "Contrats Solidity écrits, testés, audités, déployés sur mainnet ou L2." },
        { title: "Front de dApp", desc: "Connexion wallet, UX transactions, parcours conscients du gas — Next.js + wagmi." },
        { title: "La plomberie off-chain", desc: "Indexers, webhooks, subgraphs — la moitié pénible mais essentielle de tout produit Web3." },
        { title: "Sécurité & gas", desc: "Audit interne, profilage du gas, checklists de déploiement. Audit externe en option." },
      ],
      process: [
        { label: "Semaine 1 — Architecture", desc: "Chaîne, contrats, flux de données. On décide ensemble ce qui va on-chain et ce qui n'a pas à y être." },
        { label: "Semaines 2-3 — Contrats", desc: "Implémentation, tests unitaires, déploiement sur testnet." },
        { label: "Semaines 4-5 — dApp", desc: "Front, parcours wallet, tests de bout en bout." },
        { label: "Semaine 6 — Mainnet", desc: "Audit, déploiement, monitoring." },
      ],
      stack: ["Solidity", "Ethers.js", "Hardhat", "Foundry", "wagmi", "Next.js", "The Graph"],
      timeline: "4 à 10 semaines selon la complexité des contrats",
      pricing: "À partir de 8 000 € — le prix varie beaucoup selon les besoins d'audit.",
      faq: [
        {
          q: "Ai-je vraiment besoin de Web3 ?",
          a: "Très probablement non. Je vous le dirai honnêtement si une base de données classique vous rendra mieux service. Le Web3 ne gagne que quand on a vraiment besoin de propriété sans tiers, ou de paiements qui traversent les frontières sans friction.",
        },
        {
          q: "Sur quelles chaînes vous travaillez ?",
          a: "Principalement Ethereum, Base, Optimism, Arbitrum et Polygon. Solana sur demande pour des cas d'usage spécifiques.",
        },
        {
          q: "Et les audits ?",
          a: "Je fais un audit interne et j'utilise des analyseurs statiques. Pour un contrat mainnet qui manipule de l'argent, un audit externe n'est pas négociable — je vous oriente vers des cabinets que je connais.",
        },
      ],
    },
  },

  {
    slug: "social",
    accent: "#D4537E",
    icon: "#",
    metaKeywords: [
      "social platform developer",
      "community platform freelance",
      "creator platform Belgium",
      "plateforme communautaire freelance",
    ],
    en: {
      tag: "Social",
      title: "Social platforms",
      tagline:
        "Creator-focused platforms and community tools built for engagement and growth.",
      intro:
        "Building a social or community product is more than a feed and a like button — it's notifications people open, moderation that scales, search that finds, and growth loops that compound. I've shipped social products with feeds, content creation, ranking and creator economy mechanics.",
      whatYouGet: [
        { title: "Feed & content", desc: "Posts, comments, reactions, media uploads, real-time updates." },
        { title: "Discovery & ranking", desc: "Search, recommendations, trending — tuned to your community shape." },
        { title: "Moderation tools", desc: "Reporting, queues, admin dashboards — what you need to keep the platform healthy." },
        { title: "Notifications & growth", desc: "Email, push, in-app — the loops that bring users back." },
      ],
      process: [
        { label: "Week 1 — Community shape", desc: "Who posts, who reads, what success looks like 6 months in." },
        { label: "Weeks 2-4 — Core loops", desc: "Auth, feed, posting, reactions. Friends/follow graph if needed." },
        { label: "Weeks 5-7 — Discovery", desc: "Search, ranking, notifications, growth loops." },
        { label: "Week 8 — Launch", desc: "Polish, moderation, launch playbook." },
      ],
      stack: ["Next.js", "PostgreSQL", "Redis", "Elasticsearch", "Push notifications", "S3/Cloudflare R2"],
      timeline: "5 to 10 weeks for a v1",
      pricing: "From €10k — scale and feature scope drive cost.",
      faq: [
        {
          q: "Can you handle scale?",
          a: "Yes. I architect for it from day one — caching layers, queue-based notifications, CDN-served media. We don't have to scale infra for a million users on day one, but the design supports it.",
        },
        {
          q: "What about moderation?",
          a: "Building admin tools is part of v1. AI-assisted moderation can be added when traffic justifies it.",
        },
        {
          q: "Mobile too?",
          a: "Often yes — Flutter app for iOS/Android in parallel or right after. Same backend.",
        },
      ],
    },
    fr: {
      tag: "Social",
      title: "Plateformes sociales",
      tagline:
        "Des plateformes pour créateurs et des outils communautaires pensés pour l'engagement et la croissance.",
      intro:
        "Construire un produit social ou communautaire, ce n'est pas juste un feed et un bouton « j'aime ». C'est des notifications qu'on ouvre vraiment, une modération qui tient la route, une recherche qui trouve, et des boucles de croissance qui s'auto-alimentent. J'ai livré des produits sociaux avec feeds, création de contenu, classement intelligent et mécaniques d'économie de créateur.",
      whatYouGet: [
        { title: "Feed & contenu", desc: "Publications, commentaires, réactions, upload média, mises à jour en temps réel." },
        { title: "Découverte & classement", desc: "Recherche, recommandations, tendances — adaptés à la forme exacte de votre communauté." },
        { title: "Outils de modération", desc: "Signalements, files d'attente, dashboard admin — tout ce qu'il faut pour garder la plateforme saine." },
        { title: "Notifications & croissance", desc: "Email, push, in-app — les boucles qui ramènent vraiment les utilisateurs." },
      ],
      process: [
        { label: "Semaine 1 — Forme de la communauté", desc: "Qui poste, qui lit, à quoi ressemble la réussite dans six mois." },
        { label: "Semaines 2-4 — Boucles centrales", desc: "Auth, feed, publication, réactions. Graphe d'amis ou de follows si nécessaire." },
        { label: "Semaines 5-7 — Découverte", desc: "Recherche, classement, notifications, boucles de croissance." },
        { label: "Semaine 8 — Lancement", desc: "Polish final, modération, playbook de lancement." },
      ],
      stack: ["Next.js", "PostgreSQL", "Redis", "Elasticsearch", "Push notifications", "S3/Cloudflare R2"],
      timeline: "5 à 10 semaines pour une v1",
      pricing: "À partir de 10 000 € — l'échelle visée et l'étendue des fonctionnalités font varier le prix.",
      faq: [
        {
          q: "Vous tenez la charge ?",
          a: "Oui. Je conçois l'architecture pour ça dès le départ — couches de cache, notifications par file d'attente, médias servis par CDN. Pas besoin de scaler pour un million d'utilisateurs dès le jour 1, mais le design le permet sans tout refaire.",
        },
        {
          q: "Et la modération ?",
          a: "Les outils admin font partie de la v1. La modération assistée par IA peut s'ajouter ensuite, quand le trafic le justifie vraiment.",
        },
        {
          q: "Mobile aussi ?",
          a: "Souvent oui — une app Flutter iOS/Android en parallèle, ou juste après. Le même backend dessert les deux.",
        },
      ],
    },
  },
];

export function getService(slug: string): ServiceEntry | undefined {
  return services.find((s) => s.slug === slug);
}

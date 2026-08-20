import Link from "next/link";
import { siteConfig } from "@/lib/site";

type Lang = "en" | "fr";

const CONTENT = {
  fr: {
    eyebrow: "Développeur freelance · Bruxelles",
    title: "Un partenaire technique local pour transformer votre idée en produit.",
    intro: "Torsolution accompagne les startups, PME et équipes bruxelloises qui cherchent un développeur capable de cadrer, concevoir et livrer leur projet sans multiplier les intermédiaires.",
    primary: "Parler de mon projet",
    secondary: "Découvrir les services",
    proof: ["Basé à Bruxelles", "8+ ans d'expérience", "Web · Mobile · IA", "Réponse sous 24h"],
    servicesTitle: "Ce que je peux construire avec vous",
    servicesIntro: "Un seul interlocuteur de la première discussion à la mise en production.",
    services: [
      { slug: "web", title: "Application web & SaaS", text: "Applications Next.js, sites marketing, espaces clients et produits SaaS rapides, accessibles et optimisés pour le référencement." },
      { slug: "mobile", title: "Application mobile", text: "Applications iOS et Android en Flutter, avec backend, notifications, paiements et publication sur les stores." },
      { slug: "platforms", title: "Plateforme métier", text: "Dashboards, back-offices et outils internes adaptés à vos processus, vos rôles et vos données." },
      { slug: "ai-automation", title: "IA & automatisation", text: "Workflows IA, intégrations et automatisations utiles qui réduisent les tâches répétitives de votre équipe." },
    ],
    localTitle: "Pourquoi travailler avec un freelance à Bruxelles ?",
    localText: "La proximité facilite les ateliers, les décisions rapides et la compréhension du contexte belge. Nous pouvons travailler à distance au quotidien et nous retrouver à Bruxelles lorsqu'une session de cadrage, une démonstration ou un lancement mérite d'être fait ensemble.",
    approachTitle: "La qualité d'un studio, la simplicité d'un freelance.",
    approach: [
      ["Direct", "Vous échangez avec la personne qui conçoit et développe réellement le produit."],
      ["Transparent", "Périmètre, budget, planning et arbitrages restent visibles pendant tout le projet."],
      ["Durable", "Le code, la documentation et les accès vous appartiennent. Le produit reste évolutif."],
    ],
    faqTitle: "Questions fréquentes",
    faq: [
      ["Travaillez-vous uniquement à Bruxelles ?", "Non. Je travaille avec des clients partout en Belgique et à distance, tout en restant disponible pour des rendez-vous à Bruxelles."],
      ["Pouvez-vous reprendre un projet existant ?", "Oui. Je commence par un audit court du code, du design et des priorités avant de proposer un plan de reprise réaliste."],
      ["Quel budget prévoir ?", "Une automatisation ciblée peut démarrer autour de 2 000 €. Un MVP web ou mobile complet se situe généralement à partir de 6 000 à 8 000 €, selon le périmètre."],
      ["Combien de temps faut-il pour lancer ?", "Une première version sérieuse prend souvent entre trois et huit semaines. Le calendrier exact dépend des intégrations, du design et du niveau de finition attendu."],
    ],
    ctaTitle: "Votre projet mérite mieux qu'un devis générique.",
    ctaText: "Expliquez-moi le contexte en quelques lignes. Je vous réponds avec les premières questions utiles, sans discours commercial inutile.",
  },
  en: {
    eyebrow: "Freelance developer · Brussels",
    title: "A local technical partner to turn your idea into a product.",
    intro: "Torsolution helps Brussels startups, SMEs and teams looking for a developer who can scope, design and ship their project without layers of intermediaries.",
    primary: "Discuss my project",
    secondary: "Explore services",
    proof: ["Based in Brussels", "8+ years experience", "Web · Mobile · AI", "Reply within 24h"],
    servicesTitle: "What we can build together",
    servicesIntro: "One point of contact from the first conversation to production.",
    services: [
      { slug: "web", title: "Web application & SaaS", text: "Next.js applications, marketing sites, client portals and SaaS products built for speed, accessibility and SEO." },
      { slug: "mobile", title: "Mobile application", text: "Flutter applications for iOS and Android, including backend, notifications, payments and store submission." },
      { slug: "platforms", title: "Business platform", text: "Dashboards, admin panels and internal tools shaped around your processes, roles and data." },
      { slug: "ai-automation", title: "AI & automation", text: "Useful AI workflows, integrations and automations that remove repetitive work from your team." },
    ],
    localTitle: "Why work with a freelance developer in Brussels?",
    localText: "Being nearby makes workshops, fast decisions and Belgian business context easier. We can work remotely every day and meet in Brussels whenever a scoping session, demonstration or launch deserves to happen together.",
    approachTitle: "Studio quality, freelance simplicity.",
    approach: [
      ["Direct", "You speak with the person actually designing and developing the product."],
      ["Transparent", "Scope, budget, schedule and trade-offs remain visible throughout the project."],
      ["Sustainable", "The code, documentation and accounts belong to you. The product remains extendable."],
    ],
    faqTitle: "Frequently asked questions",
    faq: [
      ["Do you only work in Brussels?", "No. I work with clients across Belgium and remotely while remaining available for meetings in Brussels."],
      ["Can you take over an existing project?", "Yes. I start with a short audit of the code, design and priorities before proposing a realistic takeover plan."],
      ["What budget should I expect?", "A focused automation can start around €2,000. A complete web or mobile MVP generally starts around €6,000 to €8,000 depending on scope."],
      ["How long does a launch take?", "A serious first version often takes between three and eight weeks. The exact schedule depends on integrations, design and expected polish."],
    ],
    ctaTitle: "Your project deserves more than a generic quote.",
    ctaText: "Share the context in a few lines. I will reply with the first useful questions, without the sales theatre.",
  },
};

export default function LocalLanding({ lang }: { lang: Lang }) {
  const c = CONTENT[lang];
  const prefix = lang === "fr" ? "/fr" : "";

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-24 sm:px-10 md:pb-24 md:pt-32">
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a7f3d0]/[0.06] blur-[100px]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#a7f3d0]">{c.eyebrow}</div>
          <h1 className="mx-auto mt-7 max-w-4xl text-[clamp(42px,6.6vw,82px)] font-light leading-[0.98] tracking-[-0.055em] text-[#f7f5ef]">{c.title}</h1>
          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-white/48">{c.intro}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href={`${prefix || "/"}#contact`} className="rounded-full bg-[#a7f3d0] px-7 py-3.5 text-[13px] font-medium text-[#07100d]">{c.primary}</Link>
            <Link href={`${prefix}/services`} className="rounded-full border border-white/15 bg-white/[0.025] px-7 py-3.5 text-[13px] text-white/75">{c.secondary}</Link>
          </div>
          <div className="mt-14 grid overflow-hidden rounded-[20px] border border-white/[0.07] bg-white/[0.025] sm:grid-cols-4">
            {c.proof.map((item) => <div key={item} className="border-b border-white/[0.06] px-4 py-5 font-mono text-[10px] uppercase tracking-[0.1em] text-white/40 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0">{item}</div>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-[clamp(32px,4vw,50px)] font-light tracking-[-0.04em] text-[#f7f5ef]">{c.servicesTitle}</h2>
          <p className="mt-4 text-[14px] text-white/40">{c.servicesIntro}</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {c.services.map((service, index) => (
              <Link key={service.slug} href={`${prefix}/services/${service.slug}`} className="group rounded-[20px] border border-white/[0.08] bg-white/[0.025] p-7 transition hover:-translate-y-1 hover:border-[#a7f3d0]/25 hover:bg-white/[0.04]">
                <div className="font-mono text-[10px] text-[#a7f3d0]">0{index + 1}</div>
                <h3 className="mt-8 text-[24px] font-light text-[#f7f5ef]">{service.title}</h3>
                <p className="mt-4 text-[13px] leading-6 text-white/40">{service.text}</p>
                <span className="mt-7 inline-block font-mono text-[10px] uppercase tracking-[0.12em] text-[#a7f3d0] transition-transform group-hover:translate-x-1">{lang === "fr" ? "Découvrir →" : "Explore →"}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 rounded-[24px] border border-white/[0.08] bg-[#0d0c13]/80 p-8 md:grid-cols-2 md:p-12">
          <div><div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#a7f3d0]">Brussels / Belgium</div><h2 className="mt-5 text-[34px] font-light leading-tight tracking-[-0.035em] text-[#f7f5ef]">{c.localTitle}</h2><p className="mt-6 text-[14px] leading-7 text-white/44">{c.localText}</p></div>
          <div><h2 className="text-[28px] font-light tracking-[-0.03em] text-[#f7f5ef]">{c.approachTitle}</h2><div className="mt-7 space-y-3">{c.approach.map(([title, text]) => <div key={title} className="rounded-[16px] border border-white/[0.07] bg-white/[0.025] p-5"><h3 className="text-[15px] text-[#a7f3d0]">{title}</h3><p className="mt-2 text-[12px] leading-5 text-white/40">{text}</p></div>)}</div></div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 md:py-24">
        <div className="mx-auto max-w-4xl"><h2 className="text-[36px] font-light tracking-[-0.035em] text-[#f7f5ef]">{c.faqTitle}</h2><div className="mt-8 space-y-3">{c.faq.map(([q, a]) => <details key={q} className="group rounded-[18px] border border-white/[0.08] bg-white/[0.02] p-6"><summary className="flex cursor-pointer list-none justify-between gap-6 text-[15px] text-white/80"><span>{q}</span><span className="text-[#a7f3d0] transition group-open:rotate-45">+</span></summary><p className="mt-4 max-w-3xl text-[13px] leading-6 text-white/42">{a}</p></details>)}</div></div>
      </section>

      <section className="px-6 py-20 sm:px-10 md:py-24"><div className="mx-auto max-w-5xl rounded-[24px] border border-[#a7f3d0]/20 bg-gradient-to-br from-[#a7f3d0]/10 to-[#c4b5fd]/[0.06] p-8 text-center md:p-14"><h2 className="text-[clamp(30px,4vw,50px)] font-light tracking-[-0.04em] text-[#f7f5ef]">{c.ctaTitle}</h2><p className="mx-auto mt-5 max-w-xl text-[14px] leading-7 text-white/45">{c.ctaText}</p><a href={`${siteConfig.whatsapp}?text=${encodeURIComponent(lang === "fr" ? "Bonjour, je souhaite discuter de mon projet à Bruxelles." : "Hi, I would like to discuss my project in Brussels.")}`} className="mt-8 inline-flex rounded-full bg-[#a7f3d0] px-7 py-3.5 text-[13px] font-medium text-[#07100d]">WhatsApp · {c.primary}</a></div></section>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { localizedHref } from "@/lib/locale";

import LogoSpace from "./LogoSpace";

const COPY = {
  fr: {
    badge: "Studio produit indépendant · Bruxelles",
    titleA: "Votre idée mérite",
    titleB: "un produit qui",
    titleC: "donne envie.",
    subtitle: "Je transforme les idées ambitieuses en expériences web, mobile et IA qui se comprennent vite, inspirent confiance et sont prêtes à grandir.",
    primary: "Voir ce que mon idée peut devenir",
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
    workTitle: "Pas des concepts. Des produits qui existent.",
    workText: "Chaque projet répond à un problème réel, avec une identité, une logique métier et un chemin clair vers la production.",
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
    founderTitle: "Un senior dans la pièce. Pas une chaîne de sous-traitance.",
    founderText: "Je m'appelle Amin. Je travaille directement avec vous, du premier atelier jusqu'au lancement. Vous savez toujours qui décide, qui conçoit et qui construit. Cette proximité rend les projets plus rapides, plus cohérents et beaucoup plus agréables à mener.",
    founderPoints: ["Conseil honnête, même quand il faut réduire le périmètre", "Communication directe, sans chef de projet intermédiaire", "Code et accès entièrement remis à votre équipe"],
    founderCta: "Découvrir mon approche",
  },
  en: {
    badge: "Independent product studio · Brussels",
    titleA: "Your idea deserves",
    titleB: "a product people",
    titleC: "want to use.",
    subtitle: "I turn ambitious ideas into web, mobile and AI experiences that feel clear, build trust and are ready to grow.",
    primary: "See what my idea could become",
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
    workTitle: "Not concepts. Products that exist.",
    workText: "Each project solves a real problem with its own identity, business logic and clear path to production.",
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
    founderTitle: "A senior in the room. Not a chain of subcontractors.",
    founderText: "I am Amin. I work directly with you from the first workshop to launch. You always know who decides, designs and builds. That proximity makes projects faster, more coherent and far more enjoyable to run.",
    founderPoints: ["Honest advice, even when the scope should be smaller", "Direct communication with no project-manager layer", "Code and accounts fully handed over to your team"],
    founderCta: "Discover my approach",
  },
};

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] ${light ? "text-[#9ff1d7]" : "text-[#235a4b]"}`}><span className="h-px w-8 bg-current" />{children}</div>;
}

export default function CampaignHome() {
  const { lang } = useLang();
  const c = COPY[lang];
  const workHref = localizedHref("/work", lang);

  return (
    <div className="campaign-home tech-dark">
      <section className="relative isolate min-h-[100svh] overflow-hidden px-6 pb-14 pt-28 sm:px-10 md:pt-36">
        <div className="campaign-aurora absolute inset-0" />
        <div className="absolute -left-24 top-40 h-64 w-64 rounded-full border-[42px] border-[#ff7a59]/15" />
        <div className="absolute -right-20 bottom-16 h-72 w-72 rounded-full border border-[#7c5cff]/25" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-4 lg:grid-cols-[1.02fr_.98fr]">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }} className="relative z-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/55 px-4 py-2 font-mono text-[9px] uppercase tracking-[.18em] shadow-sm backdrop-blur-xl"><span className="h-2 w-2 rounded-full bg-[#00a878] shadow-[0_0_0_5px_rgba(0,168,120,.12)]" />{c.badge}</div>
            <h1 className="mt-8 max-w-3xl text-[clamp(48px,6.9vw,92px)] font-medium leading-[.91] tracking-[-.065em]">
              <span className="block">{c.titleA}</span><span className="block">{c.titleB}</span><span className="campaign-ink block pb-2 italic">{c.titleC}</span>
            </h1>
            <p className="mt-8 max-w-xl text-[16px] leading-7 text-[#15141a]/58">{c.subtitle}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#contact" className="campaign-main-cta rounded-full bg-[#7c5cff] px-7 py-4 text-[13px] font-medium text-white">{c.primary} <span className="ml-2">↗</span></a>
              <Link href={workHref} className="rounded-full border border-black/15 bg-white/45 px-7 py-4 text-[13px] font-medium backdrop-blur-md transition hover:bg-white">{c.secondary}</Link>
            </div>
            <div className="mt-6 flex items-center gap-3 text-[11px] text-black/42"><span className="flex -space-x-2">{["#ff7a59", "#7c5cff", "#00a878"].map(color => <span key={color} className="h-7 w-7 rounded-full border-2 border-[#f3f0e8]" style={{ background: color }} />)}</span>{c.availability}</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: .15 }} className="relative -mx-3 lg:mx-0">
            <LogoSpace />
          </motion.div>
        </div>
        <div className="relative mx-auto mt-4 grid max-w-6xl overflow-hidden rounded-[22px] border border-black/[0.08] bg-white/45 shadow-sm backdrop-blur-md sm:grid-cols-4">
          {c.signals.map((signal) => <div key={signal} className="border-b border-black/[0.07] px-5 py-5 text-center font-mono text-[10px] uppercase tracking-[.12em] text-black/45 last:border-0 sm:border-b-0 sm:border-r sm:last:border-r-0">{signal}</div>)}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#15141a] px-6 py-24 text-white sm:px-10 md:py-32">
        <div className="absolute right-[-8%] top-[-30%] h-[520px] w-[520px] rounded-full bg-[#7c5cff]/25 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl">
          <Eyebrow light>{c.tensionEyebrow}</Eyebrow>
          <div className="mt-8 grid gap-10 md:grid-cols-[1.25fr_.75fr] md:items-end">
            <h2 className="text-[clamp(40px,6vw,78px)] font-light leading-[1] tracking-[-.055em]">{c.tensionTitle}<span className="block text-[#9ff1d7]">{c.tensionAccent}</span></h2>
            <p className="max-w-md text-[15px] leading-7 text-white/48">{c.tensionText}</p>
          </div>
          <div className="mt-16 grid gap-3 md:grid-cols-3">
            {c.transformations.map((item, index) => <motion.div key={item.before} whileHover={{ y: -8 }} className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[.045] p-6"><div className="font-mono text-[10px] text-white/28">0{index + 1}</div><div className="mt-10 text-[13px] leading-6 text-white/35 line-through decoration-white/20">{item.before}</div><div className="my-5 h-px bg-white/10" /><div className="text-[22px] font-light leading-tight" style={{ color: item.color }}>{item.after}</div></motion.div>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto max-w-6xl"><Eyebrow>{c.workEyebrow}</Eyebrow><div className="mt-7 grid gap-6 md:grid-cols-2 md:items-end"><h2 className="text-[clamp(38px,5vw,68px)] font-medium leading-[.98] tracking-[-.055em]">{c.workTitle}</h2><p className="max-w-md text-[14px] leading-7 text-black/48 md:justify-self-end">{c.workText}</p></div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {c.works.map((work, index) => <Link href={localizedHref(`/work/${work.slug}`, lang)} key={work.name} className="work-card group relative min-h-[440px] overflow-hidden rounded-[26px] p-7 transition-transform duration-500 hover:-translate-y-2" style={{ background: work.color }}><div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[.12em] text-black/45"><span>0{index + 1}</span><span>{work.type}</span></div><div className="campaign-project-device absolute left-[12%] right-[12%] top-[23%] h-[180px] rounded-[18px] border-[6px] border-[#15141a] bg-[#f8f6ef] p-4 shadow-[0_30px_60px_rgba(0,0,0,.22)] transition-transform duration-500 group-hover:rotate-[-2deg] group-hover:scale-[1.04]"><div className="flex gap-1"><i /><i /><i /></div><div className="mt-5 grid grid-cols-[.35fr_.65fr] gap-3"><div className="space-y-2">{[1,2,3,4].map(x => <b key={x} />)}</div><div className="rounded-lg bg-[#15141a] p-3"><span /><span /><span /></div></div></div><div className="absolute inset-x-7 bottom-7"><h3 className="text-[40px] font-medium tracking-[-.05em]">{work.name}</h3><p className="mt-2 text-[13px] leading-5 text-black/55">{work.result}</p><div className="mt-5 font-mono text-[10px] uppercase tracking-[.12em]">Voir le projet <span className="inline-block transition-transform group-hover:translate-x-2">→</span></div></div></Link>)}
          </div>
        </div>
      </section>

      <section className="border-y border-black/[.08] bg-[#e7e1ff] px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto max-w-6xl"><Eyebrow>{c.offerEyebrow}</Eyebrow><h2 className="mt-7 max-w-4xl text-[clamp(38px,5.4vw,72px)] font-medium leading-[.98] tracking-[-.055em]">{c.offerTitle}</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border border-black/10 bg-black/10 md:grid-cols-2">
            {c.offers.map((offer) => <motion.div key={offer.n} whileHover={{ backgroundColor: "rgba(255,255,255,.07)" }} className="bg-[#f6f3ff] p-7 md:p-9"><div className="flex items-center justify-between"><span className="font-mono text-[10px] text-black/35">{offer.n}</span><span className="h-3 w-3 rounded-full bg-[#7c5cff]" /></div><h3 className="mt-10 text-[32px] font-medium tracking-[-.04em]">{offer.title}</h3><p className="mt-4 max-w-lg text-[13px] leading-6 text-black/48">{offer.text}</p><div className="mt-7 flex flex-wrap gap-2">{offer.tags.map(tag => <span key={tag} className="rounded-full border border-black/10 bg-white/50 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.1em] text-black/50">{tag}</span>)}</div></motion.div>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <motion.div whileHover={{ rotate: 0 }} className="relative mx-auto rotate-[-3deg]"><div className="absolute -inset-4 rounded-[32px] bg-[#ff7a59]" /><div className="relative h-[420px] w-[310px] overflow-hidden rounded-[24px] border-4 border-[#15141a] bg-[#ddd]"><Image src="/amin.png" alt="Amin Torkhani" fill className="object-cover" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-20 font-mono text-[10px] uppercase tracking-[.15em] text-white">Amin · Brussels</div></div></motion.div>
          <div><Eyebrow>{c.founderEyebrow}</Eyebrow><h2 className="mt-7 text-[clamp(38px,5vw,66px)] font-medium leading-[.98] tracking-[-.055em]">{c.founderTitle}</h2><p className="mt-7 max-w-2xl text-[15px] leading-7 text-black/52">{c.founderText}</p><ul className="mt-8 space-y-3">{c.founderPoints.map(point => <li key={point} className="flex items-start gap-3 text-[13px] text-black/58"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00a878] text-[11px] text-white">✓</span>{point}</li>)}</ul><Link href={lang === "fr" ? "/fr/developpeur-freelance-bruxelles" : "/freelance-developer-brussels"} className="mt-9 inline-flex rounded-full border border-black/15 px-6 py-3 text-[12px] font-medium transition hover:bg-black hover:text-white">{c.founderCta} →</Link></div>
        </div>
      </section>
    </div>
  );
}

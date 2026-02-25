"use client";

import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { siteConfig } from "@/lib/site";

export default function CTA() {
  const { lang } = useLang();
  const t = translations[lang];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const mailSubject = encodeURIComponent(
      subject || `New Project Inquiry from ${name}`
    );

    const mailBody = encodeURIComponent(
      `Name: ${name}
Email: ${email}

Message:
${message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${mailSubject}&body=${mailBody}`;
  }

  return (
    <section id="contact" className="px-8 pb-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-8 py-16"
        >
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            {/* Left */}
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                {t.ctaTitle}
              </h2>
              <p className="mt-4 text-gray-300">{t.ctaSubtitle}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder={lang === "en" ? "Name" : "Nom"}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none"
                />
              </div>

              <input
                name="subject"
                placeholder={
                  lang === "en" ? "Subject (optional)" : "Sujet (optionnel)"
                }
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none"
              />

              <textarea
                name="message"
                required
                rows={5}
                placeholder={
                  lang === "en"
                    ? "Tell me about your project..."
                    : "Parle-moi de ton projet..."
                }
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                {lang === "en" ? "Send message" : "Envoyer"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
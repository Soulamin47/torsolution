"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/app/providers/LangProvider";
import { translations } from "@/lib/translations";
import { siteConfig } from "@/lib/site";

export default function CTA() {
  const { lang } = useLang();
  const t = translations[lang];
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const body = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
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
              <h2 className="text-3xl font-semibold sm:text-4xl">{t.ctaTitle}</h2>
              <p className="mt-4 text-gray-300">{t.ctaSubtitle}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("15-min call request")}`}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  {t.ctaCall}
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {t.ctaBrief}
                </a>
              </div>
              <div className="mt-3 text-sm text-gray-400">{t.ctaResponse}</div>
            </div>

            {/* Form */}
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
              {sent && (
                <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                  {t.contactSuccess}
                </div>
              )}
              {error && (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  {t.contactError}
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder={t.contactName}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-white/30 transition"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder={t.contactEmail}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-white/30 transition"
                />
              </div>

              <input
                name="subject"
                placeholder={t.contactSubject}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-white/30 transition"
              />

              <textarea
                name="message"
                required
                rows={5}
                placeholder={t.contactMessage}
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-white/30 transition"
              />

              <button
                type="submit"
                disabled={loading || sent}
                className="w-full rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "…" : t.contactSend}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

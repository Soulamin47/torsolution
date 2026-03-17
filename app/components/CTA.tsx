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
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-green-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t.ctaWhatsApp}
                </a>
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("15-min call request")}`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  {t.ctaCall}
                </a>
              </div>
              <div className="mt-3 text-sm text-gray-400">{t.ctaResponse}</div>

              <div className="mt-6 space-y-2">
                {t.ctaTrustBadges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-green-500/30 bg-green-500/10 text-[10px] text-green-400">
                      ✓
                    </span>
                    {badge}
                  </div>
                ))}
              </div>
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

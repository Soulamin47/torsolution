export const siteConfig = {
  name: "Torsolution",
  url:
    process.env.NODE_ENV === "production"
      ? "https://torsolution.be"
      : "http://localhost:3000",
  email: "info@torsolution.be",
  phone: "+32466386565",
  whatsapp: "https://wa.me/32466386565",
  description:
    "Freelance developer based in Brussels — I build fast, reliable web & mobile products, business platforms and AI-powered tools.",
};

/**
 * Join text fragments into a meta description that fits search snippets
 * (~155 chars), cutting on a word boundary instead of mid-word.
 */
export function metaDescription(...parts: string[]): string {
  const text = parts.join(" ").replace(/\s+/g, " ").trim();
  const max = 155;
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:.—–-]+$/, "")}…`;
}

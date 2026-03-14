export const siteConfig = {
  name: "Torsolution",
  url:
    process.env.NODE_ENV === "production"
      ? "https://torsolution.be"
      : "http://localhost:3000",
  email: "info@torsolution.be",
  description:
    "Freelance developer based in Brussels — I build fast, reliable web & mobile products, business platforms and AI-powered tools.",
};

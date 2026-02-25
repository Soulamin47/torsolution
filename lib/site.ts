export const siteConfig = {
  name: "Torsolution",
  url:
   process.env.NODE_ENV === "production"
    ? "https://torsolution.be"
    : "http://localhost:3000",
  email: "info@torsolution.be",
  description:
    "Engineering high-performance digital systems: web, mobile, AI & scalable architectures.",
};
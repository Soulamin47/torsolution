import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { LangProvider } from "./providers/LangProvider";
import { siteConfig } from "@/lib/site";
import { detectLocale } from "@/lib/locale";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | Freelance Developer — Web, Mobile & AI`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "Torsolution",
    "Freelance Developer Brussels",
    "Développeur Freelance Bruxelles",
    "Next.js Developer",
    "Flutter Developer",
    "Web Application Development",
    "Mobile App Development",
    "AI Automation",
    "Web3 Developer",
    "Product Engineering Belgium",
  ],

  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/app-icon.svg",
  },

  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Freelance Developer — Web, Mobile & AI`,
    description: siteConfig.description,
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Freelance Developer — Web, Mobile & AI`,
    description: siteConfig.description,
    images: ["/og"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Detect locale server-side from the pathname injected by middleware.
  // This guarantees the SSR'd <html lang="..."> matches the page content.
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") ?? "/";
  const lang = detectLocale(pathname);

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <body
        className="bg-[#09080F] text-[#F0EEE8] antialiased"
        suppressHydrationWarning
      >
        <LangProvider initialLang={lang}>{children}</LangProvider>
      </body>
    </html>
  );
}

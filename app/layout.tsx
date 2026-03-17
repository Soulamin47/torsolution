import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LangProvider } from "./providers/LangProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", preload: false });
import { siteConfig } from "@/lib/site";

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
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-[#07070A] text-white antialiased`}
        suppressHydrationWarning
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}

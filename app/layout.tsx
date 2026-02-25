import "./globals.css";
import type { Metadata } from "next";
import { LangProvider } from "./providers/LangProvider";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} | Advanced Product Engineering`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [
    "Torsolution",
    "Web Developer",
    "Product Engineer",
    "Next.js",
    "Flutter",
    "AI Automation",
    "Web3",
    "Cloud Architecture",
    "Scalable Systems",
  ],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Advanced Product Engineering`,
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
    title: `${siteConfig.name} | Advanced Product Engineering`,
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
        className="bg-[#07070A] text-white antialiased"
        suppressHydrationWarning
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
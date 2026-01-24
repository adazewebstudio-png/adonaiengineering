import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Adonai Engineering",
    default: "Adonai Engineering And Construction Ltd",
  },
  description: "Premier engineering and construction services in Ghana. Specializing in building construction, civil works, and industrial projects.",
  metadataBase: new URL("https://adonai-engineering.com"), // Placeholder URL, update when real
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: "Adonai Engineering",
  },
};

import { SiteSchema } from "@/components/seo/SiteSchema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased bg-background text-foreground font-sans selection:bg-primary/20 selection:text-primary">
        <SiteSchema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

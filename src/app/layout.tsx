import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "piano lessons",
    "piano teacher",
    "Ourimbah",
    "Central Coast NSW",
    "piano lessons Central Coast",
    "learn piano",
    "sheet music",
    "online piano lessons",
    "Keon Wu",
    "Dusty Tunes",
    "piano teacher NSW",
    "beginner piano",
    "adult piano lessons",
    "kids piano lessons",
  ],
  authors: [{ name: SITE_CONFIG.teacher.name }],
  creator: SITE_CONFIG.teacher.name,
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <head>
        <JsonLd type="LocalBusiness" />
        <JsonLd type="Person" />
      </head>
      <body className="bg-[#0C0A09] text-[#FAFAF9] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

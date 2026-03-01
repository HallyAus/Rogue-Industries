import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
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
    <html lang="en-AU" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <JsonLd type="LocalBusiness" />
        <JsonLd type="Person" />
      </head>
      <body className="bg-[#FFFBF5] text-[#2C2418] font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

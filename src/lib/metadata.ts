import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
  ogImage,
}: PageMeta): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title: title === "Home" ? `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}` : `${title} | ${SITE_CONFIG.name}`,
    description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_AU",
      type: "website",
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

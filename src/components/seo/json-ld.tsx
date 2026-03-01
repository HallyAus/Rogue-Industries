import { SITE_CONFIG } from "@/lib/constants";

type JsonLdProps = {
  type: "LocalBusiness" | "Person" | "FAQPage" | "BreadcrumbList";
  data?: Record<string, unknown>;
};

function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MusicSchool",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.email,
    email: SITE_CONFIG.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ourimbah",
      addressRegion: "NSW",
      postalCode: "2258",
      addressCountry: "AU",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.3544,
      longitude: 151.3731,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.youtube,
    ],
    priceRange: "$$",
  };
}

function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.teacher.name,
    jobTitle: "Piano Teacher",
    description: SITE_CONFIG.teacher.bio,
    url: SITE_CONFIG.url,
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.youtube,
    ],
    worksFor: {
      "@type": "MusicSchool",
      name: SITE_CONFIG.name,
    },
  };
}

export function JsonLd({ type, data }: JsonLdProps) {
  let schema: Record<string, unknown>;

  switch (type) {
    case "LocalBusiness":
      schema = getLocalBusinessSchema();
      break;
    case "Person":
      schema = getPersonSchema();
      break;
    case "FAQPage":
      schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        ...(data || {}),
      };
      break;
    case "BreadcrumbList":
      schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        ...(data || {}),
      };
      break;
    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

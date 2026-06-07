import type { Metadata } from "next";

import {
  CONTACT_EMAIL,
  CONTACT_LINKEDIN,
  CONTACT_NAME,
  OPERATOR_NAME,
  PRODUCT_NAME,
} from "@/lib/legal";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://naga-joblist.vercel.app";

export const SITE_NAME = "Naga Codex — Job Pilot";
export const DEFAULT_TITLE =
  "Naga Codex Job Pilot | AI Job Search by Naga Codex";
export const DEFAULT_DESCRIPTION = `${PRODUCT_NAME} by ${CONTACT_NAME} under ${OPERATOR_NAME}. AI-powered job matching, company research, and application tracking for developers in Germany, the United Kingdom, and Europe.`;

export const SEO_KEYWORDS = [
  "Naga Codex",
  "Maurice Holda",
  "Job Pilot",
  "AI job search",
  "job hunting assistant",
  "resume matching",
  "company research",
  "developer jobs",
  "tech jobs Germany",
  "tech jobs Europe",
  "Adzuna job search",
] as const;

/** Primary geographic markets surfaced in metadata and structured data. */
export const GEO_REGION = "DE";
export const GEO_PLACENAME = "Germany";
export const GEO_AREA_SERVED = ["DE", "GB", "AT", "CH", "EU"] as const;

export function getSiteUrl(path = ""): string {
  return new URL(path, SITE_URL).toString();
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  /** Use when the title should not receive the root layout template suffix. */
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  noIndex = false,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const canonical = getSiteUrl(path);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...SEO_KEYWORDS],
    authors: [{ name: CONTACT_NAME, url: CONTACT_LINKEDIN }],
    creator: CONTACT_NAME,
    publisher: OPERATOR_NAME,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: canonical,
      siteName: SITE_NAME,
      title: `${title} · ${OPERATOR_NAME}`,
      description,
      images: [
        {
          url: getSiteUrl("/icon.png"),
          width: 512,
          height: 512,
          alt: `${OPERATOR_NAME} Job Pilot logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${OPERATOR_NAME}`,
      description,
      images: [getSiteUrl("/icon.png")],
    },
    other: {
      "geo.region": GEO_REGION,
      "geo.placename": GEO_PLACENAME,
      author: `${CONTACT_NAME}, ${OPERATOR_NAME}`,
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s · ${OPERATOR_NAME} Job Pilot`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [...SEO_KEYWORDS],
  applicationName: PRODUCT_NAME,
  authors: [{ name: CONTACT_NAME, url: CONTACT_LINKEDIN }],
  creator: CONTACT_NAME,
  publisher: OPERATOR_NAME,
  category: "technology",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-GB": SITE_URL,
      "en-DE": SITE_URL,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: `${OPERATOR_NAME} Job Pilot`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/icon.png"],
  },
  other: {
    "geo.region": GEO_REGION,
    "geo.placename": GEO_PLACENAME,
    author: `${CONTACT_NAME}, ${OPERATOR_NAME}`,
  },
};

export function getJsonLdGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "en-GB",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: OPERATOR_NAME,
        url: SITE_URL,
        logo: getSiteUrl("/icon.png"),
        email: CONTACT_EMAIL,
        founder: { "@id": `${SITE_URL}/#person` },
        areaServed: GEO_AREA_SERVED.map((code) => ({
          "@type": "Country",
          name: code,
        })),
        address: {
          "@type": "PostalAddress",
          addressCountry: GEO_REGION,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: CONTACT_NAME,
        url: CONTACT_LINKEDIN,
        email: CONTACT_EMAIL,
        jobTitle: "Founder & Developer",
        worksFor: { "@id": `${SITE_URL}/#organization` },
        nationality: {
          "@type": "Country",
          name: GEO_REGION,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#application`,
        name: PRODUCT_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: SITE_URL,
        description: DEFAULT_DESCRIPTION,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
        author: { "@id": `${SITE_URL}/#person` },
        creator: { "@id": `${SITE_URL}/#person` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        areaServed: GEO_AREA_SERVED.map((code) => ({
          "@type": "Country",
          name: code,
        })),
      },
    ],
  };
}

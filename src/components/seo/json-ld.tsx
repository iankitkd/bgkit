import React from "react";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * BreadcrumbList Schema generator
 */
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * CollectionPage & ItemList Schema for category and browse pages
 */
export function CollectionJsonLd({
  name,
  description,
  url,
  items,
}: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string; image?: string; description?: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: url.startsWith("http") ? url : `${SITE_URL}${url}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        description: item.description,
        url: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
        ...(item.image
          ? {
              image: item.image.startsWith("http")
                ? item.image
                : `${SITE_URL}${item.image}`,
            }
          : {}),
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * FAQPage Schema for category and documentation pages
 */
export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Component / SoftwareSourceCode Schema for detail pages
 */
export function BackgroundDetailJsonLd({
  name,
  description,
  category,
  slug,
  image,
  code,
  tags,
}: {
  name: string;
  description: string;
  category: string;
  slug: string;
  image: string;
  code?: string;
  tags?: string[];
}) {
  const url = `${SITE_URL}/backgrounds/${category}/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: `${name} - React & Tailwind Background Component`,
    text: description,
    programmingLanguage: ["React", "TypeScript", "Tailwind CSS"],
    runtimePlatform: "Node.js / React 19 / Next.js",
    codeSampleType: "Component",
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    url,
    keywords: tags ? tags.join(", ") : undefined,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    ...(code ? { sampleType: "snippet" } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * WebSite Schema with SearchAction for site-wide root layout
 */
export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/backgrounds?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BACKGROUNDS, CATEGORIES, getBackgroundBySlug } from "@/data";
import { getBackgroundCode } from "@/lib/code-reader";
import DetailPageClient, { IntegrationSetup } from "./detail-client";
import PreviewFrame from "@/components/ui/preview-frame";
import HeroPreview from "@/components/ui/hero-preview";
import {
  BreadcrumbJsonLd,
  BackgroundDetailJsonLd,
} from "@/components/seo/json-ld";
import { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";
import { ChevronRight, Tag } from "lucide-react";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BACKGROUNDS.map((bg) => ({
    category: bg.category,
    slug: bg.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const bg = getBackgroundBySlug(slug);

  if (!bg) {
    return {
      title: "Background Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${bg.name} - React & Tailwind Background Component`;
  const description = `${bg.description} Customizable global colors. Copy React TSX and Tailwind CSS code instantly.`;
  const path = `/backgrounds/${bg.category}/${bg.slug}`;
  const image = `/thumbnails/${bg.slug}.webp`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    keywords: [
      bg.name,
      `${bg.name} background`,
      `${bg.category} background`,
      "React background component",
      "Tailwind CSS background",
      ...(bg.tags ?? []),
    ],
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: image,
          width: 320,
          height: 180,
          alt: `${bg.name} React and Tailwind CSS background preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BackgroundDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const bg = getBackgroundBySlug(slug);

  if (!bg || bg.category !== category) {
    notFound();
  }

  const categoryInfo = CATEGORIES.find((c) => c.id === bg.category);
  const categoryName = categoryInfo ? categoryInfo.name : bg.category;
  const code = getBackgroundCode(bg.componentName);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Browse Backgrounds", url: "/backgrounds" },
    { name: categoryName, url: `/backgrounds/${bg.category}` },
    { name: bg.name, url: `/backgrounds/${bg.category}/${bg.slug}` },
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      <BreadcrumbJsonLd items={breadcrumbs} />
      <BackgroundDetailJsonLd
        name={bg.name}
        description={bg.description}
        category={bg.category}
        slug={bg.slug}
        image={`/thumbnails/${bg.slug}.webp`}
        code={code}
        tags={bg.tags}
      />

      <article className="min-h-[calc(100vh-8rem)] w-full flex flex-col">
        {/* Foreground Layout */}
        <div className="flex-1 max-w-7xl mx-auto w-full px-3 py-8 sm:px-6 lg:px-8 space-y-10">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold text-muted uppercase tracking-wider"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-muted-2" />
            <Link
              href="/backgrounds"
              className="hover:text-primary transition-colors"
            >
              Browse
            </Link>
            <ChevronRight className="w-3 h-3 text-muted-2" />
            <Link
              href={`/backgrounds/${bg.category}`}
              className="hover:text-primary transition-colors"
            >
              {categoryName}
            </Link>
            <ChevronRight className="w-3 h-3 text-muted-2" />
            <span
              className="text-fg normal-case font-bold"
              aria-current="page"
            >
              {bg.name}
            </span>
          </nav>

          {/* Top Section: Side-by-Side Code (Left) and Preview (Right) */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left Column: Details & Preview Frame */}
            <div className="w-full lg:max-w-2xl flex flex-col justify-between gap-6 glass-panel rounded-panel p-6 border border-border shadow-2xl self-start">
              <div>
                {/* Category Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Link
                    href={`/backgrounds/${bg.category}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-primary/10 border border-primary/20 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
                  >
                    <span>{categoryName}</span>
                  </Link>

                  {bg.subCategory && bg.subCategory !== bg.category && (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-pill bg-surface-2 border border-border text-muted text-xs font-medium">
                      {bg.subCategory}
                    </span>
                  )}
                </div>

                {/* Name & Description */}
                <div className="space-y-2 mb-1">
                  <h1 className="text-3xl font-black tracking-tight bg-linear-to-r from-fg via-fg to-muted bg-clip-text text-transparent">
                    {bg.name}
                  </h1>
                  <p className="text-sm text-muted font-medium leading-relaxed">
                    {bg.description}
                  </p>
                </div>
              </div>

              {/* Bounded aspect-ratio Preview Frame */}
              <div className="flex items-center justify-center">
                <PreviewFrame
                  slug={bg.slug}
                  name={bg.name}
                  componentName={bg.componentName}
                />
              </div>

              {/* Tags Section */}
              {bg.tags && bg.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted mr-1">
                    <Tag className="w-3.5 h-3.5 text-primary" />
                    <span>Tags:</span>
                  </span>
                  {bg.tags.slice(0, 2).map((tag) => (
                    <Link
                      key={tag}
                      href={`/backgrounds/${bg.category}`}
                      className="inline-flex items-center px-2.5 py-1 rounded-pill text-xs font-medium border border-border bg-surface-2 text-fg/80 hover:text-fg hover:border-primary/40 hover:bg-primary/10 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              )}

              {/* Live Color Customizer Notice */}
              <div className="p-4 rounded-btn bg-bg/40 border border-border backdrop-blur-md text-[11px] text-muted">
                {`Use the "Customize Colors" control in the header to modify this background's colors live.`}
              </div>
            </div>

            {/* Right Column: Actions & Source Code Viewer */}
            <div className="flex-1 flex flex-col gap-4 min-w-0">
              {/* Code Panel */}
              <div className="grow flex flex-col">
                <DetailPageClient item={bg} code={code} />
              </div>
            </div>
          </div>

          {/* "How It Looks" Hero Preview Section */}
          <section
            aria-labelledby="hero-preview-heading"
            className="space-y-6 pt-8 border-t border-border"
          >
            <HeroPreview componentName={bg.componentName} name={bg.name} />
          </section>

          {/* Bottom Section: Full Width Integration Setup */}
          <section
            aria-labelledby="integration-heading"
            className="space-y-6 pt-8 border-t border-border"
          >
            <div className="space-y-1">
              <h2
                id="integration-heading"
                className="text-xl font-bold tracking-tight text-fg sm:text-2xl"
              >
                Integration & Setup Guide
              </h2>
              <p className="text-xs sm:text-sm text-muted">
                Follow these simple steps to integrate the background component
                into your React app.
              </p>
            </div>

            <IntegrationSetup item={bg} />
          </section>
        </div>
      </article>
    </>
  );
}

// Dynamic Component Renderer
// function LiveBackground({ componentName }: { componentName: string }) {
//   const Component = BACKGROUND_COMPONENTS[componentName];
//   if (!Component) return null;
//   return <Component />;
// }

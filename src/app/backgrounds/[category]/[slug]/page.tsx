import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BACKGROUNDS, getBackgroundBySlug } from "@/data";
import { getBackgroundCode } from "@/lib/code-reader";
import { BACKGROUND_COMPONENTS } from "@/components/backgrounds";
import { ArrowLeft } from "lucide-react";
import DetailPageClient, { IntegrationSetup } from "./detail-client";
import PreviewFrame from "@/components/ui/preview-frame";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Generate static params for all backgrounds for SSG (Static Site Generation)
export async function generateStaticParams() {
  return BACKGROUNDS.map((bg) => ({
    category: bg.category,
    slug: bg.slug,
  }));
}

// Dynamically generate SEO metadata for each background page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const bg = getBackgroundBySlug(slug);

  if (!bg) {
    return {
      title: "Background Not Found",
    };
  }

  const title = `${bg.name} — React & Tailwind Background Component`;
  const description = `${bg.description} Customizable global colors. Copy React TSX and Tailwind CSS code instantly.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function BackgroundDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const bg = getBackgroundBySlug(slug);

  if (!bg || bg.category !== category) {
    notFound();
  }

  const code = getBackgroundCode(bg.componentName);

  return (
    <div className="relative min-h-[calc(100vh-8rem)] w-full overflow-hidden flex flex-col">
      {/* Background Component Container (Active Full Screen Preview) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <LiveBackground componentName={bg.componentName} />
      </div>

      {/* Foreground Layout */}
      <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-3 py-8 sm:px-6 lg:px-8 space-y-10">

        {/* Top Section: Side-by-Side Code (Left) and Preview (Right) */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Left Column: Details & Preview Frame */}
          <div className="w-full lg:max-w-2xl flex flex-col justify-between gap-6 glass-panel rounded-panel p-6 border border-border shadow-2xl overflow-hidden self-start">
            <div>
              {/* Breadcrumbs for SEO */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[10px] font-bold text-muted-2 uppercase tracking-wider mb-4">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link href="/backgrounds" className="hover:text-primary transition-colors">Browse</Link>
                <span>/</span>
                <span className="text-fg">{bg.name}</span>
              </nav>

              {/* Details */}
              <div className="space-y-4 mb-6">
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
              <PreviewFrame slug={bg.slug} name={bg.name} componentName={bg.componentName} />
            </div>

            <div className="p-4 rounded-btn bg-bg/40 border border-border backdrop-blur-md text-[9px] md:text-[11px] text-muted">
              Use the "Customize Colors" control in the header to modify this background's colors live.
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

        {/* Bottom Section: Full Width Integration Setup */}
        <div className="space-y-6 pt-8 border-t border-border">
          <div className="space-y-1">
            <h2 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
              Integration & Setup Guide
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              Follow these simple steps to integrate the background component into your React app.
            </p>
          </div>

          <IntegrationSetup item={bg} />
        </div>

      </div>
    </div>
  );
}

// Dynamic Component Renderer
function LiveBackground({ componentName }: { componentName: string }) {
  const Component = BACKGROUND_COMPONENTS[componentName];
  if (!Component) return null;
  return <Component />;
}

import React, { Suspense } from "react";
import { BACKGROUNDS } from "@/data";
import { getBackgroundCode } from "@/lib/code-reader";
import BackgroundsGallery from "@/components/ui/backgrounds-gallery";
import { Grid } from "lucide-react";
import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const revalidate = 86400; // Revalidate daily

export function generateMetadata(): Metadata {
  const title = "Browse React & Tailwind CSS Backgrounds";
  const description = `Explore, customize, and copy-paste from our library of ${BACKGROUNDS.length}+ interactive background components built with React and Tailwind CSS.`;

  return {
    title,
    description,
    alternates: {
      canonical: "/backgrounds",
    },
    keywords: [
      "React background library",
      "Tailwind CSS background components",
      "copy paste backgrounds",
      "animated website backgrounds",
      SITE_NAME,
    ],
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: "/backgrounds",
      type: "website",
    },
    twitter: {
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

export default function BackgroundsPage() {
  // Load background metadata and fetch code for copy pasting
  const backgroundsWithCode = BACKGROUNDS.map((bg) => ({
    ...bg,
    code: getBackgroundCode(bg.componentName),
  }));

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col gap-2 border-b border-border pb-6">
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight bg-linear-to-r from-fg to-muted bg-clip-text text-transparent flex items-center gap-2.5">
          <Grid className="w-6 h-6 sm:w-8 sm:h-8 text-primary shrink-0" />
          <span>Explore Backgrounds</span>
        </h1>
        <p className="text-sm sm:text-sm text-muted max-w-2xl leading-relaxed">
          Find, preview, customize, and copy-paste interactive React + Tailwind
          CSS backgrounds. Click on any card to view its full details.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20 text-muted text-sm">
            Loading gallery...
          </div>
        }
      >
        <BackgroundsGallery initialBackgrounds={backgroundsWithCode} />
      </Suspense>
    </div>
  );
}

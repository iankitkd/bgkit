import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { BACKGROUNDS } from "@/data";
import { getBackgroundCode } from "@/lib/code-reader";
import BackgroundCard from "@/components/ui/background-card";

// Pick 6 featured backgrounds — one from each distinct category for variety
const FEATURED_SLUGS = [
  "vignette-grid",
  "lens-flare",
  "frosted-overlay",
  "glow-grid",
  "mesh-gradient",
  "neural-network",
  // "circuit-board",
  // "crystal-glass",
];

export default function FeaturedBackgroundsSection() {
  const featuredItems = FEATURED_SLUGS.map((slug) =>
    BACKGROUNDS.find((bg) => bg.slug === slug)
  ).filter(Boolean) as (typeof BACKGROUNDS)[0][];

  // Fallback: if any slug is missing, fill from the start of BACKGROUNDS
  const items =
    featuredItems.length >= 6
      ? featuredItems.slice(0, 6)
      : [
        ...featuredItems,
        ...BACKGROUNDS.filter(
          (bg) => !featuredItems.some((f) => f.slug === bg.slug)
        ),
      ].slice(0, 6);

  return (
    <section className="py-20 sm:py-28 relative" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            Handpicked backgrounds.
          </h2>
          <p className="text-base sm:text-lg text-muted">
            A curated selection of our most popular backgrounds — spanning
            gradients, grids, networks, and beyond.          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => {
            const code = getBackgroundCode(item.componentName);
            return <BackgroundCard key={item.slug} item={item} code={code} />;
          })}
        </div>

        {/* CTA footer */}
        <div className="flex justify-center pt-4">
          <Link
            href="/backgrounds"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-btn text-sm font-bold text-bg bg-primary hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20 transition-all duration-200"
          >
            Explore all backgrounds
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

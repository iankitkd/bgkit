import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/sections/hero";
import FeaturesSection from "@/components/sections/features";
import CategoriesShowcaseSection from "@/components/sections/categories-showcase";
import FeaturedBackgroundsSection from "@/components/sections/featured-backgrounds";
import BenchmarksSection from "@/components/sections/benchmarks";
import HowToUseSection from "@/components/sections/how-to-use";
import FAQSection from "@/components/sections/faq";
import CTASection from "@/components/sections/cta";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

export const revalidate = 86400; // Revalidate daily

export const metadata: Metadata = {
  title: `${SITE_NAME} - Copy-Paste React & Tailwind CSS Backgrounds`,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} - Copy-Paste React & Tailwind CSS Backgrounds`,
    description: SITE_DESCRIPTION,
    url: "/",
  },
  twitter: {
    title: `${SITE_NAME} - React & Tailwind CSS Backgrounds`,
    description: SITE_DESCRIPTION,
  },
};

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-6">
      {/* Landing Page Sections */}

      <HeroSection />
      <FeaturedBackgroundsSection />
      <CategoriesShowcaseSection />
      <FeaturesSection />
      <HowToUseSection />
      <BenchmarksSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

import React from "react";
import HeroSection from "@/components/sections/hero";
import FeaturesSection from "@/components/sections/features";
import CategoriesShowcaseSection from "@/components/sections/categories-showcase";
import BenchmarksSection from "@/components/sections/benchmarks";
import HowToUseSection from "@/components/sections/how-to-use";
import FAQSection from "@/components/sections/faq";
import CTASection from "@/components/sections/cta";

export const revalidate = 86400; // Revalidate daily

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 space-y-6">
      {/* Landing Page Sections */}

      <HeroSection />
      <FeaturesSection />
      <CategoriesShowcaseSection />
      <BenchmarksSection />
      <HowToUseSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}


"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";
import { BACKGROUNDS } from "@/data";

const FAQ_DATA = [
  {
    question: `What is ${SITE_NAME}?`,
    answer: `${SITE_NAME} is a curated library of ${BACKGROUNDS.length}+ interactive background components built natively with React, TypeScript, and Tailwind CSS. Instead of installing heavy packages, you copy the raw code directly into your project.`,
  },
  {
    question: "How do I install these backgrounds in my project?",
    answer: "There are no packages to install! Simply create a component file in your project (e.g., components/ui/background.tsx), copy the code from the background's detail page, paste it inside your file, and import it anywhere.",
  },
  {
    question: "Do these background templates support Next.js App Router & SSR?",
    answer: "Yes. All code templates are fully compatible with Next.js App Router, SSR, Vite, Remix, and standard React setups. Most components are lightweight enough to run as Server Components, while animated ones include 'use client' directives.",
  },
  {
    question: "Can I customize the primary and background colors?",
    answer: "Absolutely. The components are built to reference CSS custom variables (`--bg-accent` and `--bg-canvas`). You can adjust them dynamically on the site, or bind them to your existing theme variables/Tailwind configurations.",
  },
  {
    question: "Are these background designs optimized for mobile screens?",
    answer: "Yes. Every single template is designed with mobile-first responsiveness in mind. Interactive elements are disabled on small touch targets to prevent latency, and SVGs use non-scaling vectors to fit perfectly on any viewport.",
  },
  {
    question: "Are these backgrounds free for commercial use?",
    answer: `Yes, all background templates in ${SITE_NAME} are open-source and licensed under MIT. You can use them in personal blogs, startup landing pages, client portfolios, or enterprise applications.`,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl flex items-center justify-center gap-3">
            <HelpCircle className="w-8 h-8 text-primary" />
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-base text-muted">
            Find quick answers regarding setup, optimization, customization, and framework compatibility.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-input border border-border bg-surface-2/10 hover:border-border-light transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-fg/90 hover:text-fg transition-colors text-sm sm:text-base focus:outline-none"
                >
                  <span>{item.question}</span>
                  <span className="flex-none p-1 rounded-pill bg-surface border border-border text-muted">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {/* Expandable answer panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 border-t border-border" : "max-h-0"
                    } overflow-hidden`}
                >
                  <p className="p-6 text-xs sm:text-sm text-muted leading-relaxed bg-bg/20">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Code,
  Paintbrush,
  Settings,
  Terminal,
} from "lucide-react";
import { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Use ${SITE_NAME}`,
  description: `Learn how to integrate copy-paste React and Tailwind CSS backgrounds from ${SITE_NAME} into your application with CSS variables and live color customization.`,
  alternates: {
    canonical: "/how-to-use",
  },
  keywords: [
    "how to use React backgrounds",
    "Tailwind CSS background components",
    "copy paste component guide",
    "CSS variables backgrounds",
    SITE_NAME,
  ],
  openGraph: {
    title: `How to Use ${SITE_NAME}`,
    description: `Add ${SITE_NAME} backgrounds to your React app with component code, Tailwind CSS variables, and live color customization.`,
    url: "/how-to-use",
    type: "article",
  },
  twitter: {
    title: `How to Use ${SITE_NAME}`,
    description: `Add copy-paste React and Tailwind CSS backgrounds from ${SITE_NAME} to your app.`,
  },
};

export default function HowToUsePage() {
  const steps = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "1. Choose Your Template",
      description:
        "Browse our curated collection of backgrounds under grid, mesh, geometric, noise, or wave categories. Find the style that fits your layout.",
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "2. Customize Live",
      description:
        "Use the Global Color Customizer in the header. Adjust all 7 CSS variables: canvas, accent, secondary, accent-2, accent-3, foreground, and border.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "3. Copy the Component Code",
      description:
        "Go to the background detail page, view the React TypeScript source, and click the copy button to get the self-contained component file.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "4. Setup CSS Variables",
      description:
        "Paste the CSS variables block from the detail page Integration Guide into your globals.css. The values match the colors customized in the header.",
    },
  ];

  const cssVarsBlock = `:root {
  /* Background Component Dynamic Variables */
  --bg-canvas:     #06080d;
  --bg-accent:     #7c3aed;
  --bg-secondary:  #06b6d4;
  --bg-accent-2:   #ec4899;
  --bg-accent-3:   #22c55e;
  --bg-line:       #7dd3fc;
  --bg-border:     #232a36;
  --bg-foreground: #f8fafc;
}`;

  const themeBlock = `@theme {
  --color-bg-canvas:     var(--bg-canvas);
  --color-bg-accent:     var(--bg-accent);
  --color-bg-secondary:  var(--bg-secondary);
  --color-bg-accent-2:   var(--bg-accent-2);
  --color-bg-accent-3:   var(--bg-accent-3);
  --color-bg-line:     var(--bg-line);
  --color-bg-border:     var(--bg-border);
  --color-bg-foreground: var(--bg-foreground);
}`;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8 space-y-12 relative">
      {/* Decorative Blur Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 translate-x-1/2 h-96 w-96 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      {/* Header Section */}
      <div className="text-center space-y-4 max-w-2xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/80 border border-border text-xs font-semibold text-primary backdrop-blur-md">
          <Terminal className="w-3.5 h-3.5" />
          <span>Integration Guides</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-linear-to-r from-fg via-fg to-muted bg-clip-text text-transparent">
          How to use {SITE_NAME}
        </h1>
        <p className="text-xs sm:text-base text-muted leading-relaxed">
          {SITE_NAME} provides self-contained component files. Instead of
          bloated npm libraries, copy clean source code directly into your React
          application.
        </p>
      </div>

      {/* Step-by-Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-between p-6 rounded-card bg-surface-2/20 border border-border backdrop-blur-md hover:bg-surface-2/40 hover:border-border-light transition-all duration-300 shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-input bg-bg/60 text-primary border border-border group-hover:scale-105 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-fg/90 group-hover:text-fg transition-colors">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CSS Variables Setup Block */}
      <div className="p-6 sm:p-8 rounded-card bg-surface-2/30 border border-border backdrop-blur-md space-y-6 relative z-10">
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl font-bold text-fg flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Configuring Global CSS Variables</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted">
            Append this to your root stylesheet (
            <code className="text-fg font-mono">globals.css</code> or{" "}
            <code className="text-fg font-mono">index.css</code>). These are the
            7 variables that all background components read from. The{" "}
            <strong className="text-fg/80">
              detail page Integration Guide
            </strong>{" "}
            auto-fills them with whatever colors you set in the header
            customizer.
          </p>
        </div>

        {/* :root block */}
        <div className="relative rounded-input bg-bg/90 border border-border overflow-hidden font-mono text-[11px] sm:text-xs text-muted">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg/40">
            <span className="text-[10px] uppercase font-bold text-muted-2">
              globals.css
            </span>
            <span className="text-[10px] text-muted-2">:root variables</span>
          </div>
          <pre className="p-4 overflow-x-auto leading-relaxed select-all">
            {cssVarsBlock}
          </pre>
        </div>

        {/* @theme block */}
        <div className="relative rounded-input bg-bg/90 border border-border overflow-hidden font-mono text-[11px] sm:text-xs text-muted">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg/40">
            <span className="text-[10px] uppercase font-bold text-muted-2">
              globals.css
            </span>
            <span className="text-[10px] text-muted-2">
              Tailwind v4 @theme mapping
            </span>
          </div>
          <pre className="p-4 overflow-x-auto leading-relaxed select-all">
            {themeBlock}
          </pre>
        </div>
      </div>

      {/* Troubleshooting Section */}
      <div className="space-y-6 relative z-10">
        <h2 className="text-xl font-bold text-fg tracking-tight">
          Common Questions &amp; Troubleshooting
        </h2>

        <div className="space-y-4">
          <div className="p-5 rounded-input bg-surface-2/10 border border-border">
            <h4 className="text-sm font-bold text-fg/90 mb-1.5">
              Why are the backgrounds rendered static or transparent?
            </h4>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Verify that all seven CSS variables (
              <code className="text-fg font-mono">--bg-canvas</code>,{" "}
              <code className="text-fg font-mono">--bg-accent</code>,{" "}
              <code className="text-fg font-mono">--bg-secondary</code>, etc.)
              are declared inside your root stylesheet. Also ensure no parent
              container has an opaque background overriding the component layer.
            </p>
          </div>

          <div className="p-5 rounded-input bg-surface-2/10 border border-border">
            <h4 className="text-sm font-bold text-fg/90 mb-1.5">
              How do I use these variables with Tailwind CSS utility classes?
            </h4>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Use the <code className="text-fg font-mono">@theme</code> block
              shown above inside your CSS file. This maps each{" "}
              <code className="text-fg font-mono">--bg-*</code> custom property
              to a Tailwind color token, so you can write{" "}
              <code className="text-fg font-mono">bg-bg-canvas</code>,{" "}
              <code className="text-fg font-mono">text-bg-foreground</code>,{" "}
              <code className="text-fg font-mono">border-bg-border</code>, etc.
              as standard utility classes.
            </p>
          </div>

          <div className="p-5 rounded-input bg-surface-2/10 border border-border">
            <h4 className="text-sm font-bold text-fg/90 mb-1.5">
              How do I copy my customized colors from the site?
            </h4>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Open any background detail page after customizing colors in the
              header. The{" "}
              <strong className="text-fg/80">
                Integration &amp; Setup Guide
              </strong>{" "}
              at the bottom auto-populates the{" "}
              <code className="text-fg font-mono">:root</code> block with your
              current live values, so you can copy it directly.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="flex flex-col items-center justify-center gap-4 pt-4 relative z-10">
        <p className="text-xs text-muted-2 font-medium">
          Ready to customize your first background?
        </p>
        <Link
          href="/backgrounds"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-primary hover:bg-primary/95 text-bg font-bold text-sm transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Browse the Library</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Copy, Check, Code, Info, FileCode2, Terminal, Layers } from "lucide-react";
import { BackgroundItem } from "@/types";
import { useThemeContext } from "@/context/theme-context";

interface DetailClientProps {
  item: BackgroundItem;
  code: string;
}

export default function DetailPageClient({ item, code }: DetailClientProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <div className="grow flex flex-col min-h-0">
      {/* Code Editor Header / Toolbar */}
      <div className="flex items-center justify-between text-xs text-muted bg-bg/80 px-4 py-3 rounded-t-input border border-border border-b-0">
        <span className="font-mono text-[10px] sm:text-xs">
          components/ui/{item.componentName}.tsx
        </span>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-btn text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${copied
            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
            : "bg-surface hover:bg-surface-2 text-muted border border-border"
            }`}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Component</span>
            </>
          )}
        </button>
      </div>

      {/* Code Editor Preview */}
      <div className="relative grow min-h-[350px] max-h-[550px] bg-bg rounded-b-input border border-border p-4 overflow-y-auto">
        <pre className="text-[12px] font-mono text-fg select-all whitespace-pre leading-relaxed scrollbar-thin">
          {code}
        </pre>
      </div>
    </div>
  );
}

// ─── Reusable copy button for code blocks ─────────────────────────────────────

function CopyCodeButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {/* ignore */ }
  };
  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-btn text-[10px] font-bold transition-all cursor-pointer shrink-0 ${copied
        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
        : "bg-surface-2 hover:bg-surface-3 text-muted border border-border"
        }`}
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      <span>{copied ? "Copied!" : "Copy"}</span>
    </button>
  );
}

// ─── Code block with header and copy button ───────────────────────────────────

function DocCodeBlock({ filename, code }: { filename: string; code: string }) {
  return (
    <div className="rounded-input border border-border overflow-hidden bg-bg">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-surface-2/40">
        <span className="font-mono text-[10px] text-muted-2">{filename}</span>
        <CopyCodeButton text={code} />
      </div>
      <pre className="p-4 overflow-x-auto text-[11px] sm:text-xs font-mono text-muted leading-relaxed select-all scrollbar-thin">
        {code}
      </pre>
    </div>
  );
}

// ─── Step header ──────────────────────────────────────────────────────────────

function StepHeader({ number, icon, title }: { number: number; icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-black shrink-0">
        {number}
      </div>
      <div className="flex items-center gap-2 text-fg font-bold text-base sm:text-lg">
        {icon}
        <span>{title}</span>
      </div>
    </div>
  );
}

// ─── Integration Setup ────────────────────────────────────────────────────────

export function IntegrationSetup({ item }: { item: BackgroundItem }) {
  const { canvas, accent, secondary, accent2, accent3, fg, border } = useThemeContext();
  const [activeTab, setActiveTab] = useState<"page" | "hero">("page");

  const cssVarsBlock = `:root {
  /* Background Component Dynamic Variables */
  --bg-canvas:     ${canvas};
  --bg-accent:     ${accent};
  --bg-secondary:  ${secondary};
  --bg-accent-2:   ${accent2};
  --bg-accent-3:   ${accent3};
  --bg-foreground: ${fg};
  --bg-border:     ${border};
}

@theme {
  --color-bg-canvas:     var(--bg-canvas);
  --color-bg-accent:     var(--bg-accent);
  --color-bg-secondary:  var(--bg-secondary);
  --color-bg-accent-2:   var(--bg-accent-2);
  --color-bg-accent-3:   var(--bg-accent-3);
  --color-bg-foreground: var(--bg-foreground);
  --color-bg-border:     var(--bg-border);
}`;

  const pageUsageBlock =
    `import ${item.componentName} from "@/components/ui/${item.componentName}";

// app/layout.tsx — wraps the entire app as a background layer
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-bg-canvas">
      {/* Background layer — fixed, full-screen, behind all content */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <${item.componentName} />
      </div>

      {/* Page content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}`;

  const heroUsageBlock =
    `import ${item.componentName} from "@/components/ui/${item.componentName}";

// components/HeroSection.tsx — background scoped to this section only
export default function HeroSection() {
  return (
    <section className="relative min-h-screen">
      {/* Background confined to this section */}
      <${item.componentName} />
      
      {/* Hero content sits on top */}
      <div className="relative z-10">
        {/* Put your content hero content here */}
      </div>
    </section>
  );
}`;

  return (
    <div className="space-y-10">

      {/* ── Step 1: Add the component file ── */}
      <div className="space-y-4">
        <StepHeader number={1} icon={<FileCode2 className="w-4 h-4 text-primary" />} title="Add the component to your project" />
        <p className="text-sm sm:text-base text-muted leading-relaxed pl-10">
          Create a new file at{" "}
          <code className="px-1.5 py-0.5 rounded bg-surface-2 font-mono text-[13px] text-primary">
            components/ui/{item.componentName}.tsx
          </code>{" "}
          in your project, then copy and paste the full component source from the code panel at the top of this page into that file. No external dependencies are needed — it is entirely self-contained.
        </p>
      </div>

      <div className="border-t border-border/60" />

      {/* ── Step 2: CSS variables ── */}
      <div className="space-y-4">
        <StepHeader number={2} icon={<Terminal className="w-4 h-4 text-primary" />} title="Configure CSS variables" />
        <p className="text-sm sm:text-base text-muted leading-relaxed pl-10">
          Open your root stylesheet (
          <code className="px-1.5 py-0.5 rounded bg-surface-2 font-mono text-[13px] text-primary">globals.css</code>
          {" "}or{" "}
          <code className="px-1.5 py-0.5 rounded bg-surface-2 font-mono text-[13px] text-primary">index.css</code>
          ) and add the block below. The values shown here reflect your{" "}
          <strong className="text-fg/80">current customizer settings</strong> — tweak the colors in the header first, then copy.
        </p>
        <div className="pl-10">
          <DocCodeBlock filename="globals.css" code={cssVarsBlock} />
        </div>
      </div>

      <div className="border-t border-border/60" />

      {/* ── Step 3: Use in your layout ── */}
      <div className="space-y-4">
        <StepHeader number={3} icon={<Layers className="w-4 h-4 text-primary" />} title="Use the background in your layout" />
        <p className="text-sm sm:text-base text-muted leading-relaxed pl-10">
          Choose how you want to integrate the background — as a global full-page layer or scoped to a specific section such as a hero.
        </p>

        {/* Tab switcher */}
        <div className="pl-10">
          <div className="flex gap-1 p-1 rounded-input bg-bg border border-border w-fit mb-4">
            {(["page", "hero"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-1.5 px-4 rounded-input text-[13px] font-bold transition-all duration-300 cursor-pointer ${activeTab === tab
                  ? "bg-surface text-fg shadow-sm "
                  : "text-muted hover:text-fg"
                  }`}
              >
                {tab === "page" ? "Page Background" : "Hero Section"}
              </button>
            ))}
          </div>

          {activeTab === "page" && (
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Edit{" "}
                <code className="px-1 py-0.5 rounded bg-surface-2 font-mono text-[11px] text-primary">app/layout.tsx</code>{" "}
                at the root of your Next.js project. The background component is rendered as a{" "}
                <code className="font-mono text-[11px] text-primary">fixed</code> full-screen layer with a negative z-index, sitting behind all page content on every route.
              </p>
              <ol className="text-xs sm:text-sm text-muted space-y-1 list-decimal list-inside leading-relaxed">
                <li>Ensure you completed Steps 1 and 2 above.</li>
                <li>Copy the code below and paste it into <code className="font-mono text-[11px] text-primary">app/layout.tsx</code>.</li>
              </ol>
              <DocCodeBlock filename="app/layout.tsx" code={pageUsageBlock} />
            </div>
          )}

          {activeTab === "hero" && (
            <div className="space-y-3">
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Create a new file at{" "}
                <code className="px-1 py-0.5 rounded bg-surface-2 font-mono text-[11px] text-primary">components/HeroSection.tsx</code>{" "}
                (or any section-level component you prefer). The background is rendered as an{" "}
                <code className="font-mono text-[11px] text-primary">absolute</code> layer within the section, so it does not affect the rest of the page.
              </p>
              <ol className="text-xs sm:text-sm text-muted space-y-1 list-decimal list-inside leading-relaxed">
                <li>Ensure you completed Steps 1 and 2 above.</li>
                <li>Copy the code below into your hero or section component.</li>
              </ol>
              <DocCodeBlock filename="components/HeroSection.tsx" code={heroUsageBlock} />
            </div>
          )}
        </div>
      </div>

    </div>
  );
}

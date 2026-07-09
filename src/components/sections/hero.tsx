import Link from "next/link";
import { ArrowRight, Sparkles, Code, ShieldCheck, Zap } from "lucide-react";
import { BACKGROUNDS } from "@/data";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 flex flex-col items-center justify-center text-center">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[120px] bg-primary pointer-events-none" />
      <div className="absolute inset-0 bg-grid-dot-pattern -z-20 opacity-30" />

      <div className="z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex flex-col items-center">
        {/* Sparkle badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border border-primary/20 bg-primary/10 text-primary transition-all duration-300"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Copy-Paste React & Tailwind Backgrounds</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-7xl bg-linear-to-b from-fg to-muted bg-clip-text text-transparent">
          Stunning background components <br className="hidden sm:inline" />
          for your next web project.
        </h1>

        {/* Supporting text */}
        <p className="max-w-2xl text-base sm:text-xl text-muted leading-relaxed">
          Enhance your user interfaces with our curated library of {BACKGROUNDS.length}+ fully interactive,
          customizable React and Tailwind CSS background components. Light, responsive, and
          ready to drop into your code.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
          <Link
            href="/backgrounds"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-btn text-sm font-bold text-bg bg-primary hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
          >
            Explore Backgrounds
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#how-to-use"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-btn text-sm font-semibold bg-surface border border-border-light text-muted hover:bg-surface-2 hover:text-fg transition-all"
          >
            How It Works
          </a>
        </div>

        {/* Micro-features list */}
        <div className="pt-12 grid grid-cols-2 gap-6 md:grid-cols-3 max-w-3xl border-t border-border w-full">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2 text-fg text-sm font-semibold">
              <Zap className="w-4 h-4 text-amber-500 fill-amber-500/20" />
              <span>Production Ready</span>
            </div>
            <p className="text-xs text-muted">Optimized React TSX snippets with zero complex setup.</p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2 text-fg text-sm font-semibold">
              <Code className="w-4 h-4 text-blue-500" />
              <span>Tailwind Integration</span>
            </div>
            <p className="text-xs text-muted">Uses native utility classes and modern Tailwind v4 theme variables.</p>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2 text-fg text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Interactive Previews</span>
            </div>
            <p className="text-xs text-muted">Customize colors globally and see updates in real time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

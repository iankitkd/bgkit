import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { BACKGROUNDS } from "@/data";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Outer container for layout spacing */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glow behind container */}
        <div
          className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl bg-primary pointer-events-none"
        />

        <div className="relative rounded-card border border-border bg-surface-2/20 backdrop-blur-sm p-8 sm:p-16 flex flex-col items-center text-center space-y-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-btn bg-surface border border-border-light text-muted">
            <Terminal className="w-6 h-6" />
          </div>

          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
              Ready to elevate your designs?
            </h2>
            <p className="text-base sm:text-lg text-muted">
              Browse through our collection of premium patterns and interactive backgrounds.
              Find the perfect aesthetic for your project in seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/backgrounds"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-btn text-sm font-bold text-bg bg-primary transition-all hover:opacity-95 hover:scale-[1.02] active:scale-[0.98]"
            >
              Browse all {BACKGROUNDS.length}+ Backgrounds
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

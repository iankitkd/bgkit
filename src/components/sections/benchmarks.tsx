import { Check, X, ShieldAlert, Sparkles, Zap, Smartphone } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

export default function BenchmarksSection() {
  return (
    <section className="py-20 sm:py-28 bg-bg/20 border-y border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border border-primary/20 bg-primary/10 text-primary"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Built for Page Speed</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            High performance. Zero bundle bloat.
          </h2>
          <p className="text-base sm:text-lg text-muted">
            Why load heavy third-party Canvas libraries and WebGL scripts when you can achieve the exact same aesthetics using pure React and native Tailwind?
          </p>
        </div>

        {/* Benchmarks Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Visual Bars Comparison */}
          <div className="space-y-6 bg-surface-2/10 p-6 sm:p-8 rounded-card border border-border">
            <h3 className="text-lg font-bold text-fg/90">
              Bundle Size Impact (JS payload)
            </h3>
            
            {/* ${SITE_NAME} bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-muted">
                <span>{SITE_NAME} component (e.g. Dot Grid)</span>
                <span className="text-primary">&lt; 1.5 KB (Self-contained)</span>
              </div>
              <div className="w-full bg-bg h-3 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-1000 bg-primary" 
                  style={{ width: "3%" }} 
                />
              </div>
            </div>

            {/* tsParticles bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-muted">
                <span>tsParticles library</span>
                <span>~ 120 KB</span>
              </div>
              <div className="w-full bg-bg h-3 rounded-full overflow-hidden">
                <div className="h-full bg-muted-2 rounded-full" style={{ width: "35%" }} />
              </div>
            </div>

            {/* Three.js / R3F bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-muted">
                <span>Three.js + React Three Fiber</span>
                <span>500 KB+</span>
              </div>
              <div className="w-full bg-bg h-3 rounded-full overflow-hidden">
                <div className="h-full bg-danger rounded-full" style={{ width: "100%" }} />
              </div>
            </div>
            
            <p className="text-[11px] text-muted-2 mt-4 leading-relaxed">
              *Comparison represents raw JavaScript chunk sizes loaded during initial render. Loading 500KB of Javascript blocks the browser main thread and harms your Lighthouse SEO rankings.
            </p>
          </div>

          {/* Quick Checklist Comparison */}
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-bold text-fg">
              Why Native React & Tailwind Wins
            </h3>
            
            <div className="space-y-4">
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="flex-none p-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-7 w-7 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-fg/90 text-sm">Perfect Lighthouse SEO Scores</h4>
                  <p className="text-xs text-muted mt-1">No render-blocking scripts, zero layout shifts (CLS), and instantaneous First Contentful Paint (FCP).</p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="flex-none p-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-7 w-7 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-fg/90 text-sm">Tailwind CSS Variable Customization</h4>
                  <p className="text-xs text-muted mt-1">Easily map background accents directly to your Tailwind custom variables, enabling dark/light mode toggle out of the box.</p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4">
                <div className="flex-none p-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 h-7 w-7 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-fg/90 text-sm">Responsive and Mobile-Optimized</h4>
                  <p className="text-xs text-muted mt-1">Uses SVG vectors and hardware-accelerated CSS transformations that automatically scale down and optimize battery life on mobile devices.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

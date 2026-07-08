import { Search, Sliders, Copy, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Browse the Vault",
    description: "Explore categorized sections of background styles. Filter by tech grids, geometric matrices, or smooth mesh gradients.",
  },
  {
    number: "02",
    icon: Sliders,
    title: "Adjust Theme Colors",
    description: "Use the 'Customize Colors' panel in the header to modify accent colors and backgrounds. Watch the previews update in real time.",
  },
  {
    number: "03",
    icon: Copy,
    title: "Copy the TSX Code",
    description: "Click 'Copy Code' on any card to copy the optimized, raw component code directly to your clipboard. No extra installation required.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Drop and Deploy",
    description: "Paste the component file into your local project (e.g., components/ui/background.tsx), wrap your section, and ship it to production.",
  },
];

export default function HowToUseSection() {
  return (
    <section id="how-to-use" className="py-20 sm:py-28 bg-bg/40 border-y border-border relative">
      {/* Background radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(255,255,255,0.015),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            Integrate in 4 simple steps.
          </h2>
          <p className="text-base sm:text-lg text-muted">
            No npm installs, no complex peer dependencies. Just copy, paste, and run.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative flex flex-col space-y-4 p-6 rounded-card bg-surface-2/10 border border-border">
                {/* Connector line for desktop */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 left-[85%] w-[45%] h-px bg-linear-to-r from-border-light to-transparent z-10" />
                )}

                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center justify-center p-3 rounded-btn border border-primary/20 bg-primary/5 text-primary"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className="text-4xl font-extrabold select-none opacity-20 font-mono tracking-tight text-primary"
                  >
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-fg/90">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

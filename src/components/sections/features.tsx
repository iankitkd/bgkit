import { Palette, Cpu, Compass, LayoutGrid, CheckCircle2, FileCode } from "lucide-react";

const FEATURES_DATA = [
  {
    icon: Palette,
    title: "Global Customization",
    description: "Adjust accent colors and canvas colors globally to see exactly how each background fits your design system in real time.",
  },
  {
    icon: Cpu,
    title: "Performance First",
    description: "Designed with optimized CSS, lightweight SVG paths, and highly-efficient rendering loops to maintain 60fps scrolling.",
  },
  {
    icon: FileCode,
    title: "Pure Tailwind CSS & TSX",
    description: "Built strictly with React, TypeScript, and Tailwind CSS. No external bulky WebGL/canvas libraries needed unless requested.",
  },
  {
    icon: LayoutGrid,
    title: "7 Curated Categories",
    description: "From retro geometric patterns and blueprints to modern animated gradient meshes and cybernetic traces.",
  },
  {
    icon: Compass,
    title: "Responsive Design",
    description: "Every background adaptively fits its container. Perfect for hero banners, sections, cards, or full-page takeovers.",
  },
  {
    icon: CheckCircle2,
    title: "One-Click Integration",
    description: "Click to copy clean, unminified TSX code. Just paste it into your project components folder and start styling.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            Engineered for modern developers.
          </h2>
          <p className="text-base sm:text-lg text-muted">
            A background library that prioritizes raw performance, style flexibility, and absolute ease of use.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-card border border-border bg-surface-2/35 p-6 hover:border-border-light hover:bg-surface-2/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                {/* Glow Accent */}
                <div 
                  className="absolute -inset-px rounded-card opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm -z-10 bg-primary"
                />

                <div className="space-y-4">
                  {/* Icon */}
                  <div 
                    className="inline-flex items-center justify-center p-3 rounded-btn border border-primary/20 bg-primary/5 text-primary transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-fg/90 group-hover:text-fg transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {feature.description}
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

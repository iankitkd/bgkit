import Link from "next/link";
import { ArrowRight, Grid, Layers, Cpu, Code2, Network, ShieldAlert } from "lucide-react";

const CATEGORIES_SHOWCASE = [
  {
    icon: Layers,
    name: "Gradients & Aurora",
    slug: "gradients",
    description:
      "Beautiful linear, radial, mesh, and aurora gradients that bring vibrant color, soft depth, and modern aesthetics to landing pages and hero sections.",
  },
  {
    icon: Grid,
    name: "Grid & Geometry",
    slug: "grid",
    description:
      "Square grids, perspective layouts, hexagonal patterns, blueprint designs, paper folds, and isometric cubes for clean, structured, and technical interfaces.",
  },
  {
    icon: Network,
    name: "AI & Technology",
    slug: "technology",
    description:
      "Particle networks, neural graphs, circuit boards, orbital rings, and constellation backgrounds inspired by modern AI, cloud infrastructure, and developer tools.",
  },
  {
    icon: ShieldAlert,
    name: "Glass & Optics",
    slug: "glass",
    description:
      "Glassmorphism, crystal effects, prism refraction, caustics, and cinematic lens flares for premium product launches and luxury web experiences.",
  },
  {
    icon: Cpu,
    name: "Patterns & Textures",
    slug: "patterns",
    description:
      "Topographic contours, vignette patterns, noise, grain, dots, and subtle textures that add depth while keeping content clear and readable.",
  },
  {
    icon: Code2,
    name: "Abstract & Motion",
    slug: "abstract",
    description:
      "Organic meshes, flowing waves, floating orbs, liquid blobs, and expressive abstract compositions designed for creative portfolios and modern SaaS products.",
  },
];

export default function CategoriesShowcaseSection() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-fg sm:text-5xl">
            Choose your signature style.
          </h2>
          <p className="text-base sm:text-lg text-muted">
            Discover a wide variety of interactive backgrounds tailored for developers, designers, and modern tech products.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES_SHOWCASE.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-card border border-border bg-surface-2/20 hover:border-border-light hover:bg-surface-2/50 p-8 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div
                    className="inline-flex items-center justify-center p-3 rounded-btn border border-primary/20 bg-primary/5 text-primary"
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-fg/90 group-hover:text-fg transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-2 font-semibold group-hover:text-muted transition-colors">
                    View collection
                  </span>
                  <Link
                    href={`/backgrounds?category=${cat.slug}`}
                    className="p-2 rounded-pill bg-surface border border-border text-muted hover:bg-surface-2 hover:text-fg transition-all"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

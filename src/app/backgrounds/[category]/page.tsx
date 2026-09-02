import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  CATEGORIES,
  RAW_CATEGORIES,
  getBackgroundsByCategory,
  BACKGROUNDS,
} from "@/data";
import { getBackgroundCode } from "@/lib/code-reader";
import BackgroundCard from "@/components/ui/background-card";
import {
  BreadcrumbJsonLd,
  CollectionJsonLd,
  FaqJsonLd,
} from "@/components/seo/json-ld";
import { SITE_NAME } from "@/lib/constants";
import {
  Layers,
  Sparkles,
  ArrowLeft,
  SlidersHorizontal,
  ChevronRight,
  Code2,
  CheckCircle2,
  HelpCircle,
  BookOpen,
} from "lucide-react";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export const revalidate = 86400; // Daily revalidation

export async function generateStaticParams() {
  return RAW_CATEGORIES.filter((c) => c.id !== "all").map((cat) => ({
    category: cat.id,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = CATEGORIES.find((c) => c.id === categorySlug);

  if (!category || categorySlug === "all") {
    return {
      title: "Category Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${category.name} Backgrounds - Copy & Paste React & Tailwind Components`;
  const description = `Discover free, customizable ${category.name.toLowerCase()} background components for React and Tailwind CSS. ${category.description} Ready for Next.js, Vite, and Remix.`;
  const canonicalUrl = `/backgrounds/${category.id}`;
  const backgrounds = getBackgroundsByCategory(category.id);
  const sampleImage =
    backgrounds.length > 0
      ? `/thumbnails/${backgrounds[0].slug}.webp`
      : `/thumbnails/mesh-gradient.webp`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [
      `${category.name} backgrounds`,
      `React ${category.name.toLowerCase()} background`,
      `Tailwind CSS ${category.name.toLowerCase()} background`,
      `copy paste ${category.name.toLowerCase()} components`,
      `Next.js ${category.name.toLowerCase()} hero background`,
      `${category.name.toLowerCase()} website UI`,
      "interactive background library",
      SITE_NAME,
    ],
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: sampleImage,
          width: 320,
          height: 180,
          alt: `${category.name} React and Tailwind CSS Background Components`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [sampleImage],
    },
  };
}

// Category Specific SEO Content Generator for All 14 Categories
function getCategorySeoContent(categoryId: string, categoryName: string) {
  const contentMap: Record<
    string,
    {
      subtitle: string;
      tips: string[];
      faqs: { question: string; answer: string }[];
    }
  > = {
    gradients: {
      subtitle:
        "Modern linear, radial, mesh, and aurora gradients crafted with smooth CSS blurs and hardware-accelerated color transitions.",
      tips: [
        "Combine CSS blur and opacity layers to achieve ultra-smooth aurora gradient transitions without heavy canvas re-renders.",
        "Use subtle radial and mesh gradients as backdrop hero foundations to maintain high contrast with header typography.",
        "Easily configure primary, secondary, and accent color CSS variables in your globals.css to align with your brand palette.",
      ],
      faqs: [
        {
          question: "How do I add gradient backgrounds to my Next.js project?",
          answer:
            "Click 'Copy Code' on any gradient card, paste the TSX file into your components folder, and drop the component directly into your page layout or hero section.",
        },
        {
          question: "Are these gradient components responsive and performant?",
          answer:
            "Yes, every gradient uses native Tailwind CSS and modern CSS container constraints with GPU acceleration, delivering 60fps performance across mobile and desktop screens.",
        },
        {
          question: "Can I customize the gradient colors dynamically?",
          answer:
            "Yes! You can use the 'Customize Colors' button in the navigation header to test live palette changes, or modify the Tailwind color utility classes directly in your copied TSX code.",
        },
      ],
    },
    grid: {
      subtitle:
        "Clean, technical square grids, perspective 3D layouts, hexagonal meshes, and dotted blueprints for modern SaaS and developer platforms.",
      tips: [
        "Layer radial mask gradients over grid patterns to softly fade the grid towards screen edges, keeping user focus on center content.",
        "Use 3D perspective transforms to create engaging cyberpunk and futuristic floor plane visual effects.",
        "Keep grid stroke opacity between 10% and 20% to prevent visual clutter while enhancing technical aesthetic depth.",
      ],
      faqs: [
        {
          question: "Can I adjust the grid line spacing and stroke thickness?",
          answer:
            "Yes, all grid components accept customizable Tailwind class overrides and SVG background size parameters so you can scale grid density to your exact layout needs.",
        },
        {
          question: "Do grid backgrounds increase page bundle size?",
          answer:
            "No, our grid backgrounds are constructed using pure lightweight SVGs and inline CSS patterns, resulting in near-zero footprint with no heavy third-party bundle dependencies.",
        },
        {
          question: "Do these grid patterns support dark mode and light mode?",
          answer:
            "Yes, every grid component integrates seamlessly with CSS color tokens and dark mode styling classes.",
        },
      ],
    },
    technology: {
      subtitle:
        "Circuit boards, technical blueprints, cyber networks, and glowing infrastructure patterns designed for AI, cloud, and engineering sites.",
      tips: [
        "Pair deep charcoal backgrounds with glowing cyan, violet, or emerald circuitry traces to communicate high-tech precision.",
        "Ensure CTA buttons maintain strong contrast and glow highlights against dense technical component backdrops.",
        "Use responsive SVG viewBox scaling to keep technical traces sharp across 4K displays and mobile viewports.",
      ],
      faqs: [
        {
          question: "Can I use technology backgrounds in commercial SaaS applications?",
          answer:
            "Yes! All BGKit components are open-source and free for both personal and commercial web projects under the MIT license.",
        },
        {
          question: "Are these technology backgrounds compatible with Tailwind CSS v4?",
          answer:
            "Yes, every component is rigorously tested with Tailwind CSS v4 and backwards-compatible with Tailwind CSS v3.",
        },
      ],
    },
    network: {
      subtitle:
        "Neural network nodes, particle meshes, and constellation graphs engineered for AI agents, developer tools, and Web3 apps.",
      tips: [
        "Add subtle floating CSS keyframe animations to node points to create an active, living ecosystem feel.",
        "Control node connection opacity to ensure text readability remains pristine across dense connection clusters.",
        "Combine neural nodes with soft ambient radial glows to give depth to complex network topologies.",
      ],
      faqs: [
        {
          question: "How do network backgrounds handle performance with multiple nodes?",
          answer:
            "Our network components use optimized SVG vector coordinates and CSS transforms, preventing main-thread lag or heavy CPU usage.",
        },
        {
          question: "Can I customize the number of connected nodes?",
          answer:
            "Yes, the TSX components include clean node configuration arrays and customizable parameters that allow you to adjust node counts and line density.",
        },
      ],
    },
    optics: {
      subtitle:
        "Prism refractions, caustic reflections, cinematic lens flares, and anamorphic lighting effects that elevate luxury product presentations.",
      tips: [
        "Position optical flare origins slightly off-center to guide user eye movement toward primary headlines and CTA cards.",
        "Use screen and color-dodge CSS blend modes to achieve photorealistic chromatic dispersion and light scattering.",
        "Balance flare intensity with subtle backdrop blurs for a clean, studio-grade glass aesthetic.",
      ],
      faqs: [
        {
          question: "What blend modes are used in optics components?",
          answer:
            "Our optics components utilize standard CSS mix-blend-mode utilities such as 'mix-blend-screen' and 'mix-blend-overlay' for natural light blending across any theme.",
        },
        {
          question: "Are optics backgrounds heavy on mobile browsers?",
          answer:
            "No, we optimize blur radiuses and layer counts to ensure smooth GPU rendering across all iOS and Android mobile devices.",
        },
      ],
    },
    glass: {
      subtitle:
        "Glassmorphic panels, frosted glass overlays, crystal refraction layers, and translucent gradients for premium web experiences.",
      tips: [
        "Pair backdrop-filter blur effects with subtle 1px translucent borders (`border-white/10`) to define glass edges.",
        "Use multi-layered glass cards to establish clear visual hierarchy between foreground controls and background ambiance.",
        "Add subtle specular highlights along top card borders to enhance tactile realism.",
      ],
      faqs: [
        {
          question: "Do glassmorphism backgrounds work on browsers without backdrop-filter support?",
          answer:
            "Yes, our components include fallback background color opacities ensuring graceful degradation across all web clients.",
        },
        {
          question: "How do I tweak the blur intensity of glass components?",
          answer:
            "You can easily adjust the Tailwind `backdrop-blur-sm`, `backdrop-blur-md`, or `backdrop-blur-xl` classes in the component markup.",
        },
      ],
    },
    lighting: {
      subtitle:
        "Volumetric light beams, studio spotlights, atmospheric bokeh, and ambient radiance engineered for high-impact hero sections.",
      tips: [
        "Use directional light cones to spotlight key product screenshots, interactive demos, or sign-up forms.",
        "Incorporate subtle pulsing keyframes for ambient light sources to create an immersive visual rhythm.",
        "Keep ambient lighting warm or cool to match the emotional tone of your product branding.",
      ],
      faqs: [
        {
          question: "Can I adjust the angle and position of light beams?",
          answer:
            "Yes, light beam origins and transform angles are defined via straightforward Tailwind utility classes in each component.",
        },
        {
          question: "Are lighting components suitable for text-heavy pages?",
          answer:
            "Yes, lighting glows are engineered as non-intrusive ambient backdrops that enhance contrast rather than wash out copy.",
        },
      ],
    },
    abstract: {
      subtitle:
        "Organic fluid meshes, morphing blobs, artistic vector flows, and generative visual textures for creative agency and SaaS portfolios.",
      tips: [
        "Utilize organic morphing SVGs to break away from rigid rectangular layouts and add bespoke brand personality.",
        "Layer floating orbs behind frosted cards to produce dynamic depth of field.",
        "Keep motion speeds gentle (10s–20s duration) to maintain a calming, professional atmosphere.",
      ],
      faqs: [
        {
          question: "Can I disable or slow down animations in abstract backgrounds?",
          answer:
            "Yes, you can modify CSS animation durations or wrap animations in `motion-safe:` classes for accessibility compliance.",
        },
        {
          question: "Do abstract backgrounds support custom brand shapes?",
          answer:
            "Yes, the SVG paths can be easily swapped with your company logos, brand motifs, or custom spline vectors.",
        },
      ],
    },
    vignette: {
      subtitle:
        "Focused center radial gradients with soft edge fades that draw immediate user attention to hero headlines and lead forms.",
      tips: [
        "Combine center spotlight illumination with darkened periphery masks to maximize content readability.",
        "Use subtle vignette grain textures to eliminate color banding on large OLED and Retina monitors.",
        "Ensure the focal center aligns with your primary above-the-fold value proposition.",
      ],
      faqs: [
        {
          question: "Why should I use a vignette background over a flat solid color?",
          answer:
            "Vignettes naturally guide the viewer's gaze to the center of the viewport, increasing headline retention and CTA click-through rates.",
        },
        {
          question: "Can I adjust the vignette fade radius?",
          answer:
            "Yes, the radial gradient stops and spread radius can be customized in the component's CSS background styles.",
        },
      ],
    },
    pattern: {
      subtitle:
        "Topographic contour lines, geometric tile arrays, isometric textures, and micro-dot patterns for subtle visual craftsmanship.",
      tips: [
        "Use repeating SVG tile patterns with small dimensions (20px–60px) for razor-sharp rendering and zero bandwidth footprint.",
        "Topographic lines look stunning when layered beneath high-contrast developer documentation and technical guides.",
        "Keep pattern opacity low (8%–15%) so foreground copy stays readable without eye fatigue.",
      ],
      faqs: [
        {
          question: "How do SVG patterns perform on high-DPI displays?",
          answer:
            "Vector SVG patterns scale infinitely without pixelation or blurriness across all Retina and 4K displays.",
        },
        {
          question: "Can I change the pattern stroke colors?",
          answer:
            "Yes, SVG `stroke` and `fill` properties link directly to Tailwind `currentColor` or your custom CSS theme variables.",
        },
      ],
    },
    waves: {
      subtitle:
        "Layered sine curves, contour waves, flowing ribbons, and audio frequency visualizers for fluid, energetic landing pages.",
      tips: [
        "Layer multi-stage wave curves with staggered animation delays to create multi-dimensional oceanic flow.",
        "Use gradient stroke fills along wave edges to make ripples catch light dynamically.",
        "Position waves along the bottom edge of sections to create seamless transitions into subsequent content blocks.",
      ],
      faqs: [
        {
          question: "Are the wave animations continuous and smooth?",
          answer:
            "Yes, all wave components utilize seamless CSS translate and transform loops that repeat smoothly with no stutter.",
        },
        {
          question: "Can I use wave components as section dividers?",
          answer:
            "Yes, wave components work exceptionally well placed at the footer or transition zones between distinct page sections.",
        },
      ],
    },
    texture: {
      subtitle:
        "Film grain, digital noise, paper stippling, and fine tactile textures that add depth, character, and realism to flat interfaces.",
      tips: [
        "Use fine SVG noise filters with low opacity (3%–7%) to eliminate gradient banding artifacts across dark themes.",
        "Add subtle paper or canvas grain to editorial, blog, and developer documentation pages for a polished print aesthetic.",
        "Combine noise overlays with rich color gradients to achieve modern brutalist and neo-skeuomorphic styling.",
      ],
      faqs: [
        {
          question: "Does SVG noise cause rendering lag?",
          answer:
            "No, our noise filters use lightweight `feTurbulence` primitives optimized for browser GPU rasterization.",
        },
        {
          question: "Can I apply texture overlays across my entire website layout?",
          answer:
            "Yes, you can place a texture component as a fixed, pointer-events-none layer in your RootLayout to apply sitewide texture.",
        },
      ],
    },
    geometry: {
      subtitle:
        "Isometric cubes, origami folds, polygon tessellations, and structured mathematical forms for clean architectural web design.",
      tips: [
        "Use isometric 3D geometry to reinforce engineering precision, data architecture, and fintech branding.",
        "Highlight alternating polygon facets with slight brightness shifts to create convincing 3D dimensionality.",
        "Align geometric grid vertices with your layout container columns for visual harmony.",
      ],
      faqs: [
        {
          question: "How are geometric facets rendered?",
          answer:
            "Our geometry components are built with clean, responsive vector SVG polygons and pure CSS transform matrixes.",
        },
        {
          question: "Can I animate geometric vertices on user interaction?",
          answer:
            "Yes, the components are structured cleanly so you can attach Tailwind hover states or Framer Motion hooks effortlessly.",
        },
      ],
    },
    space: {
      subtitle:
        "Cosmic nebulae, twinkling starfields, orbital trajectories, and interstellar particle horizons for futuristic, sci-fi, and AI tools.",
      tips: [
        "Use multi-layered star fields with differing twinkle durations to produce an authentic sense of galactic depth.",
        "Layer soft purple, indigo, and cyan nebula radial masks behind dark star maps for cinematic majesty.",
        "Keep particle velocities slow and tranquil to enhance user focus on central value propositions.",
      ],
      faqs: [
        {
          question: "How do starfield animations perform across mobile devices?",
          answer:
            "Star particles utilize CSS keyframe translates and opacity shifts instead of heavy canvas calculations, ensuring 60fps across mobile browsers.",
        },
        {
          question: "Can I adjust star density and nebula colors?",
          answer:
            "Yes, you can easily tweak particle quantities, radial gradient colors, and animation speeds in the component props.",
        },
      ],
    },
  };

  const fallback = {
    subtitle: `Customizable, production-ready ${categoryName.toLowerCase()} background components built with React and Tailwind CSS.`,
    tips: [
      `Easily customize colors, animation speeds, and opacity to seamlessly match your brand identity.`,
      `Zero extra NPM runtime dependencies needed—built with pure React and modern Tailwind CSS.`,
      `Optimized for high performance, mobile responsiveness, and zero layout shift.`,
    ],
    faqs: [
      {
        question: `How do I customize the colors for ${categoryName.toLowerCase()} backgrounds?`,
        answer:
          "You can customize colors globally using the 'Customize Colors' button in the navigation header, or by editing the CSS color classes directly in the copied TSX code.",
      },
      {
        question: `Can I copy and paste these into React, Vite, Remix, or Next.js?`,
        answer:
          "Yes! All background components are standard React TypeScript (.tsx) components that work in Next.js (App & Pages router), Remix, Astro, Vite, and Create React App.",
      },
      {
        question: `Are these ${categoryName.toLowerCase()} components free for commercial use?`,
        answer:
          "Yes, all BGKit components are open-source under the MIT license and completely free to use in personal and commercial web projects.",
      },
    ],
  };

  return contentMap[categoryId] || fallback;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = CATEGORIES.find((c) => c.id === categorySlug);

  if (!category || categorySlug === "all") {
    notFound();
  }

  const categoryBackgrounds = getBackgroundsByCategory(category.id).map(
    (bg) => ({
      ...bg,
      code: getBackgroundCode(bg.componentName),
    })
  );

  const seoData = getCategorySeoContent(category.id, category.name);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Browse Backgrounds", url: "/backgrounds" },
    { name: category.name, url: `/backgrounds/${category.id}` },
  ];

  const collectionItems = categoryBackgrounds.map((bg) => ({
    name: bg.name,
    description: bg.description,
    url: `/backgrounds/${bg.category}/${bg.slug}`,
    image: `/thumbnails/${bg.slug}.webp`,
  }));

  return (
    <>
      {/* Structured Data for SEO */}
      <BreadcrumbJsonLd items={breadcrumbs} />
      <CollectionJsonLd
        name={`${category.name} React & Tailwind CSS Backgrounds`}
        description={category.description}
        url={`/backgrounds/${category.id}`}
        items={collectionItems}
      />
      <FaqJsonLd faqs={seoData.faqs} />

      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12">
        {/* Semantic Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-semibold text-muted"
        >
          <Link href="/" className="hover:text-fg transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-2" />
          <Link href="/backgrounds" className="hover:text-fg transition-colors">
            Browse
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-2" />
          <span className="text-primary" aria-current="page">
            {category.name}
          </span>
        </nav>

        {/* Hero Banner for Category */}
        <header className="relative rounded-card border border-border bg-surface-2/30 backdrop-blur-md p-6 sm:p-10 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{categoryBackgrounds.length} Components Available</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight bg-linear-to-r from-fg via-fg to-muted bg-clip-text text-transparent">
              {category.name} Backgrounds
            </h1>

            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {category.description} {seoData.subtitle}
            </p>
          </div>
        </header>

        {/* Category Switcher Tabs */}
        <nav aria-label="Browse categories" className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-muted-2 flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Categories</span>
            </h2>
            <Link
              href="/backgrounds"
              className="text-xs text-muted hover:text-primary transition-colors flex items-center gap-1 font-medium"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              View all categories
            </Link>
          </div>

          <div className="flex sm:flex-wrap gap-2 overflow-x-auto pb-2 sm:pb-0 snap-x snap-mandatory scrollbar-none">
            <Link
              href="/backgrounds"
              className="px-4 py-2 rounded-pill text-xs font-semibold transition-all duration-200 border border-border bg-surface-2/30 hover:bg-surface-2/60 text-muted hover:text-fg shrink-0 flex items-center gap-2"
            >
              <span>All</span>
              <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-surface text-muted-2">
                {BACKGROUNDS.length}
              </span>
            </Link>

            {CATEGORIES.filter((c) => c.id !== "all").map((cat) => {
              const isActive = cat.id === category.id;
              return (
                <Link
                  key={cat.id}
                  href={`/backgrounds/${cat.id}`}
                  className={`px-4 py-2 rounded-pill text-xs font-semibold transition-all duration-200 border shrink-0 flex items-center gap-2 snap-start ${
                    isActive
                      ? "border-primary text-primary bg-primary/10 shadow-[0_0_12px_var(--glow)]"
                      : "border-border bg-surface-2/30 hover:bg-surface-2/60 text-muted hover:text-fg"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold transition-colors ${
                      isActive
                        ? "bg-primary/20 text-primary"
                        : "bg-surface text-muted-2"
                    }`}
                  >
                    {cat.count}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Background Grid Section */}
        <section
          aria-labelledby="category-gallery-heading"
          className="space-y-4"
        >
          <div className="flex items-center justify-between text-xs text-muted border-b border-border pb-3">
            <h2 id="category-gallery-heading" className="text-xs text-muted font-medium">
              Showing all{" "}
              <strong className="text-fg">{categoryBackgrounds.length}</strong>{" "}
              {category.name.toLowerCase()} background components
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryBackgrounds.map((bg) => (
              <BackgroundCard key={bg.slug} item={bg} code={bg.code} />
            ))}
          </div>
        </section>

        {/* Distinct Separation Divider */}
        <div className="relative pt-12 pb-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/80" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-bg px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-muted-2 flex items-center gap-2 border border-border rounded-pill shadow-md">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
              <span>Guide & Documentation</span>
            </span>
          </div>
        </div>

        {/* Dedicated SEO Knowledge & Guide Container */}
        <section
          aria-labelledby="category-guide-heading"
          className="relative rounded-card border border-border/80 bg-surface-2/15 backdrop-blur-sm p-6 sm:p-10 md:p-12 space-y-10 shadow-2xl overflow-hidden"
        >
          {/* Subtle ambient corner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="space-y-2 border-b border-border pb-6 max-w-3xl">
            <h2
              id="category-guide-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-fg"
            >
              Designing with {category.name} Backgrounds
            </h2>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Explore professional integration practices, performance guidelines,
              and design tips for incorporating {category.name.toLowerCase()} background
              components into production React, Tailwind CSS, and Next.js applications.
            </p>
          </div>

          {/* Best Practices & Integration Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="rounded-card border border-border bg-surface-2/30 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5 text-primary font-bold text-base">
                <Code2 className="w-5 h-5 shrink-0" />
                <h3 className="text-fg">Integration Best Practices</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-muted leading-relaxed">
                {seoData.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-card border border-border bg-surface-2/30 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5 text-primary font-bold text-base">
                <Layers className="w-5 h-5 shrink-0" />
                <h3 className="text-fg">Tailwind CSS & Framework Support</h3>
              </div>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Every component in the {category.name} collection is crafted
                with modern React and TypeScript best practices. Simply copy the TSX code,
                integrate with your Tailwind CSS configuration, and enjoy
                high-performance visual fidelity with zero external runtime dependencies.
              </p>
              <div className="pt-2">
                <Link
                  href="/how-to-use"
                  className="text-xs text-primary font-semibold hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Read full integration documentation</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          </div>

          {/* Category FAQ Section */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-2.5 text-fg font-bold text-lg">
              <HelpCircle className="w-5 h-5 text-primary shrink-0" />
              <h3>Frequently Asked Questions about {category.name} Backgrounds</h3>
            </div>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seoData.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-btn border border-border/80 bg-surface/50 p-5 space-y-2"
                >
                  <dt className="text-sm font-semibold text-fg/90">
                    {faq.question}
                  </dt>
                  <dd className="text-xs text-muted leading-relaxed">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </div>
    </>
  );
}

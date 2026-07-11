import { CategoryInfo } from "@/types";

/**
 * Raw category definitions — no `count` yet.
 * The `count` field is computed dynamically in registry/index.ts
 * based on the BACKGROUNDS array.
 */
export const RAW_CATEGORIES = [
  {
    id: "all",
    name: "All",
    description: "Browse every background component across all categories.",
  },

  {
    id: "vignette",
    name: "Vignette",
    description:
      "Backgrounds that softly fade toward the edges, creating a focused center ideal for modern AI, SaaS, portfolio, and landing page hero sections.",
  },
  {
    id: "network",
    name: "Network",
    description:
      "Connected nodes and neural-style network backgrounds for AI, cloud, and developer products.",
  },
  {
    id: "technology",
    name: "Technology",
    description:
      "Circuit boards, blueprints, and technical patterns for engineering and cybersecurity websites.",
  },
  {
    id: "optics",
    name: "Optics",
    description:
      "Light-inspired backgrounds including prism refraction, caustics, and lens flares that bring a premium cinematic look to modern websites.",
  },
  {
    id: "glass",
    name: "Glass",
    description:
      "Glassmorphism backgrounds with blur, transparency, and crystal-inspired effects.",
  },
  {
    id: "lighting",
    name: "Lighting",
    description:
      "Volumetric beams, bokeh, and cinematic lighting effects for premium hero sections.",
  },
  {
    id: "abstract",
    name: "Abstract",
    description:
      "Organic blobs and artistic abstract backgrounds for creative and startup websites.",
  },

  {
    id: "grid",
    name: "Grid",
    description:
      "Square, perspective, hexagonal, and structured grid backgrounds for clean layouts.",
  },
  {
    id: "gradients",
    name: "Gradients",
    description:
      "Linear, radial, mesh, and aurora gradients for modern landing pages and hero sections.",
  },

  {
    id: "pattern",
    name: "Pattern",
    description:
      "Topographic, dotted, and geometric patterns that add subtle visual texture.",
  },
  {
    id: "waves",
    name: "Waves",
    description:
      "Flowing curves, layered waves, ripples, and contour-inspired backgrounds.",
  },

  {
    id: "texture",
    name: "Texture",
    description:
      "Noise, grain, dust, and subtle textures for depth and realism.",
  },

  {
    id: "geometry",
    name: "Geometry",
    description:
      "Geometric backgrounds featuring folded shapes, isometric patterns, and structured forms that add subtle depth and visual interest.",
  },
  {
    id: "space",
    name: "Space",
    description:
      "Stars, nebulae, and cosmic-inspired backgrounds for futuristic and AI experiences.",
  },
] as const satisfies Omit<CategoryInfo, "count">[];
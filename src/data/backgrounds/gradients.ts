import { BackgroundItem } from "@/types";

/** Gradients > Linear (5) | Radial (5) | Mesh (5) | Aurora (5) */
export const GRADIENT_BACKGROUNDS: BackgroundItem[] = [
  // ===========================
  // Gradients > Linear
  // ===========================
  {
    slug: "linear-gradient",
    name: "Linear Gradient",
    category: "Gradients",
    subCategory: "Linear",
    description: "Classic linear color transition for modern sections.",
    componentName: "LinearGradient",
    tags: ["gradient", "hero", "landing"],
  },
  {
    slug: "diagonal-gradient",
    name: "Diagonal Gradient",
    category: "Gradients",
    subCategory: "Linear",
    description: "Diagonal flowing gradient with smooth blending.",
    componentName: "DiagonalGradient",
    tags: ["gradient", "modern"],
  },
  {
    slug: "sunset-gradient",
    name: "Sunset Gradient",
    category: "Gradients",
    subCategory: "Linear",
    description: "Warm sunset-inspired gradient background.",
    componentName: "SunsetGradient",
    tags: ["warm", "landing"],
  },
  {
    slug: "ocean-gradient",
    name: "Ocean Gradient",
    category: "Gradients",
    subCategory: "Linear",
    description: "Cool ocean blue gradient.",
    componentName: "OceanGradient",
    tags: ["blue", "minimal"],
  },
  {
    slug: "midnight-gradient",
    name: "Midnight Gradient",
    category: "Gradients",
    subCategory: "Linear",
    description: "Dark premium gradient for hero sections.",
    componentName: "MidnightGradient",
    tags: ["dark", "premium"],
  },

  // ===========================
  // Gradients > Radial
  // ===========================
  {
    slug: "radial-glow",
    name: "Radial Glow",
    category: "Gradients",
    subCategory: "Radial",
    description: "Centered radial glow effect.",
    componentName: "RadialGlow",
    tags: ["glow", "hero"],
  },
  {
    slug: "dual-radial",
    name: "Dual Radial",
    category: "Gradients",
    subCategory: "Radial",
    description: "Two overlapping radial gradients.",
    componentName: "DualRadial",
    tags: ["mesh", "glow"],
  },
  {
    slug: "corner-radial",
    name: "Corner Radial",
    category: "Gradients",
    subCategory: "Radial",
    description: "Radial gradients placed in corners.",
    componentName: "CornerRadial",
    tags: ["minimal", "glow"],
  },
  {
    slug: "spotlight",
    name: "Spotlight",
    category: "Gradients",
    subCategory: "Radial",
    description: "Soft spotlight background.",
    componentName: "Spotlight",
    tags: ["spotlight", "hero"],
  },
  {
    slug: "vignette-glow",
    name: "Vignette Glow",
    category: "Gradients",
    subCategory: "Radial",
    description: "Subtle radial vignette effect.",
    componentName: "VignetteGlow",
    tags: ["vignette", "minimal"],
  },

  // ===========================
  // Gradients > Mesh
  // ===========================
  {
    slug: "mesh-gradient",
    name: "Mesh Gradient",
    category: "Gradients",
    subCategory: "Mesh",
    description: "Modern colorful mesh gradient.",
    componentName: "MeshGradient",
    tags: ["mesh", "landing"],
  },
  {
    slug: "soft-mesh",
    name: "Soft Mesh",
    category: "Gradients",
    subCategory: "Mesh",
    description: "Smooth blurred mesh colors.",
    componentName: "SoftMesh",
    tags: ["mesh", "blur"],
  },
  {
    slug: "layered-mesh",
    name: "Layered Mesh",
    category: "Gradients",
    subCategory: "Mesh",
    description: "Multiple layered mesh gradients.",
    componentName: "LayeredMesh",
    tags: ["mesh", "premium"],
  },
  {
    slug: "organic-mesh",
    name: "Organic Mesh",
    category: "Gradients",
    subCategory: "Mesh",
    description: "Organic blob-based mesh gradient.",
    componentName: "OrganicMesh",
    tags: ["blob", "mesh"],
  },
  {
    slug: "floating-mesh",
    name: "Floating Mesh",
    category: "Gradients",
    subCategory: "Mesh",
    description: "Floating animated mesh blobs.",
    componentName: "FloatingMesh",
    tags: ["blob", "hero", "animated"],
  },

  // ===========================
  // Gradients > Aurora
  // ===========================
  {
    slug: "aurora-glow",
    name: "Aurora Glow",
    category: "Gradients",
    subCategory: "Aurora",
    description: "Aurora-inspired flowing glow.",
    componentName: "AuroraGlow",
    tags: ["aurora", "glow"],
  },
  {
    slug: "northern-lights",
    name: "Northern Lights",
    category: "Gradients",
    subCategory: "Aurora",
    description: "Northern lights animated effect.",
    componentName: "NorthernLights",
    tags: ["aurora", "animated"],
  },
  {
    slug: "aurora-ribbon",
    name: "Aurora Ribbon",
    category: "Gradients",
    subCategory: "Aurora",
    description: "Ribbon-shaped aurora gradient.",
    componentName: "AuroraRibbon",
    tags: ["aurora", "ribbon"],
  },
  {
    slug: "soft-aurora",
    name: "Soft Aurora",
    category: "Gradients",
    subCategory: "Aurora",
    description: "Minimal soft aurora effect.",
    componentName: "SoftAurora",
    tags: ["aurora", "minimal"],
  },
  {
    slug: "blurred-aurora",
    name: "Blurred Aurora",
    category: "Gradients",
    subCategory: "Aurora",
    description: "Blurred glowing aurora colors.",
    componentName: "BlurredAurora",
    tags: ["aurora", "blur"],
  },
];

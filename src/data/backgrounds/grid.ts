import { BackgroundItem } from "@/types";

/** Grid > Square (5) | Perspective (5) */
export const GRID_BACKGROUNDS: BackgroundItem[] = [
  // ===========================
  // Grid > Square
  // ===========================
  {
    slug: "square-grid",
    name: "Square Grid",
    category: "Grid",
    subCategory: "Square",
    description: "Classic square grid background.",
    componentName: "SquareGrid",
    tags: ["grid", "minimal"],
  },
  {
    slug: "fine-grid",
    name: "Fine Grid",
    category: "Grid",
    subCategory: "Square",
    description: "Thin subtle square grid.",
    componentName: "FineGrid",
    tags: ["grid", "subtle"],
  },
  {
    slug: "large-grid",
    name: "Large Grid",
    category: "Grid",
    subCategory: "Square",
    description: "Large square spacing.",
    componentName: "LargeGrid",
    tags: ["grid", "spacious"],
  },
  {
    slug: "offset-grid",
    name: "Offset Grid",
    category: "Grid",
    subCategory: "Square",
    description: "Offset square pattern.",
    componentName: "OffsetGrid",
    tags: ["grid", "pattern"],
  },
  {
    slug: "glow-grid",
    name: "Glow Grid",
    category: "Grid",
    subCategory: "Square",
    description: "Grid with glowing intersections.",
    componentName: "GlowGrid",
    tags: ["grid", "glow"],
  },

  // ===========================
  // Grid > Perspective
  // ===========================
  {
    slug: "perspective-grid",
    name: "Perspective Grid",
    category: "Grid",
    subCategory: "Perspective",
    description: "Retro perspective grid.",
    componentName: "PerspectiveGrid",
    tags: ["grid", "3d", "retro"],
  },
  {
    slug: "retro-horizon-grid",
    name: "Retro Horizon Grid",
    category: "Grid",
    subCategory: "Perspective",
    description: "80s synthwave perspective.",
    componentName: "RetroHorizonGrid",
    tags: ["grid", "synthwave", "retro"],
  },
  {
    slug: "wireframe-floor",
    name: "Wireframe Floor",
    category: "Grid",
    subCategory: "Perspective",
    description: "3D wireframe floor grid.",
    componentName: "WireframeFloor",
    tags: ["grid", "3d", "wireframe"],
  },
  {
    slug: "vanishing-grid",
    name: "Vanishing Grid",
    category: "Grid",
    subCategory: "Perspective",
    description: "Grid converging to horizon.",
    componentName: "VanishingGrid",
    tags: ["grid", "3d", "perspective"],
  },
  {
    slug: "cyber-grid",
    name: "Cyber Grid",
    category: "Grid",
    subCategory: "Perspective",
    description: "Cyberpunk glowing perspective.",
    componentName: "CyberGrid",
    tags: ["grid", "cyberpunk", "animated"],
  },
];

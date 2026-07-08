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
    description: "Browse all available backgrounds",
  },
  {
    id: "Gradients",
    name: "Gradients",
    description: "Linear, radial, mesh, and aurora gradient backgrounds",
  },
  {
    id: "Grid",
    name: "Grid",
    description: "Square, perspective, and wireframe grid backgrounds",
  },
  {
    id: "Pattern",
    name: "Pattern",
    description: "Dot and halftone pattern backgrounds",
  },
  {
    id: "Texture",
    name: "Texture",
    description: "Noise, grain, and texture backgrounds",
  },
  {
    id: "Waves",
    name: "Waves",
    description: "SVG wave and curve backgrounds",
  },
  {
    id: "Glass",
    name: "Glass",
    description: "Frosted glass and glazed backgrounds",
  },
] as const satisfies Omit<CategoryInfo, "count">[];

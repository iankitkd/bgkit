/**
 * Aggregates all category slices into the unified BACKGROUNDS array,
 * computes CATEGORIES with counts, and exports the helper functions.
 */

import { BackgroundItem, CategoryInfo } from "@/types";

import { RAW_CATEGORIES } from "./categories";
import { BACKGROUNDS } from "./backgrounds";

// ─── Category map with computed counts ──────────────────────────────────────

export const CATEGORIES: CategoryInfo[] = RAW_CATEGORIES.map((cat) => ({
  ...cat,
  count:
    cat.id === "all"
      ? BACKGROUNDS.length
      : BACKGROUNDS.filter((bg) => bg.category === cat.id).length,
}));

// ─── Helper functions ────────────────────────────────────────────────────────

export function getBackgroundBySlug(slug: string): BackgroundItem | undefined {
  return BACKGROUNDS.find((bg) => bg.slug === slug);
}

export function getBackgroundsByCategory(category: string): BackgroundItem[] {
  if (category === "all") return BACKGROUNDS;
  return BACKGROUNDS.filter((bg) => bg.category === category);
}

// ─── Re-export slices for consumers that need a single category ──────────────

export { GRADIENT_BACKGROUNDS } from "./backgrounds/gradients";
export { GRID_BACKGROUNDS } from "./backgrounds/grid";
export { PATTERN_BACKGROUNDS } from "./backgrounds/pattern";
export { TEXTURE_BACKGROUNDS } from "./backgrounds/texture";
export { WAVES_BACKGROUNDS } from "./backgrounds/waves";
export { GLASS_BACKGROUNDS } from "./backgrounds/glass";
export { ABSTRACT_BACKGROUNDS } from "./backgrounds/abstract";
export { LIGHTING_BACKGROUNDS } from "./backgrounds/lighting";
export { NETWORK_BACKGROUNDS } from "./backgrounds/network";
export { TECHNOLOGY_BACKGROUNDS } from "./backgrounds/technology";
export { SPACE_BACKGROUNDS } from "./backgrounds/space";
export { RAW_CATEGORIES } from "./categories";
export { BACKGROUNDS } from "./backgrounds";
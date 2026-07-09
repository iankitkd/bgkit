export interface BackgroundItem {
  slug: string;
  name: string;
  category: string;
  subCategory: string;
  description: string;
  componentName: string;
  tags?: string[];
}

export interface CategoryInfo {
  id: string;
  name: string;
  description: string;
  count: number;
}

// ─── Background component variant system ─────────────────────────────────────

/** The three rendering contexts a background component can appear in. */
export type BackgroundVariant = "hero" | "preview" | "thumbnail";

/**
 * Base props accepted by every background component.
 * - `hero`      → 1200 × 675  (detail page hero, full quality)
 * - `preview`   → 640 × 360   (PreviewFrame on detail page)
 * - `thumbnail` → 320 × 180   (gallery card / thumbnail capture)
 */
export interface BackgroundProps {
  variant?: BackgroundVariant;
}


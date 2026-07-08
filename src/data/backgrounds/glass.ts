import { BackgroundItem } from "@/types";

/** Glass > Frosted (2) | Prism (1) | Crystal (1) | Liquid (1) */
export const GLASS_BACKGROUNDS: BackgroundItem[] = [
  {
    slug: "glass-blur",
    name: "Glass Blur",
    category: "Glass",
    subCategory: "Frosted",
    description: "Frosted glass background.",
    componentName: "GlassBlur",
    tags: ["glass", "blur", "frosted"],
  },
  {
    slug: "glass-prism",
    name: "Glass Prism",
    category: "Glass",
    subCategory: "Prism",
    description: "Colorful glass prism effect.",
    componentName: "GlassPrism",
    tags: ["glass", "prism", "colorful"],
  },
  {
    slug: "frosted-overlay",
    name: "Frosted Overlay",
    category: "Glass",
    subCategory: "Frosted",
    description: "Soft translucent frosted overlay.",
    componentName: "FrostedOverlay",
    tags: ["glass", "frosted", "overlay"],
  },
  {
    slug: "crystal-glass",
    name: "Crystal Glass",
    category: "Glass",
    subCategory: "Crystal",
    description: "Crystal-inspired angular facets.",
    componentName: "CrystalGlass",
    tags: ["glass", "crystal", "geometric"],
  },
  {
    slug: "liquid-glass",
    name: "Liquid Glass",
    category: "Glass",
    subCategory: "Liquid",
    description: "Modern animated liquid glass effect.",
    componentName: "LiquidGlass",
    tags: ["glass", "animated", "liquid"],
  },
];

import { BackgroundItem } from "@/types";

/** Texture > Noise (5) */
export const TEXTURE_BACKGROUNDS: BackgroundItem[] = [
  {
    slug: "film-grain",
    name: "Film Grain",
    category: "Texture",
    subCategory: "Noise",
    description: "Classic animated film grain overlay.",
    componentName: "FilmGrain",
    tags: ["noise", "texture", "grain", "animated"],
  },
  {
    slug: "paper-grain",
    name: "Paper Grain",
    category: "Texture",
    subCategory: "Noise",
    description: "Subtle paper texture.",
    componentName: "PaperGrain",
    tags: ["noise", "texture", "paper"],
  },
  {
    slug: "static-noise",
    name: "Static Noise",
    category: "Texture",
    subCategory: "Noise",
    description: "Random animated digital noise.",
    componentName: "StaticNoise",
    tags: ["noise", "animated", "digital"],
  },
  {
    slug: "dust-particles",
    name: "Dust Particles",
    category: "Texture",
    subCategory: "Noise",
    description: "Floating dust particle texture.",
    componentName: "DustParticles",
    tags: ["particles", "animated", "floating"],
  },
  {
    slug: "sand-grain",
    name: "Sand Grain",
    category: "Texture",
    subCategory: "Noise",
    description: "Fine sand-like texture.",
    componentName: "SandGrain",
    tags: ["noise", "texture", "grain"],
  },
];

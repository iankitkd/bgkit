import fs from "fs";
import path from "path";

/**
 * Maps a componentName to its subfolder inside src/components/backgrounds/.
 * When new categories are added, extend this map.
 */
const COMPONENT_SUBFOLDER: Record<string, string> = {
  // Gradients
  LinearGradient:   "gradients",
  DiagonalGradient: "gradients",
  SunsetGradient:   "gradients",
  OceanGradient:    "gradients",
  MidnightGradient: "gradients",
  RadialGlow:       "gradients",
  DualRadial:       "gradients",
  CornerRadial:     "gradients",
  Spotlight:        "gradients",
  VignetteGlow:     "gradients",
  MeshGradient:     "gradients",
  SoftMesh:         "gradients",
  LayeredMesh:      "gradients",
  OrganicMesh:      "gradients",
  FloatingMesh:     "gradients",
  AuroraGlow:       "gradients",
  NorthernLights:   "gradients",
  AuroraRibbon:     "gradients",
  SoftAurora:       "gradients",
  BlurredAurora:    "gradients",

  // Grid
  SquareGrid:       "grid",
  FineGrid:         "grid",
  LargeGrid:        "grid",
  OffsetGrid:       "grid",
  GlowGrid:         "grid",
  PerspectiveGrid:  "grid",
  RetroHorizonGrid: "grid",
  WireframeFloor:   "grid",
  VanishingGrid:    "grid",
  CyberGrid:        "grid",

  // Pattern
  DotGrid:          "pattern",
  MicroDots:        "pattern",
  FadeDots:         "pattern",
  HalftoneDots:     "pattern",
  DiamondDots:      "pattern",

  // Texture
  FilmGrain:        "texture",
  PaperGrain:       "texture",
  StaticNoise:      "texture",
  DustParticles:    "texture",
  SandGrain:        "texture",

  // Waves
  LayeredWaves:     "waves",
  OceanWaves:       "waves",
  RibbonWaves:      "waves",
  FlowingCurves:    "waves",
  TopWaveDivider:   "waves",

  // Glass
  GlassBlur:        "glass",
  GlassPrism:       "glass",
  FrostedOverlay:   "glass",
  CrystalGlass:     "glass",
  LiquidGlass:      "glass",
};

/**
 * Reads the raw source code of a background component from the filesystem.
 * Resolves the correct subfolder automatically via COMPONENT_SUBFOLDER map.
 * Should only be called server-side (e.g. in Server Components).
 */
export function getBackgroundCode(componentName: string): string {
  try {
    const subfolder = COMPONENT_SUBFOLDER[componentName];

    const filePath = subfolder
      ? path.join(
          process.cwd(),
          "src",
          "components",
          "backgrounds",
          subfolder,
          `${componentName}.tsx`
        )
      : path.join(
          process.cwd(),
          "src",
          "components",
          "backgrounds",
          `${componentName}.tsx`
        );

    return fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error(`Failed to read code for component ${componentName}:`, error);
    return `// Code could not be loaded for ${componentName}`;
  }
}

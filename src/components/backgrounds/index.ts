/**
 * src/components/backgrounds/index.ts
 *
 * Single source of truth for all background components.
 * Each component is imported once, then:
 *   1. Re-exported as a named export (for `import { X } from "@/components/backgrounds"`)
 *   2. Included in BACKGROUND_COMPONENTS map (for dynamic string-based lookup)
 */

import type { ComponentType } from "react";

// ─── Gradients › Linear ──────────────────────────────────────────────────────
import LinearGradient    from "./gradients/LinearGradient";
import DiagonalGradient  from "./gradients/DiagonalGradient";
import SunsetGradient    from "./gradients/SunsetGradient";
import OceanGradient     from "./gradients/OceanGradient";
import MidnightGradient  from "./gradients/MidnightGradient";

// ─── Gradients › Radial ──────────────────────────────────────────────────────
import RadialGlow   from "./gradients/RadialGlow";
import DualRadial   from "./gradients/DualRadial";
import CornerRadial from "./gradients/CornerRadial";
import Spotlight    from "./gradients/Spotlight";
import VignetteGlow from "./gradients/VignetteGlow";

// ─── Gradients › Mesh ────────────────────────────────────────────────────────
import MeshGradient from "./gradients/MeshGradient";
import SoftMesh     from "./gradients/SoftMesh";
import LayeredMesh  from "./gradients/LayeredMesh";
import OrganicMesh  from "./gradients/OrganicMesh";
import FloatingMesh from "./gradients/FloatingMesh";

// ─── Gradients › Aurora ──────────────────────────────────────────────────────
import AuroraGlow     from "./gradients/AuroraGlow";
import NorthernLights from "./gradients/NorthernLights";
import AuroraRibbon   from "./gradients/AuroraRibbon";
import SoftAurora     from "./gradients/SoftAurora";
import BlurredAurora  from "./gradients/BlurredAurora";

// ─── Grid › Square ───────────────────────────────────────────────────────────
import SquareGrid from "./grid/SquareGrid";
import FineGrid   from "./grid/FineGrid";
import LargeGrid  from "./grid/LargeGrid";
import OffsetGrid from "./grid/OffsetGrid";
import GlowGrid   from "./grid/GlowGrid";

// ─── Grid › Perspective ──────────────────────────────────────────────────────
import PerspectiveGrid  from "./grid/PerspectiveGrid";
import RetroHorizonGrid from "./grid/RetroHorizonGrid";
import WireframeFloor   from "./grid/WireframeFloor";
import VanishingGrid    from "./grid/VanishingGrid";
import CyberGrid        from "./grid/CyberGrid";

// ─── Pattern › Dots ──────────────────────────────────────────────────────────
import DotGrid      from "./pattern/DotGrid";
import MicroDots    from "./pattern/MicroDots";
import FadeDots     from "./pattern/FadeDots";
import HalftoneDots from "./pattern/HalftoneDots";
import DiamondDots  from "./pattern/DiamondDots";

// ─── Texture › Noise ─────────────────────────────────────────────────────────
import FilmGrain     from "./texture/FilmGrain";
import PaperGrain    from "./texture/PaperGrain";
import StaticNoise   from "./texture/StaticNoise";
import DustParticles from "./texture/DustParticles";
import SandGrain     from "./texture/SandGrain";

// ─── Waves ───────────────────────────────────────────────────────────────────
import LayeredWaves   from "./waves/LayeredWaves";
import OceanWaves     from "./waves/OceanWaves";
import RibbonWaves    from "./waves/RibbonWaves";
import FlowingCurves  from "./waves/FlowingCurves";
import TopWaveDivider from "./waves/TopWaveDivider";

// ─── Glass ───────────────────────────────────────────────────────────────────
import GlassBlur      from "./glass/GlassBlur";
import GlassPrism     from "./glass/GlassPrism";
import FrostedOverlay from "./glass/FrostedOverlay";
import CrystalGlass   from "./glass/CrystalGlass";
import LiquidGlass    from "./glass/LiquidGlass";

// ─── Named re-exports (from local bindings — no duplicate declarations) ───────
export {
  // Gradients › Linear
  LinearGradient, DiagonalGradient, SunsetGradient, OceanGradient, MidnightGradient,
  // Gradients › Radial
  RadialGlow, DualRadial, CornerRadial, Spotlight, VignetteGlow,
  // Gradients › Mesh
  MeshGradient, SoftMesh, LayeredMesh, OrganicMesh, FloatingMesh,
  // Gradients › Aurora
  AuroraGlow, NorthernLights, AuroraRibbon, SoftAurora, BlurredAurora,
  // Grid › Square
  SquareGrid, FineGrid, LargeGrid, OffsetGrid, GlowGrid,
  // Grid › Perspective
  PerspectiveGrid, RetroHorizonGrid, WireframeFloor, VanishingGrid, CyberGrid,
  // Pattern › Dots
  DotGrid, MicroDots, FadeDots, HalftoneDots, DiamondDots,
  // Texture › Noise
  FilmGrain, PaperGrain, StaticNoise, DustParticles, SandGrain,
  // Waves
  LayeredWaves, OceanWaves, RibbonWaves, FlowingCurves, TopWaveDivider,
  // Glass
  GlassBlur, GlassPrism, FrostedOverlay, CrystalGlass, LiquidGlass,
};

// ─── Typed component map ──────────────────────────────────────────────────────
/**
 * Typed map of componentName → React component.
 * Use `BACKGROUND_COMPONENTS[componentName]` instead of `(Bgs as any)[name]`.
 */
export const BACKGROUND_COMPONENTS: Record<string, ComponentType> = {
  LinearGradient,
  DiagonalGradient,
  SunsetGradient,
  OceanGradient,
  MidnightGradient,
  RadialGlow,
  DualRadial,
  CornerRadial,
  Spotlight,
  VignetteGlow,
  MeshGradient,
  SoftMesh,
  LayeredMesh,
  OrganicMesh,
  FloatingMesh,
  AuroraGlow,
  NorthernLights,
  AuroraRibbon,
  SoftAurora,
  BlurredAurora,
  SquareGrid,
  FineGrid,
  LargeGrid,
  OffsetGrid,
  GlowGrid,
  PerspectiveGrid,
  RetroHorizonGrid,
  WireframeFloor,
  VanishingGrid,
  CyberGrid,
  DotGrid,
  MicroDots,
  FadeDots,
  HalftoneDots,
  DiamondDots,
  FilmGrain,
  PaperGrain,
  StaticNoise,
  DustParticles,
  SandGrain,
  LayeredWaves,
  OceanWaves,
  RibbonWaves,
  FlowingCurves,
  TopWaveDivider,
  GlassBlur,
  GlassPrism,
  FrostedOverlay,
  CrystalGlass,
  LiquidGlass,
};

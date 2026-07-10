import { BackgroundItem } from "@/types";

import { GRADIENT_BACKGROUNDS } from "./gradients";
import { GRID_BACKGROUNDS } from "./grid";
import { PATTERN_BACKGROUNDS } from "./pattern";
import { TEXTURE_BACKGROUNDS } from "./texture";
import { WAVES_BACKGROUNDS } from "./waves";
import { GLASS_BACKGROUNDS } from "./glass";

import { NETWORK_BACKGROUNDS } from "./network";
import { LIGHTING_BACKGROUNDS } from "./lighting";
import { SPACE_BACKGROUNDS } from "./space";
import { TECHNOLOGY_BACKGROUNDS } from "./technology";
import { ABSTRACT_BACKGROUNDS } from "./abstract";
import { VIGNETTE_BACKGROUNDS } from "./vignette";
import { OPTICS_BACKGROUNDS } from "./optics";
import { GEOMETRY_BACKGROUNDS } from "./geometry";

// ─── Combined registry ──────────────────────────────────────────────────────

export const BACKGROUNDS: BackgroundItem[] = [
  ...VIGNETTE_BACKGROUNDS,
  ...NETWORK_BACKGROUNDS,
  ...TECHNOLOGY_BACKGROUNDS,
  ...OPTICS_BACKGROUNDS,
  ...GLASS_BACKGROUNDS,
  ...LIGHTING_BACKGROUNDS,
  ...SPACE_BACKGROUNDS,
  ...ABSTRACT_BACKGROUNDS,
  ...GRID_BACKGROUNDS,
  ...GRADIENT_BACKGROUNDS,
  ...GEOMETRY_BACKGROUNDS,
  ...PATTERN_BACKGROUNDS,
  ...WAVES_BACKGROUNDS,
  ...TEXTURE_BACKGROUNDS,
];
import { GRADIENT_BACKGROUNDS } from "./gradients";
import { GRID_BACKGROUNDS } from "./grid";
import { PATTERN_BACKGROUNDS } from "./pattern";
import { TEXTURE_BACKGROUNDS } from "./texture";
import { WAVES_BACKGROUNDS } from "./waves";
import { GLASS_BACKGROUNDS } from "./glass";

import { BackgroundItem } from "@/types";

// ─── Combined registry ──────────────────────────────────────────────────────

export const BACKGROUNDS: BackgroundItem[] = [
  ...GRADIENT_BACKGROUNDS,
  ...GRID_BACKGROUNDS,
  ...PATTERN_BACKGROUNDS,
  ...TEXTURE_BACKGROUNDS,
  ...WAVES_BACKGROUNDS,
  ...GLASS_BACKGROUNDS,
];
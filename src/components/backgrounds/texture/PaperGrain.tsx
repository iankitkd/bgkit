import type { BackgroundProps } from "@/types";

type VariantConfig = {
  tintOpacity: number;
  grainOpacity: number;
  baseFrequency: number;
  octaves: number;
};

const CONFIG = {
  hero: {
    tintOpacity: 0.05,
    grainOpacity: 0.10,
    baseFrequency: 0.55,
    octaves: 5,
  },

  preview: {
    tintOpacity: 0.07,
    grainOpacity: 0.13,
    baseFrequency: 0.45,
    octaves: 4,
  },

  thumbnail: {
    tintOpacity: 0.10,
    grainOpacity: 0.18,
    baseFrequency: 0.35,
    octaves: 3,
  },
} as const;

export default function PaperGrain({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const filterId = `pg-filter-${variant}`;

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Soft paper tint */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.tintOpacity,
          background:
            "linear-gradient(180deg, var(--color-bg-foreground), transparent 40%)",
        }}
      />

      {/* Paper texture */}

      <svg
        className="absolute inset-0 h-full w-full"
        style={{
          opacity: config.grainOpacity,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={config.baseFrequency}
            numOctaves={config.octaves}
            stitchTiles="stitch"
          />

          <feColorMatrix type="saturate" values="0" />
        </filter>

        <rect
          width="100%"
          height="100%"
          filter={`url(#${filterId})`}
          fill="var(--color-bg-foreground)"
        />
      </svg>
    </div>
  );
}
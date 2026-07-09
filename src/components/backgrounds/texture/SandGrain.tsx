import type { BackgroundProps } from "@/types";

type VariantConfig = {
  primaryOpacity: number;
  secondaryOpacity: number;
  baseFrequency1: number;
  baseFrequency2: number;
  octaves: number;
  offset: number;
};

const CONFIG = {
  hero: {
    primaryOpacity: 0.11,
    secondaryOpacity: 0.07,
    baseFrequency1: 0.82,
    baseFrequency2: 0.88,
    octaves: 2,
    offset: 1,
  },

  preview: {
    primaryOpacity: 0.13,
    secondaryOpacity: 0.09,
    baseFrequency1: 0.75,
    baseFrequency2: 0.80,
    octaves: 2,
    offset: 1,
  },

  thumbnail: {
    primaryOpacity: 0.18,
    secondaryOpacity: 0.12,
    baseFrequency1: 0.62,
    baseFrequency2: 0.68,
    octaves: 2,
    offset: 0.75,
  },
} as const;

export default function SandGrain({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const filter1 = `sg-filter-a-${variant}`;
  const filter2 = `sg-filter-b-${variant}`;

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Primary grain */}

      <svg
        className="absolute inset-0 h-full w-full"
        style={{ opacity: config.primaryOpacity }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id={filter1}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={config.baseFrequency1}
            numOctaves={config.octaves}
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>

        <rect
          width="100%"
          height="100%"
          filter={`url(#${filter1})`}
          fill="var(--color-bg-foreground)"
        />
      </svg>

      {/* Secondary grain */}

      <svg
        className="absolute inset-0 h-full w-full"
        style={{
          opacity: config.secondaryOpacity,
          transform: `translate(${config.offset}px, ${config.offset}px)`,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id={filter2}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={config.baseFrequency2}
            numOctaves={config.octaves}
            seed="5"
            stitchTiles="stitch"
          />

          <feColorMatrix type="saturate" values="0" />
        </filter>

        <rect
          width="100%"
          height="100%"
          filter={`url(#${filter2})`}
          fill="var(--color-bg-foreground)"
        />
      </svg>
    </div>
  );
}
import type { BackgroundProps } from "@/types";

type VariantConfig = {
  tintOpacity: number;
  grainOpacity: number;
  baseFrequency: number;
  octaves: number;
  overscan: number;
};

const CONFIG = {
  hero: {
    tintOpacity: 0.06,
    grainOpacity: 0.14,
    baseFrequency: 0.72,
    octaves: 4,
    overscan: 8,
  },

  preview: {
    tintOpacity: 0.08,
    grainOpacity: 0.18,
    baseFrequency: 0.65,
    octaves: 3,
    overscan: 8,
  },

  thumbnail: {
    tintOpacity: 0.10,
    grainOpacity: 0.24,
    baseFrequency: 0.52,
    octaves: 2,
    overscan: 6,
  },
} as const;

export default function FilmGrain({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const filterId = `fg-filter-${variant}`;

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes fg-anim {
          0%   { transform: translate(0px, 0px); }
          10%  { transform: translate(-2px, -3px); }
          20%  { transform: translate(3px, 2px); }
          30%  { transform: translate(-1px, 4px); }
          40%  { transform: translate(2px, -1px); }
          50%  { transform: translate(-3px, 2px); }
          60%  { transform: translate(1px, -4px); }
          70%  { transform: translate(3px, 1px); }
          80%  { transform: translate(-2px, 3px); }
          90%  { transform: translate(1px, -2px); }
          100% { transform: translate(0px, 0px); }
        }

        .fg-svg {
          animation: fg-anim 0.15s steps(1) infinite;
        }
      `}</style>

      {/* subtle base tint */}
      <div
        className="absolute inset-0"
        style={{
          opacity: config.tintOpacity,
          background: "var(--color-bg-foreground)",
        }}
      />

      {/* animated grain */}
      <svg
        className="fg-svg absolute"
        style={{
          inset: `-${config.overscan}%`,
          width: `${100 + config.overscan * 2}%`,
          height: `${100 + config.overscan * 2}%`,
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
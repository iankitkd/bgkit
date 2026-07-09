import type { BackgroundProps } from "@/types";

type VariantConfig = {
  tintOpacity: number;
  noiseOpacity: number;
  baseFrequency: number;
  octaves: number;
  overscan: number;
  duration: number;
};

const CONFIG = {
  hero: {
    tintOpacity: 0.05,
    noiseOpacity: 0.13,
    baseFrequency: 1.05,
    octaves: 1,
    overscan: 6,
    duration: 0.07,
  },

  preview: {
    tintOpacity: 0.06,
    noiseOpacity: 0.16,
    baseFrequency: 0.9,
    octaves: 1,
    overscan: 6,
    duration: 0.08,
  },

  thumbnail: {
    tintOpacity: 0.08,
    noiseOpacity: 0.22,
    baseFrequency: 0.75,
    octaves: 1,
    overscan: 4,
    duration: 0.10,
  },
} as const;

export default function StaticNoise({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const filterId = `sn-filter-${variant}`;

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes sn-anim {
          0%   { transform: translate(0px, 0px); }
          25%  { transform: translate(-3px, 2px); }
          50%  { transform: translate(2px, -3px); }
          75%  { transform: translate(3px, 1px); }
          100% { transform: translate(0px, 0px); }
        }
      `}</style>

      {/* Base tint */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.tintOpacity,
          background: "var(--color-bg-foreground)",
        }}
      />

      {/* Static */}

      <svg
        className="absolute"
        style={{
          inset: `-${config.overscan}%`,
          width: `${100 + config.overscan * 2}%`,
          height: `${100 + config.overscan * 2}%`,
          opacity: config.noiseOpacity,
          animation: `sn-anim ${config.duration}s steps(1) infinite`,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id={filterId}>
          <feTurbulence
            type="turbulence"
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
import type { BackgroundProps } from "@/types";

type VariantConfig = {
  spacing: number;
  radius: number;
  opacity: number;
  rotation: number;
};

const CONFIG = {
  hero: {
    spacing: 32,
    radius: 1.8,
    opacity: 0.38,
    rotation: 45,
  },

  preview: {
    spacing: 28,
    radius: 2.1,
    opacity: 0.50,
    rotation: 45,
  },

  thumbnail: {
    spacing: 24,
    radius: 2.6,
    opacity: 0.68,
    rotation: 45,
  },
} as const;

export default function DiamondDots({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const patternId = `diamond-dot-${variant}`;

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        style={{
          opacity: config.opacity,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            width={config.spacing}
            height={config.spacing}
            patternUnits="userSpaceOnUse"
            patternTransform={`rotate(${config.rotation})`}
          >
            <circle
              cx={config.spacing / 2}
              cy={config.spacing / 2}
              r={config.radius}
              fill="var(--color-bg-accent)"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill={`url(#${patternId})`}
        />
      </svg>
    </div>
  );
}
import type { BackgroundProps } from "@/types";

type VariantConfig = {
  spacing: number;
  lineOpacity: number;
  dotOpacity: number;
  dotSize: number;
  majorOpacity: number;
};

const CONFIG = {
  hero: {
    spacing: 96,
    lineOpacity: 0.12,
    dotOpacity: 0.22,
    dotSize: 2.5,
    majorOpacity: 0.08,
  },

  preview: {
    spacing: 80,
    lineOpacity: 0.16,
    dotOpacity: 0.28,
    dotSize: 2.2,
    majorOpacity: 0.10,
  },

  thumbnail: {
    spacing: 64,
    lineOpacity: 0.22,
    dotOpacity: 0.36,
    dotSize: 2,
    majorOpacity: 0.14,
  },
} as const;

export default function LargeGrid({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Large grid */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.lineOpacity,
          backgroundImage: `
            linear-gradient(var(--color-bg-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-bg-border) 1px, transparent 1px)
          `,
          backgroundSize: `${config.spacing}px ${config.spacing}px`,
        }}
      />

      {/* Intersection markers */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.dotOpacity,
          backgroundImage: `
            radial-gradient(
              circle,
              var(--color-bg-accent) ${config.dotSize}px,
              transparent ${config.dotSize}px
            )
          `,
          backgroundSize: `${config.spacing}px ${config.spacing}px`,
        }}
      />

      {/* Soft major-cell shading */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.majorOpacity,
          backgroundImage: `
            linear-gradient(
              90deg,
              transparent,
              transparent calc(${config.spacing}px - 1px),
              var(--color-bg-accent)
            )
          `,
          backgroundSize: `${config.spacing}px ${config.spacing}px`,
        }}
      />
    </div>
  );
}
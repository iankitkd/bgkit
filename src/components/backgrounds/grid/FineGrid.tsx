import type { BackgroundProps } from "@/types";

type VariantConfig = {
  spacing: number;
  lineOpacity: number;
  dotOpacity: number;
  dotSize: number;
};

const CONFIG = {
  hero: {
    spacing: 18,
    lineOpacity: 0.10,
    dotOpacity: 0.12,
    dotSize: 1,
  },

  preview: {
    spacing: 20,
    lineOpacity: 0.14,
    dotOpacity: 0.16,
    dotSize: 1.1,
  },

  thumbnail: {
    spacing: 24,
    lineOpacity: 0.18,
    dotOpacity: 0.22,
    dotSize: 1.3,
  },
} as const;

export default function FineGrid({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Fine grid */}

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

      {/* Grid intersections */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.dotOpacity,
          backgroundImage: `
            radial-gradient(
              circle,
              var(--color-bg-border) ${config.dotSize}px,
              transparent ${config.dotSize}px
            )
          `,
          backgroundSize: `${config.spacing}px ${config.spacing}px`,
        }}
      />
    </div>
  );
}
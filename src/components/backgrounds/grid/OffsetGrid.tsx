import type { BackgroundProps } from "@/types";

type VariantConfig = {
  spacing: number;
  offset: number;
  primaryOpacity: number;
  secondaryOpacity: number;
};

const CONFIG = {
  hero: {
    spacing: 44,
    offset: 22,
    primaryOpacity: 0.14,
    secondaryOpacity: 0.08,
  },

  preview: {
    spacing: 40,
    offset: 20,
    primaryOpacity: 0.18,
    secondaryOpacity: 0.12,
  },

  thumbnail: {
    spacing: 32,
    offset: 16,
    primaryOpacity: 0.24,
    secondaryOpacity: 0.18,
  },
} as const;

export default function OffsetGrid({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Primary grid */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.primaryOpacity,
          backgroundImage: `
            linear-gradient(var(--color-bg-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-bg-line) 1px, transparent 1px)
          `,
          backgroundSize: `${config.spacing}px ${config.spacing}px`,
        }}
      />

      {/* Offset grid */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.secondaryOpacity,
          backgroundImage: `
            linear-gradient(var(--color-bg-accent) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-bg-accent) 1px, transparent 1px)
          `,
          backgroundSize: `${config.spacing}px ${config.spacing}px`,
          backgroundPosition: `${config.offset}px ${config.offset}px`,
        }}
      />

      {/* Accent intersections */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.secondaryOpacity * 0.8,
          backgroundImage: `
            radial-gradient(
              circle,
              var(--color-bg-accent) 1.5px,
              transparent 1.5px
            )
          `,
          backgroundSize: `${config.spacing}px ${config.spacing}px`,
          backgroundPosition: `${config.offset}px ${config.offset}px`,
        }}
      />
    </div>
  );
}
import type { BackgroundProps } from "@/types";

type VariantConfig = {
  spacing: number;
  radius: number;
  opacity: number;
  secondaryOpacity: number;
};

const CONFIG = {
  hero: {
    spacing: 30,
    radius: 1.4,
    opacity: 0.32,
    secondaryOpacity: 0.10,
  },

  preview: {
    spacing: 24,
    radius: 1.7,
    opacity: 0.46,
    secondaryOpacity: 0.14,
  },

  thumbnail: {
    spacing: 20,
    radius: 2.2,
    opacity: 0.62,
    secondaryOpacity: 0.18,
  },
} as const;

export default function DotGrid({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Primary grid */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.opacity,
          backgroundImage: `
            radial-gradient(
              circle,
              var(--color-bg-accent) ${config.radius}px,
              transparent ${config.radius}px
            )
          `,
          backgroundSize: `${config.spacing}px ${config.spacing}px`,
        }}
      />

      {/* Offset grid for depth */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.secondaryOpacity,
          backgroundImage: `
            radial-gradient(
              circle,
              var(--color-bg-secondary) ${config.radius * 0.7}px,
              transparent ${config.radius * 0.7}px
            )
          `,
          backgroundSize: `${config.spacing}px ${config.spacing}px`,
          backgroundPosition: `${config.spacing / 2}px ${config.spacing / 2
            }px`,
        }}
      />

      {/* Soft vignette */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 55%, var(--color-bg-canvas) 100%)",
          opacity: variant === "hero" ? 0.18 : 0.08,
        }}
      />
    </div>
  );
}
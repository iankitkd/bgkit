import type { BackgroundProps } from "@/types";

type VariantConfig = {
  spacing: number;
  radius: number;
  opacity: number;
  secondaryOpacity: number;
};

const CONFIG = {
  hero: {
    spacing: 10,
    radius: 0.9,
    opacity: 0.22,
    secondaryOpacity: 0.08,
  },

  preview: {
    spacing: 12,
    radius: 1.1,
    opacity: 0.32,
    secondaryOpacity: 0.10,
  },

  thumbnail: {
    spacing: 14,
    radius: 1.4,
    opacity: 0.42,
    secondaryOpacity: 0.14,
  },
} as const;

export default function MicroDots({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Primary micro texture */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.opacity,
          backgroundImage: `
            radial-gradient(
              circle,
              var(--color-bg-foreground) ${config.radius}px,
              transparent ${config.radius}px
            )
          `,
          backgroundSize: `${config.spacing}px ${config.spacing}px`,
        }}
      />

      {/* Offset layer */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.secondaryOpacity,
          backgroundImage: `
            radial-gradient(
              circle,
              var(--color-bg-accent) ${config.radius * 0.55}px,
              transparent ${config.radius * 0.55}px
            )
          `,
          backgroundSize: `${config.spacing}px ${config.spacing}px`,
          backgroundPosition: `${config.spacing / 2}px ${config.spacing / 2
            }px`,
        }}
      />
    </div>
  );
}
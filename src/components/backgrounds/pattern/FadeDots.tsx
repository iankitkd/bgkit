import type { BackgroundProps } from "@/types";

type VariantConfig = {
  spacing: number;
  radius: number;
  opacity: number;
  secondaryOpacity: number;
  focus: string;
};

const CONFIG = {
  hero: {
    spacing: 28,
    radius: 1.5,
    opacity: 0.34,
    secondaryOpacity: 0.10,
    focus: "82% 78%",
  },

  preview: {
    spacing: 24,
    radius: 1.8,
    opacity: 0.46,
    secondaryOpacity: 0.14,
    focus: "76% 72%",
  },

  thumbnail: {
    spacing: 20,
    radius: 2.3,
    opacity: 0.62,
    secondaryOpacity: 0.18,
    focus: "70% 66%",
  },
} as const;

export default function FadeDots({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Primary dots */}

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

      {/* Offset dots */}

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

      {/* Edge fade */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse ${config.focus} at 50% 50%,
              transparent 18%,
              transparent 52%,
              var(--color-bg-canvas) 100%
            )
          `,
        }}
      />
    </div>
  );
}
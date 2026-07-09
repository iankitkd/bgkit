import type { BackgroundProps } from "@/types";

type VariantConfig = {
  largeSize: number;
  mediumSize: number;
  smallSize: number;

  largeDot: number;
  mediumDot: number;
  smallDot: number;

  largeOpacity: number;
  mediumOpacity: number;
  smallOpacity: number;

  fade: string;
};

const CONFIG = {
  hero: {
    largeSize: 52,
    mediumSize: 38,
    smallSize: 22,

    largeDot: 4.5,
    mediumDot: 2.8,
    smallDot: 1.6,

    largeOpacity: 0.28,
    mediumOpacity: 0.18,
    smallOpacity: 0.12,

    fade: "86%",
  },

  preview: {
    largeSize: 42,
    mediumSize: 32,
    smallSize: 20,

    largeDot: 4,
    mediumDot: 2.5,
    smallDot: 1.5,

    largeOpacity: 0.34,
    mediumOpacity: 0.22,
    smallOpacity: 0.14,

    fade: "82%",
  },

  thumbnail: {
    largeSize: 32,
    mediumSize: 24,
    smallSize: 16,

    largeDot: 4.5,
    mediumDot: 3,
    smallDot: 2,

    largeOpacity: 0.42,
    mediumOpacity: 0.28,
    smallOpacity: 0.18,

    fade: "76%",
  },
} as const;

export default function HalftoneDots({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Large dots */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.largeOpacity,
          backgroundImage: `
            radial-gradient(
              circle,
              var(--color-bg-foreground) ${config.largeDot}px,
              transparent ${config.largeDot}px
            )
          `,
          backgroundSize: `${config.largeSize}px ${config.largeSize}px`,
        }}
      />

      {/* Medium dots */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.mediumOpacity,
          backgroundImage: `
            radial-gradient(
              circle,
              var(--color-bg-foreground) ${config.mediumDot}px,
              transparent ${config.mediumDot}px
            )
          `,
          backgroundSize: `${config.mediumSize}px ${config.mediumSize}px`,
          backgroundPosition: `${config.mediumSize / 2}px ${config.mediumSize / 2
            }px`,
        }}
      />

      {/* Accent dots */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.smallOpacity,
          backgroundImage: `
            radial-gradient(
              circle,
              var(--color-bg-accent) ${config.smallDot}px,
              transparent ${config.smallDot}px
            )
          `,
          backgroundSize: `${config.smallSize}px ${config.smallSize}px`,
          backgroundPosition: `${config.smallSize / 2}px 0`,
        }}
      />

      {/* Soft vignette */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 22%,
              transparent 55%,
              var(--color-bg-canvas) ${config.fade}
            )
          `,
        }}
      />
    </div>
  );
}
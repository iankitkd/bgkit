import type { BackgroundProps } from "@/types";

type VariantConfig = {
  spacing: number;
  lineOpacity: number;
  dotOpacity: number;
  dotSize: number;
  glowOpacity: number;
  vignetteOpacity: number;
};

const CONFIG = {
  hero: {
    spacing: 56,
    lineOpacity: 0.10,
    dotOpacity: 0.45,
    dotSize: 2.6,
    glowOpacity: 0.14,
    vignetteOpacity: 0.18,
  },

  preview: {
    spacing: 48,
    lineOpacity: 0.14,
    dotOpacity: 0.56,
    dotSize: 2.4,
    glowOpacity: 0.18,
    vignetteOpacity: 0.14,
  },

  thumbnail: {
    spacing: 40,
    lineOpacity: 0.20,
    dotOpacity: 0.72,
    dotSize: 2.8,
    glowOpacity: 0.26,
    vignetteOpacity: 0.08,
  },
} as const;

export default function GlowGrid({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Grid */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.lineOpacity,
          backgroundImage: `
             linear-gradient(var(--color-bg-line) 1px, transparent 1px),
             linear-gradient(90deg, var(--color-bg-line) 1px, transparent 1px)
          `,
          backgroundSize: `${config.spacing}px ${config.spacing}px`,
        }}
      />

      {/* Glow dots */}

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

      {/* Ambient glow */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(
              circle at center,
              var(--color-bg-accent),
              transparent 60%
            )
          `,
          mixBlendMode: "screen",
        }}
      />

      {/* Edge vignette */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: config.vignetteOpacity,
          background:
            "radial-gradient(circle at center, transparent 50%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
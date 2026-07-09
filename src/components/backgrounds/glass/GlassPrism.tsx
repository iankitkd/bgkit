import type { BackgroundProps } from "@/types";

type VariantConfig = {
  prismOpacity: number;
  sheenOpacity: number;
  striaOpacity: number;
  glowOpacity: number;
  stripeSize: number;
};

const CONFIG = {
  hero: {
    prismOpacity: 0.22,
    sheenOpacity: 0.14,
    striaOpacity: 0.08,
    glowOpacity: 0.12,
    stripeSize: 42,
  },

  preview: {
    prismOpacity: 0.18,
    sheenOpacity: 0.11,
    striaOpacity: 0.07,
    glowOpacity: 0.09,
    stripeSize: 38,
  },

  thumbnail: {
    prismOpacity: 0.28,
    sheenOpacity: 0.18,
    striaOpacity: 0.14,
    glowOpacity: 0.16,
    stripeSize: 34,
  },
} as const satisfies Record<string, VariantConfig>;

export default function GlassPrism({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Prism colors */}
      <div
        className="absolute inset-0"
        style={{
          opacity: config.prismOpacity,
          background: `
            linear-gradient(
              128deg,
              var(--color-bg-accent) 0%,
              var(--color-bg-secondary) 20%,
              var(--color-bg-accent-3) 42%,
              var(--color-bg-accent-2) 66%,
              var(--color-bg-accent) 86%,
              var(--color-bg-secondary) 100%
            )
          `,
        }}
      />

      {/* Soft radial illumination */}
      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(
              circle at 25% 20%,
              var(--color-bg-foreground),
              transparent 40%
            )
          `,
          mixBlendMode: "screen",
        }}
      />

      {/* Glass striations */}
      <div
        className="absolute inset-0"
        style={{
          opacity: config.striaOpacity,
          backgroundImage: `
            repeating-linear-gradient(
              108deg,
              transparent,
              transparent ${config.stripeSize}px,
              var(--color-bg-foreground) ${config.stripeSize}px,
              var(--color-bg-foreground) ${config.stripeSize + 2}px
            )
          `,
        }}
      />

      {/* Specular highlight */}
      <div
        className="absolute inset-0"
        style={{
          opacity: config.sheenOpacity,
          background: `
            linear-gradient(
              135deg,
              var(--color-bg-foreground) 0%,
              rgba(255,255,255,.35) 12%,
              transparent 48%
            )
          `,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
import type { BackgroundProps } from "@/types";

type VariantConfig = {
  glowSize: string;
  glowOpacity: number;
  bloomBlur: number;
  vignetteOpacity: number;
};

const CONFIG = {
  hero: {
    glowSize: "78%",
    glowOpacity: 0.42,
    bloomBlur: 120,
    vignetteOpacity: 0.18,
  },
  preview: {
    glowSize: "72%",
    glowOpacity: 0.48,
    bloomBlur: 90,
    vignetteOpacity: 0.22,
  },
  thumbnail: {
    glowSize: "66%",
    glowOpacity: 0.56,
    bloomBlur: 60,
    vignetteOpacity: 0.28,
  },
} as const;

export default function RadialGlow({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Main radial gradient */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at center,
              var(--color-bg-secondary) 0%,
              var(--color-bg-accent) 42%,
              var(--color-bg-canvas) 100%
            )
          `,
        }}
      />

      {/* Soft bloom */}

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: config.glowSize,
          aspectRatio: "1",
          background: "var(--color-bg-foreground)",
          opacity: config.glowOpacity,
          filter: `blur(${config.bloomBlur}px)`,
        }}
      />

      {/* Inner color glow */}

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "42%",
          aspectRatio: "1",
          background: "var(--color-bg-accent-2)",
          opacity: config.glowOpacity * 0.45,
          filter: `blur(${config.bloomBlur * 0.8}px)`,
        }}
      />

      {/* Soft highlight */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 42%,
              rgb(from var(--color-bg-foreground) r g b / 0.18),
              transparent 55%
            )
          `,
        }}
      />

      {/* Edge vignette */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.vignetteOpacity,
          background:
            "radial-gradient(circle, transparent 48%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
import type { BackgroundProps } from "@/types";

type VariantConfig = {
  gridOpacity: number;
  glowOpacity: number;
  vignetteOpacity: number;
  majorOpacity: number;
};

const CONFIG = {
  hero: {
    gridOpacity: 0.16,
    majorOpacity: 0.24,
    glowOpacity: 0.08,
    vignetteOpacity: 0.92,
  },

  preview: {
    gridOpacity: 0.13,
    majorOpacity: 0.20,
    glowOpacity: 0.06,
    vignetteOpacity: 0.94,
  },

  thumbnail: {
    gridOpacity: 0.24,
    majorOpacity: 0.32,
    glowOpacity: 0.12,
    vignetteOpacity: 0.86,
  },
} as const;

export default function VignetteGrid({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Fine grid */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.gridOpacity,
          backgroundImage: `
            linear-gradient(var(--color-bg-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-bg-line) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",

          // fade towards every edge
          maskImage:
            "radial-gradient(circle at center, black 22%, rgba(0,0,0,.95) 42%, rgba(0,0,0,.55) 65%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 22%, rgba(0,0,0,.95) 42%, rgba(0,0,0,.55) 65%, transparent 100%)",
        }}
      />

      {/* Major grid */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.majorOpacity,
          backgroundImage: `
            linear-gradient(var(--color-bg-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-bg-line) 1px, transparent 1px)
          `,
          backgroundSize: "140px 140px",

          maskImage:
            "radial-gradient(circle at center, black 18%, rgba(0,0,0,.95) 45%, rgba(0,0,0,.5) 68%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 18%, rgba(0,0,0,.95) 45%, rgba(0,0,0,.5) 68%, transparent 100%)",
        }}
      />

      {/* Center glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(
              circle at center,
              var(--color-bg-accent) 0%,
              transparent 40%
            ),
            radial-gradient(
              circle at center,
              var(--color-bg-secondary) 0%,
              transparent 65%
            )
          `,
          filter: "blur(70px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Edge vignette */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.vignetteOpacity,
          background: `
            radial-gradient(
              circle at center,
              transparent 45%,
              rgba(6,8,13,.08) 65%,
              rgba(6,8,13,.35) 82%,
              var(--color-bg-canvas) 100%
            )
          `,
        }}
      />
    </div>
  );
}
import type { BackgroundProps } from "@/types";

type VariantConfig = {
  dotOpacity: number;
  glowOpacity: number;
  vignetteOpacity: number;
};

const CONFIG = {
  hero: {
    dotOpacity: 0.26,
    glowOpacity: 0.08,
    vignetteOpacity: 0.9,
  },

  preview: {
    dotOpacity: 0.22,
    glowOpacity: 0.06,
    vignetteOpacity: 0.92,
  },

  thumbnail: {
    dotOpacity: 0.36,
    glowOpacity: 0.12,
    vignetteOpacity: 0.84,
  },
} as const;

export default function VignetteDots({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Dot pattern */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.dotOpacity,
          backgroundImage: `
            radial-gradient(
              circle,
              var(--color-bg-line) 1.2px,
              transparent 1.2px
            )
          `,
          backgroundSize: "24px 24px",

          maskImage:
            "radial-gradient(circle at center, black 24%, rgba(0,0,0,.95) 46%, rgba(0,0,0,.55) 68%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 24%, rgba(0,0,0,.95) 46%, rgba(0,0,0,.55) 68%, transparent 100%)",
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
              transparent 42%
            ),
            radial-gradient(
              circle at center,
              var(--color-bg-secondary) 0%,
              transparent 70%
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
              transparent 48%,
              rgba(6,8,13,.06) 68%,
              rgba(6,8,13,.28) 84%,
              var(--color-bg-canvas) 100%
            )
          `,
        }}
      />
    </div>
  );
}
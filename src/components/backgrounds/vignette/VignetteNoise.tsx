import type { BackgroundProps } from "@/types";

type VariantConfig = {
  noiseOpacity: number;
  glowOpacity: number;
  vignetteOpacity: number;
};

const CONFIG = {
  hero: {
    noiseOpacity: 0.16,
    glowOpacity: 0.06,
    vignetteOpacity: 0.92,
  },

  preview: {
    noiseOpacity: 0.13,
    glowOpacity: 0.05,
    vignetteOpacity: 0.94,
  },

  thumbnail: {
    noiseOpacity: 0.22,
    glowOpacity: 0.1,
    vignetteOpacity: 0.86,
  },
} as const;

export default function VignetteNoise({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Noise */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.noiseOpacity,
          backgroundImage: `
url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E")
          `,
          backgroundSize: "220px 220px",

          maskImage:
            "radial-gradient(circle at center, black 28%, rgba(0,0,0,.96) 52%, rgba(0,0,0,.55) 74%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 28%, rgba(0,0,0,.96) 52%, rgba(0,0,0,.55) 74%, transparent 100%)",
        }}
      />

      {/* Ambient glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(
              circle at center,
              var(--color-bg-accent) 0%,
              transparent 38%
            ),

            radial-gradient(
              circle at center,
              var(--color-bg-secondary) 0%,
              transparent 62%
            )
          `,
          filter: "blur(90px)",
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
              transparent 56%,
              rgba(0,0,0,.12) 74%,
              rgba(0,0,0,.35) 88%,
              var(--color-bg-canvas) 100%
            )
          `,
        }}
      />
    </div>
  );
}
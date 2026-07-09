import type { BackgroundProps } from "@/types";

type VariantConfig = {
  bandOpacity: number;
  highlightOpacity: number;
  vignetteOpacity: number;
};

const CONFIG = {
  hero: {
    bandOpacity: 0.22,
    highlightOpacity: 0.12,
    vignetteOpacity: 0.16,
  },
  preview: {
    bandOpacity: 0.28,
    highlightOpacity: 0.15,
    vignetteOpacity: 0.20,
  },
  thumbnail: {
    bandOpacity: 0.36,
    highlightOpacity: 0.20,
    vignetteOpacity: 0.28,
  },
} as const;

export default function DiagonalGradient({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `
          linear-gradient(
            145deg,
            var(--color-bg-canvas) 0%,
            var(--color-bg-accent) 35%,
            var(--color-bg-secondary) 100%
          )
        `,
      }}
    >
      {/* Broad diagonal light band */}

      <div
        className="absolute left-[-35%] top-[-20%] h-[170%] w-[40%]"
        style={{
          transform: "rotate(-28deg)",
          background:
            "linear-gradient(to right, transparent, var(--color-bg-foreground), transparent)",
          opacity: config.bandOpacity,
          filter: "blur(70px)",
        }}
      />

      {/* Secondary accent band */}

      <div
        className="absolute left-[55%] top-[-20%] h-[170%] w-[28%]"
        style={{
          transform: "rotate(-28deg)",
          background:
            "linear-gradient(to right, transparent, var(--color-bg-accent-2), transparent)",
          opacity: config.bandOpacity * 0.75,
          filter: "blur(90px)",
        }}
      />

      {/* Directional highlight */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.highlightOpacity,
          background: `
            linear-gradient(
              315deg,
              var(--color-bg-foreground) 0%,
              transparent 40%
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
            "radial-gradient(circle, transparent 45%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
import type { BackgroundProps } from "@/types";

type VariantConfig = {
  glowOpacity: number;
  blur: number;
  vignette: number;
};

const CONFIG = {
  hero: {
    glowOpacity: 0.46,
    blur: 120,
    vignette: 0.16,
  },
  preview: {
    glowOpacity: 0.54,
    blur: 90,
    vignette: 0.20,
  },
  thumbnail: {
    glowOpacity: 0.62,
    blur: 60,
    vignette: 0.28,
  },
} as const;

export default function CornerRadial({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Main corner gradient */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 0% 0%,
              var(--color-bg-secondary) 0%,
              var(--color-bg-accent) 35%,
              var(--color-bg-canvas) 100%
            )
          `,
        }}
      />

      {/* Corner bloom */}

      <div
        className="absolute rounded-full"
        style={{
          left: "-22%",
          top: "-22%",
          width: "70%",
          aspectRatio: "1",
          background: "var(--color-bg-foreground)",
          opacity: config.glowOpacity,
          filter: `blur(${config.blur}px)`,
        }}
      />

      {/* Secondary colored glow */}

      <div
        className="absolute rounded-full"
        style={{
          left: "-10%",
          top: "-10%",
          width: "44%",
          aspectRatio: "1",
          background: "var(--color-bg-accent-2)",
          opacity: config.glowOpacity * 0.4,
          filter: `blur(${config.blur * 0.75}px)`,
        }}
      />

      {/* Opposite corner balance */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 100% 100%,
              rgb(from var(--color-bg-secondary) r g b / 0.08),
              transparent 55%
            )
          `,
        }}
      />

      {/* Edge vignette */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.vignette,
          background:
            "radial-gradient(circle, transparent 40%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
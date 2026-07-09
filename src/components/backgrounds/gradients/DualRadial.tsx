import type { BackgroundProps } from "@/types";

type VariantConfig = {
  glowOpacity: number;
  blur: number;
  vignette: number;
};

const CONFIG = {
  hero: {
    glowOpacity: 0.42,
    blur: 120,
    vignette: 0.18,
  },
  preview: {
    glowOpacity: 0.48,
    blur: 90,
    vignette: 0.22,
  },
  thumbnail: {
    glowOpacity: 0.56,
    blur: 60,
    vignette: 0.28,
  },
} as const;

export default function DualRadial({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Left glow */}

      <div
        className="absolute rounded-full"
        style={{
          left: "-8%",
          top: "8%",
          width: "52%",
          aspectRatio: "1",
          background: "var(--color-bg-accent)",
          opacity: config.glowOpacity,
          filter: `blur(${config.blur}px)`,
        }}
      />

      {/* Right glow */}

      <div
        className="absolute rounded-full"
        style={{
          right: "-8%",
          bottom: "8%",
          width: "52%",
          aspectRatio: "1",
          background: "var(--color-bg-secondary)",
          opacity: config.glowOpacity,
          filter: `blur(${config.blur}px)`,
        }}
      />

      {/* Overlap glow */}

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "36%",
          aspectRatio: "1",
          background: "var(--color-bg-accent-2)",
          opacity: config.glowOpacity * 0.45,
          filter: `blur(${config.blur * 0.7}px)`,
        }}
      />

      {/* Ambient illumination */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgb(from var(--color-bg-foreground) r g b / 0.10),
              transparent 65%
            )
          `,
        }}
      />

      {/* Soft vignette */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.vignette,
          background:
            "radial-gradient(circle, transparent 45%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
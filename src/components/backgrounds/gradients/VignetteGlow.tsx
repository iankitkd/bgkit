import type { BackgroundProps } from "@/types";

type VariantConfig = {
  centerOpacity: number;
  edgeOpacity: number;
  blur: number;
};

const CONFIG = {
  hero: {
    centerOpacity: 0.18,
    edgeOpacity: 0.55,
    blur: 120,
  },
  preview: {
    centerOpacity: 0.22,
    edgeOpacity: 0.62,
    blur: 95,
  },
  thumbnail: {
    centerOpacity: 0.28,
    edgeOpacity: 0.72,
    blur: 70,
  },
} as const;

export default function VignetteGlow({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Ambient base */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at center,
              var(--color-bg-accent) 0%,
              var(--color-bg-secondary) 45%,
              var(--color-bg-canvas) 100%
            )
          `,
        }}
      />

      {/* Soft center bloom */}

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "46%",
          aspectRatio: "1",
          background: "var(--color-bg-foreground)",
          opacity: config.centerOpacity,
          filter: `blur(${config.blur}px)`,
        }}
      />

      {/* Accent bloom */}

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "24%",
          aspectRatio: "1",
          background: "var(--color-bg-accent-2)",
          opacity: config.centerOpacity * 0.6,
          filter: `blur(${config.blur * 0.7}px)`,
        }}
      />

      {/* Strong vignette */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              transparent 25%,
              rgb(from var(--color-bg-canvas) r g b / 0.15) 50%,
              rgb(from var(--color-bg-canvas) r g b / ${config.edgeOpacity}) 100%
            )
          `,
        }}
      />

      {/* Soft top lighting */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgb(from var(--color-bg-foreground) r g b / 0.08), transparent 35%)",
        }}
      />
    </div>
  );
}
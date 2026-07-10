import type { BackgroundProps } from "@/types";

type VariantConfig = {
  blobOpacity: readonly [number, number, number, number];
  blur: number;
  glowOpacity: number;
};

const CONFIG = {
  hero: {
    blobOpacity: [0.18, 0.14, 0.12, 0.1],
    blur: 90,
    glowOpacity: 0.08,
  },

  preview: {
    blobOpacity: [0.15, 0.12, 0.1, 0.08],
    blur: 70,
    glowOpacity: 0.06,
  },

  thumbnail: {
    blobOpacity: [0.26, 0.22, 0.18, 0.16],
    blur: 55,
    glowOpacity: 0.12,
  },
} as const;

const BLOBS = [
  {
    left: "-8%",
    top: "-6%",
    width: "34%",
    height: "42%",
    color: "var(--color-bg-accent)",
    radius: "42% 58% 60% 40% / 45% 38% 62% 55%",
  },

  {
    right: "-10%",
    top: "8%",
    width: "38%",
    height: "46%",
    color: "var(--color-bg-secondary)",
    radius: "60% 40% 48% 52% / 50% 58% 42% 50%",
  },

  {
    left: "24%",
    bottom: "-14%",
    width: "42%",
    height: "44%",
    color: "var(--color-bg-accent-2)",
    radius: "55% 45% 40% 60% / 48% 60% 40% 52%",
  },

  {
    right: "8%",
    bottom: "-18%",
    width: "28%",
    height: "34%",
    color: "var(--color-bg-accent-3)",
    radius: "46% 54% 62% 38% / 56% 40% 60% 44%",
  },
] as const;

export default function LiquidBlobs({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            ...blob,
            opacity: config.blobOpacity[i],
            filter: `blur(${config.blur}px)`,
            borderRadius: blob.radius,
            background: blob.color,
            mixBlendMode: "screen",
          }}
        />
      ))}

      {/* Central bloom */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(
              circle at 50% 45%,
              var(--color-bg-foreground) 0%,
              transparent 32%
            )
          `,
          filter: "blur(80px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Soft vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 55%, rgba(0,0,0,.22) 100%)",
        }}
      />
    </div>
  );
}
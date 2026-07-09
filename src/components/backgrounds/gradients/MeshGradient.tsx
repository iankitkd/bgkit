import type { BackgroundProps } from "@/types";

type Blob = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width: string;
  height: string;
  color: string;
  opacity: number;
};

type VariantConfig = {
  blur: number;
  blobs: readonly Blob[];
};

const CONFIG: Record<string, VariantConfig> = {
  hero: {
    blur: 140,
    blobs: [
      {
        top: "-10%",
        left: "-8%",
        width: "48%",
        height: "48%",
        color: "var(--color-bg-accent)",
        opacity: 0.38,
      },
      {
        top: "8%",
        right: "-8%",
        width: "44%",
        height: "44%",
        color: "var(--color-bg-secondary)",
        opacity: 0.34,
      },
      {
        bottom: "-12%",
        left: "20%",
        width: "52%",
        height: "52%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.30,
      },
      {
        bottom: "10%",
        right: "10%",
        width: "36%",
        height: "36%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.22,
      },
    ],
  },

  preview: {
    blur: 110,
    blobs: [
      {
        top: "-10%",
        left: "-8%",
        width: "48%",
        height: "48%",
        color: "var(--color-bg-accent)",
        opacity: 0.44,
      },
      {
        top: "8%",
        right: "-8%",
        width: "44%",
        height: "44%",
        color: "var(--color-bg-secondary)",
        opacity: 0.40,
      },
      {
        bottom: "-12%",
        left: "20%",
        width: "52%",
        height: "52%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.34,
      },
      {
        bottom: "10%",
        right: "10%",
        width: "36%",
        height: "36%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.26,
      },
    ],
  },

  thumbnail: {
    blur: 80,
    blobs: [
      {
        top: "-10%",
        left: "-8%",
        width: "48%",
        height: "48%",
        color: "var(--color-bg-accent)",
        opacity: 0.52,
      },
      {
        top: "8%",
        right: "-8%",
        width: "44%",
        height: "44%",
        color: "var(--color-bg-secondary)",
        opacity: 0.48,
      },
      {
        bottom: "-12%",
        left: "20%",
        width: "52%",
        height: "52%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.42,
      },
      {
        bottom: "10%",
        right: "10%",
        width: "36%",
        height: "36%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.34,
      },
    ],
  },
} as const;

export default function MeshGradient({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {config.blobs.map((blob, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            top: blob.top,
            bottom: blob.bottom,
            left: blob.left,
            right: blob.right,
            width: blob.width,
            height: blob.height,
            background: blob.color,
            opacity: blob.opacity,
            filter: `blur(${config.blur}px)`,
          }}
        />
      ))}

      {/* Gentle center illumination */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgb(from var(--color-bg-foreground) r g b / 0.08), transparent 60%)",
        }}
      />

      {/* Soft vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 45%, var(--color-bg-canvas) 100%)",
          opacity: 0.18,
        }}
      />
    </div>
  );
}
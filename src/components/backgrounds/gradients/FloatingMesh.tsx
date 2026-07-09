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
    blur: 100,
    blobs: [
      {
        top: "8%",
        left: "6%",
        width: "24%",
        height: "30%",
        color: "var(--color-bg-accent)",
        opacity: 0.46,
      },
      {
        top: "14%",
        right: "8%",
        width: "20%",
        height: "26%",
        color: "var(--color-bg-secondary)",
        opacity: 0.42,
      },
      {
        top: "42%",
        left: "38%",
        width: "18%",
        height: "24%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.36,
      },
      {
        bottom: "10%",
        left: "12%",
        width: "22%",
        height: "28%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.32,
      },
      {
        bottom: "6%",
        right: "10%",
        width: "26%",
        height: "32%",
        color: "var(--color-bg-accent)",
        opacity: 0.34,
      },
    ],
  },

  preview: {
    blur: 80,
    blobs: [
      {
        top: "8%",
        left: "6%",
        width: "24%",
        height: "30%",
        color: "var(--color-bg-accent)",
        opacity: 0.54,
      },
      {
        top: "14%",
        right: "8%",
        width: "20%",
        height: "26%",
        color: "var(--color-bg-secondary)",
        opacity: 0.50,
      },
      {
        top: "42%",
        left: "38%",
        width: "18%",
        height: "24%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.42,
      },
      {
        bottom: "10%",
        left: "12%",
        width: "22%",
        height: "28%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.38,
      },
      {
        bottom: "6%",
        right: "10%",
        width: "26%",
        height: "32%",
        color: "var(--color-bg-accent)",
        opacity: 0.40,
      },
    ],
  },

  thumbnail: {
    blur: 55,
    blobs: [
      {
        top: "8%",
        left: "6%",
        width: "24%",
        height: "30%",
        color: "var(--color-bg-accent)",
        opacity: 0.62,
      },
      {
        top: "14%",
        right: "8%",
        width: "20%",
        height: "26%",
        color: "var(--color-bg-secondary)",
        opacity: 0.58,
      },
      {
        top: "42%",
        left: "38%",
        width: "18%",
        height: "24%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.50,
      },
      {
        bottom: "10%",
        left: "12%",
        width: "22%",
        height: "28%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.46,
      },
      {
        bottom: "6%",
        right: "10%",
        width: "26%",
        height: "32%",
        color: "var(--color-bg-accent)",
        opacity: 0.48,
      },
    ],
  },
} as const;

export default function FloatingMesh({
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

      {/* Subtle ambient light */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgb(from var(--color-bg-foreground) r g b / 0.05), transparent 60%)",
        }}
      />

      {/* Soft edge fade */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 50%, var(--color-bg-canvas) 100%)",
          opacity: 0.18,
        }}
      />
    </div>
  );
}
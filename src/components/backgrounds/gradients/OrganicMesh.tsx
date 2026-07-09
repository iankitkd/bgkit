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
    blur: 150,
    blobs: [
      {
        top: "-18%",
        left: "-10%",
        width: "54%",
        height: "62%",
        color: "var(--color-bg-accent)",
        opacity: 0.42,
      },
      {
        top: "10%",
        left: "28%",
        width: "36%",
        height: "44%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.34,
      },
      {
        bottom: "-12%",
        right: "-10%",
        width: "60%",
        height: "66%",
        color: "var(--color-bg-secondary)",
        opacity: 0.38,
      },
      {
        bottom: "12%",
        left: "12%",
        width: "30%",
        height: "34%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.24,
      },
      {
        top: "30%",
        right: "18%",
        width: "26%",
        height: "30%",
        color: "var(--color-bg-foreground)",
        opacity: 0.08,
      },
    ],
  },

  preview: {
    blur: 120,
    blobs: [
      {
        top: "-18%",
        left: "-10%",
        width: "54%",
        height: "62%",
        color: "var(--color-bg-accent)",
        opacity: 0.48,
      },
      {
        top: "10%",
        left: "28%",
        width: "36%",
        height: "44%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.40,
      },
      {
        bottom: "-12%",
        right: "-10%",
        width: "60%",
        height: "66%",
        color: "var(--color-bg-secondary)",
        opacity: 0.44,
      },
      {
        bottom: "12%",
        left: "12%",
        width: "30%",
        height: "34%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.30,
      },
      {
        top: "30%",
        right: "18%",
        width: "26%",
        height: "30%",
        color: "var(--color-bg-foreground)",
        opacity: 0.10,
      },
    ],
  },

  thumbnail: {
    blur: 90,
    blobs: [
      {
        top: "-18%",
        left: "-10%",
        width: "54%",
        height: "62%",
        color: "var(--color-bg-accent)",
        opacity: 0.56,
      },
      {
        top: "10%",
        left: "28%",
        width: "36%",
        height: "44%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.48,
      },
      {
        bottom: "-12%",
        right: "-10%",
        width: "60%",
        height: "66%",
        color: "var(--color-bg-secondary)",
        opacity: 0.50,
      },
      {
        bottom: "12%",
        left: "12%",
        width: "30%",
        height: "34%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.36,
      },
      {
        top: "30%",
        right: "18%",
        width: "26%",
        height: "30%",
        color: "var(--color-bg-foreground)",
        opacity: 0.14,
      },
    ],
  },
} as const;

export default function OrganicMesh({
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

      {/* Organic center glow */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at 42% 46%,
              rgb(from var(--color-bg-foreground) r g b / 0.08),
              transparent 55%
            )
          `,
        }}
      />

      {/* Soft vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 42%, var(--color-bg-canvas) 100%)",
          opacity: 0.16,
        }}
      />
    </div>
  );
}
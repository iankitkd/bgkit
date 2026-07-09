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
  glassBlur: number;
  borderOpacity: number;
  blobs: readonly Blob[];
};

const CONFIG: Record<string, VariantConfig> = {
  hero: {
    blur: 130,
    glassBlur: 18,
    borderOpacity: 0.28,
    blobs: [
      {
        top: "-10%",
        left: "-6%",
        width: "46%",
        height: "52%",
        color: "var(--color-bg-accent)",
        opacity: 0.34,
      },
      {
        top: "8%",
        right: "-10%",
        width: "42%",
        height: "48%",
        color: "var(--color-bg-secondary)",
        opacity: 0.30,
      },
      {
        bottom: "-14%",
        left: "18%",
        width: "54%",
        height: "56%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.28,
      },
      {
        bottom: "8%",
        right: "8%",
        width: "34%",
        height: "36%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.22,
      },
    ],
  },

  preview: {
    blur: 100,
    glassBlur: 14,
    borderOpacity: 0.34,
    blobs: [
      {
        top: "-10%",
        left: "-6%",
        width: "46%",
        height: "52%",
        color: "var(--color-bg-accent)",
        opacity: 0.42,
      },
      {
        top: "8%",
        right: "-10%",
        width: "42%",
        height: "48%",
        color: "var(--color-bg-secondary)",
        opacity: 0.38,
      },
      {
        bottom: "-14%",
        left: "18%",
        width: "54%",
        height: "56%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.34,
      },
      {
        bottom: "8%",
        right: "8%",
        width: "34%",
        height: "36%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.28,
      },
    ],
  },

  thumbnail: {
    blur: 70,
    glassBlur: 10,
    borderOpacity: 0.42,
    blobs: [
      {
        top: "-10%",
        left: "-6%",
        width: "46%",
        height: "52%",
        color: "var(--color-bg-accent)",
        opacity: 0.50,
      },
      {
        top: "8%",
        right: "-10%",
        width: "42%",
        height: "48%",
        color: "var(--color-bg-secondary)",
        opacity: 0.46,
      },
      {
        bottom: "-14%",
        left: "18%",
        width: "54%",
        height: "56%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.40,
      },
      {
        bottom: "8%",
        right: "8%",
        width: "34%",
        height: "36%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.34,
      },
    ],
  },
} as const;

export default function GlassMesh({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Background mesh */}

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

      {/* Frosted glass layer */}

      <div
        className="absolute inset-[10%] rounded-[32px]"
        style={{
          backdropFilter: `blur(${config.glassBlur}px)`,
          WebkitBackdropFilter: `blur(${config.glassBlur}px)`,

          background:
            "linear-gradient(135deg, rgb(from var(--color-bg-foreground) r g b / 0.08), rgb(from var(--color-bg-canvas) r g b / 0.12))",

          border: `1px solid rgb(from var(--color-bg-border) r g b / ${config.borderOpacity})`,
        }}
      />

      {/* Glass reflection */}

      <div
        className="absolute inset-[10%] rounded-[32px]"
        style={{
          background:
            "linear-gradient(135deg, rgb(from var(--color-bg-foreground) r g b / 0.14), transparent 38%)",
        }}
      />

      {/* Ambient light */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgb(from var(--color-bg-foreground) r g b / 0.05), transparent 60%)",
        }}
      />

      {/* Vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 48%, var(--color-bg-canvas) 100%)",
          opacity: 0.18,
        }}
      />
    </div>
  );
}
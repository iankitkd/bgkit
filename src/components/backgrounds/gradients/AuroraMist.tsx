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
  mistOpacity: number;
  blobs: readonly Blob[];
};

const CONFIG: Record<string, VariantConfig> = {
  hero: {
    blur: 180,
    mistOpacity: 0.18,
    blobs: [
      {
        top: "-18%",
        left: "-12%",
        width: "58%",
        height: "62%",
        color: "var(--color-bg-accent)",
        opacity: 0.26,
      },
      {
        top: "8%",
        right: "-10%",
        width: "54%",
        height: "56%",
        color: "var(--color-bg-secondary)",
        opacity: 0.24,
      },
      {
        bottom: "-14%",
        left: "18%",
        width: "60%",
        height: "60%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.22,
      },
      {
        top: "34%",
        left: "42%",
        width: "34%",
        height: "30%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.18,
      },
    ],
  },

  preview: {
    blur: 140,
    mistOpacity: 0.24,
    blobs: [
      {
        top: "-18%",
        left: "-12%",
        width: "58%",
        height: "62%",
        color: "var(--color-bg-accent)",
        opacity: 0.34,
      },
      {
        top: "8%",
        right: "-10%",
        width: "54%",
        height: "56%",
        color: "var(--color-bg-secondary)",
        opacity: 0.30,
      },
      {
        bottom: "-14%",
        left: "18%",
        width: "60%",
        height: "60%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.28,
      },
      {
        top: "34%",
        left: "42%",
        width: "34%",
        height: "30%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.22,
      },
    ],
  },

  thumbnail: {
    blur: 100,
    mistOpacity: 0.32,
    blobs: [
      {
        top: "-18%",
        left: "-12%",
        width: "58%",
        height: "62%",
        color: "var(--color-bg-accent)",
        opacity: 0.42,
      },
      {
        top: "8%",
        right: "-10%",
        width: "54%",
        height: "56%",
        color: "var(--color-bg-secondary)",
        opacity: 0.38,
      },
      {
        bottom: "-14%",
        left: "18%",
        width: "60%",
        height: "60%",
        color: "var(--color-bg-accent-3)",
        opacity: 0.34,
      },
      {
        top: "34%",
        left: "42%",
        width: "34%",
        height: "30%",
        color: "var(--color-bg-accent-2)",
        opacity: 0.28,
      },
    ],
  },
} as const;

export default function AuroraMist({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Atmospheric mist clouds */}

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

      {/* Ambient atmospheric haze */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at 50% 40%,
              rgb(from var(--color-bg-foreground) r g b / ${config.mistOpacity}),
              transparent 70%
            )
          `,
        }}
      />

      {/* Sky illumination */}

      <div
        className="absolute inset-x-0 top-0 h-[45%]"
        style={{
          background:
            "linear-gradient(to bottom, rgb(from var(--color-bg-foreground) r g b / 0.08), transparent)",
        }}
      />

      {/* Soft vignette */}

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
import type { BackgroundProps } from "@/types";

type BlobConfig = {
  top?: string; bottom?: string;
  left?: string; right?: string;
  width: string; height: string;
  opacity: number; blur: number;
  color: string;
};

type VariantConfig = {
  inset: string;
  panelBlur: number;
  borderOpacity: number;
  blobs: readonly BlobConfig[];
};

const CONFIG = {
  hero: {
    inset: "10%",
    panelBlur: 28,
    borderOpacity: 0.5,

    blobs: [
      {
        top: "6%",
        left: "6%",
        width: "42%",
        height: "60%",
        opacity: 0.48,
        blur: 120,
        color: "bg-bg-accent",
      },
      {
        bottom: "6%",
        right: "6%",
        width: "46%",
        height: "64%",
        opacity: 0.4,
        blur: 140,
        color: "bg-bg-secondary",
      },
      {
        top: "40%",
        right: "24%",
        width: "36%",
        height: "52%",
        opacity: 0.32,
        blur: 110,
        color: "bg-bg-accent-2",
      },
    ],
  },

  preview: {
    inset: "11%",
    panelBlur: 24,
    borderOpacity: 0.5,

    blobs: [
      {
        top: "8%",
        left: "8%",
        width: "40%",
        height: "56%",
        opacity: 0.45,
        blur: 90,
        color: "bg-bg-accent",
      },
      {
        bottom: "8%",
        right: "8%",
        width: "44%",
        height: "60%",
        opacity: 0.38,
        blur: 100,
        color: "bg-bg-secondary",
      },
      {
        top: "42%",
        right: "28%",
        width: "32%",
        height: "48%",
        opacity: 0.28,
        blur: 85,
        color: "bg-bg-accent-2",
      },
    ],
  },

  thumbnail: {
    inset: "12%",
    panelBlur: 18,
    borderOpacity: 0.45,

    blobs: [
      {
        top: "10%",
        left: "10%",
        width: "46%",
        height: "62%",
        opacity: 0.5,
        blur: 65,
        color: "bg-bg-accent",
      },
      {
        bottom: "10%",
        right: "10%",
        width: "50%",
        height: "66%",
        opacity: 0.42,
        blur: 70,
        color: "bg-bg-secondary",
      },
      {
        top: "44%",
        right: "24%",
        width: "36%",
        height: "50%",
        opacity: 0.32,
        blur: 60,
        color: "bg-bg-accent-2",
      },
    ],
  },
} satisfies Record<string, VariantConfig>;

export default function GlassBlur({ variant = "hero" }: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {config.blobs.map((blob, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${blob.color}`}
          style={{
            ...blob,
            filter: `blur(${blob.blur}px)`,
          }}
        />
      ))}

      <div
        className="absolute rounded-3xl border border-bg-border"
        style={{
          inset: config.inset,
          opacity: 0.7,
          borderColor: `rgb(from var(--color-bg-border) r g b / ${config.borderOpacity})`,
          background:
            "linear-gradient(135deg, var(--color-bg-canvas), transparent 80%)",
          backdropFilter: `blur(${config.panelBlur}px)`,
          WebkitBackdropFilter: `blur(${config.panelBlur}px)`,
        }}
      />
    </div>
  );
}
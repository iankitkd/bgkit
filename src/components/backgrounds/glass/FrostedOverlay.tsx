import type { BackgroundProps } from "@/types";

type BlobConfig = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width: string;
  height: string;
  opacity: number;
  blur: number;
  color: string;
};

type VariantConfig = {
  overlayBlur: number;
  overlayOpacity: number;
  highlightOpacity: number;
  vignetteOpacity: number;
  blobs: readonly BlobConfig[];
};

const CONFIG: Record<string, VariantConfig> = {
  hero: {
    overlayBlur: 28,
    overlayOpacity: 0.68,
    highlightOpacity: 0.12,
    vignetteOpacity: 0.12,

    blobs: [
      {
        top: "2%",
        left: "2%",
        width: "48%",
        height: "68%",
        opacity: 0.55,
        blur: 130,
        color: "bg-bg-accent",
      },
      {
        bottom: "2%",
        right: "2%",
        width: "54%",
        height: "72%",
        opacity: 0.46,
        blur: 130,
        color: "bg-bg-secondary",
      },
      {
        top: "36%",
        right: "18%",
        width: "34%",
        height: "48%",
        opacity: 0.28,
        blur: 95,
        color: "bg-bg-accent-2",
      },
      {
        bottom: "20%",
        left: "20%",
        width: "30%",
        height: "42%",
        opacity: 0.22,
        blur: 90,
        color: "bg-bg-accent-3",
      },
    ],
  },

  preview: {
    overlayBlur: 22,
    overlayOpacity: 0.68,
    highlightOpacity: 0.10,
    vignetteOpacity: 0.10,

    blobs: [
      {
        top: "2%",
        left: "2%",
        width: "48%",
        height: "68%",
        opacity: 0.55,
        blur: 90,
        color: "bg-bg-accent",
      },
      {
        bottom: "2%",
        right: "2%",
        width: "54%",
        height: "72%",
        opacity: 0.46,
        blur: 90,
        color: "bg-bg-secondary",
      },
      {
        top: "36%",
        right: "18%",
        width: "34%",
        height: "48%",
        opacity: 0.28,
        blur: 70,
        color: "bg-bg-accent-2",
      },
      {
        bottom: "20%",
        left: "20%",
        width: "30%",
        height: "42%",
        opacity: 0.22,
        blur: 65,
        color: "bg-bg-accent-3",
      },
    ],
  },

  thumbnail: {
    overlayBlur: 14,
    overlayOpacity: 0.72,
    highlightOpacity: 0.18,
    vignetteOpacity: 0.16,

    blobs: [
      {
        top: "4%",
        left: "4%",
        width: "54%",
        height: "72%",
        opacity: 0.62,
        blur: 55,
        color: "bg-bg-accent",
      },
      {
        bottom: "4%",
        right: "4%",
        width: "58%",
        height: "74%",
        opacity: 0.54,
        blur: 55,
        color: "bg-bg-secondary",
      },
      {
        top: "34%",
        right: "18%",
        width: "36%",
        height: "48%",
        opacity: 0.32,
        blur: 42,
        color: "bg-bg-accent-2",
      },
    ],
  },
} as const;

export default function FrostedOverlay({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {config.blobs.map((blob, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${blob.color}`}
          style={{
            top: blob.top,
            bottom: blob.bottom,
            left: blob.left,
            right: blob.right,
            width: blob.width,
            height: blob.height,
            opacity: blob.opacity,
            filter: `blur(${blob.blur}px)`,
          }}
        />
      ))}

      {/* Frosted glass */}
      <div
        className="absolute inset-0"
        style={{
          opacity: config.overlayOpacity,
          background:
            "linear-gradient(180deg, rgba(255,255,255,.08), transparent 28%, var(--color-bg-canvas) 100%)",
          backdropFilter: `blur(${config.overlayBlur}px)`,
          WebkitBackdropFilter: `blur(${config.overlayBlur}px)`,
        }}
      />

      {/* Soft highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: config.highlightOpacity,
          background:
            "radial-gradient(circle at 24% 18%, white 0%, transparent 34%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Bottom vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: config.vignetteOpacity,
          background:
            "linear-gradient(180deg, transparent 45%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
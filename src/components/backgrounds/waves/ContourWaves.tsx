import type { BackgroundProps } from "@/types";

type VariantConfig = {
  spacing: number;
  strokeWidth: number;
  opacity: number;
  accentEvery: number;
};

const CONFIG = {
  hero: {
    spacing: 42,
    strokeWidth: 1.2,
    opacity: 0.18,
    accentEvery: 5,
  },
  preview: {
    spacing: 36,
    strokeWidth: 1.3,
    opacity: 0.24,
    accentEvery: 4,
  },
  thumbnail: {
    spacing: 30,
    strokeWidth: 1.5,
    opacity: 0.32,
    accentEvery: 3,
  },
} as const;

export default function ContourWaves({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const width = 1440;
  const height = 900;
  const count = Math.ceil(height / config.spacing) + 6;

  const lines = Array.from({ length: count }, (_, i) => {
    const y = i * config.spacing - 80;

    const accent = i % config.accentEvery === 0;

    const amplitude =
      32 +
      (i % 4) * 8;

    const path = `
      M -120 ${y}
      C 140 ${y - amplitude}
        320 ${y + amplitude}
        520 ${y}
      S 900 ${y - amplitude}
        1140 ${y}
      S 1380 ${y + amplitude}
        1560 ${y}
    `;

    return (
      <path
        key={i}
        d={path}
        fill="none"
        stroke={
          accent
            ? "var(--color-bg-accent)"
            : "var(--color-bg-line)"
        }
        strokeWidth={
          accent
            ? config.strokeWidth + 0.4
            : config.strokeWidth
        }
        opacity={
          accent
            ? config.opacity * 1.8
            : config.opacity
        }
      />
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {lines}
      </svg>

      {/* Soft center illumination */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgb(from var(--color-bg-accent) r g b / 0.06), transparent 55%)",
        }}
      />

      {/* Edge vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 45%, var(--color-bg-canvas) 100%)",
          opacity: 0.22,
        }}
      />
    </div>
  );
}
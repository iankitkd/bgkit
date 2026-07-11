import type { BackgroundProps } from "@/types";

type VariantConfig = {
  minor: number;
  major: number;
  minorOpacity: number;
  majorOpacity: number;
};

const CONFIG = {
  hero: {
    minor: 20,
    major: 100,
    minorOpacity: 0.08,
    majorOpacity: 0.22,
  },

  preview: {
    minor: 24,
    major: 96,
    minorOpacity: 0.10,
    majorOpacity: 0.26,
  },

  thumbnail: {
    minor: 28,
    major: 84,
    minorOpacity: 0.12,
    majorOpacity: 0.32,
  },
} as const;

export default function SquareGrid({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Minor grid */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.minorOpacity,
          backgroundImage: `
            linear-gradient(var(--color-bg-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-bg-line) 1px, transparent 1px)
          `,
          backgroundSize: `${config.minor}px ${config.minor}px`,
        }}
      />

      {/* Major grid */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.majorOpacity,
          backgroundImage: `
            linear-gradient(var(--color-bg-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-bg-line) 1px, transparent 1px)
          `,
          backgroundSize: `${config.major}px ${config.major}px`,
        }}
      />

      {/* Subtle center fade */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: variant === "hero" ? 0.10 : 0.06,
          background:
            "radial-gradient(circle at center, transparent 55%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
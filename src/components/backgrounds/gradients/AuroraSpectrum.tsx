import type { BackgroundProps } from "@/types";

type VariantConfig = {
  strokeWidth: number;
  blur: number;
  opacity: number;
};

const CONFIG = {
  hero: {
    strokeWidth: 70,
    blur: 22,
    opacity: 0.22,
  },
  preview: {
    strokeWidth: 82,
    blur: 18,
    opacity: 0.28,
  },
  thumbnail: {
    strokeWidth: 96,
    blur: 14,
    opacity: 0.36,
  },
} as const;

export default function AuroraSpectrum({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="as-blur">
            <feGaussianBlur stdDeviation={config.blur} />
          </filter>
        </defs>

        {[
          {
            color: "var(--color-bg-accent)",
            y: 210,
            offset: 0,
          },
          {
            color: "var(--color-bg-secondary)",
            y: 310,
            offset: 35,
          },
          {
            color: "var(--color-bg-accent-3)",
            y: 420,
            offset: -25,
          },
          {
            color: "var(--color-bg-accent-2)",
            y: 540,
            offset: 20,
          },
        ].map((band, index) => (
          <path
            key={index}
            d={`
              M -120 ${band.y}
              C 180 ${band.y - 90 + band.offset}
                420 ${band.y + 80}
                720 ${band.y}
              S 1220 ${band.y - 70}
                1560 ${band.y}
            `}
            fill="none"
            stroke={band.color}
            strokeWidth={config.strokeWidth}
            strokeLinecap="round"
            opacity={config.opacity}
            filter="url(#as-blur)"
          />
        ))}
      </svg>

      {/* Central atmospheric glow */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgb(from var(--color-bg-foreground) r g b / 0.08), transparent 65%)",
        }}
      />

      {/* Top illumination */}

      <div
        className="absolute inset-x-0 top-0 h-[40%]"
        style={{
          background:
            "linear-gradient(to bottom, rgb(from var(--color-bg-foreground) r g b / 0.06), transparent)",
        }}
      />

      {/* Soft vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 46%, var(--color-bg-canvas) 100%)",
          opacity: 0.18,
        }}
      />
    </div>
  );
}
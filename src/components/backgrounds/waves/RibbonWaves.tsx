import type { BackgroundProps } from "@/types";

type Ribbon = {
  d: string;
  color: string;
  opacity: number;
  width: number;
};

type VariantConfig = {
  blur: number;
  ribbons: readonly Ribbon[];
};

const CONFIG = {
  hero: {
    blur: 10,
    ribbons: [
      {
        d: "M-120 220 C220 120 420 360 760 220 C1040 110 1260 310 1560 190",
        color: "var(--color-bg-accent)",
        opacity: 0.26,
        width: 90,
      },
      {
        d: "M-120 310 C180 180 520 470 840 310 C1100 180 1320 360 1560 280",
        color: "var(--color-bg-secondary)",
        opacity: 0.22,
        width: 72,
      },
      {
        d: "M-120 430 C220 310 560 560 920 410 C1180 300 1380 470 1560 420",
        color: "var(--color-bg-accent-2)",
        opacity: 0.18,
        width: 60,
      },
      {
        d: "M-120 580 C260 500 620 700 980 570 C1220 490 1400 640 1560 590",
        color: "var(--color-bg-accent-3)",
        opacity: 0.14,
        width: 46,
      },
    ],
  },

  preview: {
    blur: 8,
    ribbons: [
      {
        d: "M-120 220 C220 120 420 360 760 220 C1040 110 1260 310 1560 190",
        color: "var(--color-bg-accent)",
        opacity: 0.32,
        width: 72,
      },
      {
        d: "M-120 310 C180 180 520 470 840 310 C1100 180 1320 360 1560 280",
        color: "var(--color-bg-secondary)",
        opacity: 0.28,
        width: 58,
      },
      {
        d: "M-120 430 C220 310 560 560 920 410 C1180 300 1380 470 1560 420",
        color: "var(--color-bg-accent-2)",
        opacity: 0.22,
        width: 48,
      },
      {
        d: "M-120 580 C260 500 620 700 980 570 C1220 490 1400 640 1560 590",
        color: "var(--color-bg-accent-3)",
        opacity: 0.18,
        width: 38,
      },
    ],
  },

  thumbnail: {
    blur: 5,
    ribbons: [
      {
        d: "M-120 220 C220 120 420 360 760 220 C1040 110 1260 310 1560 190",
        color: "var(--color-bg-accent)",
        opacity: 0.40,
        width: 54,
      },
      {
        d: "M-120 310 C180 180 520 470 840 310 C1100 180 1320 360 1560 280",
        color: "var(--color-bg-secondary)",
        opacity: 0.34,
        width: 44,
      },
      {
        d: "M-120 430 C220 310 560 560 920 410 C1180 300 1380 470 1560 420",
        color: "var(--color-bg-accent-2)",
        opacity: 0.28,
        width: 36,
      },
      {
        d: "M-120 580 C260 500 620 700 980 570 C1220 490 1400 640 1560 590",
        color: "var(--color-bg-accent-3)",
        opacity: 0.22,
        width: 28,
      },
    ],
  },
} as const;

export default function RibbonWaves({
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
          <filter id="rw-blur">
            <feGaussianBlur stdDeviation={config.blur} />
          </filter>
        </defs>

        {config.ribbons.map((ribbon, index) => (
          <path
            key={index}
            d={ribbon.d}
            fill="none"
            stroke={ribbon.color}
            strokeWidth={ribbon.width}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={ribbon.opacity}
            filter="url(#rw-blur)"
          />
        ))}
      </svg>

      {/* Soft lighting */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgb(from var(--color-bg-foreground) r g b / 0.08), transparent 40%)",
        }}
      />

      {/* Edge vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 45%, var(--color-bg-canvas) 100%)",
          opacity: 0.28,
        }}
      />
    </div>
  );
}
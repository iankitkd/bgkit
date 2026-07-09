import type { BackgroundProps } from "@/types";

type Aurora = {
  d: string;
  color: string;
  opacity: number;
  width: number;
};

type VariantConfig = {
  blur: number;
  glow: number;
  ribbons: readonly Aurora[];
};

const CONFIG = {
  hero: {
    blur: 28,
    glow: 42,
    ribbons: [
      {
        d: "M-120 180 C220 60 520 320 860 180 C1160 60 1360 220 1560 140",
        color: "var(--color-bg-accent-3)",
        opacity: 0.28,
        width: 140,
      },
      {
        d: "M-120 280 C220 120 520 420 900 260 C1180 140 1380 320 1560 240",
        color: "var(--color-bg-secondary)",
        opacity: 0.24,
        width: 120,
      },
      {
        d: "M-120 420 C260 260 620 520 980 400 C1220 320 1400 480 1560 420",
        color: "var(--color-bg-accent)",
        opacity: 0.18,
        width: 110,
      },
    ],
  },

  preview: {
    blur: 22,
    glow: 34,
    ribbons: [
      {
        d: "M-120 180 C220 60 520 320 860 180 C1160 60 1360 220 1560 140",
        color: "var(--color-bg-accent-3)",
        opacity: 0.34,
        width: 120,
      },
      {
        d: "M-120 280 C220 120 520 420 900 260 C1180 140 1380 320 1560 240",
        color: "var(--color-bg-secondary)",
        opacity: 0.28,
        width: 100,
      },
      {
        d: "M-120 420 C260 260 620 520 980 400 C1220 320 1400 480 1560 420",
        color: "var(--color-bg-accent)",
        opacity: 0.22,
        width: 90,
      },
    ],
  },

  thumbnail: {
    blur: 16,
    glow: 24,
    ribbons: [
      {
        d: "M-120 180 C220 60 520 320 860 180 C1160 60 1360 220 1560 140",
        color: "var(--color-bg-accent-3)",
        opacity: 0.42,
        width: 90,
      },
      {
        d: "M-120 280 C220 120 520 420 900 260 C1180 140 1380 320 1560 240",
        color: "var(--color-bg-secondary)",
        opacity: 0.36,
        width: 74,
      },
      {
        d: "M-120 420 C260 260 620 520 980 400 C1220 320 1400 480 1560 420",
        color: "var(--color-bg-accent)",
        opacity: 0.28,
        width: 64,
      },
    ],
  },
} as const;

export default function AuroraWaves({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Background glow */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 20%,
              rgb(from var(--color-bg-accent-3) r g b / .12),
              transparent 55%
            )
          `,
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="aurora-blur">
            <feGaussianBlur stdDeviation={config.blur} />
          </filter>

          <filter id="aurora-glow">
            <feGaussianBlur stdDeviation={config.glow} />
          </filter>
        </defs>

        {config.ribbons.map((ribbon, index) => (
          <g key={index}>
            {/* Glow */}

            <path
              d={ribbon.d}
              fill="none"
              stroke={ribbon.color}
              strokeWidth={ribbon.width * 1.5}
              opacity={ribbon.opacity * 0.4}
              filter="url(#aurora-glow)"
              strokeLinecap="round"
            />

            {/* Main curtain */}

            <path
              d={ribbon.d}
              fill="none"
              stroke={ribbon.color}
              strokeWidth={ribbon.width}
              opacity={ribbon.opacity}
              filter="url(#aurora-blur)"
              strokeLinecap="round"
            />
          </g>
        ))}
      </svg>

      {/* Atmospheric fade */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 55%, var(--color-bg-canvas) 100%)",
        }}
      />

      {/* Vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 45%, var(--color-bg-canvas) 100%)",
          opacity: 0.24,
        }}
      />
    </div>
  );
}
import type { BackgroundProps } from "@/types";

type VariantConfig = {
  rays: number;
  horizontals: number;
  lineOpacity: number;
  accentOpacity: number;
  strokeWidth: number;
  pointRadius: number;
};

const CONFIG = {
  hero: {
    rays: 21,
    horizontals: 18,
    lineOpacity: 0.18,
    accentOpacity: 0.45,
    strokeWidth: 1,
    pointRadius: 4,
  },
  preview: {
    rays: 17,
    horizontals: 16,
    lineOpacity: 0.24,
    accentOpacity: 0.5,
    strokeWidth: 1,
    pointRadius: 3.5,
  },
  thumbnail: {
    rays: 13,
    horizontals: 13,
    lineOpacity: 0.32,
    accentOpacity: 0.58,
    strokeWidth: 1.2,
    pointRadius: 3,
  },
} as const;

export default function VanishingGrid({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const width = 1440;
  const height = 900;

  const horizonY = 320;
  const centerX = width / 2;

  const rays = Array.from({ length: config.rays }, (_, i) => {
    const x = (width / (config.rays - 1)) * i;

    const accent =
      i === Math.floor(config.rays / 2) ||
      i === Math.floor(config.rays / 2) - 2 ||
      i === Math.floor(config.rays / 2) + 2;

    return (
      <line
        key={`v-${i}`}
        x1={x}
        y1={height}
        x2={centerX}
        y2={horizonY}
        stroke={
          accent
            ? "var(--color-bg-accent)"
            : "var(--color-bg-line)"
        }
        strokeWidth={accent ? config.strokeWidth + 0.3 : config.strokeWidth}
        opacity={accent ? config.accentOpacity : config.lineOpacity}
      />
    );
  });

  const horizontals = Array.from(
    { length: config.horizontals },
    (_, i) => {
      const t = i / (config.horizontals - 1);

      // compress towards the horizon
      const y = height - Math.pow(t, 2.2) * (height - horizonY);

      const accent = i % 4 === 0;

      return (
        <line
          key={`h-${i}`}
          x1="0"
          y1={y}
          x2={width}
          y2={y}
          stroke={
            accent
              ? "var(--color-bg-accent)"
              : "var(--color-bg-line)"
          }
          strokeWidth={accent ? config.strokeWidth + 0.3 : config.strokeWidth}
          opacity={accent ? config.accentOpacity * 0.6 : config.lineOpacity}
        />
      );
    },
  );

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {rays}

        {horizontals}

        {/* Vanishing point */}

        <circle
          cx={centerX}
          cy={horizonY}
          r={config.pointRadius}
          fill="var(--color-bg-accent)"
          opacity={0.9}
        />

        <circle
          cx={centerX}
          cy={horizonY}
          r={config.pointRadius * 2.8}
          fill="none"
          stroke="var(--color-bg-accent)"
          strokeWidth="1"
          opacity={0.22}
        />
      </svg>

      {/* Fade upper area */}

      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: `${horizonY}px`,
          background:
            "linear-gradient(to bottom, var(--color-bg-canvas), transparent)",
        }}
      />

      {/* Bottom fade */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg-canvas), transparent 30%)",
          opacity: 0.35,
        }}
      />
    </div>
  );
}
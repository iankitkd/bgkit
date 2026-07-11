import type { BackgroundProps } from "@/types";

type VariantConfig = {
  verticalLines: number;
  horizontalLines: number;
  lineOpacity: number;
  strokeWidth: number;
};

const CONFIG = {
  hero: {
    verticalLines: 17,
    horizontalLines: 18,
    lineOpacity: 0.16,
    strokeWidth: 1,
  },
  preview: {
    verticalLines: 15,
    horizontalLines: 16,
    lineOpacity: 0.22,
    strokeWidth: 1,
  },
  thumbnail: {
    verticalLines: 13,
    horizontalLines: 13,
    lineOpacity: 0.30,
    strokeWidth: 1.2,
  },
} as const;

export default function PerspectiveGrid({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const horizonY = 340;
  const centerX = 720;

  // Perspective verticals
  const verticals = Array.from(
    { length: config.verticalLines },
    (_, i) => {
      const x = (1440 / (config.verticalLines - 1)) * i;

      return (
        <line
          key={`v-${i}`}
          x1={x}
          y1={900}
          x2={centerX}
          y2={horizonY}
          stroke="var(--color-bg-line)"
          strokeWidth={config.strokeWidth}
          opacity={config.lineOpacity}
        />
      );
    },
  );

  // Perspective horizontals (non-linear spacing)
  const horizontals = Array.from(
    { length: config.horizontalLines },
    (_, i) => {
      const t = i / (config.horizontalLines - 1);

      // quadratic easing compresses toward horizon
      const y = 900 - Math.pow(t, 2) * (900 - horizonY);

      return (
        <line
          key={`h-${i}`}
          x1="0"
          y1={y}
          x2="1440"
          y2={y}
          stroke="var(--color-bg-line)"
          strokeWidth={config.strokeWidth}
          opacity={config.lineOpacity}
        />
      );
    },
  );

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* subtle top atmosphere */}

      <div
        className="absolute inset-x-0 top-0 h-2/5"
        style={{
          background:
            "linear-gradient(to bottom, rgb(from var(--color-bg-line) r g b / 0.08), transparent)",
        }}
      />

      {/* floor */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {verticals}
        {horizontals}
      </svg>

      {/* atmospheric fade */}

      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: `${horizonY}px`,
          background:
            "linear-gradient(to bottom,var(--color-bg-canvas),transparent)",
        }}
      />

      {/* bottom vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top,var(--color-bg-canvas),transparent 28%)",
          opacity: 0.45,
        }}
      />
    </div>
  );
}
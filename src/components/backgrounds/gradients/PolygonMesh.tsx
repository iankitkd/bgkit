import type { BackgroundProps } from "@/types";

type Polygon = {
  points: string;
  fill: string;
  opacity: number;
};

type VariantConfig = {
  blur: number;
  polygons: readonly Polygon[];
};

const CONFIG = {
  hero: {
    blur: 28,
    polygons: [
      {
        points: "-80,-40 420,60 260,420 -120,280",
        fill: "var(--color-bg-accent)",
        opacity: 0.34,
      },
      {
        points: "260,80 860,-60 980,360 520,420",
        fill: "var(--color-bg-secondary)",
        opacity: 0.30,
      },
      {
        points: "760,260 1500,120 1520,760 980,700",
        fill: "var(--color-bg-accent-2)",
        opacity: 0.26,
      },
      {
        points: "120,520 620,360 820,900 0,900",
        fill: "var(--color-bg-accent-3)",
        opacity: 0.22,
      },
      {
        points: "620,420 1320,420 1440,900 760,900",
        fill: "var(--color-bg-accent)",
        opacity: 0.18,
      },
    ],
  },

  preview: {
    blur: 22,
    polygons: [
      {
        points: "-80,-40 420,60 260,420 -120,280",
        fill: "var(--color-bg-accent)",
        opacity: 0.40,
      },
      {
        points: "260,80 860,-60 980,360 520,420",
        fill: "var(--color-bg-secondary)",
        opacity: 0.36,
      },
      {
        points: "760,260 1500,120 1520,760 980,700",
        fill: "var(--color-bg-accent-2)",
        opacity: 0.30,
      },
      {
        points: "120,520 620,360 820,900 0,900",
        fill: "var(--color-bg-accent-3)",
        opacity: 0.26,
      },
      {
        points: "620,420 1320,420 1440,900 760,900",
        fill: "var(--color-bg-accent)",
        opacity: 0.22,
      },
    ],
  },

  thumbnail: {
    blur: 14,
    polygons: [
      {
        points: "-80,-40 420,60 260,420 -120,280",
        fill: "var(--color-bg-accent)",
        opacity: 0.48,
      },
      {
        points: "260,80 860,-60 980,360 520,420",
        fill: "var(--color-bg-secondary)",
        opacity: 0.42,
      },
      {
        points: "760,260 1500,120 1520,760 980,700",
        fill: "var(--color-bg-accent-2)",
        opacity: 0.36,
      },
      {
        points: "120,520 620,360 820,900 0,900",
        fill: "var(--color-bg-accent-3)",
        opacity: 0.30,
      },
      {
        points: "620,420 1320,420 1440,900 760,900",
        fill: "var(--color-bg-accent)",
        opacity: 0.26,
      },
    ],
  },
} as const;

export default function PolygonMesh({
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
          <filter id="pm-blur">
            <feGaussianBlur stdDeviation={config.blur} />
          </filter>
        </defs>

        {config.polygons.map((polygon, index) => (
          <polygon
            key={index}
            points={polygon.points}
            fill={polygon.fill}
            opacity={polygon.opacity}
            filter="url(#pm-blur)"
          />
        ))}
      </svg>

      {/* Soft center illumination */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgb(from var(--color-bg-foreground) r g b / 0.06), transparent 60%)",
        }}
      />

      {/* Gentle vignette */}

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
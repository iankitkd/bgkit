import type { BackgroundProps } from "@/types";

type VariantConfig = {
  strokeOpacity: number;
  faceOpacity: number;
  glowOpacity: number;
};

const CONFIG = {
  hero: {
    strokeOpacity: 0.18,
    faceOpacity: 0.05,
    glowOpacity: 0.08,
  },

  preview: {
    strokeOpacity: 0.15,
    faceOpacity: 0.04,
    glowOpacity: 0.06,
  },

  thumbnail: {
    strokeOpacity: 0.28,
    faceOpacity: 0.08,
    glowOpacity: 0.12,
  },
} as const;

const SIZE = 46;
const ROWS = 8;
const COLS = 10;

export default function IsometricCubes({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const cubes = [];

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const x = 120 + col * SIZE * 1.5 - row * SIZE * 0.75;
      const y = 70 + row * SIZE * 0.86;

      cubes.push(
        <g key={`${row}-${col}`}>
          {/* Top */}

          <polygon
            points={`
              ${x},${y}
              ${x + SIZE / 2},${y - SIZE / 4}
              ${x + SIZE},${y}
              ${x + SIZE / 2},${y + SIZE / 4}
            `}
            fill="var(--color-bg-accent)"
            fillOpacity={config.faceOpacity}
            stroke="var(--color-bg-border)"
            strokeWidth="1"
            opacity={config.strokeOpacity}
          />

          {/* Left */}

          <polygon
            points={`
              ${x},${y}
              ${x + SIZE / 2},${y + SIZE / 4}
              ${x + SIZE / 2},${y + SIZE * 0.75}
              ${x},${y + SIZE / 2}
            `}
            fill="var(--color-bg-surface)"
            fillOpacity={config.faceOpacity}
            stroke="var(--color-bg-border)"
            strokeWidth="1"
            opacity={config.strokeOpacity}
          />

          {/* Right */}

          <polygon
            points={`
              ${x + SIZE},${y}
              ${x + SIZE / 2},${y + SIZE / 4}
              ${x + SIZE / 2},${y + SIZE * 0.75}
              ${x + SIZE},${y + SIZE / 2}
            `}
            fill="var(--color-bg-secondary)"
            fillOpacity={config.faceOpacity}
            stroke="var(--color-bg-border)"
            strokeWidth="1"
            opacity={config.strokeOpacity}
          />
        </g>
      );
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 900 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {cubes}
      </svg>

      {/* Soft center glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(
              circle at center,
              var(--color-bg-accent) 0%,
              transparent 28%
            ),
            radial-gradient(
              circle at center,
              var(--color-bg-secondary) 0%,
              transparent 52%
            )
          `,
          filter: "blur(90px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 60%, rgba(0,0,0,.16) 88%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
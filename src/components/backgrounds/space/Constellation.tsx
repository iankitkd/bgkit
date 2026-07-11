import type { BackgroundProps } from "@/types";

type VariantConfig = {
  starOpacity: number;
  lineOpacity: number;
  glowOpacity: number;
};

const CONFIG = {
  hero: {
    starOpacity: 0.85,
    lineOpacity: 0.18,
    glowOpacity: 0.08,
  },

  preview: {
    starOpacity: 0.72,
    lineOpacity: 0.14,
    glowOpacity: 0.06,
  },

  thumbnail: {
    starOpacity: 1,
    lineOpacity: 0.28,
    glowOpacity: 0.12,
  },
} as const;

const STARS = [
  [120, 120],
  [250, 180],
  [420, 110],
  [620, 170],
  [700, 320],
  [560, 470],
  [340, 420],
  [170, 340],
] as const;

const LINES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
] as const;

export default function Constellation({
  variant = "hero",
}: BackgroundProps) {

  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >

        {LINES.map(([a, b], i) => (
          <line
            key={i}
            x1={STARS[a][0]}
            y1={STARS[a][1]}
            x2={STARS[b][0]}
            y2={STARS[b][1]}
            stroke="var(--color-bg-line)"
            strokeWidth="1"
            opacity={config.lineOpacity}
          />
        ))}

        {STARS.map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="2"
              fill="white"
              opacity={config.starOpacity}
            />
            <circle
              cx={x}
              cy={y}
              r="6"
              fill="white"
              opacity={config.starOpacity * 0.12}
            />
          </g>
        ))}

      </svg>

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(circle at 52% 34%, var(--color-bg-accent) 0%, transparent 30%),
            radial-gradient(circle at 70% 62%, var(--color-bg-secondary) 0%, transparent 24%)
          `,
          filter: "blur(80px)",
          mixBlendMode: "screen",
        }}
      />

    </div>
  );
}
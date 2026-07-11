import type { BackgroundProps } from "@/types";

type VariantConfig = {
  nodeRadius: number;
  nodeOpacity: number;
  lineOpacity: number;
  glowOpacity: number;
};

const CONFIG = {
  hero: {
    nodeRadius: 3,
    nodeOpacity: 0.9,
    lineOpacity: 0.18,
    glowOpacity: 0.14,
  },

  preview: {
    nodeRadius: 2.5,
    nodeOpacity: 0.75,
    lineOpacity: 0.14,
    glowOpacity: 0.11,
  },

  thumbnail: {
    nodeRadius: 3.5,
    nodeOpacity: 1,
    lineOpacity: 0.26,
    glowOpacity: 0.18,
  },
} as const;

const NODES = [
  [110, 110],
  [210, 150],
  [320, 95],
  [470, 150],
  [610, 110],
  [690, 220],
  [610, 350],
  [500, 430],
  [340, 390],
  [190, 330],
  [120, 240],
  [400, 250],
  [285, 235],
  [535, 260],
] as const;

const EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 0],

  [1, 11],
  [2, 11],
  [3, 11],
  [8, 11],

  [12, 11],
  [12, 1],
  [12, 9],

  [13, 11],
  [13, 3],
  [13, 6],

  [8, 12],
  [2, 12],
  [4, 13],
  [6, 13],
] as const;

export default function ParticleNetwork({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connections */}

        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a][0]}
            y1={NODES[a][1]}
            x2={NODES[b][0]}
            y2={NODES[b][1]}
            stroke="var(--color-bg-line)"
            strokeWidth="1"
            opacity={config.lineOpacity}
          />
        ))}

        {/* Nodes */}

        {NODES.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={config.nodeRadius}
            fill="var(--color-bg-foreground)"
            opacity={config.nodeOpacity}
          />
        ))}

        {/* Accent nodes */}

        <circle
          cx="400"
          cy="250"
          r={config.nodeRadius + 1.5}
          fill="var(--color-bg-accent)"
        />

        <circle
          cx="610"
          cy="350"
          r={config.nodeRadius + 1}
          fill="var(--color-bg-secondary)"
        />
      </svg>

      {/* Soft network glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(circle at 50% 42%, var(--color-bg-accent) 0%, transparent 22%),
            radial-gradient(circle at 76% 58%, var(--color-bg-secondary) 0%, transparent 20%)
          `,
          filter: "blur(40px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
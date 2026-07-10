import type { BackgroundProps } from "@/types";

type VariantConfig = {
  traceOpacity: number;
  nodeOpacity: number;
  glowOpacity: number;
  chipOpacity: number;
};

const CONFIG = {
  hero: {
    traceOpacity: 0.18,
    nodeOpacity: 0.32,
    glowOpacity: 0.08,
    chipOpacity: 0.08,
  },

  preview: {
    traceOpacity: 0.15,
    nodeOpacity: 0.28,
    glowOpacity: 0.06,
    chipOpacity: 0.06,
  },

  thumbnail: {
    traceOpacity: 0.28,
    nodeOpacity: 0.45,
    glowOpacity: 0.12,
    chipOpacity: 0.12,
  },
} as const;

const TRACES = [
  "M80 110 H210 V180 H330",
  "M330 180 V310 H510",
  "M510 310 V170 H690",
  "M150 470 H310 V390 H470",
  "M470 390 H650 V510",
  "M220 70 V260",
  "M610 90 V250",
  "M120 250 H260",
  "M560 430 H760",
  "M360 520 V420",
];

const NODES = [
  [80, 110],
  [210, 110],
  [210, 180],
  [330, 180],
  [330, 310],
  [510, 310],
  [510, 170],
  [690, 170],
  [150, 470],
  [310, 470],
  [310, 390],
  [470, 390],
  [650, 390],
  [650, 510],
  [220, 70],
  [220, 260],
  [610, 90],
  [610, 250],
];

const CHIPS = [
  [250, 250, 110, 70],
  [540, 330, 120, 80],
];

export default function CircuitBoard({
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

        {/* Chips */}

        {CHIPS.map(([x, y, w, h], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width={w}
            height={h}
            rx="6"
            fill="var(--color-bg-surface)"
            opacity={config.chipOpacity}
            stroke="var(--color-bg-border)"
            strokeWidth="1"
          />
        ))}

        {/* PCB traces */}

        {TRACES.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="var(--color-bg-border)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={config.traceOpacity}
          />
        ))}

        {/* Pads / vias */}

        {NODES.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3"
            fill="var(--color-bg-foreground)"
            opacity={config.nodeOpacity}
          />
        ))}

        {/* Accent junctions */}

        <circle
          cx="510"
          cy="310"
          r="5"
          fill="var(--color-bg-accent)"
        />

        <circle
          cx="330"
          cy="180"
          r="4"
          fill="var(--color-bg-secondary)"
        />

      </svg>

      {/* PCB glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(circle at 64% 52%, var(--color-bg-accent) 0%, transparent 24%),
            radial-gradient(circle at 42% 30%, var(--color-bg-secondary) 0%, transparent 20%)
          `,
          filter: "blur(55px)",
          mixBlendMode: "screen",
        }}
      />

    </div>
  );
}
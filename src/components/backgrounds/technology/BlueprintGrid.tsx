import type { BackgroundProps } from "@/types";

type VariantConfig = {
  majorOpacity: number;
  minorOpacity: number;
  guideOpacity: number;
  glowOpacity: number;
};

const CONFIG = {
  hero: {
    majorOpacity: 0.16,
    minorOpacity: 0.07,
    guideOpacity: 0.18,
    glowOpacity: 0.06,
  },

  preview: {
    majorOpacity: 0.14,
    minorOpacity: 0.06,
    guideOpacity: 0.16,
    glowOpacity: 0.05,
  },

  thumbnail: {
    majorOpacity: 0.24,
    minorOpacity: 0.10,
    guideOpacity: 0.24,
    glowOpacity: 0.10,
  },
} as const;

export default function BlueprintGrid({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Minor grid */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.minorOpacity,
          backgroundImage: `
            linear-gradient(var(--color-bg-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-bg-line) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Major grid */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.majorOpacity,
          backgroundImage: `
            linear-gradient(var(--color-bg-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-bg-line) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Construction circles */}

        <circle
          cx="180"
          cy="180"
          r="90"
          fill="none"
          stroke="var(--color-bg-line)"
          strokeWidth="1"
          opacity={config.guideOpacity}
        />

        <circle
          cx="620"
          cy="360"
          r="110"
          fill="none"
          stroke="var(--color-bg-line)"
          strokeWidth="1"
          opacity={config.guideOpacity}
        />

        {/* Crosshairs */}

        <g
          stroke="var(--color-bg-line)"
          strokeWidth="1"
          opacity={config.guideOpacity}
        >
          <line x1="90" y1="180" x2="270" y2="180" />
          <line x1="180" y1="90" x2="180" y2="270" />

          <line x1="510" y1="360" x2="730" y2="360" />
          <line x1="620" y1="250" x2="620" y2="470" />
        </g>

        {/* Measurement guides */}

        <g
          stroke="var(--color-bg-line)"
          strokeWidth="1"
          opacity={config.guideOpacity * 0.8}
        >
          <line x1="120" y1="70" x2="120" y2="530" />
          <line x1="680" y1="70" x2="680" y2="530" />

          <line x1="70" y1="120" x2="730" y2="120" />
          <line x1="70" y1="480" x2="730" y2="480" />
        </g>

        {/* Technical corner marks */}

        {[
          [80, 80],
          [720, 80],
          [80, 520],
          [720, 520],
        ].map(([x, y], i) => (
          <g
            key={i}
            stroke="var(--color-bg-line)"
            strokeWidth="1"
            opacity={config.guideOpacity}
          >
            <line x1={x - 16} y1={y} x2={x + 16} y2={y} />
            <line x1={x} y1={y - 16} x2={x} y2={y + 16} />
          </g>
        ))}
      </svg>

      {/* Blueprint glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(circle at 25% 30%, var(--color-bg-secondary) 0%, transparent 30%),
            radial-gradient(circle at 75% 65%, var(--color-bg-accent) 0%, transparent 30%)
          `,
          filter: "blur(70px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
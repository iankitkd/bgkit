import type { BackgroundProps } from "@/types";

type VariantConfig = {
  lineOpacity: number;
  glowOpacity: number;
  horizonOpacity: number;
};

const CONFIG = {
  hero: {
    lineOpacity: 0.18,
    glowOpacity: 0.08,
    horizonOpacity: 0.18,
  },

  preview: {
    lineOpacity: 0.14,
    glowOpacity: 0.06,
    horizonOpacity: 0.15,
  },

  thumbnail: {
    lineOpacity: 0.28,
    glowOpacity: 0.12,
    horizonOpacity: 0.26,
  },
} as const;

const VERTICALS = [
  -420, -320, -240, -170, -110, -60,
  0,
  60, 110, 170, 240, 320, 420,
];

export default function HorizonGrid({
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
        {/* Horizon */}

        <line
          x1="0"
          y1="270"
          x2="800"
          y2="270"
          stroke="var(--color-bg-border)"
          strokeWidth="1"
          opacity={config.horizonOpacity}
        />

        {/* Perspective verticals */}

        {VERTICALS.map((x, i) => (
          <line
            key={i}
            x1={400}
            y1={270}
            x2={400 + x}
            y2={600}
            stroke="var(--color-bg-border)"
            strokeWidth="1"
            opacity={config.lineOpacity}
          />
        ))}

        {/* Horizontal perspective */}

        {[310, 350, 395, 445, 500, 560].map((y, i) => (
          <path
            key={i}
            d={`M${80 - i * 15} ${y} Q400 ${y - 16} ${720 + i * 15} ${y}`}
            fill="none"
            stroke="var(--color-bg-border)"
            strokeWidth="1"
            opacity={config.lineOpacity}
          />
        ))}
      </svg>

      {/* Horizon spotlight */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(
              ellipse at center 45%,
              var(--color-bg-accent) 0%,
              transparent 26%
            ),

            radial-gradient(
              ellipse at center 45%,
              var(--color-bg-secondary) 0%,
              transparent 42%
            )
          `,
          filter: "blur(90px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Fade upward */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-canvas) 0%, transparent 34%, transparent 100%)",
        }}
      />
    </div>
  );
}
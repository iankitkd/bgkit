import type { BackgroundProps } from "@/types";

type VariantConfig = {
  starOpacity: number;
  glowOpacity: number;
  largeStarOpacity: number;
};

const CONFIG = {
  hero: {
    starOpacity: 0.42,
    glowOpacity: 0.08,
    largeStarOpacity: 0.8,
  },

  preview: {
    starOpacity: 0.34,
    glowOpacity: 0.06,
    largeStarOpacity: 0.65,
  },

  thumbnail: {
    starOpacity: 0.6,
    glowOpacity: 0.12,
    largeStarOpacity: 1,
  },
} as const;

const STARS = [
  [60, 70], [140, 110], [220, 60], [330, 140], [430, 90], [540, 150], [650, 80], [740, 120],
  [90, 230], [180, 280], [290, 210], [400, 260], [510, 220], [620, 300], [720, 250],
  [70, 410], [180, 470], [300, 390], [430, 450], [560, 400], [680, 500], [760, 420],
  [260, 540], [500, 540], [120, 560]
] as const;

const BRIGHT = [
  [260, 150],
  [520, 330],
  [670, 180],
  [360, 460],
  [150, 350],
] as const;

export default function StarField({
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

        {/* Small stars */}

        {STARS.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="1"
            fill="white"
            opacity={config.starOpacity}
          />
        ))}

        {/* Bright stars */}

        {BRIGHT.map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r="2"
              fill="white"
              opacity={config.largeStarOpacity}
            />

            <circle
              cx={x}
              cy={y}
              r="5"
              fill="white"
              opacity={config.largeStarOpacity * 0.15}
            />
          </g>
        ))}

      </svg>

      {/* Nebula glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(circle at 30% 25%, var(--color-bg-accent) 0%, transparent 28%),
            radial-gradient(circle at 72% 62%, var(--color-bg-secondary) 0%, transparent 24%)
          `,
          filter: "blur(90px)",
          mixBlendMode: "screen",
        }}
      />

    </div>
  );
}
import type { BackgroundProps } from "@/types";

type VariantConfig = {
  lineOpacity: number;
  glowOpacity: number;
  strokeWidth: number;
};

const CONFIG = {
  hero: {
    lineOpacity: 0.18,
    glowOpacity: 0.08,
    strokeWidth: 1.2,
  },

  preview: {
    lineOpacity: 0.15,
    glowOpacity: 0.06,
    strokeWidth: 1,
  },

  thumbnail: {
    lineOpacity: 0.28,
    glowOpacity: 0.12,
    strokeWidth: 1.4,
  },
} as const;

const PATHS = [
  "M-40 180 C120 90 280 260 470 170 S760 90 920 170",
  "M-40 220 C130 130 290 300 480 210 S760 130 920 210",
  "M-40 260 C140 170 310 340 500 250 S760 170 920 250",
  "M-40 300 C140 210 320 380 510 290 S760 210 920 290",
  "M-40 340 C150 250 330 420 520 330 S760 250 920 330",
  "M-40 380 C160 290 340 460 530 370 S760 290 920 370",
  "M-40 420 C170 330 350 500 540 410 S760 330 920 410",
];

export default function TopographicLines({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 900 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {PATHS.map((path, i) => (
          <g key={i}>
            {[0, 10, 20, 30].map((offset) => (
              <path
                key={offset}
                d={path}
                transform={`translate(0 ${offset}) scale(${1 + offset * 0.002})`}
                fill="none"
                stroke="var(--color-bg-border)"
                strokeWidth={config.strokeWidth}
                opacity={config.lineOpacity - offset * 0.002}
              />
            ))}
          </g>
        ))}
      </svg>

      {/* Soft terrain glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(circle at 35% 30%, var(--color-bg-accent) 0%, transparent 28%),
            radial-gradient(circle at 75% 70%, var(--color-bg-secondary) 0%, transparent 25%)
          `,
          filter: "blur(70px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
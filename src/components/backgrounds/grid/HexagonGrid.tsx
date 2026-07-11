import type { BackgroundProps } from "@/types";

type VariantConfig = {
  strokeOpacity: number;
  glowOpacity: number;
  accentOpacity: number;
};

const CONFIG = {
  hero: {
    strokeOpacity: 0.18,
    glowOpacity: 0.1,
    accentOpacity: 0.08,
  },

  preview: {
    strokeOpacity: 0.14,
    glowOpacity: 0.08,
    accentOpacity: 0.06,
  },

  thumbnail: {
    strokeOpacity: 0.28,
    glowOpacity: 0.15,
    accentOpacity: 0.12,
  },
} as const;

const HEX =
  "30,0 90,0 120,52 90,104 30,104 0,52";

const ROWS = 7;
const COLS = 8;
const W = 120;
const H = 104;

export default function HexagonGrid({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 960 720"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Filled accent hexagons */}

        {[6, 12, 18, 29, 37, 45].map((index) => {
          const row = Math.floor(index / COLS);
          const col = index % COLS;

          const x = col * W + (row % 2 ? 60 : 0);
          const y = row * 78;

          return (
            <polygon
              key={index}
              points={HEX}
              transform={`translate(${x},${y})`}
              fill="var(--color-bg-accent)"
              opacity={config.accentOpacity}
            />
          );
        })}

        {/* Hex grid */}

        {Array.from({ length: ROWS }).map((_, row) =>
          Array.from({ length: COLS }).map((_, col) => {
            const x = col * W + (row % 2 ? 60 : 0);
            const y = row * 78;

            return (
              <polygon
                key={`${row}-${col}`}
                points={HEX}
                transform={`translate(${x},${y})`}
                fill="none"
                stroke="var(--color-bg-line)"
                strokeWidth="1"
                opacity={config.strokeOpacity}
              />
            );
          })
        )}
      </svg>

      {/* Accent glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(circle at 32% 38%, var(--color-bg-accent) 0%, transparent 22%),
            radial-gradient(circle at 74% 62%, var(--color-bg-secondary) 0%, transparent 20%)
          `,
          filter: "blur(60px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
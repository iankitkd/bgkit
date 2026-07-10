import type { BackgroundProps } from "@/types";

type VariantConfig = {
  strokeOpacity: number;
  accentOpacity: number;
  glowOpacity: number;
};

const CONFIG = {
  hero: {
    strokeOpacity: 0.18,
    accentOpacity: 0.08,
    glowOpacity: 0.08,
  },

  preview: {
    strokeOpacity: 0.15,
    accentOpacity: 0.06,
    glowOpacity: 0.06,
  },

  thumbnail: {
    strokeOpacity: 0.28,
    accentOpacity: 0.12,
    glowOpacity: 0.12,
  },
} as const;

const HEX = "26,0 78,0 104,45 78,90 26,90 0,45";

const ROWS = 8;
const COLS = 9;
const W = 104;
const H = 90;

export default function VignetteHexGrid({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 936 720"
        preserveAspectRatio="xMidYMid slice"
        style={{
          maskImage:
            "radial-gradient(circle at center, black 24%, rgba(0,0,0,.95) 48%, rgba(0,0,0,.55) 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 24%, rgba(0,0,0,.95) 48%, rgba(0,0,0,.55) 70%, transparent 100%)",
        }}
      >
        {/* Filled accent cells */}

        {[13, 22, 31, 40, 49, 58].map((index) => {
          const row = Math.floor(index / COLS);
          const col = index % COLS;

          const x = col * W + (row % 2 ? W / 2 : 0);
          const y = row * 68;

          return (
            <polygon
              key={`fill-${index}`}
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
            const x = col * W + (row % 2 ? W / 2 : 0);
            const y = row * 68;

            return (
              <polygon
                key={`${row}-${col}`}
                points={HEX}
                transform={`translate(${x},${y})`}
                fill="none"
                stroke="var(--color-bg-border)"
                strokeWidth="1"
                opacity={config.strokeOpacity}
              />
            );
          })
        )}
      </svg>

      {/* Soft center glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(circle at center,
              var(--color-bg-accent) 0%,
              transparent 32%
            ),

            radial-gradient(circle at center,
              var(--color-bg-secondary) 0%,
              transparent 58%
            )
          `,
          filter: "blur(70px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Extra vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 55%, rgba(0,0,0,.18) 82%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
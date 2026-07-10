import type { BackgroundProps } from "@/types";

type VariantConfig = {
  lineOpacity: number;
  glowOpacity: number;
  strokeWidth: number;
};

const CONFIG = {
  hero: {
    lineOpacity: 0.16,
    glowOpacity: 0.08,
    strokeWidth: 1.1,
  },

  preview: {
    lineOpacity: 0.13,
    glowOpacity: 0.06,
    strokeWidth: 1,
  },

  thumbnail: {
    lineOpacity: 0.24,
    glowOpacity: 0.12,
    strokeWidth: 1.3,
  },
} as const;

const RINGS = [
  {
    x: 250,
    y: 240,
    radii: [40, 62, 86, 114],
  },
  {
    x: 580,
    y: 330,
    radii: [55, 82, 112, 146],
  },
];

export default function TopographicRings({
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
        {RINGS.map((ring, i) => (
          <g key={i}>
            {ring.radii.map((r) => (
              <ellipse
                key={r}
                cx={ring.x}
                cy={ring.y}
                rx={r}
                ry={r * 0.72}
                fill="none"
                stroke="var(--color-bg-border)"
                strokeWidth={config.strokeWidth}
                opacity={config.lineOpacity}
              />
            ))}
          </g>
        ))}

        {/* Small connecting contour */}

        <path
          d="M330 255 C420 230 470 290 500 315"
          fill="none"
          stroke="var(--color-bg-border)"
          strokeWidth={config.strokeWidth}
          opacity={config.lineOpacity * 0.75}
        />
      </svg>

      {/* Soft contour glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(
              ellipse at 32% 40%,
              var(--color-bg-accent) 0%,
              transparent 26%
            ),

            radial-gradient(
              ellipse at 72% 56%,
              var(--color-bg-secondary) 0%,
              transparent 30%
            )
          `,
          filter: "blur(80px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Soft vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 58%, rgba(0,0,0,.14) 88%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
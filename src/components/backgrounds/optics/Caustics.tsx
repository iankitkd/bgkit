import type { BackgroundProps } from "@/types";

type VariantConfig = {
  patternOpacity: number;
  glowOpacity: number;
  blur: number;
};

const CONFIG = {
  hero: {
    patternOpacity: 0.16,
    glowOpacity: 0.08,
    blur: 24,
  },

  preview: {
    patternOpacity: 0.13,
    glowOpacity: 0.06,
    blur: 20,
  },

  thumbnail: {
    patternOpacity: 0.24,
    glowOpacity: 0.12,
    blur: 16,
  },
} as const;

const PATHS = [
  "M-80 160 C120 80 300 260 520 170 S860 120 980 220",
  "M-120 320 C80 220 320 420 560 330 S900 260 1040 380",
  "M-100 470 C160 380 380 560 640 470 S920 420 1040 520",
] as const;

export default function Caustics({
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
                transform={`translate(0 ${offset})`}
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                opacity={config.patternOpacity - offset * 0.02}
                strokeLinecap="round"
                style={{
                  filter: `blur(${config.blur}px)`,
                }}
              />
            ))}
          </g>
        ))}
      </svg>

      {/* Soft colored bloom */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(circle at 30% 30%,
              var(--color-bg-accent) 0%,
              transparent 30%),

            radial-gradient(circle at 75% 65%,
              var(--color-bg-secondary) 0%,
              transparent 28%)
          `,
          filter: "blur(100px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Ambient light */}

      <div
        className="absolute inset-0"
        style={{
          opacity: 0.08,
          background:
            "radial-gradient(circle at center, white 0%, transparent 55%)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
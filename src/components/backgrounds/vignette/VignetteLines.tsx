import type { BackgroundProps } from "@/types";

type VariantConfig = {
  lineOpacity: number;
  glowOpacity: number;
  strokeWidth: number;
};

const CONFIG = {
  hero: {
    lineOpacity: 0.16,
    glowOpacity: 0.07,
    strokeWidth: 1.2,
  },

  preview: {
    lineOpacity: 0.13,
    glowOpacity: 0.05,
    strokeWidth: 1,
  },

  thumbnail: {
    lineOpacity: 0.24,
    glowOpacity: 0.11,
    strokeWidth: 1.4,
  },
} as const;

const PATHS = [
  "M-80 120 C120 80 240 160 420 120 S720 80 920 140",
  "M-80 170 C110 130 260 220 430 170 S720 130 920 190",
  "M-80 220 C100 180 270 280 440 220 S720 180 920 240",
  "M-80 270 C90 240 280 340 450 270 S720 240 920 290",
  "M-80 320 C80 300 290 400 460 320 S720 300 920 340",
  "M-80 370 C70 360 300 460 470 370 S720 360 920 390",
  "M-80 420 C60 420 310 520 480 420 S720 420 920 440",
] as const;

export default function VignetteLines({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 900 600"
        preserveAspectRatio="xMidYMid slice"
        style={{
          maskImage:
            "radial-gradient(circle at center, black 24%, rgba(0,0,0,.95) 48%, rgba(0,0,0,.55) 72%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 24%, rgba(0,0,0,.95) 48%, rgba(0,0,0,.55) 72%, transparent 100%)",
        }}
      >
        {PATHS.map((path, i) => (
          <g key={i}>
            {[0, 12, 24, 36].map((offset) => (
              <path
                key={offset}
                d={path}
                transform={`translate(0 ${offset})`}
                fill="none"
                stroke="var(--color-bg-line)"
                strokeWidth={config.strokeWidth}
                opacity={config.lineOpacity - offset * 0.002}
                strokeLinecap="round"
              />
            ))}
          </g>
        ))}
      </svg>

      {/* Soft center glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(circle at center,
              var(--color-bg-accent) 0%,
              transparent 34%),

            radial-gradient(circle at center,
              var(--color-bg-secondary) 0%,
              transparent 58%)
          `,
          filter: "blur(70px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Edge vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 58%, rgba(0,0,0,.18) 84%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
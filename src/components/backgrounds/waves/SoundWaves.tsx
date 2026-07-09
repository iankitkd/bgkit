import type { BackgroundProps } from "@/types";

type VariantConfig = {
  strokeWidth: number;
  opacity: number;
  spacing: number;
  accentEvery: number;
};

const CONFIG = {
  hero: {
    strokeWidth: 2,
    opacity: 0.22,
    spacing: 70,
    accentEvery: 4,
  },
  preview: {
    strokeWidth: 2,
    opacity: 0.28,
    spacing: 60,
    accentEvery: 3,
  },
  thumbnail: {
    strokeWidth: 2.4,
    opacity: 0.36,
    spacing: 52,
    accentEvery: 2,
  },
} as const;

export default function SoundWaves({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const width = 1440;
  const height = 900;

  const rows = Math.ceil(height / config.spacing) + 2;

  const waves = Array.from({ length: rows }, (_, row) => {
    const y = row * config.spacing + 20;

    const amp = 18 + (row % 4) * 8;
    const phase = row * 70;

    const accent = row % config.accentEvery === 0;

    let d = `M -80 ${y}`;

    for (let x = -80; x <= width + 120; x += 80) {
      const controlX = x + 40;

      const direction = ((x / 80 + row) % 2 === 0 ? 1 : -1);

      d += ` Q ${controlX} ${y + direction * amp} ${x + 80} ${y}`;
    }

    return (
      <path
        key={row}
        d={d}
        fill="none"
        stroke={
          accent
            ? "var(--color-bg-secondary)"
            : "var(--color-bg-border)"
        }
        strokeWidth={
          accent
            ? config.strokeWidth + 0.6
            : config.strokeWidth
        }
        opacity={
          accent
            ? config.opacity * 1.6
            : config.opacity
        }
        strokeLinecap="round"
      />
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {waves}
      </svg>

      {/* Center glow */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgb(from var(--color-bg-secondary) r g b / 0.08), transparent 55%)",
        }}
      />

      {/* Edge fade */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 50%, var(--color-bg-canvas) 100%)",
          opacity: 0.24,
        }}
      />
    </div>
  );
}
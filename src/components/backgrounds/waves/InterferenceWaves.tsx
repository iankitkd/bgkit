import type { BackgroundProps } from "@/types";

type VariantConfig = {
  strokeWidth: number;
  opacity: number;
  spacing: number;
  amplitude: number;
};

const CONFIG = {
  hero: {
    strokeWidth: 1.3,
    opacity: 0.16,
    spacing: 52,
    amplitude: 26,
  },
  preview: {
    strokeWidth: 1.5,
    opacity: 0.22,
    spacing: 46,
    amplitude: 22,
  },
  thumbnail: {
    strokeWidth: 1.8,
    opacity: 0.30,
    spacing: 40,
    amplitude: 18,
  },
} as const;

export default function InterferenceWaves({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const width = 1440;
  const height = 900;

  const horizontalCount = Math.ceil(height / config.spacing) + 2;
  const verticalCount = Math.ceil(width / config.spacing) + 2;

  const horizontal = Array.from({ length: horizontalCount }, (_, row) => {
    const y = row * config.spacing;

    let d = `M -80 ${y}`;

    for (let x = -80; x <= width + 80; x += 80) {
      const c1 = x + 40;
      const direction = (row + x / 80) % 2 === 0 ? 1 : -1;

      d += ` Q ${c1} ${y + direction * config.amplitude} ${x + 80} ${y}`;
    }

    return (
      <path
        key={`h-${row}`}
        d={d}
        fill="none"
        stroke="var(--color-bg-accent)"
        strokeWidth={config.strokeWidth}
        opacity={config.opacity}
        strokeLinecap="round"
      />
    );
  });

  const vertical = Array.from({ length: verticalCount }, (_, col) => {
    const x = col * config.spacing;

    let d = `M ${x} -80`;

    for (let y = -80; y <= height + 80; y += 80) {
      const c1 = y + 40;
      const direction = (col + y / 80) % 2 === 0 ? 1 : -1;

      d += ` Q ${x + direction * config.amplitude} ${c1} ${x} ${y + 80}`;
    }

    return (
      <path
        key={`v-${col}`}
        d={d}
        fill="none"
        stroke="var(--color-bg-secondary)"
        strokeWidth={config.strokeWidth}
        opacity={config.opacity}
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
        {horizontal}
        {vertical}
      </svg>

      {/* Soft center glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgb(from var(--color-bg-accent) r g b / 0.05), transparent 60%)",
        }}
      />

      {/* Edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 45%, var(--color-bg-canvas) 100%)",
          opacity: 0.2,
        }}
      />
    </div>
  );
}
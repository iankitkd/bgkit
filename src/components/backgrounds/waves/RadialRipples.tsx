import type { BackgroundProps } from "@/types";

type VariantConfig = {
  rings: number;
  opacity: number;
  strokeWidth: number;
  amplitude: number;
};

const CONFIG = {
  hero: {
    rings: 16,
    opacity: 0.18,
    strokeWidth: 1.3,
    amplitude: 7,
  },
  preview: {
    rings: 14,
    opacity: 0.24,
    strokeWidth: 1.4,
    amplitude: 6,
  },
  thumbnail: {
    rings: 12,
    opacity: 0.32,
    strokeWidth: 1.6,
    amplitude: 5,
  },
} as const;

export default function RadialRipples({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const cx = 520;
  const cy = 430;

  const rings = Array.from({ length: config.rings }, (_, i) => {
    const radius = 45 + i * 36;
    const accent = i % 4 === 0;

    let d = "";

    for (let s = 0; s <= 180; s++) {
      const t = (s / 180) * Math.PI * 2;

      const r =
        radius +
        Math.sin(t * 8 + i * 0.9) * config.amplitude +
        Math.cos(t * 3) * (config.amplitude * 0.35);

      const x = cx + Math.cos(t) * r;
      const y = cy + Math.sin(t) * r;

      d += `${s === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)} `;
    }

    d += "Z";

    return (
      <path
        key={i}
        d={d}
        fill="none"
        stroke={
          accent
            ? "var(--color-bg-accent)"
            : "var(--color-bg-border)"
        }
        strokeWidth={
          accent
            ? config.strokeWidth + 0.4
            : config.strokeWidth
        }
        opacity={
          accent
            ? config.opacity * 1.6
            : config.opacity
        }
      />
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {rings}
      </svg>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 36% 48%, rgb(from var(--color-bg-secondary) r g b / 0.08), transparent 42%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 50%, var(--color-bg-canvas) 100%)",
          opacity: 0.22,
        }}
      />
    </div>
  );
}
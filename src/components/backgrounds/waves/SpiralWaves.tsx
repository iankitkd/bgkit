import type { BackgroundProps } from "@/types";

type VariantConfig = {
  rings: number;
  strokeWidth: number;
  opacity: number;
  rotation: number;
};

const CONFIG = {
  hero: {
    rings: 20,
    strokeWidth: 1.2,
    opacity: 0.18,
    rotation: 8,
  },
  preview: {
    rings: 18,
    strokeWidth: 1.4,
    opacity: 0.24,
    rotation: 10,
  },
  thumbnail: {
    rings: 15,
    strokeWidth: 1.8,
    opacity: 0.32,
    rotation: 12,
  },
} as const;

export default function SpiralWaves({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const cx = 720;
  const cy = 450;

  const rings = Array.from({ length: config.rings }, (_, i) => {
    const radius = 30 + i * 26;

    const accent = i % 4 === 0;

    const points = Array.from({ length: 180 }, (_, step) => {
      const t = (step / 180) * Math.PI * 2;

      const r =
        radius +
        Math.sin(t * 4 + i * 0.5) * 8 +
        Math.cos(t * 2) * 3;

      const angle = t + (radius / 900) * config.rotation;

      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;

      return `${step === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    }).join(" ");

    return (
      <path
        key={i}
        d={`${points} Z`}
        fill="none"
        stroke={
          accent
            ? "var(--color-bg-accent)"
            : "var(--color-bg-line)"
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
        strokeLinejoin="round"
        strokeLinecap="round"
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

      {/* Soft center glow */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgb(from var(--color-bg-accent) r g b / 0.08), transparent 45%)",
        }}
      />

      {/* Edge vignette */}

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
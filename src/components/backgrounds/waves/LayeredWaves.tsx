import type { BackgroundProps } from "@/types";

type Wave = {
  d: string;
  color: string;
  opacity: number;
};

type VariantConfig = {
  blur: number;
  waves: readonly Wave[];
};

const CONFIG = {
  hero: {
    blur: 8,
    waves: [
      {
        d: "M0,150 C360,250 720,90 1080,170 C1260,210 1350,180 1440,170 L1440,320 L0,320 Z",
        color: "var(--color-bg-secondary)",
        opacity: 0.08,
      },
      {
        d: "M0,175 C420,250 880,120 1440,195 L1440,320 L0,320 Z",
        color: "var(--color-bg-accent-3)",
        opacity: 0.08,
      },
      {
        d: "M0,205 C480,135 960,285 1440,205 L1440,320 L0,320 Z",
        color: "var(--color-bg-secondary)",
        opacity: 0.11,
      },
      {
        d: "M0,235 C420,185 980,285 1440,235 L1440,320 L0,320 Z",
        color: "var(--color-bg-accent)",
        opacity: 0.15,
      },
      {
        d: "M0,260 C360,220 720,300 1080,255 C1260,232 1350,268 1440,255 L1440,320 L0,320 Z",
        color: "var(--color-bg-accent)",
        opacity: 0.22,
      },
    ],
  },

  preview: {
    blur: 5,
    waves: [
      {
        d: "M0,170 C360,250 720,90 1080,170 C1260,210 1350,180 1440,170 L1440,320 L0,320 Z",
        color: "var(--color-bg-secondary)",
        opacity: 0.10,
      },
      {
        d: "M0,200 C480,140 960,300 1440,220 L1440,320 L0,320 Z",
        color: "var(--color-bg-secondary)",
        opacity: 0.12,
      },
      {
        d: "M0,230 C420,180 980,285 1440,235 L1440,320 L0,320 Z",
        color: "var(--color-bg-accent)",
        opacity: 0.16,
      },
      {
        d: "M0,260 C360,220 720,300 1080,255 C1260,232 1350,268 1440,255 L1440,320 L0,320 Z",
        color: "var(--color-bg-accent)",
        opacity: 0.22,
      },
    ],
  },

  thumbnail: {
    blur: 2,
    waves: [
      {
        d: "M0,180 C360,260 720,100 1080,180 C1260,220 1350,190 1440,180 L1440,320 L0,320 Z",
        color: "var(--color-bg-secondary)",
        opacity: 0.15,
      },
      {
        d: "M0,220 C480,140 960,300 1440,220 L1440,320 L0,320 Z",
        color: "var(--color-bg-accent)",
        opacity: 0.20,
      },
      {
        d: "M0,260 C360,220 720,300 1080,255 C1260,232 1350,268 1440,255 L1440,320 L0,320 Z",
        color: "var(--color-bg-accent)",
        opacity: 0.28,
      },
    ],
  },
} as const;

export default function LayeredWaves({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: `blur(${config.blur}px)`,
        }}
      >
        {config.waves.map((wave, index) => (
          <path
            key={index}
            d={wave.d}
            fill={wave.color}
            fillOpacity={wave.opacity}
          />
        ))}
      </svg>
    </div>
  );
}
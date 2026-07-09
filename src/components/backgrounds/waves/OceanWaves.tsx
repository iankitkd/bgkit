import type { BackgroundProps } from "@/types";

type Wave = {
  height: number;
  opacity: number;
  duration: number;
  reverse?: boolean;
  color: string;
  path: string;
};

type VariantConfig = {
  waves: readonly Wave[];
};

const CONFIG: Record<string, VariantConfig> = {
  hero: {
    waves: [
      {
        height: 180,
        opacity: 0.10,
        duration: 16,
        color: "var(--color-bg-secondary)",
        path: "M0,70 C240,120 480,20 720,70 C960,120 1200,20 1440,70 C1680,120 1920,20 2160,70 C2400,120 2640,20 2880,70 L2880,180 L0,180 Z",
      },
      {
        height: 170,
        opacity: 0.11,
        duration: 13,
        reverse: true,
        color: "var(--color-bg-accent-3)",
        path: "M0,90 C360,50 720,130 1080,90 C1440,50 1800,130 2160,90 C2520,50 2760,130 2880,90 L2880,170 L0,170 Z",
      },
      {
        height: 150,
        opacity: 0.15,
        duration: 10,
        color: "var(--color-bg-secondary)",
        path: "M0,60 C480,110 960,20 1440,60 C1920,110 2400,20 2880,60 L2880,150 L0,150 Z",
      },
      {
        height: 130,
        opacity: 0.24,
        duration: 8,
        reverse: true,
        color: "var(--color-bg-accent)",
        path: "M0,40 C480,80 960,10 1440,40 C1920,80 2400,10 2880,40 L2880,130 L0,130 Z",
      },
    ],
  },

  preview: {
    waves: [
      {
        height: 170,
        opacity: 0.12,
        duration: 14,
        color: "var(--color-bg-secondary)",
        path: "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 C1680,100 1920,20 2160,60 C2400,100 2640,20 2880,60 L2880,170 L0,170 Z",
      },
      {
        height: 160,
        opacity: 0.10,
        duration: 12,
        reverse: true,
        color: "var(--color-bg-accent)",
        path: "M0,90 C360,50 720,130 1080,90 C1440,50 1800,130 2160,90 C2520,50 2760,130 2880,90 L2880,160 L0,160 Z",
      },
      {
        height: 120,
        opacity: 0.18,
        duration: 8,
        color: "var(--color-bg-accent)",
        path: "M0,40 C480,80 960,10 1440,40 C1920,80 2400,10 2880,40 L2880,120 L0,120 Z",
      },
    ],
  },

  thumbnail: {
    waves: [
      {
        height: 170,
        opacity: 0.16,
        duration: 12,
        color: "var(--color-bg-secondary)",
        path: "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 C1680,100 1920,20 2160,60 C2400,100 2640,20 2880,60 L2880,170 L0,170 Z",
      },
      {
        height: 160,
        opacity: 0.15,
        duration: 10,
        reverse: true,
        color: "var(--color-bg-accent)",
        path: "M0,90 C360,50 720,130 1080,90 C1440,50 1800,130 2160,90 C2520,50 2760,130 2880,90 L2880,160 L0,160 Z",
      },
      {
        height: 130,
        opacity: 0.28,
        duration: 7,
        color: "var(--color-bg-accent)",
        path: "M0,40 C480,80 960,10 1440,40 C1920,80 2400,10 2880,40 L2880,130 L0,130 Z",
      },
    ],
  },
} as const;

export default function OceanWaves({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes ow-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @keyframes ow-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      {config.waves.map((wave, index) => (
        <div
          key={index}
          className="absolute bottom-0 w-[200%]"
          style={{
            animation: `${wave.reverse ? "ow-right" : "ow-left"} ${wave.duration
              }s linear infinite`,
          }}
        >
          <svg
            viewBox={`0 0 2880 ${wave.height}`}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <path
              d={wave.path}
              fill={wave.color}
              fillOpacity={wave.opacity}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
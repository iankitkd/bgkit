import type { BackgroundProps } from "@/types";

type VariantConfig = {
  blur: number;
  curves: readonly {
    d: string;
    color: string;
    width: number;
    opacity: number;
  }[];
};

const CONFIG = {
  hero: {
    blur: 8,
    curves: [
      {
        d: "M0,450 Q360,150 720,450 Q1080,750 1440,450",
        color: "var(--color-bg-accent)",
        width: 120,
        opacity: 0.09,
      },
      {
        d: "M0,380 Q400,80 800,500 Q1100,820 1440,340",
        color: "var(--color-bg-secondary)",
        width: 88,
        opacity: 0.075,
      },
      {
        d: "M0,600 Q300,350 700,600 Q1100,860 1440,500",
        color: "var(--color-bg-accent-2)",
        width: 60,
        opacity: 0.06,
      },
      {
        d: "M0,500 Q500,200 900,600 Q1200,900 1440,420",
        color: "var(--color-bg-accent-3)",
        width: 36,
        opacity: 0.05,
      },
      {
        d: "M0,260 Q520,560 980,260 Q1220,120 1440,280",
        color: "var(--color-bg-accent)",
        width: 26,
        opacity: 0.03,
      },
    ],
  },

  preview: {
    blur: 5,
    curves: [
      {
        d: "M0,450 Q360,150 720,450 Q1080,750 1440,450",
        color: "var(--color-bg-accent)",
        width: 100,
        opacity: 0.07,
      },
      {
        d: "M0,380 Q400,80 800,500 Q1100,820 1440,340",
        color: "var(--color-bg-secondary)",
        width: 70,
        opacity: 0.06,
      },
      {
        d: "M0,600 Q300,350 700,600 Q1100,860 1440,500",
        color: "var(--color-bg-accent-2)",
        width: 50,
        opacity: 0.05,
      },
      {
        d: "M0,500 Q500,200 900,600 Q1200,900 1440,420",
        color: "var(--color-bg-accent-3)",
        width: 30,
        opacity: 0.04,
      },
    ],
  },

  thumbnail: {
    blur: 2,
    curves: [
      {
        d: "M0,450 Q360,150 720,450 Q1080,750 1440,450",
        color: "var(--color-bg-accent)",
        width: 130,
        opacity: 0.13,
      },
      {
        d: "M0,380 Q400,80 800,500 Q1100,820 1440,340",
        color: "var(--color-bg-secondary)",
        width: 92,
        opacity: 0.10,
      },
      {
        d: "M0,600 Q300,350 700,600 Q1100,860 1440,500",
        color: "var(--color-bg-accent-2)",
        width: 70,
        opacity: 0.08,
      },
    ],
  },
} as const;

export default function FlowingCurves({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: `blur(${config.blur}px)`,
        }}
      >
        {config.curves.map((curve, index) => (
          <path
            key={index}
            d={curve.d}
            stroke={curve.color}
            strokeWidth={curve.width}
            fill="none"
            opacity={curve.opacity}
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
}
import type { BackgroundProps } from "@/types";

type VariantConfig = {
  blur: number;
  opacity: number;
  strokeWidth: number;
};

const CONFIG = {
  hero: {
    blur: 18,
    opacity: 0.22,
    strokeWidth: 56,
  },
  preview: {
    blur: 14,
    opacity: 0.28,
    strokeWidth: 64,
  },
  thumbnail: {
    blur: 10,
    opacity: 0.36,
    strokeWidth: 74,
  },
} as const;

export default function AuroraRibbon({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="ar-blur">
            <feGaussianBlur stdDeviation={config.blur} />
          </filter>

          <linearGradient
            id="ar-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              stopColor="var(--color-bg-accent)"
            />
            <stop
              offset="35%"
              stopColor="var(--color-bg-secondary)"
            />
            <stop
              offset="65%"
              stopColor="var(--color-bg-accent-3)"
            />
            <stop
              offset="100%"
              stopColor="var(--color-bg-accent-2)"
            />
          </linearGradient>
        </defs>

        {/* Main ribbon */}

        <path
          d="
            M -120 340
            C 140 120
              380 520
              720 320
            S 1220 120
              1560 340
          "
          fill="none"
          stroke="url(#ar-gradient)"
          strokeWidth={config.strokeWidth}
          strokeLinecap="round"
          opacity={config.opacity}
          filter="url(#ar-blur)"
        />

        {/* Secondary ribbon */}

        <path
          d="
            M -120 520
            C 180 360
              520 700
              860 520
            S 1260 320
              1560 560
          "
          fill="none"
          stroke="url(#ar-gradient)"
          strokeWidth={config.strokeWidth * 0.65}
          strokeLinecap="round"
          opacity={config.opacity * 0.75}
          filter="url(#ar-blur)"
        />
      </svg>

      {/* Ambient glow */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgb(from var(--color-bg-secondary) r g b / 0.10), transparent 60%)",
        }}
      />

      {/* Top illumination */}

      <div
        className="absolute inset-x-0 top-0 h-[40%]"
        style={{
          background:
            "linear-gradient(to bottom, rgb(from var(--color-bg-foreground) r g b / 0.06), transparent)",
        }}
      />

      {/* Vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 46%, var(--color-bg-canvas) 100%)",
          opacity: 0.18,
        }}
      />
    </div>
  );
}
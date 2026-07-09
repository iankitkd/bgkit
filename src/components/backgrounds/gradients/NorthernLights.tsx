import type { BackgroundProps } from "@/types";

type VariantConfig = {
  opacity: number;
  blur: number;
  foldOpacity: number;
};

const CONFIG = {
  hero: {
    opacity: 0.42,
    blur: 80,
    foldOpacity: 0.10,
  },
  preview: {
    opacity: 0.50,
    blur: 65,
    foldOpacity: 0.13,
  },
  thumbnail: {
    opacity: 0.62,
    blur: 50,
    foldOpacity: 0.18,
  },
} as const;

export default function NorthernLights({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Sky */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-bg-canvas), rgb(from var(--color-bg-accent) r g b / 0.08))",
        }}
      />

      {/* Aurora curtains */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="nl-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="var(--color-bg-secondary)"
              stopOpacity="0"
            />
            <stop
              offset="18%"
              stopColor="var(--color-bg-secondary)"
              stopOpacity={config.opacity}
            />
            <stop
              offset="65%"
              stopColor="var(--color-bg-accent-3)"
              stopOpacity={config.opacity * 0.9}
            />
            <stop
              offset="100%"
              stopColor="var(--color-bg-accent)"
              stopOpacity="0"
            />
          </linearGradient>

          <filter id="nl-blur">
            <feGaussianBlur stdDeviation={config.blur} />
          </filter>
        </defs>

        <path
          d="
            M0 170
            C120 60 230 260 340 120
            C470 -10 600 240 720 100
            C850 -40 980 250 1100 110
            C1230 -20 1330 220 1440 90
            L1440 900
            L0 900
            Z
          "
          fill="url(#nl-gradient)"
          filter="url(#nl-blur)"
        />
      </svg>

      {/* Vertical folds */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.foldOpacity,
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 42px,
              var(--color-bg-foreground) 48px,
              transparent 54px
            )
          `,
        }}
      />

      {/* Horizon glow */}

      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background:
            "linear-gradient(to top, rgb(from var(--color-bg-secondary) r g b / 0.10), transparent)",
        }}
      />

      {/* Vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 48%, var(--color-bg-canvas) 100%)",
          opacity: 0.22,
        }}
      />
    </div>
  );
}
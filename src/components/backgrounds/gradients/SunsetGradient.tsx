import type { BackgroundProps } from "@/types";

type VariantConfig = {
  horizonOpacity: number;
  sunOpacity: number;
  glowOpacity: number;
};

const CONFIG = {
  hero: {
    horizonOpacity: 0.28,
    sunOpacity: 0.22,
    glowOpacity: 0.18,
  },
  preview: {
    horizonOpacity: 0.34,
    sunOpacity: 0.28,
    glowOpacity: 0.22,
  },
  thumbnail: {
    horizonOpacity: 0.42,
    sunOpacity: 0.36,
    glowOpacity: 0.28,
  },
} as const;

export default function SunsetGradient({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `
          linear-gradient(
            to bottom,
            var(--color-bg-canvas) 0%,
            var(--color-bg-accent) 58%,
            var(--color-bg-accent-2) 100%
          )
        `,
      }}
    >
      {/* Horizon glow */}

      <div
        className="absolute inset-x-0"
        style={{
          top: "62%",
          height: "28%",
          opacity: config.horizonOpacity,
          background: `
            linear-gradient(
              to bottom,
              var(--color-bg-secondary),
              transparent
            )
          `,
          filter: "blur(45px)",
        }}
      />

      {/* Soft sun */}

      <div
        className="absolute rounded-full"
        style={{
          left: "50%",
          top: "56%",
          width: "28%",
          aspectRatio: "1",
          transform: "translate(-50%, -50%)",
          background: `
            radial-gradient(
              circle,
              var(--color-bg-secondary),
              var(--color-bg-accent-2) 65%,
              transparent 100%
            )
          `,
          opacity: config.sunOpacity,
          filter: "blur(35px)",
        }}
      />

      {/* Sky glow */}

      <div
        className="absolute top-[-18%] left-1/2 h-[65%] w-[65%] -translate-x-1/2 rounded-full"
        style={{
          background: "var(--color-bg-accent)",
          filter: "blur(140px)",
          opacity: config.glowOpacity,
        }}
      />

      {/* Atmospheric vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 60%, transparent 45%, var(--color-bg-canvas) 100%)",
          opacity: 0.22,
        }}
      />
    </div>
  );
}
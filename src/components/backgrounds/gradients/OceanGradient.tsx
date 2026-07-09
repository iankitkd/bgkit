import type { BackgroundProps } from "@/types";

type VariantConfig = {
  beamOpacity: number;
  surfaceOpacity: number;
  glowOpacity: number;
};

const CONFIG = {
  hero: {
    beamOpacity: 0.10,
    surfaceOpacity: 0.20,
    glowOpacity: 0.18,
  },
  preview: {
    beamOpacity: 0.14,
    surfaceOpacity: 0.26,
    glowOpacity: 0.22,
  },
  thumbnail: {
    beamOpacity: 0.20,
    surfaceOpacity: 0.34,
    glowOpacity: 0.28,
  },
} as const;

export default function OceanGradient({
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
            var(--color-bg-secondary) 0%,
            var(--color-bg-accent) 40%,
            var(--color-bg-canvas) 100%
          )
        `,
      }}
    >
      {/* Surface glow */}

      <div
        className="absolute inset-x-0 top-0 h-[34%]"
        style={{
          opacity: config.surfaceOpacity,
          background: `
            linear-gradient(
              to bottom,
              var(--color-bg-foreground),
              transparent
            )
          `,
          filter: "blur(40px)",
        }}
      />

      {/* Light beam 1 */}

      <div
        className="absolute left-[-12%] top-[-15%] h-[150%] w-[24%]"
        style={{
          transform: "rotate(18deg)",
          opacity: config.beamOpacity,
          background:
            "linear-gradient(to right, transparent, var(--color-bg-foreground), transparent)",
          filter: "blur(55px)",
        }}
      />

      {/* Light beam 2 */}

      <div
        className="absolute left-[36%] top-[-12%] h-[150%] w-[18%]"
        style={{
          transform: "rotate(12deg)",
          opacity: config.beamOpacity * 0.8,
          background:
            "linear-gradient(to right, transparent, var(--color-bg-foreground), transparent)",
          filter: "blur(50px)",
        }}
      />

      {/* Deep water glow */}

      <div
        className="absolute bottom-[-30%] left-1/2 h-[70%] w-[80%] -translate-x-1/2 rounded-full"
        style={{
          background: "var(--color-bg-secondary)",
          filter: "blur(140px)",
          opacity: config.glowOpacity,
        }}
      />

      {/* Soft vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 40%, var(--color-bg-canvas) 100%)",
          opacity: 0.24,
        }}
      />
    </div>
  );
}
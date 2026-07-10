import type { BackgroundProps } from "@/types";

type VariantConfig = {
  beamOpacity: number;
  rainbowOpacity: number;
  glowOpacity: number;
};

const CONFIG = {
  hero: {
    beamOpacity: 0.12,
    rainbowOpacity: 0.18,
    glowOpacity: 0.08,
  },

  preview: {
    beamOpacity: 0.10,
    rainbowOpacity: 0.14,
    glowOpacity: 0.06,
  },

  thumbnail: {
    beamOpacity: 0.18,
    rainbowOpacity: 0.26,
    glowOpacity: 0.12,
  },
} as const;

export default function PrismRefraction({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* White light */}

      <div
        className="absolute"
        style={{
          left: "-12%",
          top: "-28%",
          width: "40%",
          height: "170%",
          opacity: config.beamOpacity,
          transform: "rotate(-26deg)",
          filter: "blur(30px)",
          background:
            "linear-gradient(to bottom, transparent, white 30%, white 70%, transparent)",
          mixBlendMode: "screen",
        }}
      />

      {/* Refraction */}

      <div
        className="absolute"
        style={{
          left: "20%",
          top: "-24%",
          width: "58%",
          height: "170%",
          opacity: config.rainbowOpacity,
          transform: "rotate(-26deg)",
          filter: "blur(26px)",
          background: `
            linear-gradient(
              to bottom,
              transparent,
              #ff4d6d 18%,
              #ffb703 32%,
              #8b5cf6 48%,
              #06b6d4 66%,
              transparent
            )
          `,
          mixBlendMode: "screen",
        }}
      />

      {/* Bloom */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(
              circle at 58% 42%,
              white 0%,
              transparent 22%
            )
          `,
          filter: "blur(90px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
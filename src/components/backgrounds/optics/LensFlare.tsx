import type { BackgroundProps } from "@/types";

type VariantConfig = {
  flareOpacity: number;
  ringOpacity: number;
  glowOpacity: number;
};

const CONFIG = {
  hero: {
    flareOpacity: 0.14,
    ringOpacity: 0.10,
    glowOpacity: 0.10,
  },

  preview: {
    flareOpacity: 0.11,
    ringOpacity: 0.08,
    glowOpacity: 0.08,
  },

  thumbnail: {
    flareOpacity: 0.22,
    ringOpacity: 0.14,
    glowOpacity: 0.15,
  },
} as const;

export default function LensFlare({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Main light source */}

      <div
        className="absolute rounded-full"
        style={{
          left: "18%",
          top: "18%",
          width: 220,
          height: 220,
          opacity: config.glowOpacity,
          background: "white",
          filter: "blur(70px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Lens rings */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle
          cx="180"
          cy="170"
          r="60"
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity={config.ringOpacity}
        />

        <circle
          cx="180"
          cy="170"
          r="95"
          fill="none"
          stroke="white"
          strokeWidth="0.8"
          opacity={config.ringOpacity * 0.6}
        />

        <circle
          cx="180"
          cy="170"
          r="135"
          fill="none"
          stroke="white"
          strokeWidth="0.6"
          opacity={config.ringOpacity * 0.4}
        />
      </svg>

      {/* Flare artifacts */}

      {[
        {
          left: "32%",
          top: "30%",
          size: 22,
          color: "var(--color-bg-accent)",
        },
        {
          left: "48%",
          top: "42%",
          size: 14,
          color: "white",
        },
        {
          left: "63%",
          top: "55%",
          size: 36,
          color: "var(--color-bg-secondary)",
        },
        {
          left: "77%",
          top: "68%",
          size: 18,
          color: "white",
        },
      ].map((flare, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: flare.left,
            top: flare.top,
            width: flare.size,
            height: flare.size,
            opacity: config.flareOpacity,
            background: flare.color,
            filter: "blur(6px)",
            mixBlendMode: "screen",
          }}
        />
      ))}

      {/* Horizontal light streak */}

      <div
        className="absolute"
        style={{
          left: "0%",
          top: "170px",
          width: "100%",
          height: "2px",
          opacity: config.flareOpacity * 0.8,
          background:
            "linear-gradient(to right, transparent, white 20%, white 50%, white 80%, transparent)",
          filter: "blur(2px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
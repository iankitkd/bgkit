import type { BackgroundProps } from "@/types";

type VariantConfig = {
  sunRadius: number;
  skyOpacity: number;
  floorOpacity: number;
  glowOpacity: number;
  rays: number;
};

const CONFIG = {
  hero: {
    sunRadius: 130,
    skyOpacity: 0.55,
    floorOpacity: 0.24,
    glowOpacity: 0.40,
    rays: 17,
  },
  preview: {
    sunRadius: 110,
    skyOpacity: 0.60,
    floorOpacity: 0.30,
    glowOpacity: 0.45,
    rays: 15,
  },
  thumbnail: {
    sunRadius: 90,
    skyOpacity: 0.68,
    floorOpacity: 0.38,
    glowOpacity: 0.55,
    rays: 13,
  },
} as const;

export default function RetroHorizonGrid({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const width = 1440;
  const height = 900;

  const horizon = 420;
  const center = width / 2;

  const rays = Array.from({ length: config.rays }, (_, i) => {
    const x = (width / (config.rays - 1)) * i;

    return (
      <line
        key={i}
        x1={x}
        y1={height}
        x2={center}
        y2={horizon}
        stroke="var(--color-bg-secondary)"
        strokeWidth="1"
        opacity={config.floorOpacity}
      />
    );
  });

  const horizontals = Array.from({ length: 16 }, (_, i) => {
    const t = i / 15;
    const y = height - Math.pow(t, 2.15) * (height - horizon);

    return (
      <line
        key={i}
        x1="0"
        y1={y}
        x2={width}
        y2={y}
        stroke="var(--color-bg-accent)"
        strokeWidth={i % 4 === 0 ? 1.6 : 1}
        opacity={i % 4 === 0 ? 0.32 : config.floorOpacity}
      />
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Sky */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.skyOpacity,
          background: `
            linear-gradient(
              to bottom,
              var(--color-bg-accent),
              var(--color-bg-accent-2) 35%,
              var(--color-bg-canvas) 72%
            )
          `,
        }}
      />

      {/* Can add Sun if required by commenting out this part of code*/}
      {/* <div
        className="absolute rounded-full"
        style={{
          left: "50%",
          top: `${horizon - config.sunRadius * 0.65}px`,
          width: `${config.sunRadius * 2}px`,
          height: `${config.sunRadius * 2}px`,
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, var(--color-bg-accent-2), var(--color-bg-accent))",
          opacity: 0.85,
          filter: "blur(2px)",
        }}
      /> */}

      {/* Horizon glow */}

      <div
        className="absolute inset-x-0"
        style={{
          top: `${horizon}px`,
          height: "2px",
          background: "var(--color-bg-accent-2)",
          boxShadow:
            "0 0 16px var(--color-bg-accent-2), 0 0 40px var(--color-bg-accent)",
          opacity: config.glowOpacity,
        }}
      />

      {/* Wireframe floor */}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${width} ${height}`}
      >
        {rays}
        {horizontals}
      </svg>

      {/* Bottom glow */}

      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background:
            "linear-gradient(to top, var(--color-bg-accent), transparent)",
          opacity: 0.12,
        }}
      />

      {/* Vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 45%, var(--color-bg-canvas) 100%)",
          opacity: 0.35,
        }}
      />
    </div>
  );
}
import type { BackgroundProps } from "@/types";

type VariantConfig = {
  lineOpacity: number;
  accentOpacity: number;
  strokeWidth: number;
};

const CONFIG = {
  hero: {
    lineOpacity: 0.18,
    accentOpacity: 0.30,
    strokeWidth: 1.2,
  },

  preview: {
    lineOpacity: 0.24,
    accentOpacity: 0.36,
    strokeWidth: 1,
  },

  thumbnail: {
    lineOpacity: 0.34,
    accentOpacity: 0.44,
    strokeWidth: 1,
  },
} as const;

export default function WireframeFloor({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const horizon = 330;
  const center = 720;

  const verticals = Array.from({ length: 21 }, (_, i) => {
    const x = i * 72;

    return (
      <line
        key={i}
        x1={x}
        y1={900}
        x2={center}
        y2={horizon}
        stroke="var(--color-bg-border)"
        strokeWidth={config.strokeWidth}
        opacity={config.lineOpacity}
      />
    );
  });

  const horizontals = [
    900,
    860,
    815,
    765,
    715,
    670,
    625,
    585,
    548,
    515,
    485,
    460,
    438,
    418,
    400,
    385,
    372,
    360,
    350,
    342,
  ].map((y, i) => (
    <line
      key={i}
      x1="0"
      y1={y}
      x2="1440"
      y2={y}
      stroke={i % 4 === 0 ? "var(--color-bg-accent)" : "var(--color-bg-border)"}
      strokeWidth={i % 4 === 0 ? 1.6 : config.strokeWidth}
      opacity={i % 4 === 0 ? config.accentOpacity : config.lineOpacity}
    />
  ));

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {verticals}
        {horizontals}
      </svg>

      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: "45%",
          background:
            "linear-gradient(to bottom,var(--color-bg-canvas),transparent)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 100%,transparent 45%,var(--color-bg-canvas) 100%)",
          opacity: 0.3,
        }}
      />
    </div>
  );
}
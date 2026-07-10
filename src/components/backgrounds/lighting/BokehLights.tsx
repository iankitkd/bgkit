import type { BackgroundProps } from "@/types";

type VariantConfig = {
  lightOpacity: readonly [number, number, number, number, number, number];
  glowOpacity: number;
  blur: number;
};

const CONFIG = {
  hero: {
    lightOpacity: [0.14, 0.12, 0.10, 0.08, 0.06, 0.05],
    glowOpacity: 0.08,
    blur: 6,
  },

  preview: {
    lightOpacity: [0.12, 0.10, 0.08, 0.07, 0.05, 0.04],
    glowOpacity: 0.06,
    blur: 5,
  },

  thumbnail: {
    lightOpacity: [0.20, 0.18, 0.15, 0.12, 0.10, 0.08],
    glowOpacity: 0.12,
    blur: 4,
  },
} as const;

const LIGHTS = [
  {
    left: "6%",
    top: "12%",
    size: 180,
    color: "var(--color-bg-accent)",
  },
  {
    left: "28%",
    top: "58%",
    size: 120,
    color: "var(--color-bg-secondary)",
  },
  {
    left: "52%",
    top: "18%",
    size: 220,
    color: "var(--color-bg-accent-2)",
  },
  {
    left: "72%",
    top: "46%",
    size: 150,
    color: "var(--color-bg-foreground)",
  },
  {
    left: "82%",
    top: "8%",
    size: 90,
    color: "var(--color-bg-accent-3)",
  },
  {
    left: "14%",
    top: "72%",
    size: 140,
    color: "var(--color-bg-border)",
  },
] as const;

export default function BokehLights({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {LIGHTS.map((light, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: light.left,
            top: light.top,
            width: light.size,
            height: light.size,
            opacity: config.lightOpacity[i],
            background: light.color,
            filter: `blur(${config.blur * 8}px)`,
            mixBlendMode: "screen",
          }}
        />
      ))}

      {/* Soft ambient glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(circle at 35% 30%, var(--color-bg-accent) 0%, transparent 32%),
            radial-gradient(circle at 68% 58%, var(--color-bg-secondary) 0%, transparent 28%)
          `,
          filter: "blur(90px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Subtle vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 55%, rgba(0,0,0,.20) 100%)",
        }}
      />
    </div>
  );
}
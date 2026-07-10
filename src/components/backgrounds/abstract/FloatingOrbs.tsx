import type { BackgroundProps } from "@/types";

type VariantConfig = {
  orbOpacity: readonly [number, number, number, number, number];
  glowOpacity: number;
  blur: number;
};

const CONFIG = {
  hero: {
    orbOpacity: [0.18, 0.15, 0.13, 0.11, 0.08],
    glowOpacity: 0.08,
    blur: 50,
  },

  preview: {
    orbOpacity: [0.15, 0.13, 0.11, 0.09, 0.07],
    glowOpacity: 0.06,
    blur: 40,
  },

  thumbnail: {
    orbOpacity: [0.26, 0.22, 0.18, 0.15, 0.12],
    glowOpacity: 0.12,
    blur: 32,
  },
} as const;

const ORBS = [
  {
    left: "-6%",
    top: "8%",
    size: 260,
    color: "var(--color-bg-accent)",
  },
  {
    left: "24%",
    top: "58%",
    size: 180,
    color: "var(--color-bg-secondary)",
  },
  {
    left: "56%",
    top: "14%",
    size: 220,
    color: "var(--color-bg-accent-2)",
  },
  {
    right: "-5%",
    top: "42%",
    size: 280,
    color: "var(--color-bg-accent-3)",
  },
  {
    left: "42%",
    bottom: "-18%",
    size: 240,
    color: "var(--color-bg-foreground)",
  },
] as const;

export default function FloatingOrbs({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            ...orb,
            width: orb.size,
            height: orb.size,
            opacity: config.orbOpacity[i],
            background: orb.color,
            filter: `blur(${config.blur}px)`,
            mixBlendMode: "screen",
          }}
        />
      ))}

      {/* Soft central bloom */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(
              circle at center,
              white 0%,
              transparent 34%
            )
          `,
          filter: "blur(100px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Subtle vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 55%, rgba(0,0,0,.16) 85%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
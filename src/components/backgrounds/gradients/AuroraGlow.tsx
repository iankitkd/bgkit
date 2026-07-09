import type { BackgroundProps } from "@/types";

type Curtain = {
  left: string;
  width: string;
  color: string;
  opacity: number;
};

type VariantConfig = {
  blur: number;
  glowOpacity: number;
  curtains: readonly Curtain[];
};

const CONFIG = {
  hero: {
    blur: 120,
    glowOpacity: 0.14,
    curtains: [
      { left: "-6%", width: "28%", color: "var(--color-bg-accent)", opacity: 0.34 },
      { left: "18%", width: "24%", color: "var(--color-bg-secondary)", opacity: 0.30 },
      { left: "46%", width: "26%", color: "var(--color-bg-accent-3)", opacity: 0.28 },
      { left: "72%", width: "30%", color: "var(--color-bg-accent-2)", opacity: 0.26 },
    ],
  },

  preview: {
    blur: 95,
    glowOpacity: 0.18,
    curtains: [
      { left: "-6%", width: "28%", color: "var(--color-bg-accent)", opacity: 0.42 },
      { left: "18%", width: "24%", color: "var(--color-bg-secondary)", opacity: 0.38 },
      { left: "46%", width: "26%", color: "var(--color-bg-accent-3)", opacity: 0.34 },
      { left: "72%", width: "30%", color: "var(--color-bg-accent-2)", opacity: 0.32 },
    ],
  },

  thumbnail: {
    blur: 70,
    glowOpacity: 0.24,
    curtains: [
      { left: "-6%", width: "28%", color: "var(--color-bg-accent)", opacity: 0.50 },
      { left: "18%", width: "24%", color: "var(--color-bg-secondary)", opacity: 0.46 },
      { left: "46%", width: "26%", color: "var(--color-bg-accent-3)", opacity: 0.42 },
      { left: "72%", width: "30%", color: "var(--color-bg-accent-2)", opacity: 0.40 },
    ],
  },
} as const;

export default function AuroraGlow({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Aurora curtains */}

      {config.curtains.map((curtain, index) => (
        <div
          key={index}
          className="absolute top-[-20%] h-[140%]"
          style={{
            left: curtain.left,
            width: curtain.width,
            background: `linear-gradient(
              to bottom,
              transparent 0%,
              ${curtain.color} 25%,
              ${curtain.color} 75%,
              transparent 100%
            )`,
            opacity: curtain.opacity,
            filter: `blur(${config.blur}px)`,
            transform: `rotate(${index % 2 === 0 ? -10 : 10}deg)`,
          }}
        />
      ))}

      {/* Top atmospheric glow */}

      <div
        className="absolute inset-x-0 top-0 h-[45%]"
        style={{
          background:
            "linear-gradient(to bottom, rgb(from var(--color-bg-foreground) r g b / 0.08), transparent)",
        }}
      />

      {/* Soft central bloom */}

      <div
        className="absolute left-1/2 top-[25%] h-[50%] w-[70%] -translate-x-1/2 rounded-full"
        style={{
          background: "var(--color-bg-secondary)",
          opacity: config.glowOpacity,
          filter: "blur(120px)",
        }}
      />

      {/* Gentle vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 45%, var(--color-bg-canvas) 100%)",
          opacity: 0.18,
        }}
      />
    </div>
  );
}
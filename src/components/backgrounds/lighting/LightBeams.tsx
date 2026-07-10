import type { BackgroundProps } from "@/types";

type VariantConfig = {
  beamOpacity: number;
  glowOpacity: number;
  blur: number;
};

const CONFIG = {
  hero: {
    beamOpacity: 0.12,
    glowOpacity: 0.1,
    blur: 26,
  },

  preview: {
    beamOpacity: 0.1,
    glowOpacity: 0.08,
    blur: 22,
  },

  thumbnail: {
    beamOpacity: 0.18,
    glowOpacity: 0.15,
    blur: 18,
  },
} as const;

const BEAMS = [
  {
    left: "-8%",
    width: "18%",
    rotate: -18,
    color: "var(--color-bg-accent)",
  },
  {
    left: "20%",
    width: "14%",
    rotate: -10,
    color: "var(--color-bg-secondary)",
  },
  {
    left: "44%",
    width: "22%",
    rotate: 0,
    color: "var(--color-bg-foreground)",
  },
  {
    left: "68%",
    width: "16%",
    rotate: 12,
    color: "var(--color-bg-accent-2)",
  },
  {
    left: "88%",
    width: "18%",
    rotate: 20,
    color: "var(--color-bg-accent-3)",
  },
] as const;

export default function LightBeams({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Vertical light beams */}

      {BEAMS.map((beam, i) => (
        <div
          key={i}
          className="absolute top-[-20%] h-[140%]"
          style={{
            left: beam.left,
            width: beam.width,
            opacity: config.beamOpacity,
            transform: `rotate(${beam.rotate}deg)`,
            filter: `blur(${config.blur}px)`,
            background: `linear-gradient(
              to bottom,
              transparent 0%,
              ${beam.color} 18%,
              ${beam.color} 50%,
              transparent 100%
            )`,
            mixBlendMode: "screen",
          }}
        />
      ))}

      {/* Central glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(circle at 50% 18%,
              var(--color-bg-foreground) 0%,
              transparent 30%),

            radial-gradient(circle at 52% 42%,
              var(--color-bg-accent) 0%,
              transparent 36%)
          `,
          filter: "blur(70px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Soft vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,.28) 100%)",
        }}
      />
    </div>
  );
}
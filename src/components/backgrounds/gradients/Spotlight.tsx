import type { BackgroundProps } from "@/types";

type VariantConfig = {
  beamOpacity: number;
  glowOpacity: number;
  blur: number;
  vignette: number;
};

const CONFIG = {
  hero: {
    beamOpacity: 0.22,
    glowOpacity: 0.26,
    blur: 110,
    vignette: 0.22,
  },
  preview: {
    beamOpacity: 0.28,
    glowOpacity: 0.32,
    blur: 90,
    vignette: 0.26,
  },
  thumbnail: {
    beamOpacity: 0.36,
    glowOpacity: 0.40,
    blur: 70,
    vignette: 0.32,
  },
} as const;

export default function Spotlight({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Base illumination */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 58%,
              rgb(from var(--color-bg-secondary) r g b / 0.18),
              transparent 65%
            )
          `,
        }}
      />

      {/* Spotlight beam */}

      <div
        className="absolute left-1/2 top-[-18%] origin-top -translate-x-1/2"
        style={{
          width: "70%",
          height: "140%",
          clipPath: "polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)",
          background:
            "linear-gradient(to bottom, var(--color-bg-foreground), transparent)",
          opacity: config.beamOpacity,
          filter: `blur(${config.blur}px)`,
        }}
      />

      {/* Spotlight pool */}

      <div
        className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "44%",
          aspectRatio: "1",
          background: "var(--color-bg-accent)",
          opacity: config.glowOpacity,
          filter: `blur(${config.blur}px)`,
        }}
      />

      {/* Hot center */}

      <div
        className="absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "16%",
          aspectRatio: "1",
          background: "var(--color-bg-foreground)",
          opacity: config.glowOpacity * 0.6,
          filter: `blur(${config.blur * 0.55}px)`,
        }}
      />

      {/* Atmospheric lighting */}

      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgb(from var(--color-bg-foreground) r g b / 0.08),
              transparent 30%
            )
          `,
        }}
      />

      {/* Edge vignette */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.vignette,
          background:
            "radial-gradient(circle, transparent 42%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
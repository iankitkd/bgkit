import type { BackgroundProps } from "@/types";

type VariantConfig = {
  angle: number;
  accentStop: number;
  secondaryStop: number;
  overlayOpacity: number;
  glowOpacity: number;
};

const CONFIG = {
  hero: {
    angle: 135,
    accentStop: 35,
    secondaryStop: 100,
    overlayOpacity: 0.12,
    glowOpacity: 0.16,
  },
  preview: {
    angle: 135,
    accentStop: 38,
    secondaryStop: 100,
    overlayOpacity: 0.14,
    glowOpacity: 0.20,
  },
  thumbnail: {
    angle: 135,
    accentStop: 42,
    secondaryStop: 100,
    overlayOpacity: 0.18,
    glowOpacity: 0.26,
  },
} as const;

export default function LinearGradient({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `
          linear-gradient(
            ${config.angle}deg,
            var(--color-bg-canvas) 0%,
            var(--color-bg-accent) ${config.accentStop}%,
            var(--color-bg-secondary) ${config.secondaryStop}%
          )
        `,
      }}
    >
      {/* Soft lighting */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.overlayOpacity,
          background: `
            linear-gradient(
              180deg,
              rgb(from var(--color-bg-foreground) r g b / 0.28),
              transparent 45%
            )
          `,
        }}
      />

      {/* Corner glow */}

      <div
        className="absolute left-[-20%] top-[-20%] h-[70%] w-[70%] rounded-full"
        style={{
          background: "var(--color-bg-foreground)",
          filter: "blur(120px)",
          opacity: config.glowOpacity,
        }}
      />

      {/* Bottom vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgb(from var(--color-bg-canvas) r g b / 0.35), transparent 40%)",
        }}
      />
    </div>
  );
}
import type { BackgroundProps } from "@/types";

type VariantConfig = {
  meshOpacity: number;
  gridOpacity: number;
  glowOpacity: number;
};

const CONFIG = {
  hero: {
    meshOpacity: 0.22,
    gridOpacity: 0.10,
    glowOpacity: 0.08,
  },

  preview: {
    meshOpacity: 0.18,
    gridOpacity: 0.08,
    glowOpacity: 0.06,
  },

  thumbnail: {
    meshOpacity: 0.30,
    gridOpacity: 0.16,
    glowOpacity: 0.12,
  },
} as const;

export default function VignetteGradientMesh({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Gradient mesh */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.meshOpacity,
          background: `
            radial-gradient(circle at 22% 28%, var(--color-bg-accent) 0%, transparent 34%),
            radial-gradient(circle at 78% 26%, var(--color-bg-secondary) 0%, transparent 30%),
            radial-gradient(circle at 42% 76%, var(--color-bg-accent-2) 0%, transparent 32%),
            radial-gradient(circle at 82% 72%, var(--color-bg-accent-3) 0%, transparent 28%)
          `,
          filter: "blur(70px)",
          maskImage:
            "radial-gradient(circle at center, black 26%, rgba(0,0,0,.96) 48%, rgba(0,0,0,.55) 72%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 26%, rgba(0,0,0,.96) 48%, rgba(0,0,0,.55) 72%, transparent 100%)",
        }}
      />

      {/* Technical grid */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.gridOpacity,
          backgroundImage: `
            linear-gradient(var(--color-bg-border) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-bg-border) 1px, transparent 1px)
          `,
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(circle at center, black 28%, rgba(0,0,0,.96) 50%, rgba(0,0,0,.5) 74%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 28%, rgba(0,0,0,.96) 50%, rgba(0,0,0,.5) 74%, transparent 100%)",
        }}
      />

      {/* Center spotlight */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background:
            "radial-gradient(circle at center, white 0%, transparent 42%)",
          filter: "blur(90px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
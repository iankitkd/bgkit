import type { BackgroundProps } from "@/types";

type VariantConfig = {
  bloomOpacity: number;
  highlightOpacity: number;
  starOpacity: number;
};

const CONFIG = {
  hero: {
    bloomOpacity: 0.16,
    highlightOpacity: 0.08,
    starOpacity: 0.18,
  },
  preview: {
    bloomOpacity: 0.22,
    highlightOpacity: 0.12,
    starOpacity: 0.24,
  },
  thumbnail: {
    bloomOpacity: 0.30,
    highlightOpacity: 0.16,
    starOpacity: 0.34,
  },
} as const;

const STARS = [
  { left: "14%", top: "18%", size: 2 },
  { left: "28%", top: "34%", size: 1.5 },
  { left: "46%", top: "14%", size: 2 },
  { left: "62%", top: "28%", size: 1.5 },
  { left: "80%", top: "20%", size: 2 },
  { left: "72%", top: "42%", size: 1.5 },
  { left: "22%", top: "54%", size: 2 },
  { left: "90%", top: "62%", size: 1.5 },
] as const;

export default function MidnightGradient({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `
          linear-gradient(
            180deg,
            var(--color-bg-canvas) 0%,
            rgb(from var(--color-bg-accent) r g b / 0.55) 55%,
            rgb(from var(--color-bg-canvas) r g b / 1) 100%
          )
        `,
      }}
    >
      {/* Deep bloom */}

      <div
        className="absolute left-1/2 top-[42%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "var(--color-bg-accent)",
          filter: "blur(140px)",
          opacity: config.bloomOpacity,
        }}
      />

      {/* Soft top light */}

      <div
        className="absolute inset-x-0 top-0 h-[35%]"
        style={{
          opacity: config.highlightOpacity,
          background:
            "linear-gradient(to bottom, var(--color-bg-foreground), transparent)",
        }}
      />

      {/* Stars */}

      {STARS.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            background: "var(--color-bg-foreground)",
            opacity: config.starOpacity,
            boxShadow:
              "0 0 6px rgb(from var(--color-bg-foreground) r g b / 0.35)",
          }}
        />
      ))}

      {/* Edge vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 45%, var(--color-bg-canvas) 100%)",
          opacity: 0.28,
        }}
      />
    </div>
  );
}
import type { BackgroundProps } from "@/types";

type VariantConfig = {
  scanDuration: number;
  lineOpacity: number;
  accentOpacity: number;
  gridOpacity: number;
};

const CONFIG = {
  hero: {
    scanDuration: 6,
    lineOpacity: 0.16,
    accentOpacity: 0.42,
    gridOpacity: 0.18,
  },

  preview: {
    scanDuration: 5,
    lineOpacity: 0.22,
    accentOpacity: 0.48,
    gridOpacity: 0.24,
  },

  thumbnail: {
    scanDuration: 4,
    lineOpacity: 0.30,
    accentOpacity: 0.58,
    gridOpacity: 0.32,
  },
} as const;

export default function CyberGrid({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes cg-scan {
          from {
            transform: translateY(-10%);
          }
          to {
            transform: translateY(110%);
          }
        }

        @keyframes cg-pulse {
          0%,100% {
            opacity:.18;
          }

          50% {
            opacity:.42;
          }
        }
      `}</style>

      {/* Ambient glow */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center,var(--color-bg-secondary),transparent 60%)",
          opacity: .08,
        }}
      />

      {/* HUD grid */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.gridOpacity,
          backgroundImage: `
            linear-gradient(var(--color-bg-border) 1px, transparent 1px),
            linear-gradient(90deg,var(--color-bg-border) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Major guide lines */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.lineOpacity,
          backgroundImage: `
            linear-gradient(var(--color-bg-secondary) 2px, transparent 2px),
            linear-gradient(90deg,var(--color-bg-secondary) 2px, transparent 2px)
          `,
          backgroundSize: "192px 192px",
        }}
      />

      {/* Crosshair */}

      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          width: 110,
          height: 110,
          borderColor: `rgb(from var(--color-bg-accent) r g b / ${config.accentOpacity})`,
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-px -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 220,
          background: "var(--color-bg-accent)",
          opacity: config.accentOpacity,
        }}
      />

      <div
        className="absolute left-1/2 top-1/2 w-px -translate-x-1/2 -translate-y-1/2"
        style={{
          height: 220,
          background: "var(--color-bg-accent)",
          opacity: config.accentOpacity,
        }}
      />

      {/* Corner brackets */}

      {[
        ["top-8", "left-8"],
        ["top-8", "right-8"],
        ["bottom-8", "left-8"],
        ["bottom-8", "right-8"],
      ].map(([y, x], i) => (
        <div
          key={i}
          className={`absolute ${y} ${x} h-10 w-10`}
          style={{
            borderTop:
              y.startsWith("top")
                ? "2px solid var(--color-bg-secondary)"
                : undefined,
            borderBottom:
              y.startsWith("bottom")
                ? "2px solid var(--color-bg-secondary)"
                : undefined,
            borderLeft:
              x.startsWith("left")
                ? "2px solid var(--color-bg-secondary)"
                : undefined,
            borderRight:
              x.startsWith("right")
                ? "2px solid var(--color-bg-secondary)"
                : undefined,
            opacity: .45,
          }}
        />
      ))}

      {/* Scan line */}

      <div
        className="absolute inset-x-0 h-px"
        style={{
          background: "var(--color-bg-accent)",
          boxShadow: "0 0 18px var(--color-bg-accent)",
          animation: `cg-scan ${config.scanDuration}s linear infinite`,
        }}
      />

      {/* Pulsing nodes */}

      {[
        ["22%", "18%"],
        ["75%", "28%"],
        ["60%", "82%"],
        ["28%", "70%"],
      ].map(([top, left], i) => (
        <div
          key={i}
          className="absolute rounded-full bg-bg-secondary"
          style={{
            top,
            left,
            width: 6,
            height: 6,
            animation: "cg-pulse 2.5s ease-in-out infinite",
          }}
        />
      ))}

      {/* Vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle,transparent 45%,var(--color-bg-canvas) 100%)",
          opacity: .32,
        }}
      />
    </div>
  );
}
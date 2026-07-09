import type { BackgroundProps } from "@/types";

type VariantConfig = {
  sheenOpacity: number;
  glowOpacity: number;
  edgeOpacity: number;
  facetOpacity: readonly [number, number, number, number, number];
};

const CONFIG = {
  hero: {
    sheenOpacity: 0.14,
    glowOpacity: 0.10,
    edgeOpacity: 0.28,
    facetOpacity: [0.10, 0.08, 0.07, 0.06, 0.14],
  },

  preview: {
    sheenOpacity: 0.11,
    glowOpacity: 0.08,
    edgeOpacity: 0.22,
    facetOpacity: [0.08, 0.07, 0.06, 0.05, 0.12],
  },

  thumbnail: {
    sheenOpacity: 0.18,
    glowOpacity: 0.14,
    edgeOpacity: 0.36,
    facetOpacity: [0.12, 0.10, 0.08, 0.07, 0.18],
  },
} as const;

export default function CrystalGlass({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Crystal facets */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="0,0 400,180 0,380"
          fill="var(--color-bg-accent)"
          fillOpacity={config.facetOpacity[0]}
        />

        <polygon
          points="800,0 400,180 800,380"
          fill="var(--color-bg-secondary)"
          fillOpacity={config.facetOpacity[1]}
        />

        <polygon
          points="160,0 640,0 400,260"
          fill="var(--color-bg-accent-2)"
          fillOpacity={config.facetOpacity[2]}
        />

        <polygon
          points="0,380 400,600 800,380 400,180"
          fill="var(--color-bg-accent-3)"
          fillOpacity={config.facetOpacity[3]}
        />

        <polygon
          points="0,600 400,420 800,600"
          fill="var(--color-bg-border)"
          fillOpacity={config.facetOpacity[4]}
        />

        {/* Facet edges */}

        <line
          x1="0"
          y1="0"
          x2="400"
          y2="180"
          stroke="var(--color-bg-border)"
          strokeWidth="1"
          opacity={config.edgeOpacity}
        />

        <line
          x1="800"
          y1="0"
          x2="400"
          y2="180"
          stroke="var(--color-bg-border)"
          strokeWidth="1"
          opacity={config.edgeOpacity}
        />

        <line
          x1="0"
          y1="380"
          x2="400"
          y2="180"
          stroke="var(--color-bg-border)"
          strokeWidth="1"
          opacity={config.edgeOpacity * 0.75}
        />

        <line
          x1="800"
          y1="380"
          x2="400"
          y2="180"
          stroke="var(--color-bg-border)"
          strokeWidth="1"
          opacity={config.edgeOpacity * 0.75}
        />

        <line
          x1="0"
          y1="600"
          x2="400"
          y2="420"
          stroke="var(--color-bg-border)"
          strokeWidth="1"
          opacity={config.edgeOpacity * 0.55}
        />

        <line
          x1="800"
          y1="600"
          x2="400"
          y2="420"
          stroke="var(--color-bg-border)"
          strokeWidth="1"
          opacity={config.edgeOpacity * 0.55}
        />

        <line
          x1="400"
          y1="180"
          x2="400"
          y2="420"
          stroke="var(--color-bg-border)"
          strokeWidth="1"
          opacity={config.edgeOpacity * 0.7}
        />
      </svg>

      {/* Soft crystal glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background:
            "radial-gradient(circle at 50% 42%, white 0%, transparent 42%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Glass highlight */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.sheenOpacity,
          background:
            "linear-gradient(135deg, var(--color-bg-foreground) 0%, rgba(255,255,255,.35) 14%, transparent 46%)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
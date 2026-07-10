import type { BackgroundProps } from "@/types";

type VariantConfig = {
  facetOpacity: readonly [number, number, number, number, number];
  edgeOpacity: number;
  shadowOpacity: number;
  highlightOpacity: number;
};

const CONFIG = {
  hero: {
    facetOpacity: [0.08, 0.06, 0.05, 0.04, 0.10],
    edgeOpacity: 0.14,
    shadowOpacity: 0.10,
    highlightOpacity: 0.08,
  },

  preview: {
    facetOpacity: [0.06, 0.05, 0.04, 0.03, 0.08],
    edgeOpacity: 0.12,
    shadowOpacity: 0.08,
    highlightOpacity: 0.06,
  },

  thumbnail: {
    facetOpacity: [0.12, 0.10, 0.08, 0.06, 0.16],
    edgeOpacity: 0.22,
    shadowOpacity: 0.14,
    highlightOpacity: 0.12,
  },
} as const;

export default function PaperFold({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Paper facets */}

        <polygon
          points="0,0 320,170 0,360"
          fill="var(--color-bg-surface)"
          fillOpacity={config.facetOpacity[0]}
        />

        <polygon
          points="320,170 800,0 800,220"
          fill="var(--color-bg-surface-2)"
          fillOpacity={config.facetOpacity[1]}
        />

        <polygon
          points="0,360 320,170 430,370 170,600"
          fill="var(--color-bg-surface-3)"
          fillOpacity={config.facetOpacity[2]}
        />

        <polygon
          points="320,170 800,220 620,600 430,370"
          fill="var(--color-bg-surface)"
          fillOpacity={config.facetOpacity[3]}
        />

        <polygon
          points="170,600 620,600 430,370"
          fill="var(--color-bg-border)"
          fillOpacity={config.facetOpacity[4]}
        />

        {/* Fold lines */}

        {[
          ["320", "170", "0", "360"],
          ["320", "170", "800", "220"],
          ["320", "170", "430", "370"],
          ["430", "370", "170", "600"],
          ["430", "370", "620", "600"],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--color-bg-border)"
            strokeWidth="1"
            opacity={config.edgeOpacity}
          />
        ))}
      </svg>

      {/* Soft shadow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.shadowOpacity,
          background:
            "linear-gradient(135deg, transparent 25%, rgba(0,0,0,.45) 65%, transparent 100%)",
          mixBlendMode: "multiply",
        }}
      />

      {/* Paper highlight */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.highlightOpacity,
          background:
            "linear-gradient(315deg, rgba(255,255,255,.35) 0%, transparent 28%, transparent 100%)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
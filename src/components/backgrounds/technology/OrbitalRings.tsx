import type { BackgroundProps } from "@/types";

type VariantConfig = {
  ringOpacity: number;
  glowOpacity: number;
  centerOpacity: number;
};

const CONFIG = {
  hero: {
    ringOpacity: 0.18,
    glowOpacity: 0.08,
    centerOpacity: 0.14,
  },

  preview: {
    ringOpacity: 0.15,
    glowOpacity: 0.06,
    centerOpacity: 0.11,
  },

  thumbnail: {
    ringOpacity: 0.28,
    glowOpacity: 0.12,
    centerOpacity: 0.18,
  },
} as const;

const RINGS = [
  {
    rx: 240,
    ry: 110,
    rotate: -18,
    start: 18,
    end: 322,
    width: 1.4,
  },
  {
    rx: 185,
    ry: 85,
    rotate: 28,
    start: 42,
    end: 288,
    width: 1.2,
  },
  {
    rx: 145,
    ry: 62,
    rotate: -48,
    start: 70,
    end: 310,
    width: 1,
  },
  {
    rx: 105,
    ry: 46,
    rotate: 72,
    start: 120,
    end: 342,
    width: 1,
  },
] as const;

function arcPath(
  cx: number,
  cy: number,
  rx: number,
  ry: number,
  start: number,
  end: number
) {
  const toRad = Math.PI / 180;

  const x1 = cx + rx * Math.cos(start * toRad);
  const y1 = cy + ry * Math.sin(start * toRad);

  const x2 = cx + rx * Math.cos(end * toRad);
  const y2 = cy + ry * Math.sin(end * toRad);

  const largeArc = end - start > 180 ? 1 : 0;

  return `
    M ${x1} ${y1}
    A ${rx} ${ry}
      0
      ${largeArc}
      1
      ${x2}
      ${y2}
  `;
}

export default function OrbitalRings({
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
        <defs>
          <radialGradient id="orbitFade">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity=".9" />
            <stop offset="100%" stopColor="white" stopOpacity=".2" />
          </radialGradient>

          <filter id="orbitBlur">
            <feGaussianBlur stdDeviation="0.35" />
          </filter>
        </defs>

        {/* Broken orbital rings */}

        {RINGS.map((ring, i) => (
          <path
            key={i}
            d={arcPath(
              400,
              300,
              ring.rx,
              ring.ry,
              ring.start,
              ring.end
            )}
            transform={`rotate(${ring.rotate} 400 300)`}
            fill="none"
            stroke="url(#orbitFade)"
            strokeWidth={ring.width}
            opacity={config.ringOpacity}
            strokeLinecap="round"
            filter="url(#orbitBlur)"
          />
        ))}

        {/* Orbit particles */}

        <circle
          cx="565"
          cy="220"
          r="2.5"
          fill="var(--color-bg-accent)"
        />

        <circle
          cx="470"
          cy="132"
          r="2"
          fill="var(--color-bg-secondary)"
        />

        <circle
          cx="300"
          cy="425"
          r="2"
          fill="var(--color-bg-accent-2)"
        />

        <circle
          cx="605"
          cy="360"
          r="1.8"
          fill="var(--color-bg-accent-3)"
        />

        {/* Central nucleus */}

        <circle
          cx="400"
          cy="300"
          r="4"
          fill="white"
          opacity={config.centerOpacity}
        />

        <circle
          cx="400"
          cy="300"
          r="14"
          fill="white"
          opacity={config.centerOpacity * 0.2}
        />
      </svg>

      {/* Ambient glow */}

      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background: `
            radial-gradient(circle at center,
              var(--color-bg-accent) 0%,
              transparent 20%),

            radial-gradient(circle at center,
              var(--color-bg-secondary) 0%,
              transparent 36%)
          `,
          filter: "blur(80px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Soft vignette */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 58%, rgba(0,0,0,.15) 86%, var(--color-bg-canvas) 100%)",
        }}
      />
    </div>
  );
}
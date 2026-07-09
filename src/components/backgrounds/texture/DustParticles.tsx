import type { BackgroundProps } from "@/types";

type VariantConfig = {
  count: number;
  size: number;
  opacity: number;
  travel: number;
  drift: number;
};

const CONFIG = {
  hero: {
    count: 60,
    size: 1.2,
    opacity: 0.45,
    travel: 54,
    drift: 10,
  },

  preview: {
    count: 42,
    size: 1,
    opacity: 0.40,
    travel: 42,
    drift: 8,
  },

  thumbnail: {
    count: 24,
    size: 1.6,
    opacity: 0.55,
    travel: 28,
    drift: 6,
  },
} as const;

export default function DustParticles({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant];

  const particles = Array.from({ length: config.count }, (_, i) => ({
    id: i,
    left: ((i * 37 + 13) % 97) + 1.5,
    top: ((i * 53 + 7) % 93) + 3.5,
    size: ((i % 3) * 0.6 + 0.5) * config.size,
    delay: ((i * 0.31) % 5).toFixed(2),
    duration: (4 + (i % 6)).toFixed(1),
    driftX: ((i % 5) - 2) * config.drift,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes dp-float {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0);
          }

          12% {
            opacity: var(--dp-opacity);
          }

          85% {
            opacity: calc(var(--dp-opacity) * .45);
          }

          100% {
            opacity: 0;
            transform:
              translateY(calc(var(--dp-travel) * -1px))
              translateX(var(--dp-drift));
          }
        }
      `}</style>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-bg-foreground"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,

            ["--dp-drift" as string]: `${particle.driftX}px`,
            ["--dp-travel" as string]: `${config.travel}`,
            ["--dp-opacity" as string]: `${config.opacity}`,

            animation: `dp-float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
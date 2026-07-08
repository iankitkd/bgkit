export default function VignetteGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Center glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse 60% 55% at 50% 50%, var(--color-bg-accent), transparent)`,
        }}
      />
      {/* Subtle secondary shimmer */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: `radial-gradient(ellipse 30% 25% at 50% 50%, var(--color-bg-secondary), transparent)`,
        }}
      />
      {/* Vignette overlay — dark edges */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 75% at 50% 50%, transparent 35%, var(--color-bg-canvas) 90%)`,
        }}
      />
    </div>
  );
}

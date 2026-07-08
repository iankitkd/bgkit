export default function RadialGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Primary center glow */}
      <div
        className="absolute inset-0 opacity-55"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 50% 50%, var(--color-bg-accent), transparent)`,
        }}
      />
      {/* Secondary inner glow */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: `radial-gradient(ellipse 35% 30% at 50% 50%, var(--color-bg-secondary), transparent)`,
        }}
      />
      {/* Edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 40%, var(--color-bg-canvas) 85%)`,
        }}
      />
    </div>
  );
}

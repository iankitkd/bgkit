export default function SoftAurora() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Very subtle wide aurora wash */}
      <div
        className="absolute inset-0 opacity-22"
        style={{
          background: `radial-gradient(ellipse 90% 45% at 50% 30%, var(--color-bg-accent), transparent)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: `radial-gradient(ellipse 70% 35% at 35% 40%, var(--color-bg-secondary), transparent)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-12"
        style={{
          background: `radial-gradient(ellipse 55% 28% at 65% 38%, var(--color-bg-accent-2), transparent)`,
        }}
      />
      {/* Edge dark-out */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 45%, var(--color-bg-canvas) 95%)`,
        }}
      />
    </div>
  );
}

export default function Spotlight() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Main spotlight cone */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          background: `radial-gradient(ellipse 55% 60% at 50% -5%, var(--color-bg-accent), transparent 70%)`,
        }}
      />
      {/* Bright core highlight */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: `radial-gradient(ellipse 25% 25% at 50% 0%, var(--color-bg-foreground), transparent 60%)`,
        }}
      />
      {/* Floor reflection */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(ellipse 40% 20% at 50% 100%, var(--color-bg-accent), transparent)`,
        }}
      />
    </div>
  );
}

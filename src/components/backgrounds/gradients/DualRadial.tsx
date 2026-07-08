export default function DualRadial() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Top-left glow */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(ellipse 65% 55% at 20% 25%, var(--color-bg-accent), transparent)`,
        }}
      />
      {/* Bottom-right glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse 65% 55% at 80% 75%, var(--color-bg-secondary), transparent)`,
        }}
      />
      {/* Center blend */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: `radial-gradient(ellipse 40% 30% at 50% 50%, var(--color-bg-accent-2), transparent)`,
        }}
      />
    </div>
  );
}

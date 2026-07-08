export default function CornerRadial() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Top-left */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse 55% 50% at 0% 0%, var(--color-bg-accent), transparent)`,
        }}
      />
      {/* Top-right */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse 55% 50% at 100% 0%, var(--color-bg-secondary), transparent)`,
        }}
      />
      {/* Bottom-left */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: `radial-gradient(ellipse 55% 50% at 0% 100%, var(--color-bg-accent-2), transparent)`,
        }}
      />
      {/* Bottom-right */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse 55% 50% at 100% 100%, var(--color-bg-accent-3), transparent)`,
        }}
      />
    </div>
  );
}

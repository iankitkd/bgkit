export default function MidnightGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Distant glow top-left */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 25% 15%, var(--color-bg-accent), transparent 55%)`,
        }}
      />
      {/* Faint secondary glow bottom-right */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(ellipse at 80% 90%, var(--color-bg-secondary), transparent 50%)`,
        }}
      />
      {/* Star field */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-bg-foreground) 1px, transparent 1px)`,
          backgroundSize: `60px 60px`,
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-bg-foreground) 1px, transparent 1px)`,
          backgroundSize: `30px 30px`,
          backgroundPosition: `15px 15px`,
        }}
      />
    </div>
  );
}

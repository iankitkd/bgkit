export default function GlowGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Dim background grid lines */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `linear-gradient(var(--color-bg-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-bg-border) 1px, transparent 1px)`,
          backgroundSize: `48px 48px`,
        }}
      />
      {/* Glowing dot at each intersection */}
      <div
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-bg-accent) 2px, transparent 2px)`,
          backgroundSize: `48px 48px`,
        }}
      />
      {/* Center glow over the grid */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, var(--color-bg-accent), transparent 65%)`,
        }}
      />
      {/* Dark vignette edges */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 30%, var(--color-bg-canvas) 90%)`,
        }}
      />
    </div>
  );
}

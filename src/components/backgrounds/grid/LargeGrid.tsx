export default function LargeGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `linear-gradient(var(--color-bg-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-bg-border) 1px, transparent 1px)`,
          backgroundSize: `80px 80px`,
        }}
      />
      {/* Dot at intersections */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-bg-border) 2px, transparent 2px)`,
          backgroundSize: `80px 80px`,
        }}
      />
    </div>
  );
}

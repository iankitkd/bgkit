export default function OffsetGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Primary grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(var(--color-bg-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-bg-border) 1px, transparent 1px)`,
          backgroundSize: `40px 40px`,
        }}
      />
      {/* Offset secondary grid — shifted by half a cell */}
      <div
        className="absolute inset-0 opacity-08"
        style={{
          backgroundImage: `linear-gradient(var(--color-bg-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-bg-accent) 1px, transparent 1px)`,
          backgroundSize: `40px 40px`,
          backgroundPosition: `20px 20px`,
        }}
      />
    </div>
  );
}

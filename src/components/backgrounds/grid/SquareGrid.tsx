export default function SquareGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(var(--color-bg-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-bg-border) 1px, transparent 1px)`,
          backgroundSize: `40px 40px`,
        }}
      />
    </div>
  );
}

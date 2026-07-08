export default function DotGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-bg-accent) 1.5px, transparent 1.5px)`,
          backgroundSize: `24px 24px`,
        }}
      />
    </div>
  );
}

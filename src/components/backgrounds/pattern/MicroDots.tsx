export default function MicroDots() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <div
        className="absolute inset-0 opacity-22"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-bg-foreground) 0.8px, transparent 0.8px)`,
          backgroundSize: `12px 12px`,
        }}
      />
    </div>
  );
}

export default function DiagonalGradient() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--color-bg-canvas) 0%, var(--color-bg-accent) 50%, var(--color-bg-secondary) 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `linear-gradient(315deg, var(--color-bg-foreground) 0%, transparent 50%)`,
        }}
      />
    </div>
  );
}

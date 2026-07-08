export default function LinearGradient() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, var(--color-bg-canvas) 0%, var(--color-bg-accent) 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(180deg, var(--color-bg-foreground) 0%, transparent 40%)`,
        }}
      />
    </div>
  );
}

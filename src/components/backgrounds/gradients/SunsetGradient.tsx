export default function SunsetGradient() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, var(--color-bg-accent-2) 0%, var(--color-bg-accent) 55%, var(--color-bg-canvas) 100%)`,
      }}
    >
      {/* Horizon haze */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 opacity-60"
        style={{
          background: `linear-gradient(0deg, var(--color-bg-canvas) 0%, transparent 100%)`,
        }}
      />
      {/* Top glow highlight */}
      <div
        className="absolute inset-x-0 top-0 h-1/4 opacity-30"
        style={{
          background: `linear-gradient(180deg, var(--color-bg-foreground) 0%, transparent 100%)`,
        }}
      />
    </div>
  );
}

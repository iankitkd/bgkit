export default function AuroraGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-bg-accent opacity-50 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-bg-secondary opacity-40 blur-3xl" />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-bg-accent-2 opacity-30 blur-3xl" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(var(--color-bg-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-bg-border) 1px, transparent 1px)`,
          backgroundSize: `32px 32px`,
        }}
      />
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-bg-canvas/70" />
    </div>
  );
}

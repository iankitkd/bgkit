export default function GlassPrism() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Prism rainbow spread */}
      <div
        className="absolute inset-0 opacity-18"
        style={{
          background: `linear-gradient(
            130deg,
            var(--color-bg-accent)    0%,
            var(--color-bg-secondary) 22%,
            var(--color-bg-accent-3)  44%,
            var(--color-bg-accent-2)  66%,
            var(--color-bg-accent)    88%,
            var(--color-bg-secondary) 100%
          )`,
        }}
      />

      {/* Glass reflection striations */}
      <div
        className="absolute inset-0 opacity-08"
        style={{
          backgroundImage: `repeating-linear-gradient(
            108deg,
            transparent,
            transparent 38px,
            var(--color-bg-foreground) 38px,
            var(--color-bg-foreground) 40px
          )`,
        }}
      />

      {/* Specular highlight top-left */}
      <div
        className="absolute inset-0 opacity-12"
        style={{
          background: `linear-gradient(135deg, var(--color-bg-foreground) 0%, transparent 45%)`,
        }}
      />
    </div>
  );
}

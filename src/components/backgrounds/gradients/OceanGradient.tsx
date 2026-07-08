export default function OceanGradient() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, var(--color-bg-canvas) 0%, var(--color-bg-secondary) 100%)`,
      }}
    >
      {/* Subtle horizontal scan lines to suggest water depth */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 6px,
            var(--color-bg-foreground) 6px,
            var(--color-bg-foreground) 7px
          )`,
        }}
      />
      {/* Surface light shimmer */}
      <div
        className="absolute inset-x-0 top-0 h-1/3 opacity-15"
        style={{
          background: `linear-gradient(180deg, var(--color-bg-foreground) 0%, transparent 100%)`,
        }}
      />
    </div>
  );
}

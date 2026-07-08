export default function GlassBlur() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Colorful blobs behind the glass panel — percentage-sized so they scale with any container */}
      <div
        className="absolute rounded-full bg-bg-accent opacity-45 blur-2xl"
        style={{ top: "8%", left: "8%", width: "38%", height: "55%" }}
      />
      <div
        className="absolute rounded-full bg-bg-secondary opacity-38 blur-2xl"
        style={{ bottom: "8%", right: "8%", width: "42%", height: "60%" }}
      />
      <div
        className="absolute rounded-full bg-bg-accent-2 opacity-28 blur-2xl"
        style={{ top: "42%", right: "28%", width: "32%", height: "48%" }}
      />

      {/* Frosted glass panel */}
      <div
        className="absolute inset-[12%] rounded-3xl border border-bg-border/50"
        style={{
          background: `linear-gradient(135deg, var(--color-bg-canvas), transparent 80%)`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          opacity: 0.7,
        }}
      />
    </div>
  );
}

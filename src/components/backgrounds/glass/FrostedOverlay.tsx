export default function FrostedOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Rich colorful base — percentage-sized so they scale with any container */}
      <div
        className="absolute rounded-full bg-bg-accent opacity-55 blur-3xl"
        style={{ top: "3%", left: "3%", width: "48%", height: "65%" }}
      />
      <div
        className="absolute rounded-full bg-bg-secondary opacity-48 blur-3xl"
        style={{ bottom: "3%", right: "3%", width: "52%", height: "70%" }}
      />
      <div
        className="absolute rounded-full bg-bg-accent-2 opacity-35 blur-3xl"
        style={{ top: "38%", right: "18%", width: "38%", height: "52%" }}
      />
      <div
        className="absolute rounded-full bg-bg-accent-3 opacity-25 blur-3xl"
        style={{ bottom: "25%", left: "18%", width: "32%", height: "44%" }}
      />

      {/* Frosted overlay — semi-transparent canvas over blobs */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: `var(--color-bg-canvas)`,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          opacity: 0.65,
        }}
      />
    </div>
  );
}

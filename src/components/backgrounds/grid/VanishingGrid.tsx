export default function VanishingGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <div style={{ perspective: "700px", position: "absolute", inset: 0, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "-50%",
            right: "-50%",
            height: "200%",
            backgroundImage: `linear-gradient(var(--color-bg-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-bg-border) 1px, transparent 1px)`,
            backgroundSize: "55px 55px",
            transform: "rotateX(82deg)",
            transformOrigin: "50% 0%",
            opacity: 0.38,
          }}
        />
      </div>
      {/* Horizon divider */}
      <div
        className="absolute inset-x-0 h-px opacity-20"
        style={{ top: "48%", background: `var(--color-bg-border)` }}
      />
      {/* Strong top-to-center fade */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: "55%",
          background: `linear-gradient(0deg, transparent 0%, var(--color-bg-canvas) 100%)`,
        }}
      />
      <div className="absolute inset-0 bg-radial from-transparent to-bg-canvas/50" />
    </div>
  );
}

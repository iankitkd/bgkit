export default function RetroHorizonGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Sky gradient — top to horizon */}
      <div
        className="absolute inset-x-0 top-0 bottom-1/2 opacity-45"
        style={{
          background: `linear-gradient(180deg, var(--color-bg-accent), var(--color-bg-canvas))`,
        }}
      />

      {/* Horizon glow line */}
      <div
        className="absolute inset-x-0 h-px opacity-70"
        style={{ top: "50%", background: `var(--color-bg-accent)`, boxShadow: `0 0 12px 2px var(--color-bg-accent)` }}
      />

      {/* Perspective floor */}
      <div style={{ perspective: "350px", position: "absolute", bottom: 0, left: 0, right: 0, top: "50%", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "-50%",
            right: "-50%",
            height: "200%",
            backgroundImage: `linear-gradient(var(--color-bg-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-bg-secondary) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            transform: "rotateX(65deg)",
            transformOrigin: "50% 0%",
            opacity: 0.4,
          }}
        />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent to-bg-canvas/65" />
    </div>
  );
}

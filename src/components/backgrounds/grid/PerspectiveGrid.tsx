export default function PerspectiveGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <div style={{ perspective: "500px", position: "absolute", inset: 0, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "-40%",
            right: "-40%",
            height: "160%",
            backgroundImage: `linear-gradient(var(--color-bg-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-bg-border) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            transform: "rotateX(60deg)",
            transformOrigin: "50% 0%",
            opacity: 0.35,
          }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(0deg, transparent 0%, var(--color-bg-canvas) 55%)`,
        }}
      />
    </div>
  );
}

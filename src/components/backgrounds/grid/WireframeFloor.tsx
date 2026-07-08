export default function WireframeFloor() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Flat perspective floor only — steep angle, very flat-looking */}
      <div style={{ perspective: "600px", position: "absolute", inset: 0, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "-30%",
            right: "-30%",
            height: "120%",
            backgroundImage: `linear-gradient(var(--color-bg-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-bg-foreground) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: "rotateX(78deg)",
            transformOrigin: "50% 0%",
            opacity: 0.08,
          }}
        />
      </div>
      {/* Thicker accent lines at regular spacing */}
      <div style={{ perspective: "600px", position: "absolute", inset: 0, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "-30%",
            right: "-30%",
            height: "120%",
            backgroundImage: `linear-gradient(var(--color-bg-accent) 2px, transparent 2px)`,
            backgroundSize: "50px 150px",
            transform: "rotateX(78deg)",
            transformOrigin: "50% 0%",
            opacity: 0.15,
          }}
        />
      </div>
      {/* Fade top half to canvas */}
      <div
        className="absolute inset-x-0 top-0 h-2/3"
        style={{ background: `linear-gradient(0deg, transparent 0%, var(--color-bg-canvas) 100%)` }}
      />
    </div>
  );
}

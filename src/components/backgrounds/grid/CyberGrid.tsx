export default function CyberGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes cg-scan {
          0%   { transform: translateY(-8px); opacity: 0; }
          5%   { opacity: 0.7; }
          95%  { opacity: 0.7; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .cg-scanline { animation: cg-scan 3.5s linear infinite; }
      `}</style>

      {/* Glowing perspective grid floor */}
      <div style={{ perspective: "400px", position: "absolute", inset: 0, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "-45%",
            right: "-45%",
            height: "170%",
            backgroundImage: `linear-gradient(var(--color-bg-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-bg-secondary) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: "rotateX(67deg)",
            transformOrigin: "50% 0%",
            opacity: 0.3,
          }}
        />
      </div>

      {/* Scanning line */}
      <div
        className="cg-scanline absolute inset-x-0 h-0.5 blur-sm"
        style={{ background: `var(--color-bg-accent)`, top: 0 }}
      />

      {/* Bottom accent glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 opacity-20"
        style={{ background: `linear-gradient(0deg, var(--color-bg-accent), transparent)` }}
      />

      <div className="absolute inset-0 bg-radial from-transparent to-bg-canvas/65" />
    </div>
  );
}

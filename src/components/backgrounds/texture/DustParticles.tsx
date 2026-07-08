export default function DustParticles() {
  const particles = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    left: ((i * 37 + 13) % 97) + 1.5,
    top:  ((i * 53 +  7) % 93) + 3.5,
    size: (i % 3) * 0.6 + 0.5,
    delay: ((i * 0.31) % 5).toFixed(2),
    duration: (4 + (i % 6)).toFixed(1),
    driftX: ((i % 5) - 2) * 6,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes dp-float {
          0%   { opacity: 0;   transform: translateY(0px) translateX(0px); }
          10%  { opacity: 0.45; }
          85%  { opacity: 0.2; }
          100% { opacity: 0;   transform: translateY(-36px) translateX(var(--dp-drift)); }
        }
      `}</style>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-bg-foreground"
          style={{
            left: `${p.left}%`,
            top:  `${p.top}%`,
            width:  `${p.size}px`,
            height: `${p.size}px`,
            ["--dp-drift" as string]: `${p.driftX}px`,
            animation: `dp-float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

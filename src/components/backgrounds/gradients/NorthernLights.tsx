export default function NorthernLights() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes nl-shift-1 {
          0%, 100% { transform: translateX(0%) scaleY(1); opacity: 0.55; }
          25%       { transform: translateX(4%)  scaleY(1.1); opacity: 0.7; }
          50%       { transform: translateX(-3%) scaleY(0.9); opacity: 0.45; }
          75%       { transform: translateX(3%)  scaleY(1.05); opacity: 0.6; }
        }
        @keyframes nl-shift-2 {
          0%, 100% { transform: translateX(0%) scaleY(1); opacity: 0.45; }
          33%       { transform: translateX(-5%) scaleY(1.15); opacity: 0.6; }
          66%       { transform: translateX(4%)  scaleY(0.85); opacity: 0.3; }
        }
        @keyframes nl-shift-3 {
          0%, 100% { transform: translateX(0%) scaleY(1); opacity: 0.35; }
          50%       { transform: translateX(6%)  scaleY(1.2); opacity: 0.5; }
        }
        .nl-band-1 { animation: nl-shift-1 9s ease-in-out infinite; }
        .nl-band-2 { animation: nl-shift-2 12s ease-in-out infinite; }
        .nl-band-3 { animation: nl-shift-3 7s ease-in-out infinite reverse; }
      `}</style>
      <div
        className="nl-band-1 absolute inset-x-0 top-[8%] h-28 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, var(--color-bg-accent), var(--color-bg-secondary), transparent)` }}
      />
      <div
        className="nl-band-2 absolute inset-x-0 top-[22%] h-20 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, var(--color-bg-secondary), var(--color-bg-accent-3), transparent)` }}
      />
      <div
        className="nl-band-3 absolute inset-x-0 top-[34%] h-16 blur-xl"
        style={{ background: `linear-gradient(90deg, transparent, var(--color-bg-accent-2), var(--color-bg-accent), transparent)` }}
      />
      <div className="absolute inset-0 bg-radial from-transparent to-bg-canvas/75" />
    </div>
  );
}

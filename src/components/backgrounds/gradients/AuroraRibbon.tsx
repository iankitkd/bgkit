export default function AuroraRibbon() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes ar-float-1 {
          0%, 100% { transform: translateY(0px) rotate(-1.5deg); }
          50%       { transform: translateY(-18px) rotate(1.5deg); }
        }
        @keyframes ar-float-2 {
          0%, 100% { transform: translateY(0px) rotate(1deg); }
          50%       { transform: translateY(14px) rotate(-1deg); }
        }
        @keyframes ar-float-3 {
          0%, 100% { transform: translateY(0px) rotate(-0.5deg); }
          50%       { transform: translateY(-10px) rotate(0.5deg); }
        }
        .ar-r1 { animation: ar-float-1 8s ease-in-out infinite; }
        .ar-r2 { animation: ar-float-2 10s ease-in-out infinite; }
        .ar-r3 { animation: ar-float-3 6s ease-in-out infinite; animation-delay: -2s; }
      `}</style>
      <div
        className="ar-r1 absolute inset-x-[-12%] top-[28%] h-14 blur-2xl"
        style={{
          background: `linear-gradient(90deg, transparent 0%, var(--color-bg-accent) 20%, var(--color-bg-secondary) 80%, transparent 100%)`,
          opacity: 0.7,
        }}
      />
      <div
        className="ar-r2 absolute inset-x-[-12%] top-[42%] h-10 blur-xl"
        style={{
          background: `linear-gradient(90deg, transparent 0%, var(--color-bg-accent-2) 25%, var(--color-bg-accent-3) 75%, transparent 100%)`,
          opacity: 0.5,
        }}
      />
      <div
        className="ar-r3 absolute inset-x-[-12%] top-[54%] h-8 blur-lg"
        style={{
          background: `linear-gradient(90deg, transparent 0%, var(--color-bg-secondary) 35%, var(--color-bg-accent) 65%, transparent 100%)`,
          opacity: 0.4,
        }}
      />
      <div className="absolute inset-0 bg-radial from-transparent to-bg-canvas/80" />
    </div>
  );
}

export default function OceanWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes ow-move-1 { 0% { transform: translateX(0); }   100% { transform: translateX(-50%); } }
        @keyframes ow-move-2 { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes ow-move-3 { 0% { transform: translateX(0); }   100% { transform: translateX(-50%); } }
        .ow-1 { animation: ow-move-1 10s linear infinite; }
        .ow-2 { animation: ow-move-2 14s linear infinite; }
        .ow-3 { animation: ow-move-3 8s  linear infinite; }
      `}</style>

      {/* Wave 1 */}
      <div className="ow-1 absolute bottom-0 w-[200%]">
        <svg viewBox="0 0 2880 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block" }}>
          <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 C1680,100 1920,20 2160,60 C2400,100 2640,20 2880,60 L2880,160 L0,160 Z" fill="var(--color-bg-secondary)" fillOpacity="0.14" />
        </svg>
      </div>

      {/* Wave 2 */}
      <div className="ow-2 absolute bottom-0 w-[200%]">
        <svg viewBox="0 0 2880 180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block" }}>
          <path d="M0,90 C360,50 720,130 1080,90 C1440,50 1800,130 2160,90 C2520,50 2760,130 2880,90 L2880,180 L0,180 Z" fill="var(--color-bg-accent)" fillOpacity="0.10" />
        </svg>
      </div>

      {/* Wave 3 — front, tallest */}
      <div className="ow-3 absolute bottom-0 w-[200%]">
        <svg viewBox="0 0 2880 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block" }}>
          <path d="M0,40 C480,80 960,10 1440,40 C1920,80 2400,10 2880,40 L2880,120 L0,120 Z" fill="var(--color-bg-accent)" fillOpacity="0.18" />
        </svg>
      </div>
    </div>
  );
}

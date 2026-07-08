export default function StaticNoise() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes sn-anim {
          0%   { transform: translate(0px,   0px); }
          25%  { transform: translate(-3px,   2px); }
          50%  { transform: translate(2px,  -3px); }
          75%  { transform: translate(3px,   1px); }
          100% { transform: translate(0px,   0px); }
        }
        .sn-svg { animation: sn-anim 0.08s steps(1) infinite; }
      `}</style>
      <svg
        className="sn-svg absolute inset-[-6%] w-[112%] h-[112%] opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="sn-filter">
          <feTurbulence type="turbulence" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#sn-filter)" fill="var(--color-bg-foreground)" />
      </svg>
    </div>
  );
}

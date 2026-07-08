export default function FilmGrain() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes fg-anim {
          0%   { transform: translate(0px,  0px); }
          10%  { transform: translate(-2px, -3px); }
          20%  { transform: translate(3px,   2px); }
          30%  { transform: translate(-1px,  4px); }
          40%  { transform: translate(2px,  -1px); }
          50%  { transform: translate(-3px,  2px); }
          60%  { transform: translate(1px,  -4px); }
          70%  { transform: translate(3px,   1px); }
          80%  { transform: translate(-2px,  3px); }
          90%  { transform: translate(1px,  -2px); }
          100% { transform: translate(0px,   0px); }
        }
        .fg-svg { animation: fg-anim 0.15s steps(1) infinite; }
      `}</style>
      <svg
        className="fg-svg absolute inset-[-8%] w-[116%] h-[116%] opacity-[0.09]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="fg-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#fg-filter)" fill="var(--color-bg-foreground)" />
      </svg>
    </div>
  );
}

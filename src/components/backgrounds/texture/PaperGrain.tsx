export default function PaperGrain() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <filter id="pg-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.45" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#pg-filter)" fill="var(--color-bg-foreground)" />
      </svg>
      {/* Subtle paper warmth tint */}
      <div
        className="absolute inset-0 opacity-05"
        style={{ background: `var(--color-bg-foreground)` }}
      />
    </div>
  );
}

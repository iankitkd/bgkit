export default function SandGrain() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Fine high-frequency noise */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <filter id="sg-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#sg-filter)" fill="var(--color-bg-foreground)" />
      </svg>
      {/* Second layer offset for density */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg" style={{ transform: "translate(1px, 1px)" }}>
        <filter id="sg-filter-2">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="5" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#sg-filter-2)" fill="var(--color-bg-foreground)" />
      </svg>
    </div>
  );
}

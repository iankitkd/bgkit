export default function LayeredWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back wave */}
        <path
          d="M0,180 C360,260 720,100 1080,180 C1260,220 1350,190 1440,180 L1440,320 L0,320 Z"
          fill="var(--color-bg-secondary)"
          fillOpacity="0.12"
        />
        {/* Mid wave */}
        <path
          d="M0,220 C480,140 960,300 1440,220 L1440,320 L0,320 Z"
          fill="var(--color-bg-accent)"
          fillOpacity="0.15"
        />
        {/* Front wave */}
        <path
          d="M0,260 C360,220 720,300 1080,255 C1260,232 1350,268 1440,255 L1440,320 L0,320 Z"
          fill="var(--color-bg-accent)"
          fillOpacity="0.22"
        />
      </svg>
    </div>
  );
}

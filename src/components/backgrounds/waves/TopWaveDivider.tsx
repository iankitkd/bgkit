export default function TopWaveDivider() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Top gradient sky area */}
      <div
        className="absolute inset-x-0 top-0 h-2/3 opacity-30"
        style={{
          background: `linear-gradient(180deg, var(--color-bg-accent), transparent)`,
        }}
      />

      {/* Wave divider SVG pinned to bottom */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,90 C180,150 360,30 540,90 C720,150 900,30 1080,90 C1260,150 1350,70 1440,90 L1440,180 L0,180 Z"
          fill="var(--color-bg-accent)"
          fillOpacity="0.2"
        />
        <path
          d="M0,110 C240,70 480,150 720,110 C960,70 1200,140 1440,110 L1440,180 L0,180 Z"
          fill="var(--color-bg-secondary)"
          fillOpacity="0.15"
        />
      </svg>
    </div>
  );
}

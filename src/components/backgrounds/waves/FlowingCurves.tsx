export default function FlowingCurves() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large S-curve 1 — accent */}
        <path
          d="M0,450 Q360,150 720,450 Q1080,750 1440,450"
          stroke="var(--color-bg-accent)"
          strokeWidth="100"
          fill="none"
          opacity="0.07"
        />
        {/* Large S-curve 2 — secondary, offset */}
        <path
          d="M0,380 Q400,80  800,500 Q1100,820 1440,340"
          stroke="var(--color-bg-secondary)"
          strokeWidth="70"
          fill="none"
          opacity="0.06"
        />
        {/* Tight S-curve — accent-2 */}
        <path
          d="M0,600 Q300,350 700,600 Q1100,860 1440,500"
          stroke="var(--color-bg-accent-2)"
          strokeWidth="50"
          fill="none"
          opacity="0.05"
        />
        {/* Fine accent-3 detail */}
        <path
          d="M0,500 Q500,200 900,600 Q1200,900 1440,420"
          stroke="var(--color-bg-accent-3)"
          strokeWidth="30"
          fill="none"
          opacity="0.04"
        />
      </svg>
    </div>
  );
}

export default function RibbonWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-80,250 C200,160 420,380 700,270 C980,160 1200,320 1520,240" stroke="var(--color-bg-accent)"   strokeWidth="2"   fill="none" opacity="0.45" />
        <path d="M-80,265 C200,175 420,395 700,285 C980,175 1200,335 1520,255" stroke="var(--color-bg-accent)"   strokeWidth="1"   fill="none" opacity="0.2" />

        <path d="M-80,370 C250,280 530,470 820,360 C1110,250 1300,400 1520,340" stroke="var(--color-bg-secondary)" strokeWidth="2"   fill="none" opacity="0.38" />
        <path d="M-80,385 C250,295 530,485 820,375 C1110,265 1300,415 1520,355" stroke="var(--color-bg-secondary)" strokeWidth="1"   fill="none" opacity="0.18" />

        <path d="M-80,480 C300,400 600,560 900,450 C1200,340 1380,490 1520,430" stroke="var(--color-bg-accent-2)"  strokeWidth="1.5" fill="none" opacity="0.28" />
        <path d="M-80,490 C300,410 600,570 900,460 C1200,350 1380,500 1520,440" stroke="var(--color-bg-accent-2)"  strokeWidth="0.8" fill="none" opacity="0.15" />
      </svg>
    </div>
  );
}

export default function DiamondDots() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <svg className="absolute inset-0 w-full h-full opacity-22" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="diamond-dot-pat"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <circle cx="14" cy="14" r="1.8" fill="var(--color-bg-accent)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diamond-dot-pat)" />
      </svg>
    </div>
  );
}

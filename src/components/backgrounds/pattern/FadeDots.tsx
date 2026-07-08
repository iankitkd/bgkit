export default function FadeDots() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Full dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-bg-accent) 1.5px, transparent 1.5px)`,
          backgroundSize: `24px 24px`,
          opacity: 0.4,
        }}
      />
      {/* Radial mask — dots fade toward edges */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 75% 70% at 50% 50%, transparent 20%, var(--color-bg-canvas) 80%)`,
        }}
      />
    </div>
  );
}

export default function HalftoneDots() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Large sparse dots */}
      <div
        className="absolute inset-0 opacity-18"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-bg-foreground) 4px, transparent 4px)`,
          backgroundSize: `40px 40px`,
        }}
      />
      {/* Medium dots — offset half cell */}
      <div
        className="absolute inset-0 opacity-12"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-bg-foreground) 2.5px, transparent 2.5px)`,
          backgroundSize: `40px 40px`,
          backgroundPosition: `20px 20px`,
        }}
      />
      {/* Small fill dots */}
      <div
        className="absolute inset-0 opacity-08"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-bg-foreground) 1px, transparent 1px)`,
          backgroundSize: `20px 20px`,
          backgroundPosition: `10px 0px`,
        }}
      />
      {/* Radial fade center highlight */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 20%, var(--color-bg-canvas) 75%)`,
        }}
      />
    </div>
  );
}

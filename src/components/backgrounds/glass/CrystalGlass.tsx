export default function CrystalGlass() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Angular crystal facets */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="0,0   400,180 0,380"      fill="var(--color-bg-accent)"    fillOpacity="0.07" />
        <polygon points="800,0  400,180 800,380"    fill="var(--color-bg-secondary)" fillOpacity="0.06" />
        <polygon points="160,0  640,0   400,260"    fill="var(--color-bg-accent-2)"  fillOpacity="0.05" />
        <polygon points="0,380  400,600 800,380 400,180" fill="var(--color-bg-accent-3)" fillOpacity="0.04" />
        <polygon points="0,600  400,420 800,600"    fill="var(--color-bg-border)"   fillOpacity="0.12" />

        {/* Facet edge lines */}
        <line x1="0"   y1="0"   x2="400" y2="180" stroke="var(--color-bg-border)" strokeWidth="1" opacity="0.25" />
        <line x1="800" y1="0"   x2="400" y2="180" stroke="var(--color-bg-border)" strokeWidth="1" opacity="0.25" />
        <line x1="0"   y1="380" x2="400" y2="180" stroke="var(--color-bg-border)" strokeWidth="1" opacity="0.18" />
        <line x1="800" y1="380" x2="400" y2="180" stroke="var(--color-bg-border)" strokeWidth="1" opacity="0.18" />
        <line x1="0"   y1="600" x2="400" y2="420" stroke="var(--color-bg-border)" strokeWidth="1" opacity="0.12" />
        <line x1="800" y1="600" x2="400" y2="420" stroke="var(--color-bg-border)" strokeWidth="1" opacity="0.12" />
      </svg>

      {/* Specular glass sheen */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `linear-gradient(135deg, var(--color-bg-foreground) 0%, transparent 45%)`,
        }}
      />
    </div>
  );
}

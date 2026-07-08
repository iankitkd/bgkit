export default function LiquidGlass() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes lg-morph-1 {
          0%,100% { border-radius: 60% 40% 70% 30% / 50% 60% 40% 50%; transform: translate(0px,   0px) rotate(0deg);   }
          25%      { border-radius: 40% 60% 30% 70% / 60% 40% 60% 40%; transform: translate(5px,  -8px) rotate(5deg);   }
          50%      { border-radius: 50% 50% 60% 40% / 40% 50% 50% 60%; transform: translate(-3px,  5px) rotate(-3deg);  }
          75%      { border-radius: 70% 30% 40% 60% / 50% 70% 30% 50%; transform: translate(4px,   2px) rotate(3deg);   }
        }
        @keyframes lg-morph-2 {
          0%,100% { border-radius: 40% 60% 50% 50% / 55% 35% 65% 45%; transform: translate(0px,   0px) rotate(0deg);  }
          33%      { border-radius: 60% 40% 35% 65% / 45% 55% 45% 55%; transform: translate(-6px,  4px) rotate(-4deg); }
          66%      { border-radius: 35% 65% 55% 45% / 65% 35% 55% 45%; transform: translate(4px,  -5px) rotate(4deg);  }
        }
        .lg-blob-1 { animation: lg-morph-1  8s ease-in-out infinite; }
        .lg-blob-2 { animation: lg-morph-2 10s ease-in-out infinite; }
      `}</style>

      {/* Morphing background blobs — percentage-sized so they scale with any container */}
      <div
        className="lg-blob-1 absolute bg-bg-accent opacity-32 blur-xl"
        style={{ top: "12%", left: "8%", width: "40%", height: "55%" }}
      />
      <div
        className="lg-blob-2 absolute bg-bg-secondary opacity-28 blur-xl"
        style={{ bottom: "15%", right: "8%", width: "45%", height: "60%" }}
      />

      {/* Liquid-shaped glass panel */}
      <div
        className="absolute border border-bg-border/40"
        style={{
          inset: "10%",
          borderRadius: "42% 58% 52% 48% / 48% 44% 56% 52%",
          background: `linear-gradient(140deg, var(--color-bg-canvas), transparent 65%)`,
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          opacity: 0.75,
        }}
      />
    </div>
  );
}

export default function FloatingMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <style>{`
        @keyframes fm-float-a {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(28px, -18px) scale(1.05); }
          66% { transform: translate(-16px, 12px) scale(0.96); }
        }
        @keyframes fm-float-b {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-22px, 14px) scale(1.08); }
          66% { transform: translate(18px, -10px) scale(0.93); }
        }
        @keyframes fm-float-c {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(14px, 22px) scale(1.1); }
        }
        .fm-a { animation: fm-float-a 8s ease-in-out infinite; }
        .fm-b { animation: fm-float-b 10s ease-in-out infinite; }
        .fm-c { animation: fm-float-c 7s ease-in-out infinite; }
        .fm-d { animation: fm-float-a 11s ease-in-out infinite; animation-delay: -3s; }
      `}</style>
      <div className="fm-a absolute top-[-15%] left-[-10%] h-80 w-80 rounded-full bg-bg-accent opacity-40 blur-3xl" />
      <div className="fm-b absolute bottom-[-15%] right-[-10%] h-96 w-96 rounded-full bg-bg-secondary opacity-35 blur-3xl" />
      <div className="fm-c absolute top-[40%] left-[32%] h-64 w-64 rounded-full bg-bg-accent-2 opacity-28 blur-3xl" />
      <div className="fm-d absolute top-[60%] left-[8%] h-48 w-48 rounded-full bg-bg-accent-3 opacity-20 blur-3xl" />
    </div>
  );
}

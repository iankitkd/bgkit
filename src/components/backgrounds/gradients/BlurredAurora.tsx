export default function BlurredAurora() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Huge maximally blurred blobs */}
      <div className="absolute top-[-30%] left-[-20%] h-[80%] w-[80%] rounded-full bg-bg-accent opacity-28 blur-[90px]" />
      <div className="absolute top-[10%] right-[-20%] h-[70%] w-[70%] rounded-full bg-bg-secondary opacity-22 blur-[110px]" />
      <div className="absolute bottom-[-25%] left-[15%] h-[65%] w-[65%] rounded-full bg-bg-accent-2 opacity-18 blur-[80px]" />
      <div className="absolute top-[40%] left-[30%] h-[45%] w-[45%] rounded-full bg-bg-accent-3 opacity-14 blur-[70px]" />
    </div>
  );
}

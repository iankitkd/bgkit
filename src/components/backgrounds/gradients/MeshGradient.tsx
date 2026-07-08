export default function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <div className="absolute top-[-20%] left-[-10%] h-96 w-96 rounded-full bg-bg-accent opacity-40 blur-3xl" />
      <div className="absolute top-[35%] right-[-15%] h-80 w-80 rounded-full bg-bg-secondary opacity-35 blur-3xl" />
      <div className="absolute bottom-[-20%] left-[25%] h-72 w-72 rounded-full bg-bg-accent-2 opacity-30 blur-3xl" />
      <div className="absolute top-[15%] left-[45%] h-64 w-64 rounded-full bg-bg-accent-3 opacity-20 blur-3xl" />
      <div className="absolute bottom-[10%] right-[20%] h-48 w-48 rounded-full bg-bg-accent opacity-20 blur-3xl" />
    </div>
  );
}

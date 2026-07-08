export default function LayeredMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <div className="absolute inset-0 opacity-45 mix-blend-screen">
        <div className="absolute top-[5%] left-[5%] h-80 w-80 rounded-full bg-bg-accent blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-35 mix-blend-screen">
        <div className="absolute top-[35%] right-[5%] h-72 w-72 rounded-full bg-bg-secondary blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-30 mix-blend-screen">
        <div className="absolute bottom-[5%] left-[35%] h-64 w-64 rounded-full bg-bg-accent-2 blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-20 mix-blend-screen">
        <div className="absolute top-[55%] left-[15%] h-56 w-56 rounded-full bg-bg-accent-3 blur-3xl" />
      </div>
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <div className="absolute top-[20%] left-[55%] h-48 w-48 rounded-full bg-bg-accent blur-3xl" />
      </div>
    </div>
  );
}

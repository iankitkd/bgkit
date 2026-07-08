export default function OrganicMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      <div
        className="absolute top-[-15%] left-[-5%] h-80 w-96 bg-bg-accent opacity-35 blur-3xl"
        style={{ borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%" }}
      />
      <div
        className="absolute bottom-[-15%] right-[-5%] h-72 w-80 bg-bg-secondary opacity-30 blur-3xl"
        style={{ borderRadius: "40% 60% 30% 70% / 60% 40% 60% 40%" }}
      />
      <div
        className="absolute top-[35%] left-[30%] h-64 w-64 bg-bg-accent-2 opacity-25 blur-3xl"
        style={{ borderRadius: "70% 30% 50% 50% / 30% 70% 30% 70%" }}
      />
      <div
        className="absolute bottom-[20%] left-[10%] h-48 w-56 bg-bg-accent-3 opacity-18 blur-3xl"
        style={{ borderRadius: "50% 50% 30% 70% / 60% 40% 60% 40%" }}
      />
    </div>
  );
}

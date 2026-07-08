export default function SoftMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
      {/* Very large, highly blurred blobs for ultra-soft feel */}
      <div className="absolute top-[-10%] left-[-10%] h-[80%] w-[80%] rounded-full bg-bg-accent opacity-15 blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[70%] w-[70%] rounded-full bg-bg-secondary opacity-12 blur-[120px]" />
      <div className="absolute top-[30%] left-[25%] h-[50%] w-[50%] rounded-full bg-bg-accent-2 opacity-10 blur-[80px]" />
    </div>
  );
}

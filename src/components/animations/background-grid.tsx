export default function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50">
      
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#27272a1a_1px,transparent_1px),linear-gradient(to_bottom,#27272a1a_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <div className="absolute inset-0 bg-black/70" />
    </div>
  );
}
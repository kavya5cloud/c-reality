"use client"

export function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Teal glow — top right */}
      <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      {/* Deep glow — bottom left */}
      <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      {/* Subtle centre accent */}
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.03] blur-[150px]" />
    </div>
  )
}

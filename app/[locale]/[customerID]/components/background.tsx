"use client"

import Threads from "@/components/ui/Threads"

export default function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 h-dvh w-dvw opacity-80"
      style={{
        backgroundImage: "url('/CUAM/background.webp')",
        backgroundSize: "750px 300px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "25vh",
      }}
    >
      <Threads
        amplitude={0.5}
        distance={0}
        enableMouseInteraction={false}
        color={[1, 1, 1]}
      />
    </div>
  )
}

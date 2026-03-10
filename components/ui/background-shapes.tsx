"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function BackgroundShapes() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-[#05050A]">
      {/* Static Aurora-like Gradients - Simplified for Performance */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.1)_0,rgba(0,0,0,0)_70%)]" />
        <div className="absolute top-[10%] right-[-20%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(176,38,255,0.1)_0,rgba(0,0,0,0)_70%)]" />
      </div>

      {/* Reduced Stars/Nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: i % 3 === 0 ? "#00FFCC" : i % 3 === 1 ? "#B026FF" : "#FF007F",
              boxShadow: `0 0 8px 1px ${i % 3 === 0 ? "#00FFCC" : i % 3 === 1 ? "#B026FF" : "#FF007F"}20`,
            }}
          />
        ))}
      </div>
      
      {/* Static Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100px_100px] opacity-20" />
      
      {/* Subtle Noise/Grain Effect */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  )
}

"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function BackgroundShapes() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-[#05050A]">
      {/* Dynamic Aurora-like Gradients */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.15)_0,rgba(0,0,0,0)_50%)]" 
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[-20%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(176,38,255,0.15)_0,rgba(0,0,0,0)_50%)]" 
        />
        <motion.div 
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[40%] left-[5%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,127,0.1)_0,rgba(0,0,0,0)_50%)]" 
        />
      </div>

      {/* Floating Neon Lines */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            initial={{ x: "-100%", y: `${i * 25}%`, rotate: -45 }}
            animate={{ x: "200%" }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3,
            }}
            className="absolute w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent blur-[1px]"
          />
        ))}
      </div>

      {/* Advanced Geometric Meshes */}
      <motion.div
        animate={{
          rotateX: [0, 45, 0],
          rotateY: [0, 90, 0],
          rotateZ: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ perspective: 1000 }}
        className="absolute top-[5vh] right-[10vw] w-[400px] h-[400px] opacity-20"
      >
        <div className="w-full h-full rounded-[40%] bg-gradient-to-tr from-[#00FFCC] to-transparent blur-3xl mix-blend-screen" />
        <div className="absolute inset-20 border-[1px] border-[#00FFCC]/20 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-10 border-[1px] border-[#B026FF]/20 rounded-[30%] animate-[spin_15s_linear_infinite_reverse]" />
      </motion.div>

      {/* Magical Floating Nodes / Stars */}
      <AnimatePresence>
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, Math.random() * 1.2 + 0.3, 0],
              y: [0, Math.random() * -100 - 50],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut",
            }}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: i % 3 === 0 ? "#00FFCC" : i % 3 === 1 ? "#B026FF" : "#FF007F",
              boxShadow: `0 0 10px 2px ${i % 3 === 0 ? "#00FFCC" : i % 3 === 1 ? "#B026FF" : "#FF007F"}40`,
            }}
          />
        ))}
      </AnimatePresence>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-30" />
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,3px_100%] z-50 opacity-[0.03]" />
    </div>
  )
}

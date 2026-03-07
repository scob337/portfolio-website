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
    <div className="absolute inset-0 w-full h-full min-h-[4000px] overflow-hidden pointer-events-none -z-10 bg-[#05050A]">
      <div className="absolute inset-x-0 top-0 h-[400vh] opacity-40 mix-blend-screen overflow-hidden">
        <div className="absolute top-[0%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.15)_0,rgba(0,0,0,0)_50%)] animate-[spin_40s_linear_infinite]" />
        <div className="absolute top-[10%] right-[-20%] w-[80vw] h-[80vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(176,38,255,0.15)_0,rgba(0,0,0,0)_50%)] animate-[spin_50s_linear_infinite_reverse]" />
        <div className="absolute top-[25%] left-[5%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,127,0.1)_0,rgba(0,0,0,0)_50%)] animate-[spin_60s_linear_infinite]" />
      </div>

      {/* Advanced Geometric Meshes */}
      
      {/* Upper Right Complex Polygon */}
      <motion.div
        animate={{
          rotateX: [0, 45, 0],
          rotateY: [0, 90, 0],
          rotateZ: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ perspective: 1000 }}
        className="absolute top-[5vh] right-[10vw] w-[400px] h-[400px] opacity-30"
      >
        <div className="w-full h-full rounded-[40%] bg-gradient-to-tr from-[#00FFCC] to-transparent blur-3xl mix-blend-screen" />
        <div className="absolute inset-20 border-[1px] border-[#00FFCC]/20 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-10 border-[1px] border-[#B026FF]/20 rounded-[30%] animate-[spin_15s_linear_infinite_reverse]" />
      </motion.div>

      {/* Lower Torus Illusion (spread down the page) */}
      <motion.div
        animate={{
          rotateX: [60, 40, 60],
          rotateZ: [0, -360],
          y: [0, -50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[5vw] w-[500px] h-[500px] rounded-full border-[2px] border-[#FF007F]/10 blur-[2px] flex items-center justify-center opacity-40 mix-blend-screen shadow-[0_0_100px_rgba(255,0,127,0.2)]"
      >
        <div className="w-[80%] h-[80%] rounded-full border-[1px] border-[#B026FF]/30" />
        <div className="absolute w-[120%] h-[120%] rounded-full bg-[radial-gradient(circle_at_center,rgba(176,38,255,0.05)_0,rgba(0,0,0,0)_60%)] blur-2xl block" />
      </motion.div>

      {/* Additional distant shape further down */}
      <motion.div
        animate={{
          rotateX: [0, 80, 0],
          rotateY: [0, 360, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-[60%] right-[5vw] w-[600px] h-[600px] opacity-20 pointer-events-none mix-blend-screen"
      >
        <div className="absolute inset-0 rounded-[20%] border border-[#00FFCC]/10 animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,204,0.05)_0,rgba(0,0,0,0)_60%)] blur-3xl" />
      </motion.div>

      {/* Magical Floating Nodes / Stars */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, Math.random() * 1.5 + 0.5, 0],
            y: [0, Math.random() * -100 - 50],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
          className="absolute rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            backgroundColor: i % 3 === 0 ? "#00FFCC" : i % 3 === 1 ? "#B026FF" : "#FF007F",
            boxShadow: `0 0 10px 2px ${i % 3 === 0 ? "#00FFCC" : i % 3 === 1 ? "#B026FF" : "#FF007F"}40`,
          }}
        />
      ))}
      
      {/* Super Subtle Grid Overlay to maintain a technical feel amidst the magic */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
    </div>
  )
}

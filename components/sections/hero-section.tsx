"use client"

import { useEffect, useState, useRef } from "react"
import { useTranslations } from "next-intl"
import { motion, useAnimationFrame } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2 } from "lucide-react"
import { getPersonalInfo } from "@/lib/data"
import Link from "next/link"

// Global BackgroundShapes handles the background now


export function HeroSection() {
  const t = useTranslations("hero")
  const personalInfo = getPersonalInfo()
  const keywords = ["0", "1", "2", "3"].map((key) => t(`keywords.${key}`))
  const [currentKeyword, setCurrentKeyword] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  // Typewriter effect
  useEffect(() => {
    const target = keywords[currentKeyword]
    if (isTyping) {
      if (displayedText.length < target.length) {
        const timer = setTimeout(() => {
          setDisplayedText(target.slice(0, displayedText.length + 1))
        }, 70)
        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => setIsTyping(false), 1800)
        return () => clearTimeout(timer)
      }
    } else {
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1))
        }, 40)
        return () => clearTimeout(timer)
      } else {
        setIsTyping(true)
        setCurrentKeyword((prev) => (prev + 1) % keywords.length)
      }
    }
  }, [displayedText, isTyping, currentKeyword, keywords])

  const socialLinks = [
    { icon: Github, href: personalInfo.socialLinks.github, label: "GitHub", color: "hover:text-white" },
    { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: personalInfo.socialLinks.email, label: "Email", color: "hover:text-primary" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-start flex flex-col items-center lg:items-start order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-strong px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest text-primary mb-10 shadow-2xl"
          >
            <Sparkles className="h-4 w-4 animate-spin-slow text-accent" />
            {t("greeting")}
          </motion.div>

          {/* Name - Oversized Editorial Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter mb-4 leading-[0.9] neon-text-glow"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground to-foreground/30">
              {t("name")}
            </span>
          </motion.h1>

          {/* Typewriter role - Clinical/Technical */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-3 text-xl md:text-2xl font-mono uppercase tracking-widest mb-10 h-10"
          >
            <span className="text-secondary-foreground/70">{displayedText}</span>
            <span className="w-1.5 h-6 bg-primary animate-[cursor-blink_1s_step-end_infinite] inline-block" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed border-l-2 border-primary/50 pl-6 text-start"
          >
            {t("description")}
          </motion.p>


          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 w-full justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="text-lg px-10 py-7 font-bold rounded-2xl bg-[#00FFCC] text-[#05050A] hover:bg-[#00FFCC]/90 relative overflow-hidden group shadow-[0_0_40px_-10px_#00FFCC]"
              asChild
            >
              <Link href="#projects">
                <span className="relative z-10">{t("cta")}</span>
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="text-lg px-10 py-7 font-semibold rounded-2xl glass-strong text-foreground hover:text-white hover:border-[#B026FF]/50 hover:shadow-[0_0_20px_-5px_#B026FF] transition-all duration-300 group"
              asChild
            >
              <Link href="/contact">
                {t("contact")}
                <ArrowDown className="ml-2 h-5 w-5 -rotate-90 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>


          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex justify-center lg:justify-start gap-6"
          >
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.92 }}
                className={`p-4 rounded-full glass-strong text-muted-foreground transition-all duration-300 hover:text-white hover:border-[#FF007F]/40 hover:shadow-[0_0_20px_-5px_#FF007F]`}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
          </div>

          {/* Right Column - Extravagant Animated Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="order-1 lg:order-2 flex justify-center items-center relative perspective-1000 w-full mb-10 lg:mb-0"
          >
            {/* Massive Glowing Behind Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00FFCC] via-[#B026FF] to-[#FF007F] opacity-20 blur-[120px] animate-pulse rounded-full w-[80%] h-[80%] m-auto" />
            
            {/* Animated Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[110%] h-[110%] border border-[#00FFCC]/10 rounded-full hidden lg:block"
            />
            
            {/* Animated Ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[120%] h-[120%] border border-[#B026FF]/10 rounded-full hidden lg:block"
            />

            {/* The Floating Frame */}
            <motion.div
              animate={{ 
                y: [-15, 15, -15],
                rotateX: [2, -2, 2],
                rotateY: [-2, 2, -2]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] rounded-[3.5rem] p-1 z-10"
            >
              <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-br from-[#00FFCC] via-[#B026FF] to-[#FF007F] animate-gradient-shift opacity-80" />
              
              <div className="relative w-full h-full rounded-[3.3rem] bg-[#05050A] overflow-hidden group shadow-[0_0_50px_rgba(0,255,204,0.3)] hover:shadow-[0_0_80px_rgba(176,38,255,0.6)] transition-shadow duration-500">
                {/* Image */}
                <img 
                  src="https://github.com/scob337.png" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                
                {/* Tech Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none opacity-20" />
                
                {/* Tech Overlays inside image block */}
                <div className="absolute bottom-8 left-8 right-8 p-5 rounded-2xl glass-strong border border-white/20 transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-[#00FFCC]/20">
                      <Code2 className="w-8 h-8 text-[#00FFCC] animate-pulse" />
                    </div>
                    <div className="text-start">
                      <p className="text-sm text-[#00FFCC] font-mono tracking-wider font-bold uppercase">{t("role") || "Senior Developer"}</p>
                      <p className="text-xs text-white/60 font-mono">{personalInfo.city}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator (Moved outside grid to remain centered at bottom) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pb-10">
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="p-2 rounded-full glass"
            >
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState, useRef } from "react"
import { useTranslations } from "next-intl"
import { motion, useAnimationFrame } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { getPersonalInfo } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono tracking-wide bg-secondary text-primary mb-8"
          >
            {t("greeting")}
          </motion.div>

          {/* Name - Oversized Editorial Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-6 leading-tight text-foreground"
          >
            <span>
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


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 w-full justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all font-medium"
              asChild
            >
              <Link href="#projects">
                {t("cta")}
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-xl transition-all font-medium"
              asChild
            >
              <Link href="/contact">
                {t("contact")}
                <ArrowDown className="ml-2 h-5 w-5 -rotate-90 group-hover:translate-x-1" />
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="order-1 lg:order-2 flex justify-center items-center relative w-full mb-10 lg:mb-0"
          >
            {/* The Floating Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px] rounded-[2rem] p-[2px] z-10 bg-gradient-to-br from-border to-transparent"
            >
              
              <div className="relative w-full h-full rounded-[1.9rem] bg-card overflow-hidden group shadow-lg">
                {/* Image */}
                <Image 
                  src="https://github.com/scob337.png" 
                  alt={personalInfo.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
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

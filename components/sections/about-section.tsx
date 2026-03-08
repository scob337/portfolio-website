"use client"

import { useTranslations } from "next-intl"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { getPersonalInfo, getStats, getTechnicalSkills } from "@/lib/data"
import { Users, Briefcase, Award, Clock, Atom, Zap, Code2, FileCode, Layout, Palette, Wind, Github, Sparkles, MonitorSmartphone } from "lucide-react"
import Link from "next/link"

const iconMap = {
  users: Users,
  briefcase: Briefcase,
  award: Award,
  clock: Clock,
}

const skillIconMap = {
  Atom: Atom,
  Zap: Zap,
  Code2: Code2,
  FileCode: FileCode,
  Layout: Layout,
  Palette: Palette,
  Wind: Wind,
  Github: Github,
  Sparkles: Sparkles,
  MonitorSmartphone: MonitorSmartphone,
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export function AboutSection() {
  const t = useTranslations("about")
  const personalInfo = getPersonalInfo()
  const stats = getStats()
  const technicalSkills = getTechnicalSkills()

  const translatedStats = stats.map((stat) => ({
    ...stat,
    label: t(`stats.${stat.id}`),
  }))

  const details = [
    { label: t("details.city"), value: personalInfo.city },
    { label: t("details.email"), value: personalInfo.email },
    { label: t("details.phone"), value: personalInfo.phone },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4 section-title inline-block tracking-tighter neon-text-glow">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
              {t("title")}
            </span>
          </h2>
        </motion.div>


        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto md:auto-rows-[140px]">
          
          {/* Main About Card (Spans 2x2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 glass-strong rounded-3xl p-6 md:p-8 flex flex-col justify-between group hover:border-[#00FFCC]/40 hover:shadow-[0_0_30px_rgba(0,255,204,0.15)] transition-all duration-500"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00FFCC] via-[#B026FF] to-[#FF007F]">Hello, I'm Abdeltawab.</h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {t("description")}
              </p>
            </div>
            <div className="mt-8">
               <Button size="lg" className="rounded-2xl bg-white/5 hover:bg-white/10 text-foreground border border-white/10 hover:border-[#00FFCC]/50 transition-all duration-300" asChild>
                <Link href="/about">{t("more")}</Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats Cards (1x1 each) */}
          {translatedStats.slice(0, 2).map((stat, i) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-all duration-500 hover:border-[#B026FF]/30 hover:shadow-[0_0_20px_rgba(176,38,255,0.1)] relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 ease-out text-[#B026FF]">
                  <Icon className="w-24 h-24" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-foreground mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-[#00FFCC]/80 group-hover:text-[#00FFCC] transition-colors">{stat.label}</p>
              </motion.div>
            )
          })}

          {/* Details Card (Spans 1x2 or 2x1) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1 lg:col-span-2 glass rounded-3xl p-6 flex flex-col justify-center hover:border-[#FF007F]/30 hover:shadow-[0_0_20px_rgba(255,0,127,0.1)] transition-all duration-500"
          >
             <div className="space-y-4">
              {details.map((detail, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-white/5 last:border-0 group">
                  <span className="text-xs font-mono uppercase text-muted-foreground mb-1 sm:mb-0 group-hover:text-[#FF007F] transition-colors">{detail.label}:</span>
                  <span className="text-sm font-medium text-foreground">{detail.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

           {/* Remaining Stats Cards (1x1 each) */}
           {translatedStats.slice(2, 4).map((stat, i) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + (0.1 * i) }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-all duration-500 hover:border-[#00FFCC]/30 hover:shadow-[0_0_20px_rgba(0,255,204,0.1)] relative overflow-hidden"
              >
                 <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 ease-out text-[#00FFCC]">
                  <Icon className="w-24 h-24" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-foreground mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-[#B026FF]/80 group-hover:text-[#B026FF] transition-colors">{stat.label}</p>
              </motion.div>
            )
          })}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-3 lg:col-span-4 glass-strong rounded-3xl p-6 md:p-8 overflow-hidden flex flex-col justify-center border-t-2 border-transparent hover:border-t-[#B026FF]/50 transition-all duration-500"
          >
             <p className="text-xs font-medium uppercase tracking-widest text-[#FF007F]/80 mb-8 text-center">{t("technicalArsenal") || "Technical Capabilities"}</p>
             <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mt-2">
              {technicalSkills.map((skill, i) => {
                const SkillIcon = skillIconMap[skill.icon as keyof typeof skillIconMap] || Code2
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5, rotate: 2 }}
                    className="glass flex items-center gap-3 px-6 py-3 rounded-2xl border border-white/5 hover:border-[#00FFCC]/40 hover:bg-white/5 hover:shadow-[0_0_20px_rgba(0,255,204,0.2)] transition-all duration-300 cursor-default group"
                  >
                    <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-[#00FFCC]/10 transition-colors">
                      <SkillIcon className="w-5 h-5 text-[#00FFCC] group-hover:animate-pulse" />
                    </div>
                    <span className="text-sm font-bold text-foreground/90 tracking-tight group-hover:text-white transition-colors">{skill.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

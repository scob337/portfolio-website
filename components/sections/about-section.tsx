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
  Atom: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 7a15.3 15.3 0 0 1 4 10" />
      <path d="m16 7-4 10" />
      <path d="m8 7 4 10" />
      <path d="M12 7a15.3 15.3 0 0 0-4 10" />
    </svg>
  ),
  Zap: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 14.71 14.71 4l-3.14 8.57L20 9.29 9.29 20l3.14-8.57L4 14.71z" />
    </svg>
  ),
  Code2: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  ),
  FileCode: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 12.5 8 15l2 2.5" />
      <path d="m14 12.5 2 2.5-2 2.5" />
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  ),
  Layout: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  ),
  Palette: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.6-.7 1.6-1.6 0-.4-.2-.8-.5-1.1-.3-.3-.4-.7-.4-1.1 0-.9.7-1.6 1.6-1.6H17c2.8 0 5-2.2 5-5 0-4.4-4.5-8-10-8z" />
    </svg>
  ),
  Wind: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4a3 3 0 1 0 3-5H2" />
    </svg>
  ),
  Github: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3.5 1.5a10.8 10.8 0 0 0-5.5 0C7.5 2 6.5 2 6.5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-4.5-2-7-2" />
    </svg>
  ),
  Sparkles: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  ),
  MonitorSmartphone: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="10" height="14" x="11" y="3" rx="2" />
      <path d="M18 13v.01" />
      <path d="M11 10.5V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2" />
      <path d="M7 9v.01" />
    </svg>
  ),
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
  const stats = getStats() || []
  const technicalSkills = getTechnicalSkills() || []

  const translatedStats = stats.map((stat: any) => ({
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
            const Icon = iconMap[stat.icon as keyof typeof iconMap] || Users
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
            const Icon = iconMap[stat.icon as keyof typeof iconMap] || Clock
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
            className="col-span-1 md:col-span-3 lg:col-span-4 glass-strong rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col items-center border border-white/10 hover:border-primary/30 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             
             <h3 className="text-2xl md:text-3xl font-black mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40 tracking-tight">
               {t("technicalArsenal") || "Technical Capabilities"}
             </h3>
             
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full relative z-10">
              {technicalSkills && technicalSkills.length > 0 ? technicalSkills.map((skill, i) => {
                const SkillIcon = skillIconMap[skill.icon as keyof typeof skillIconMap] || Code2
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="relative group/skill flex flex-col items-center gap-4 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-primary/40 hover:bg-white/[0.07] transition-all duration-500"
                  >
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover/skill:opacity-100 blur-xl transition-opacity duration-500" />
                    
                    <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-[#05050A] border border-white/10 group-hover/skill:border-primary/50 group-hover/skill:shadow-[0_0_20px_rgba(0,255,204,0.3)] transition-all duration-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                      <SkillIcon className="w-8 h-8 text-white/70 group-hover/skill:text-primary transition-all duration-500 transform group-hover/skill:scale-110" />
                    </div>
                    
                    <div className="text-center">
                      <span className="text-sm font-black text-white/60 group-hover/skill:text-white transition-colors tracking-tighter uppercase">{skill.name}</span>
                      {/* Level bar */}
                      <div className="mt-3 w-12 h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                          className="h-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  </motion.div>
                )
              }) : (
                <div className="col-span-full text-center text-muted-foreground">No skills found.</div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

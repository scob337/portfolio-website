"use client"

import { useTranslations } from "next-intl"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { getPersonalInfo, getStats, getTechnicalSkills, getSoftSkills } from "@/lib/data"
import { Users, Briefcase, Award, Clock, Atom, Zap, Code2, FileCode, Layout, Palette, Wind, Github, Sparkles, MonitorSmartphone } from "lucide-react"
import Link from "next/link"

const iconMap = {
  users: Users,
  briefcase: Briefcase,
  award: Award,
  clock: Clock,
}

const skillIconMap = {
  react: (props: any) => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="#61DAFB" strokeWidth="1" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" stroke="none"/>
      <g stroke="#61DAFB">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  nextjs: (props: any) => (
    <svg viewBox="0 0 128 128" fill="currentColor" {...props}>
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm31 101.4l-42.5-54.8v40.4h-9.2V41.1h9.2l40.1 52.1V41.1h9.2v60.3h-6.8z" fill="white"/>
    </svg>
  ),
  typescript: (props: any) => (
    <svg viewBox="0 0 24 24" fill="#3178C6" {...props}>
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v3.358c-.392-.281-.847-.51-1.363-.688a5.086 5.086 0 0 0-1.462-.267c-.944 0-1.63.243-2.058.73s-.642 1.154-.642 2.016v.045c0 .87.232 1.544.696 2.02.464.476 1.161.715 2.092.715.48 0 .922-.048 1.328-.146.406-.098.815-.24 1.226-.421v3.136c-.443.255-.953.465-1.53.629a8.47 8.47 0 0 1-1.747.248c-1.876 0-3.32-.529-4.331-1.587-1.011-1.058-1.517-2.506-1.517-4.342v-.18c0-1.88.525-3.346 1.575-4.401 1.05-1.055 2.509-1.582 4.376-1.582zm-12.038.045h10.365v2.925H13.11v11.025h-3.42V12.72H6.45V9.795z" fill="white"/>
      <rect width="24" height="24" fill="#3178C6" rx="1" ry="1" z="-1"/>
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125z" fill="#3178C6"/>
      <path d="M18.488 9.795c1.867 0 3.326.527 4.376 1.582 1.05 1.055 1.575 2.521 1.575 4.401v.18c0 1.836-.506 3.284-1.517 4.342-1.011 1.058-2.455 1.587-4.331 1.587-.597 0-1.18-.083-1.747-.248a8.47 8.47 0 0 1-1.53-.629v-3.136c.411.181.82.323 1.226.421.406.098.848.146 1.328.146.931 0 1.628-.239 2.092-.715.464-.476.696-1.15.696-2.02v-.045c0-.862-.214-1.529-.642-2.016-.428-.487-1.114-.73-2.058-.73-.518 0-1.004.089-1.462.267a5.086 5.086 0 0 0-1.363.688V10.25c.459-.226.894-.34 1.306-.34.473-.074 1.015-.111 1.627-.111zM6.45 9.795h10.365v2.925H13.11v11.025h-3.42V12.72H6.45V9.795z" fill="white"/>
    </svg>
  ),
  javascript: (props: any) => (
    <svg viewBox="0 0 24 24" fill="#F7DF1E" {...props}>
      <path d="M0 0h24v24H0V0z" fill="#F7DF1E"/>
      <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.045-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034-1.021.03-1.86.391-2.454.931-.735.675-1.05 1.68-.81 2.895.375 1.845 2.011 2.445 3.017 2.94.914.42 1.799.705 1.859 1.35.075.78-.51 1.215-1.635 1.14-.885-.06-1.47-.435-2.04-1.02l-1.527 1.005c.383.653.864 1.03 1.44 1.305 1.06.497 3.556.646 4.665-.51 1.485-1.41.39-3.915-1.14-4.5zM9.465 11.085h-1.5v4.605c0 1.515-.09 2.16-.6 2.625-.405.345-1.02.405-1.515.3-.405-.09-.885-.45-1.155-.885L3 18.84c.33.78 1 1.485 1.695 1.86 1.155.6 3.045.66 4.395-.12 1.035-.6 1.35-1.86 1.35-3.6V11.085z" fill="black"/>
    </svg>
  ),
  html5: (props: any) => (
    <svg viewBox="0 0 24 24" fill="#E34F26" {...props}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" fill="#E34F26"/>
      <path d="M12 1.708l-.013.002.013-.002zM12 21.992l-.003.001.003-.001zm6.034-17.584H5.966l.135 1.525h11.798l-.135-1.525z" fill="white" opacity=".5"/>
      <path d="M12 19.351l5.379-1.443.744-8.157H8.531l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351z" fill="white"/>
    </svg>
  ),
  css3: (props: any) => (
    <svg viewBox="0 0 24 24" fill="#1572B6" {...props}>
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z" fill="#1572B6"/>
      <path d="M12 19.351l5.379-1.443.744-8.157H8.531l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351z" fill="white"/>
    </svg>
  ),
  tailwind: (props: any) => (
    <svg viewBox="0 0 24 24" fill="#06B6D4" {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/>
    </svg>
  ),
  github: (props: any) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="white"/>
    </svg>
  ),
  framer: (props: any) => (
    <svg viewBox="0 0 24 24" fill="#0055FF" {...props}>
      <path d="M12 0L12 8L20 8L12 0ZM12 8L4 8L12 16L12 8ZM12 16L4 16L4 24L12 16ZM12 16L12 24L20 16L12 16Z" fill="#0055FF"/>
    </svg>
  ),
  responsive: (props: any) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="#00FFCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
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
  const softSkills = getSoftSkills() || []

  const translatedStats = stats.map((stat: any) => ({
    ...stat,
    label: t(`stats.${stat.id}`),
  }))

  const details = [
    { label: t("details.city"), value: personalInfo.city },
    { label: t("details.email"), value: personalInfo.email },
    { label: t("details.phone"), value: Array.isArray(personalInfo.phone) ? personalInfo.phone.join(" / ") : personalInfo.phone },
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 ease-out text-[#B026FF]">
                  <Icon className="w-24 h-24" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-foreground mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-[#00FFCC]/80 transition-colors">{stat.label}</p>
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + (0.1 * i) }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-all duration-500 relative overflow-hidden"
              >
                 <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 ease-out text-[#00FFCC]">
                  <Icon className="w-24 h-24" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-foreground mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs font-medium uppercase tracking-widest text-[#B026FF]/80 transition-colors">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Dedicated Skills Section - Simplified */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 glass-strong rounded-[3rem] p-10 md:p-16 border border-white/10 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-30" />
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50 tracking-tight uppercase">
                {t("technicalArsenal") || "Technical Capabilities"}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {technicalSkills && technicalSkills.length > 0 ? technicalSkills.map((skill, i) => {
                const SkillIcon = skillIconMap[skill.icon as keyof typeof skillIconMap] || Code2
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col items-center gap-5 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 transition-all duration-500"
                  >
                    <div className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-[#05050A] border border-white/10 transition-all duration-500 overflow-hidden">
                      <SkillIcon className="w-10 h-10 text-white/80" />
                    </div>
                    
                    <div className="text-center">
                      <span className="text-base font-black text-white/70 tracking-tighter uppercase block mb-3">
                        {skill.name}
                      </span>
                      {/* Detailed Level Bar - Static for Performance */}
                      <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div 
                          style={{ width: `${skill.level}%` }}
                          className="h-full bg-gradient-to-r from-primary to-accent shadow-[0_0_10px_rgba(0,255,204,0.3)]"
                        />
                      </div>
                    </div>
                  </motion.div>
                )
              }) : (
                <div className="col-span-full text-center py-10">
                  <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
                    Technical capabilities loading...
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

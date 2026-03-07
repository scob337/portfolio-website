"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, CheckCircle2 } from "lucide-react"
import { getWorkExperience } from "@/lib/data"

export function ExperienceSection() {
  const t = useTranslations("experience")
  const workExperience = getWorkExperience()

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 section-title inline-block gradient-text-static neon-text-glow">
            {t("title")}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Glowing vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 z-0">
            <div className="h-full bg-gradient-to-b from-primary via-accent to-primary opacity-40 animate-glow-pulse" />
          </div>

          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="relative mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-2 w-full"
            >
              {/* Timeline dot - center on desktop, slightly indented on mobile */}
              <div className="absolute left-7 md:left-1/2 top-6 md:-translate-x-1/2 z-10 w-fit">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + 0.1 * index }}
                  viewport={{ once: true }}
                  className="w-5 h-5 rounded-full bg-primary animate-glow-pulse border-4 border-background shadow-[0_0_15px_#00FFCC]"
                />
              </div>

              {/* Card Container using Flex for full width of Grid cell */}
              <div
                className={`pl-16 md:pl-0 flex w-full h-full ${
                  index % 2 === 0
                    ? "md:col-start-1 md:pr-10 lg:pr-16"
                    : "md:col-start-2 md:pl-10 lg:pl-16"
                }`}
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="glass-strong rounded-3xl p-6 md:p-8 transition-all duration-300 hover:border-[rgba(176,38,255,0.4)] hover:shadow-[0_0_30px_rgba(176,38,255,0.15)] w-full block group"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{job.position}</h3>
                      <p className="text-primary font-semibold">{job.company}</p>
                    </div>
                    <div className="flex flex-col gap-2 sm:items-end shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-white/5 border border-white/5 rounded-lg px-3 py-1.5 w-fit">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        <span>
                          {new Date(job.startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                          {" — "}
                          {new Date(job.endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-white/5 border border-white/5 rounded-lg px-3 py-1.5 w-fit">
                        <MapPin className="h-3.5 w-3.5 text-accent" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{job.description}</p>

                  {/* Achievements */}
                  {job.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {t("achievements")}
                      </h4>
                      <ul className="space-y-1.5">
                        {job.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-foreground/80 group-hover:border-[#00FFCC]/40 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

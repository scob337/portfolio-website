"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter } from "lucide-react"
import { getFeaturedProjects } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

const FILTERS = ["all", "react", "nextjs", "ecommerce", "landing"] as const

export function ProjectsSection() {
  const t = useTranslations("projects")
  const featuredProjects = getFeaturedProjects()
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const filterLabels: Record<string, string> = {
    all: t("filter.all"),
    react: t("filter.react"),
    nextjs: t("filter.nextjs"),
    ecommerce: t("filter.ecommerce"),
    landing: t("filter.landing"),
  }

  const filtered = activeFilter === "all"
    ? featuredProjects
    : featuredProjects.filter((p) =>
        p.technologies.some((tech) =>
          tech.toLowerCase().replace(".", "").includes(activeFilter.replace(".", ""))
        )
      )

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

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
          <p className="text-lg text-muted-foreground mt-6 max-w-xl mx-auto">{t("subtitle")}</p>
        </motion.div>


        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          <Filter className="h-5 w-5 text-muted-foreground self-center mr-1" />
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === f
                  ? "bg-[#00FFCC] text-[#05050A] shadow-[0_0_20px_-5px_#00FFCC]"
                  : "glass border-white/10 text-muted-foreground hover:text-white hover:border-[#00FFCC]/50 hover:shadow-[0_0_15px_rgba(0,255,204,0.2)]"
              }`}
            >
              {filterLabels[f]}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 auto-rows-auto md:auto-rows-[400px]">
          {(filtered.length > 0 ? filtered : featuredProjects).map((project, i) => {
            // Make the first item span 2 columns and 2 rows on large screens if there are enough items
            const isFeatured = i === 0 && filtered.length > 1;

            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group bg-white/[0.01] border border-white/[0.05] hover:bg-white/[0.03] hover:border-[#00FFCC]/40 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,204,0.15)] transition-all duration-500 flex flex-col relative ${
                isFeatured ? "md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-[800px]" : "col-span-1 row-span-1 min-h-[400px]"
              }`}
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-30 group-hover:opacity-50"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/80 to-transparent" />
              </div>

              {/* Content Wrapper */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col h-full justify-end">
                <div className="flex-1" />
                
                <div>
                  <h3 className={`font-bold text-foreground mb-3 group-hover:text-[#00FFCC] transition-colors duration-300 ${isFeatured ? 'text-3xl md:text-5xl' : 'text-xl'}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, isFeatured ? undefined : 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-foreground/80 group-hover:border-[#B026FF]/40 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                    {!isFeatured && project.technologies.length > 3 && (
                       <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-foreground/80">
                         +{project.technologies.length - 3}
                       </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00FFCC]/10 text-[#00FFCC] border border-[#00FFCC]/30 text-sm font-semibold hover:bg-[#00FFCC] hover:text-[#05050A] hover:shadow-[0_0_20px_rgba(0,255,204,0.4)] transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t("liveDemo")}
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B026FF]/10 text-[#B026FF] border border-[#B026FF]/30 text-sm font-semibold hover:bg-[#B026FF] hover:text-white hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                      {t("code")}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )})}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="rounded-2xl bg-white/5 hover:bg-white/10 text-foreground border border-white/10 px-10 py-6 text-lg font-bold transition-colors"
            asChild
          >
            <Link href="/projects">{t("viewAll")}</Link>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}

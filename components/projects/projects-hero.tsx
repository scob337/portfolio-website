"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Code, Palette, Zap } from "lucide-react"
import { ReusableHero } from "@/components/ui/reusable-hero"

export function ProjectsHero() {
  const t = useTranslations("projects")

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Well-structured, maintainable code following best practices",
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Beautiful, user-friendly interfaces with attention to detail",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized applications with fast loading times",
    },
  ]

  return (
    <ReusableHero
      title={t("title")}
      description="Discover my portfolio of web applications, from e-commerce platforms to interactive dashboards. Each project showcases modern development practices and innovative solutions."
      backgroundImage="/projects-banner.webp"
      backgroundOverlay="from-primary/5 via-background to-secondary/5"
      contentAlignment="center"
      minHeight="min-h-[80vh]"
      className="pt-24 pb-16"
    >
      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + 0.1 * index }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 rounded-full bg-primary/10">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </ReusableHero>
  )
}

"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react"
import { getPersonalInfo } from "@/lib/data"
import Link from "next/link"

export function HeroSection() {
  const t = useTranslations("hero")

  const personalInfo = getPersonalInfo()
  // Create an array of keywords from translations manually since t.raw is not available or type-safe 
  // in all setups, or simply use keys "0", "1", "2", "3"
  const keywords = ["0", "1", "2", "3"].map(key => t(`keywords.${key}`))
  const [currentKeyword, setCurrentKeyword] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [keywords.length])

  const socialLinks = [
    { icon: Github, href: personalInfo.socialLinks.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: "LinkedIn" },
    { icon: Mail, href: personalInfo.socialLinks.email, label: "Email" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 bg-[url('/modern-tech-background-pattern.jpg')] opacity-5 bg-cover bg-center" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            {t("greeting")}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance"
          >
            {t("name")}
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6 h-12 md:h-16"
          >
            <motion.span
              key={currentKeyword}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {keywords[currentKeyword]}
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty"
          >
            {t("description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="text-lg px-8 py-3" asChild>
              <Link href={`/#projects`}>{t("cta")}</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent" asChild>
              <Link href={`/contact`}>{t("contact")}</Link>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-center"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="p-2 rounded-full hover:bg-card transition-colors duration-200"
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

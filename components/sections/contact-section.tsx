"use client"

import type React from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { getPersonalInfo } from "@/lib/data"
import { ContactForm } from "@/components/contact/contact-form"

export function ContactSection() {
  const t = useTranslations("contact")
  const personalInfo = getPersonalInfo()

  const contactInfo = [
    {
      icon: Mail,
      label: t("info.email"),
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#00d2d3",
    },
    {
      icon: Phone,
      label: t("info.phone"),
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "#7c3aed",
    },
    {
      icon: MapPin,
      label: t("info.location"),
      value: personalInfo.city,
      href: "#",
      color: "#ec4899",
    },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Decorative Aurora orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#00FFCC]/10 rounded-full blur-[100px] animate-float pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-[#B026FF]/10 rounded-full blur-[100px] animate-float [animation-delay:2s] pointer-events-none mix-blend-screen" />

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
          <p className="text-lg text-muted-foreground mt-8 max-w-xl mx-auto">{t("description")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              {t("info.description")}
            </p>

            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 6, scale: 1.02 }}
                className="flex items-center gap-5 glass rounded-2xl p-5 group cursor-pointer block hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                style={{ borderColor: `${item.color}30` }}
              >
                <div
                  className="p-4 rounded-xl shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${item.color}15`,
                    boxShadow: `0 0 20px ${item.color}20`,
                  }}
                >
                  <item.icon className="h-6 w-6" style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">
                    {item.label}
                  </p>
                  <p className="text-foreground font-medium transition-colors duration-300" style={{ textShadow: `0 0 10px ${item.color}00` }}>
                    {item.value}
                  </p>
                </div>
                <div
                  className="ml-auto w-1 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: item.color }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 border border-[#00FFCC]/20 shadow-[0_0_30px_rgba(0,255,204,0.05)] hover:border-[#00FFCC]/40 hover:shadow-[0_0_30px_rgba(0,255,204,0.15)] transition-all duration-500 relative overflow-hidden group"
          >
            {/* Subtle inner highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00FFCC]/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
               <Send className="w-5 h-5 text-[#00FFCC]" />
               {t("form.title")}
            </h3>
            <p className="text-muted-foreground mb-6">{t("form.subtitle")}</p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

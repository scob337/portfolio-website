"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"
import { getPersonalInfo } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")
  const personalInfo = getPersonalInfo()

  const socialLinks = [
    { icon: Github, href: personalInfo.socialLinks.github, label: "GitHub", color: "hover:text-white hover:border-white/40" },
    { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-400/40" },
    { icon: Twitter, href: personalInfo.socialLinks.twitter, label: "Twitter", color: "hover:text-sky-400 hover:border-sky-400/40" },
    { icon: Mail, href: personalInfo.socialLinks.email, label: "Email", color: "hover:text-primary hover:border-primary/40" },
  ]

  const navLinks = [
    { href: "/", label: tNav("home") },
    { href: "/about", label: tNav("about") },
    { href: "/projects", label: tNav("projects") },
    { href: "/articles", label: tNav("articles") },
    { href: "/contact", label: tNav("contact") },
  ]

  return (
    <footer className="relative bg-[#05050A] text-white py-16 overflow-hidden border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-48 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-40 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 grid-bg opacity-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/">
              <Image className="object-contain mb-4" src="/Logo.png" alt="Logo" width={130} height={130} />
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              {t("tagline")}
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span>{t("madeWith")}</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>{t("inEgypt")}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base font-bold mb-6 gradient-text-static inline-block">{t("nav")}</h4>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block relative group text-sm"
                  >
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base font-bold mb-6 gradient-text-static inline-block">{t("contact")}</h4>
            <div className="space-y-4">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-primary transition-colors duration-300 text-sm"
                whileHover={{ x: 4 }}
              >
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                {personalInfo.email}
              </motion.a>
              <motion.div
                className="flex items-center gap-3 text-slate-400 text-sm"
                whileHover={{ x: 4 }}
              >
                <span className="text-accent">📱</span>
                {Array.isArray(personalInfo.phone) ? personalInfo.phone.join(" / ") : personalInfo.phone}
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-slate-400 text-sm"
                whileHover={{ x: 4 }}
              >
                <span className="text-accent">📍</span>
                {personalInfo.city}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-slate-500 text-sm text-center md:text-left">{t("copyright")}</p>

          <div className="flex gap-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.05 * i }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.93 }}
                className={`p-3 rounded-xl glass border border-white/10 text-slate-400 ${social.color} transition-all duration-300`}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

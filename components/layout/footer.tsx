"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"
import { getPersonalInfo } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const t = useTranslations("footer")

  const personalInfo = getPersonalInfo()

  const socialLinks = [
    { icon: Github, href: personalInfo.socialLinks.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.socialLinks.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: personalInfo.socialLinks.twitter, label: "Twitter" },
    { icon: Mail, href: personalInfo.socialLinks.email, label: "Email" },
  ]

  const navLinks = [
    { href: `/`, label: "Home" },
    { href: `/about`, label: "About" },
    { href: `/projects`, label: "Projects" },
    { href: `/contact`, label: "Contact" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
            <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
              className="object-cover"
                src="/Logo.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </Link>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Front-End Developer passionate about creating modern, responsive web applications with cutting-edge technologies.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>in Egypt</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
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
            <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-4 w-4" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                  {personalInfo.email}
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-slate-300"
                whileHover={{ x: 5 }}
              >
                <span className="h-4 w-4 flex items-center justify-center text-xs">📱</span>
                <span>{personalInfo.phone}</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3 text-slate-300"
                whileHover={{ x: 5 }}
              >
                <span className="h-4 w-4 flex items-center justify-center text-xs">📍</span>
                <span>{personalInfo.city}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 mb-6 md:mb-0 text-center md:text-left">
            © 2025 Abdeltawab Sha`ban. All rights reserved.
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group"
                aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

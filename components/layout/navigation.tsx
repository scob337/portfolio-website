"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Link } from "@/i18n/routing"
import { LanguageSwitcher } from "@/components/ui/language-switcher"

export function Navigation() {
  const t = useTranslations("nav")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: `/`, label: t("home") },
    { href: `/about`, label: t("about") },
    { href: `/projects`, label: t("projects") },
    { href: `/articles`, label: t("articles") },
    { href: `/contact`, label: t("contact") },
  ]

  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-6 pointer-events-none"
    >
      <div className="container mx-auto px-4 flex justify-center">
        <nav className={`pointer-events-auto flex items-center gap-6 px-8 py-3.5 rounded-full transition-all duration-500 border ${
          isScrolled 
            ? "bg-[#05050A]/80 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]" 
            : "bg-white/[0.03] backdrop-blur-md border-white/5"
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-7 h-7 rounded-md overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-300">
              <Image src="/Logo.png" alt="Logo" fill className="object-cover" />
            </div>
            <span className="font-black tracking-tighter text-lg group-hover:text-primary transition-colors">ABDO.</span>
          </Link>

          {/* Divider */}
          <div className="w-px h-4 bg-white/10 hidden md:block" />

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-1.5 text-sm font-medium text-white/60 hover:text-white transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="w-px h-4 bg-white/10 hidden md:block" />
            <LanguageSwitcher />
            
            <button
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center rounded-full hover:bg-white/10 transition-colors z-50 overflow-hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-white rounded-full origin-center"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  className="w-full h-0.5 bg-white rounded-full"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-white rounded-full origin-center"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[40] md:hidden bg-[#05050A]/98 backdrop-blur-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/10 pointer-events-none" />
            <div className="flex flex-col items-center justify-center h-full gap-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.08, 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20 
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-black tracking-tighter hover:text-primary transition-all duration-300 relative group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1.5 bg-primary/30 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  )
}

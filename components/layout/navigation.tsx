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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4 pt-6" : "py-6 pt-8"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-center">
        {/* The Pill */}
        <div className={`relative flex items-center justify-between transition-all duration-500 rounded-[2rem] px-5 py-2.5 ${
          isScrolled 
            ? "bg-[#05050A]/70 backdrop-blur-3xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] w-full max-w-4xl" 
            : "w-full max-w-5xl"
        }`}>
          
          {/* Background Highlight for Scrolled State */}
          {isScrolled && (
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />
          )}

          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-[#00FFCC]/50 group-hover:shadow-[0_0_15px_rgba(0,255,204,0.3)] transition-all duration-300">
              <Image
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                src="/Logo.png"
                alt="Logo"
                fill
              />
            </div>
            {!isScrolled && (
              <span className="font-bold text-foreground text-lg hidden sm:block tracking-tight group-hover:text-[#00FFCC] transition-colors duration-300">Abdeltawab.</span>
            )}
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-1 relative z-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 rounded-full hover:bg-white/5 active:scale-95"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 relative z-10">
            <LanguageSwitcher />

            {/* Mobile Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-white/5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-4 right-4 mt-2 origin-top md:hidden z-50"
          >
            <div className="bg-[#05050A]/90 backdrop-blur-3xl rounded-3xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)] flex flex-col gap-2 border border-white/10 relative overflow-hidden">
              {/* Subtle inner glow for mobile menu */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00FFCC]/5 to-transparent pointer-events-none" />
              
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-4 text-base font-semibold rounded-2xl bg-white/[0.02] hover:bg-white/5 text-foreground/80 hover:text-[#00FFCC] transition-all duration-300 border border-transparent hover:border-[#00FFCC]/30 hover:shadow-[0_0_15px_rgba(0,255,204,0.1)] relative overflow-hidden"
                  >
                    {/* Hover slider effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00FFCC] block opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

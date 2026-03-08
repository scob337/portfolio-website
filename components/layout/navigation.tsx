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
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-white/10 w-9 h-9"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </nav>
      </div>
    </motion.header>

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
    </>
  )
}

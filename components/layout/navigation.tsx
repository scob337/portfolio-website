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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 py-6"
    >
      <div className="container mx-auto px-4 flex justify-center">
        <nav className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-500 ${
          isScrolled 
            ? "bg-[#05050A]/80 backdrop-blur-xl border border-white/10 shadow-2xl" 
            : "bg-white/5 backdrop-blur-md border border-white/5"
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 mr-4 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors">
              <Image src="/Logo.png" alt="Logo" fill className="object-cover" />
            </div>
            <span className="font-black tracking-tighter text-lg group-hover:text-primary transition-colors">ABDO.</span>
          </Link>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-bold text-white/70 hover:text-white transition-colors group"
              >
                {item.label}
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 ml-4">
            <LanguageSwitcher />
            
            {/* Mobile Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-xl hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
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

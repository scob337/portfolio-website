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
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
    >
      <div className="container mx-auto px-4 py-6 flex justify-center">
        <nav className={`pointer-events-auto relative flex items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full px-2 py-2 ${
          isScrolled 
            ? "bg-[#05050A]/60 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] gap-1" 
            : "bg-transparent gap-4"
        }`}>
          
          {/* Scrolled Highlight Overlay */}
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none"
              />
            )}
          </AnimatePresence>

          {/* Logo - Always visible but shrinks on scroll */}
          <Link href="/" className="relative z-10 flex items-center group pl-3 pr-2">
            <motion.div 
              animate={{ 
                width: isScrolled ? 36 : 42, 
                height: isScrolled ? 36 : 42 
              }}
              className="relative rounded-full overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,255,204,0.4)]"
            >
              <Image
                className="object-cover transition-transform duration-700 group-hover:scale-115"
                src="/Logo.png"
                alt="Logo"
                fill
              />
            </motion.div>
            <AnimatePresence>
              {!isScrolled && (
                <motion.span
                  initial={{ width: 0, opacity: 0, x: -10 }}
                  animate={{ width: "auto", opacity: 1, x: 0 }}
                  exit={{ width: 0, opacity: 0, x: -10 }}
                  className="ml-3 font-black text-xl tracking-tighter text-foreground group-hover:text-primary transition-colors hidden sm:block overflow-hidden whitespace-nowrap"
                >
                  ABDO.
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-5 py-2.5 text-sm font-bold tracking-tight transition-all duration-500 rounded-full group overflow-hidden ${
                  isScrolled ? "text-muted-foreground hover:text-white" : "text-foreground/80 hover:text-white"
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl -z-10 border border-primary/20"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary/40 blur-[2px] rounded-full group-hover:w-1/2 transition-all duration-500" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pr-2 relative z-10">
            <LanguageSwitcher />

            {/* Mobile Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-white/10 w-10 h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
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

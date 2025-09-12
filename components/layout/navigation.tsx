"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Briefcase, Mail, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Navigation() {
  const t = useTranslations("nav")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: `/`, label: t("home"), icon: Home },
    { href: `/about`, label: t("about"), icon: User },
    { href: `/projects`, label: t("projects"), icon: Briefcase },
    { href: `/articles`, label: t("articles"), icon: BookOpen },
    { href: `/contact`, label: t("contact"), icon: Mail },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/30 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">
              <Image
              className="object-cover"
                src="/Logo.png"
                alt="Logo"
                width={150}
                height={150}
              />
            </Link>


          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="hidden md:flex items-center space-x-2"
          >
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center space-x-2 px-4 py-2 rounded-full text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium relative overflow-hidden"
                  >
                    <IconComponent className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    <span className="relative z-10">{item.label}</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Language Toggle & Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex items-center space-x-4"
          >

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden"
            >
              <Button
                variant="ghost"
                size="sm"
                className="relative p-2 rounded-full hover:bg-primary/10 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl rounded-b-2xl shadow-2xl overflow-hidden"
            >
              <div className="py-6 space-y-1">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -50, scale: 0.9 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -50, scale: 0.9 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={item.href}
                        className="group flex items-center space-x-4 px-6 py-4 text-foreground/80 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-blue-600/10 transition-all duration-300 rounded-xl mx-4 relative overflow-hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <motion.div
                          className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="h-5 w-5 text-primary" />
                        </motion.div>
                        <span className="font-medium text-lg">{item.label}</span>
                        <motion.div
                          className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ x: -10 }}
                          animate={{ x: 0 }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </motion.div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

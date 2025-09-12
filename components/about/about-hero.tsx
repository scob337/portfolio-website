"use client"

import { motion } from "framer-motion"
import { getPersonalInfo } from "@/lib/data"
import Image from "next/image"

export function AboutHero() {
  const personalInfo = getPersonalInfo()

  return (
    <section 
    style={{ backgroundImage: "url('/about-banner.jpg')" }}
    className="relative pt-32 pb-20
    bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>

      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
            >
              About Me
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-20 h-1 bg-primary mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg leading-relaxed text-pretty"
            >
              {personalInfo.bio}
            </motion.p>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Main image container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 p-2 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-background to-background/80 p-2">
                  <Image
                    src="/professional-developer-portrait.jpg"
                    alt="Professional portrait of Abdeltawab Sha`ban, Front-End Developer specializing in React and Next.js"
                    width={300}
                    height={300}
                    className="w-full h-full rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
              </div>
              
              {/* Animated decorative elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full"
              />
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-8 w-4 h-4 bg-primary rounded-full opacity-60"
              />
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-16 -right-8 w-3 h-3 bg-secondary rounded-full opacity-60"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

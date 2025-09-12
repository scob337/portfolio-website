"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ReusableHeroProps {
  title: string
  subtitle?: string
  description?: string
  backgroundImage?: string
  backgroundOverlay?: string
  children?: ReactNode
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  descriptionClassName?: string
  containerClassName?: string
  contentAlignment?: "left" | "center" | "right"
  minHeight?: string
  showDivider?: boolean
  dividerColor?: string
}

export function ReusableHero({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundOverlay = "from-primary/10 via-background to-secondary/10",
  children,
  className,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
  containerClassName,
  contentAlignment = "center",
  minHeight = "min-h-[60vh]",
  showDivider = true,
  dividerColor = "bg-primary"
}: ReusableHeroProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }

  const justifyClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end"
  }

  return (
    <section 
      className={cn(
        "relative pt-32 pb-20 overflow-hidden",
        minHeight,
        className
      )}
    >
      {/* Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Background Overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br",
        backgroundOverlay
      )} />
      
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className={cn(
        "container mx-auto px-4 relative z-10 flex items-center",
        minHeight,
        containerClassName
      )}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "w-full max-w-4xl",
            alignmentClasses[contentAlignment],
            contentAlignment === "center" && "mx-auto",
            contentAlignment === "right" && "ml-auto"
          )}
        >
          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={cn(
                "text-lg md:text-xl text-muted-foreground mb-4",
                subtitleClassName
              )}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance",
              titleClassName
            )}
          >
            {title}
          </motion.h1>

          {/* Divider */}
          {showDivider && (
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={cn(
                "w-20 h-1 mb-8",
                dividerColor,
                contentAlignment === "center" && "mx-auto",
                contentAlignment === "right" && "ml-auto"
              )}
            />
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className={cn(
                "text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl",
                contentAlignment === "center" && "mx-auto",
                contentAlignment === "right" && "ml-auto",
                descriptionClassName
              )}
            >
              {description}
            </motion.p>
          )}

          {/* Custom Children Content */}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className={cn(
                "mt-8",
                `flex ${justifyClasses[contentAlignment]}`
              )}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
"use client"


import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getPersonalInfo, getStats } from "@/lib/data"
import { Users, Briefcase, Award, Clock } from "lucide-react"
import Link from "next/link"

const iconMap = {
  users: Users,
  briefcase: Briefcase,
  award: Award,
  clock: Clock,
}

export function AboutSection() {
  const personalInfo = getPersonalInfo()
  const stats = getStats()

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">{personalInfo.bio}</p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">Name:</span>
                <span className="text-foreground">{personalInfo.name}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">Location:</span>
                <span className="text-foreground">{personalInfo.city}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">Email:</span>
                <span className="text-foreground">{personalInfo.email}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-muted-foreground">Phone:</span>
                <span className="text-foreground">{personalInfo.phone}</span>
              </div>
            </div>

            <Button size="lg" asChild>
              <Link href="/about">More About Me</Link>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = iconMap[stat.icon as keyof typeof iconMap]
              return (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-200">
                    <CardContent className="p-0">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-foreground mb-2"
                      >
                        {stat.value}
                        {stat.suffix}
                      </motion.div>
                      <p className="text-muted-foreground text-sm">{stat.label}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

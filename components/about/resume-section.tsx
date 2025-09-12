"use client"


import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, GraduationCap, Award, Calendar } from "lucide-react"
import { getEducation } from "@/lib/data"

export function ResumeSection() {
  const education = getEducation()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <Button size="lg" className="mb-8">
            <Download className="h-5 w-5 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-primary/10 mr-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-200">
                    <CardHeader>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <div className="flex items-center text-primary font-semibold">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        {edu.institution}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(edu.startDate).getFullYear()} - {new Date(edu.endDate).getFullYear()}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  )
}

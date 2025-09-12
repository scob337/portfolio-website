"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { getWorkExperience } from "@/lib/data"

export function ExperienceSection() {
  const workExperience = getWorkExperience()

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline line */}
              {index < workExperience.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-border -z-10" />
              )}

              <Card className="ml-12 hover:shadow-lg transition-shadow duration-200">
                {/* Timeline dot */}
                <div className="absolute -left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{job.position}</h3>
                      <p className="text-lg text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(job.startDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}{" "}
                        -{" "}
                        {new Date(job.endDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>

                  {job.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

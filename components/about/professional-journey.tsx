"use client"


import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"
import { getWorkExperience } from "@/lib/data"

import { useTranslations } from "next-intl"

export function ProfessionalJourney() {
  const t = useTranslations("aboutPage.journey")
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < workExperience.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-border -z-10" />
              )}

              <Card className="ml-12 hover:shadow-lg transition-shadow duration-200">
                {/* Timeline dot */}
                <div className="absolute -left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-foreground mb-2">{t(`items.${job.id}.position`)}</CardTitle>
                      <div className="flex items-center space-x-2 mb-3">
                        <Building className="h-5 w-5 text-primary" />
                        <span className="text-xl text-primary font-semibold">{job.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {new Date(job.startDate).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}{" "}
                          -{" "}
                          {job.current ? t("present") : new Date(job.endDate).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{t(`items.${job.id}.location`)}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{t(`items.${job.id}.description`)}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">{t("achievements")}</h4>
                    <ul className="space-y-2">
                      {job.achievements.map((_, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{t(`items.${job.id}.achievements.${i}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">{t("tech")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

"use client"


import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, MapPin, Calendar, Mail, Phone, GraduationCap, Briefcase } from "lucide-react"
import { getPersonalInfo } from "@/lib/data"

import { useTranslations } from "next-intl"

export function PersonalDetails() {
  const t = useTranslations("aboutPage.details")
  const personalInfo = getPersonalInfo()

  const details = [
    {
      icon: User,
      label: t("items.Age"),
      value: personalInfo.age.toString(),
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      label: t("items.City"),
      value: personalInfo.city,
      color: "text-green-600",
    },
    {
      icon: Calendar,
      label: t("items.Birthday"),
      value: personalInfo.birthday,
      color: "text-purple-600",
    },
    {
      icon: Mail,
      label: t("items.Email"),
      value: personalInfo.email,
      color: "text-red-600",
    },
    {
      icon: Phone,
      label: t("items.Phone"),
      value: personalInfo.phone,
      color: "text-yellow-600",
    },
    {
      icon: GraduationCap,
      label: t("items.Degree"),
      value: t("values.degree"),
      color: "text-indigo-600",
    },
    {
      icon: Briefcase,
      label: t("items.Freelance"),
      value: t("values.freelance"),
      color: "text-teal-600",
    },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-primary/5 to-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text "
          >
            {t("title")}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {details.map((detail, index) => (
            <motion.div
              key={detail.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm group-hover:shadow-primary/10">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`p-3 rounded-full bg-gradient-to-br from-background to-background/80 shadow-md ${detail.color} group-hover:shadow-lg`}
                    >
                      <detail.icon className="h-5 w-5" />
                    </motion.div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">{detail.label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-200">{detail.value}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Badge
              variant="secondary"
              className="text-lg px-8 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 shadow-lg hover:shadow-green-500/20"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-green-500 rounded-full mr-3"
              />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-semibold">
                {t("available")}
              </span>
            </Badge>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

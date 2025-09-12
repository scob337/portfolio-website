"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Mail, Phone, MapPin, Clock, Globe, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getPersonalInfo } from "@/lib/data"

export function ContactInfo() {
  const t = useTranslations("contact")
  const personalInfo = getPersonalInfo()

  const contactItems = [
    {
      icon: Mail,
      label: t("info.email"),
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: t("info.phone"),
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: t("info.location"),
      value: personalInfo.city,
    },
    {
      icon: User,
      label: t("info.freelance"),
      value: personalInfo.freelance ? t("info.available") : t("info.unavailable"),
    },
    {
      icon: Globe,
      label: t("info.languages"),
      value: "Arabic, English",
    },
    {
      icon: Clock,
      label: t("info.timezone"),
      value: "UTC+2 (Cairo)",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-4">{t("info.title")}</h2>
        <p className="text-muted-foreground text-pretty">{t("info.description")}</p>
      </div>

      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-sm">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

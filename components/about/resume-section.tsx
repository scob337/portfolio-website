"use client"


import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

import { useTranslations } from "next-intl"

export function ResumeSection() {
  const t = useTranslations("aboutPage")

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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("resume.title")}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <Button size="lg" className="mb-8" asChild>
            <a href="/Abdeltawab.pdf" download="Abdeltawab_Sha'ban_CV.pdf">
              <Download className="h-5 w-5 mr-2" />
              {t("resume.download")}
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}

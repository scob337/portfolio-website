"use client"

import { useTranslations } from "next-intl"
import { ReusableHero } from "@/components/ui/reusable-hero"

export function ContactHero() {
  const t = useTranslations("contact")

  return (
    <ReusableHero
      title={t("hero.title")}
      description={t("hero.subtitle")}
      backgroundImage="/contact-banner.jpg"
      backgroundOverlay="from-primary/5 via-background to-accent/5"
      contentAlignment="center"
      minHeight="min-h-[70vh]"
      titleClassName="text-4xl md:text-6xl"
      descriptionClassName="text-xl max-w-2xl"
    />
  )
}

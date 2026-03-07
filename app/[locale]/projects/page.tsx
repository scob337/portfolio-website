import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGrid } from "@/components/projects/projects-grid"

import { getLocale } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const isArabic = locale === "ar"

  return {
    title: isArabic ? "معرض الأعمال - عبد التواب شعبان | تطبيقات React و Next.js" : "Projects Portfolio - Abdeltawab Sha`ban | React & Next.js Applications",
    description: isArabic
      ? "استكشف معرض أعمال عبد التواب شعبان. تطبيقات ويب حديثة ومتاجر إلكترونية وصفحات هبوط مبنية باستخدام تقنيات React و Next.js."
      : "Explore the comprehensive portfolio of Abdeltawab Sha`ban featuring modern web applications, e-commerce solutions, and landing pages built with React, Next.js.",
    keywords: isArabic
      ? ["مشاريع React", "تطبيقات Next.js", "معرض أعمال ويب", "متاجر إلكترونية", "صفحات هبوط"]
      : ["React Projects", "Next.js Applications", "Web Development Portfolio", "E-commerce Solutions", "Landing Pages", "TypeScript Projects"],
    openGraph: {
      title: isArabic ? "معرض الأعمال - عبد التواب شعبان" : "Projects Portfolio - Abdeltawab Sha`ban",
      description: isArabic ? "مجموعة شاملة من مشاريع تطوير الويب الحديثة" : "Comprehensive portfolio showcasing modern web development projects, applications, and innovative solutions",
      type: "website",
      url: `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/projects`,
      locale: isArabic ? "ar_EG" : "en_US",
      images: [
        {
          url: "/projects-banner.webp",
          width: 1200,
          height: 630,
          alt: isArabic ? "معرض مشاريع عبد التواب شعبان" : "Abdeltawab Sha`ban Projects Portfolio Showcase",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic ? "معرض الأعمال - عبد التواب شعبان" : "Projects Portfolio - Abdeltawab Sha`ban",
      description: isArabic ? "مجموعة شاملة من مشاريع تطوير الويب الحديثة" : "Modern web development projects and applications showcase",
      images: ["/projects-banner.webp"],
    },
    alternates: {
      canonical: `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/projects`,
      languages: {
        "en": "https://abdo-front-end.netlify.app/projects",
        "ar": "https://abdo-front-end.netlify.app/ar/projects",
      }
    },
  }
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ProjectsHero />
      <ProjectsGrid />
    </main>
  )
}

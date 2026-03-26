import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { AboutHero } from "@/components/about/about-hero"
import { PersonalDetails } from "@/components/about/personal-details"
import { ProfessionalJourney } from "@/components/about/professional-journey"
import { SkillsShowcase } from "@/components/about/skills-showcase"
import { FactsStats } from "@/components/about/facts-stats"
import { ResumeSection } from "@/components/about/resume-section"

import { getLocale } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const isArabic = locale === "ar"

  return {
    title: isArabic 
      ? "عبد التواب شعبان - مطور واجهات أمامية | الخلفية المهنية"
      : "About Abdeltawab Sha`ban - Front-End Developer | Professional Background",
    description: isArabic
      ? "اكتشف المسيرة المهنية لعبد التواب شعبان، مطور واجهات أمامية من مصر متخصص في تقنيات React و Next.js."
      : "Discover the professional journey of Abdeltawab Sha`ban, a front-end developer from Egypt with expertise in React, Next.js, and modern web technologies.",
    keywords: isArabic 
      ? ["عبد التواب شعبان", "مطور واجهات أمامية مصر", "خبرة تطوير ويب", "مهارات مهنية", "معرض أعمال مطور"]
      : ["About Abdeltawab Sha`ban", "Front-End Developer Egypt", "React Developer Background", "Web Developer Experience", "Professional Skills", "Developer Portfolio"],
    openGraph: {
      title: isArabic ? "عن عبد التواب شعبان - مطور واجهات أمامية" : "About Abdeltawab Sha`ban - Front-End Developer",
      description: isArabic ? "الخلفية المهنية والمهارات والخبرات لمطور واجهات أمامية من مصر" : "Professional background, skills, and experience of a passionate front-end developer from Egypt",
      type: "profile",
      url: `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/about`,
      locale: isArabic ? "ar_EG" : "en_US",
      images: [
        {
          url: "/professional-developer-portrait.jpg",
          width: 800,
          height: 600,
          alt: isArabic ? "عبد التواب شعبان" : "Abdeltawab Sha`ban - Professional Developer Portrait",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic ? "عن عبد التواب شعبان - مطور واجهات أمامية" : "About Abdeltawab Sha`ban - Front-End Developer",
      description: isArabic ? "الخلفية المهنية والمهارات والخبرات" : "Professional background and skills of a passionate front-end developer",
      images: ["/professional-developer-portrait.jpg"],
    },
    alternates: {
      canonical: `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/about`,
      languages: {
        "en": "https://abdo-front-end.netlify.app/about",
        "ar": "https://abdo-front-end.netlify.app/ar/about",
        "x-default": "https://abdo-front-end.netlify.app/about",
      }
    },
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      <div className="container mx-auto px-4 py-16 space-y-16">
        <PersonalDetails />
        <ProfessionalJourney />
        <SkillsShowcase />
        <FactsStats />
        <ResumeSection />
      </div>
    </div>
  )
}

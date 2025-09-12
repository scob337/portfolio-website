import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { AboutHero } from "@/components/about/about-hero"
import { PersonalDetails } from "@/components/about/personal-details"
import { ProfessionalJourney } from "@/components/about/professional-journey"
import { SkillsShowcase } from "@/components/about/skills-showcase"
import { FactsStats } from "@/components/about/facts-stats"
import { ResumeSection } from "@/components/about/resume-section"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("about")

  return {
    title: "About Abdeltawab Sha`ban - Front-End Developer | Professional Background",
    description:
      "Discover the professional journey of Abdeltawab Sha`ban, a 27-year-old front-end developer from Egypt with expertise in React, Next.js, and modern web technologies. Learn about his skills, experience, and passion for creating exceptional digital experiences.",
    keywords: [
      "About Abdeltawab Sha`ban",
      "Front-End Developer Egypt",
      "React Developer Background",
      "Web Developer Experience",
      "Professional Skills",
      "Developer Portfolio",
    ],
    openGraph: {
      title: "About Abdeltawab Sha`ban - Front-End Developer",
      description: "Professional background, skills, and experience of a passionate front-end developer from Egypt",
      type: "profile",
      url: "https://abdo-front-end.netlify.app/about",
      images: [
        {
          url: "/professional-developer-portrait.png",
          width: 800,
          height: 600,
          alt: "Abdeltawab Sha`ban - Professional Developer Portrait",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "About Abdeltawab Sha`ban - Front-End Developer",
      description: "Professional background and skills of a passionate front-end developer",
      images: ["/professional-developer-portrait.png"],
    },
    alternates: {
      canonical: "https://abdo-front-end.netlify.app/about",
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

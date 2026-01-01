import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ContactSection } from "@/components/sections/contact-section"

export const metadata: Metadata = {
  title: "Abdeltawab Sha`ban | Front-End Developer | React & Next.js Expert",
  description:
    "Professional portfolio of Abdeltawab Sha`ban, a skilled front-end developer from Egypt specializing in React, Next.js, and modern web technologies. Available for freelance projects worldwide.",
  keywords: [
    "Abdeltawab Sha`ban",
    "عبد التواب شعبان",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "Egypt Developer",
    "Freelance Developer",
    "Web Development",
    "مطور واجهات أمامية",
  ],
  openGraph: {
    title: "Abdeltawab Sha`ban | Front-End Developer | React & Next.js Expert",
    description:
      "Professional portfolio of Abdeltawab Sha`ban, a skilled front-end developer from Egypt specializing in React, Next.js, and modern web technologies.",
    type: "website",
    url: "https://abdo-front-end.netlify.app/",
    images: [
      {
        url: "https://abdo-front-end.netlify.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdeltawab Sha`ban - Front-End Developer Portfolio",
      },
    ],
    siteName: "Abdeltawab Sha`ban Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdeltawab Sha`ban | Front-End Developer",
    description:
      "Professional portfolio showcasing modern web development projects built with React, Next.js, and cutting-edge technologies.",
    images: ["https://abdo-front-end.netlify.app/og-image.png"],
  },
  alternates: {
    canonical: "https://abdo-front-end.netlify.app/",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}

import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGrid } from "@/components/projects/projects-grid"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("projects")

  return {
    title: "Projects Portfolio - Abdeltawab Sha`ban | React & Next.js Applications",
    description:
      "Explore the comprehensive portfolio of Abdeltawab Sha`ban featuring modern web applications, e-commerce solutions, and landing pages built with React, Next.js, TypeScript, and cutting-edge technologies. View live demos and source code.",
    keywords: [
      "React Projects",
      "Next.js Applications",
      "Web Development Portfolio",
      "E-commerce Solutions",
      "Landing Pages",
      "TypeScript Projects",
      "Frontend Projects",
      "Developer Portfolio",
    ],
    openGraph: {
      title: "Projects Portfolio - Abdeltawab Sha`ban",
      description:
        "Comprehensive portfolio showcasing modern web development projects, applications, and innovative solutions",
      type: "website",
      url: "https://abdo-front-end.netlify.app/projects",
      images: [
        {
          url: "/projects-showcase.png",
          width: 1200,
          height: 630,
          alt: "Abdeltawab Sha`ban Projects Portfolio Showcase",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Projects Portfolio - Abdeltawab Sha`ban",
      description: "Modern web development projects and applications showcase",
      images: ["/projects-showcase.png"],
    },
    alternates: {
      canonical: "https://abdo-front-end.netlify.app/projects",
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

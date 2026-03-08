import type { Metadata } from "next"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ContactSection } from "@/components/sections/contact-section"

import { getLocale } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const isArabic = locale === "ar"

  return {
    title: isArabic 
      ? "عبد التواب شعبان | مطور واجهات أمامية | خبير React و Next.js"
      : "Abdeltawab Sha`ban | Front-End Developer | React & Next.js Expert",
    description: isArabic
      ? "المعرض المهني لعبد التواب شعبان، مطور واجهات أمامية محترف من مصر متخصص في تقنيات React و Next.js وتطوير الويب الحديث. متاح للمشاريع الحرة عالمياً."
      : "Professional portfolio of Abdeltawab Sha`ban, a skilled front-end developer from Egypt specializing in React, Next.js, and modern web technologies. Available for freelance projects worldwide.",
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
      "تصميم مواقع",
    ],
    openGraph: {
      title: isArabic
        ? "عبد التواب شعبان | مطور واجهات أمامية | خبير React و Next.js"
        : "Abdeltawab Sha`ban | Front-End Developer | React & Next.js Expert",
      description: isArabic
        ? "المعرض المهني لعبد التواب شعبان، مطور واجهات أمامية محترف من مصر متخصص في تقنيات React و Next.js."
        : "Professional portfolio of Abdeltawab Sha`ban, a skilled front-end developer from Egypt specializing in React, Next.js, and modern web technologies.",
      type: "website",
      url: `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/`,
      locale: isArabic ? "ar_EG" : "en_US",
      images: [
        {
          url: "https://abdo-front-end.netlify.app/og-image.png",
          width: 1200,
          height: 630,
          alt: isArabic ? "معرض أعمال عبد التواب شعبان" : "Abdeltawab Sha`ban - Front-End Developer Portfolio",
        },
      ],
      siteName: isArabic ? "معرض أعمال عبد التواب شعبان" : "Abdeltawab Sha`ban Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic 
        ? "عبد التواب شعبان | مطور واجهات أمامية" 
        : "Abdeltawab Sha`ban | Front-End Developer",
      description: isArabic
        ? "معرض مهني يعرض مشاريع تطوير ويب حديثة باستخدام React و Next.js."
        : "Professional portfolio showcasing modern web development projects built with React, Next.js, and cutting-edge technologies.",
      images: ["https://abdo-front-end.netlify.app/og-image.png"],
    },
    alternates: {
      canonical: `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/`,
      languages: {
        "en": "https://abdo-front-end.netlify.app/",
        "ar": "https://abdo-front-end.netlify.app/ar/",
        "x-default": "https://abdo-front-end.netlify.app/",
      }
    },
    verification: {
      google: "google-site-verification-id", // User should replace this
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function HomePage() {
  const locale = getLocale()
  const isArabic = locale === "ar"

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Abdeltawab Sha`ban",
            "url": "https://abdo-front-end.netlify.app",
            "jobTitle": "Senior Front-End Architect",
            "knowsAbout": ["React", "Next.js", "TypeScript", "Web Development"],
            "sameAs": [
              "https://github.com/scob337",
              // Add other social links here
            ]
          })
        }}
      />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  )
}

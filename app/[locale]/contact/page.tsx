import type { Metadata } from "next"

import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

import { getLocale } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const isArabic = locale === "ar"

  return {
    title: isArabic ? "تواصل مع عبد التواب شعبان - مطور واجهات أمامية" : "Contact Abdeltawab Sha`ban - Get In Touch | Freelance Front-End Developer",
    description: isArabic
      ? "هل أنت مستعد للبدء في مشروعك الجديد؟ تواصل مع عبد التواب شعبان، مطور واجهات أمامية متخصص في React و Next.js."
      : "Ready to start your next project? Contact Abdeltawab Sha`ban, a professional front-end developer specializing in React, Next.js, and modern web development.",
    keywords: isArabic
      ? ["تواصل مع عبد التواب", "توظيف مطور", "مطور React حر", "خدمات تطوير الويب"]
      : ["Contact Abdeltawab Sha`ban", "Hire Front-End Developer", "Freelance React Developer", "Web Development Services", "Contact Developer Egypt"],
    openGraph: {
      title: isArabic ? "تواصل مع عبد التواب شعبان - مطور واجهات أمامية" : "Contact Abdeltawab Sha`ban - Front-End Developer",
      description: isArabic ? "تواصل معي لمناقشة مشروعك القادم لتطوير الويب" : "Get in touch for your next web development project. Professional front-end developer available for freelance work.",
      type: "website",
      url: `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/contact`,
      locale: isArabic ? "ar_EG" : "en_US",
      images: [
        {
          url: "/contact-banner.jpg",
          width: 1200,
          height: 630,
          alt: isArabic ? "تواصل مع عبد التواب شعبان" : "Contact Abdeltawab Sha`ban",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic ? "تواصل مع عبد التواب شعبان" : "Contact Abdeltawab Sha`ban - Front-End Developer",
      description: isArabic ? "تواصل معي لمناقشة مشروعك القادم لتطوير الويب" : "Get in touch for your next web development project",
      images: ["/contact-banner.jpg"],
    },
    alternates: {
      canonical: `https://abdo-front-end.netlify.app${isArabic ? "/ar" : ""}/contact`,
      languages: {
        "en": "https://abdo-front-end.netlify.app/contact",
        "ar": "https://abdo-front-end.netlify.app/ar/contact",
        "x-default": "https://abdo-front-end.netlify.app/contact",
      }
    },
  }
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactHero />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}

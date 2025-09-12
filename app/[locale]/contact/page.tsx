import type { Metadata } from "next"

import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact Abdeltawab Sha`ban - Get In Touch | Freelance Front-End Developer",
  description:
    "Ready to start your next project? Contact Abdeltawab Sha`ban, a professional front-end developer available for freelance work. Specializing in React, Next.js, and modern web development. Based in Giza, Egypt.",
  keywords: [
    "Contact Abdeltawab Sha`ban",
    "Hire Front-End Developer",
    "Freelance React Developer",
    "Web Development Services",
    "Contact Developer Egypt",
    "Project Consultation",
    "Web Development Quote",
  ],
  openGraph: {
    title: "Contact Abdeltawab Sha`ban - Front-End Developer",
    description:
      "Get in touch for your next web development project. Professional front-end developer available for freelance work.",
    type: "website",
    url: "https://abdo-front-end.netlify.app/contact"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Abdeltawab Sha`ban - Front-End Developer",
    description: "Get in touch for your next web development project",
  },
  alternates: {
    canonical: "https://abdo-front-end.netlify.app/contact",
  },
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

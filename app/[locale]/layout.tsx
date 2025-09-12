import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import "../globals.css"

const locales = ["en", "ar"]

export const metadata: Metadata = {
  title: {
    default: "Abdeltawab Sha`ban - Front-End Developer | React & Next.js Expert",
    template: "%s | Abdeltawab Sha`ban - Front-End Developer"
  },
  description:
    "Professional portfolio of Abdeltawab Sha`ban, a skilled front-end developer from Egypt specializing in React, Next.js, and modern web technologies. Available for freelance projects worldwide.",
  applicationName: "Abdeltawab Portfolio",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  keywords: [
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "JavaScript Expert",
    "UI/UX Developer",
    "Responsive Design",
    "Egypt Developer",
    "Freelance Developer",
    "Portfolio Website",
    "Modern Web Development",
    "Progressive Web Apps",
    "Mobile-First Design",
    "Performance Optimization",
    "SEO Optimization",
    "Accessibility",
    "Cross-Browser Compatibility",
    "API Integration",
    "Database Design"
  ],
  authors: [{ name: "Abdeltawab Sha`ban", url: "https://abdeltawab-portfolio.vercel.app" }],
  creator: "Abdeltawab Sha`ban",
  publisher: "Abdeltawab Sha`ban",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
    url: "https://abdeltawab-portfolio.vercel.app",
    siteName: "Abdeltawab Sha`ban Portfolio",
    title: "Abdeltawab Sha`ban - Front-End Developer | React & Next.js Expert",
    description:
      "Professional portfolio showcasing modern web development projects built with React, Next.js, and cutting-edge technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdeltawab Sha`ban - Front-End Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdeltawab Sha`ban - Front-End Developer",
    description: "Professional portfolio showcasing modern web development projects",
    images: ["/og-image.png"],
    creator: "@abdeltawab_dev",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://abdeltawab-portfolio.vercel.app",
    languages: {
      "en-US": "https://abdeltawab-portfolio.vercel.app/en",
      "ar-EG": "https://abdeltawab-portfolio.vercel.app/ar",
    },
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  
  if (!locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "ProfessionalService"],
              name: "Abdeltawab Sha`ban",
              alternateName: "عبد التواب شعبان",
              jobTitle: "Front-End Developer",
              description: "Professional front-end developer specializing in React, Next.js, and modern web technologies. Available for freelance projects worldwide.",
              url: "https://abdeltawab-portfolio.vercel.app",
              email: "scob198350@gmail.com",
              telephone: "+201117218756",
              image: "https://abdeltawab-portfolio.vercel.app/og-image.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Giza",
                addressRegion: "Giza Governorate",
                addressCountry: "Egypt",
                postalCode: "12345"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "30.0444",
                longitude: "31.2357"
              },
              sameAs: [
                "https://github.com/abdeltawab",
                "https://linkedin.com/in/abdeltawab",
                "https://twitter.com/abdeltawab_dev"
              ],
              knowsAbout: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Web Development",
                "Front-End Development",
                "Responsive Design",
                "Progressive Web Apps",
                "Performance Optimization",
                "SEO",
                "Accessibility",
                "UI/UX Design",
                "API Integration",
                "Database Design",
                "Version Control",
                "Agile Development"
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Front-End Developer",
                occupationLocation: {
                  "@type": "Country",
                  name: "Egypt"
                },
                skills: [
                  "React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS",
                  "Tailwind CSS", "Responsive Design", "Performance Optimization"
                ]
              },
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
                description: "Independent front-end development services"
              },
              offers: {
                "@type": "Service",
                name: "Front-End Development Services",
                description: "Professional web development services including React, Next.js, and modern web technologies",
                provider: {
                  "@type": "Person",
                  name: "Abdeltawab Sha`ban"
                },
                areaServed: "Worldwide",
                availableLanguage: ["English", "Arabic"]
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Abdeltawab Sha`ban Portfolio",
              alternateName: "عبد التواب شعبان - معرض الأعمال",
              url: "https://abdeltawab-portfolio.vercel.app",
              description: "Professional portfolio showcasing modern web development projects and services",
              author: {
                "@type": "Person",
                name: "Abdeltawab Sha`ban"
              },
              inLanguage: ["en", "ar"],
              potentialAction: {
                "@type": "SearchAction",
                target: "https://abdeltawab-portfolio.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a192f" />
        <meta name="msapplication-TileColor" content="#0a192f" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Abdeltawab Portfolio" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main className="pt-20">
            <Suspense fallback={null}>{children}</Suspense>
          </main>
          <Footer />
          <BackToTop />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}

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
import { BackgroundShapes } from "@/components/ui/background-shapes"
import "../globals.css"

const locales = ["en", "ar"]

export const metadata: Metadata = {
  metadataBase: new URL("https://abdo-front-end.netlify.app"),
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
  authors: [{ name: "Abdeltawab Sha`ban", url: "https://abdo-front-end.netlify.app" }],
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
    url: "https://abdo-front-end.netlify.app",
    siteName: "Abdeltawab Sha`ban Portfolio",
    title: "Abdeltawab Sha`ban - Front-End Developer | React & Next.js Expert",
    description:
      "Professional portfolio showcasing modern web development projects built with React, Next.js, and cutting-edge technologies.",
    images: [
      {
        url: "/Logo.png",
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
    images: ["/Logo.png"],
    creator: "@abdeltawab_dev",
  },
  verification: {
    google: "google-site-verification-id",
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
        <meta name="google-adsense-account" content="ca-pub-1055762061541058"></meta>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "ProfessionalService"],
              name: "Abdeltawab Sha`ban",
              alternateName: "عبد التواب شعبان",
              jobTitle: "Front-End Developer",
              description: "Professional front-end developer specializing in React, Next.js, and modern web technologies.",
              url: "https://abdeltawab.com",
              email: "scob198350@gmail.com",
              telephone: "+201117218756",
              image: "https://abdeltawab.com/Logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Giza",
                addressRegion: "Giza Governorate",
                addressCountry: "Egypt",
              },
              sameAs: [
                "https://github.com/scob337",
                "https://linkedin.com/in/abdeltawab",
              ],
              knowsAbout: [
                "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Web Performance", "SEO", "Accessibility"
              ]
            }),
          }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/Logo.png" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#05050A" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased relative`}>
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md transition-all duration-300"
        >
          {locale === "ar" ? "تجاوز إلى المحتوى" : "Skip to content"}
        </a>
        <BackgroundShapes />
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main id="main-content" className="pt-20">
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

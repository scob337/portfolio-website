import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { BackgroundShapes } from "@/components/ui/background-shapes"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "عبد التواب شعبان | مطور واجهات أمامية محترف",
    template: "%s | عبد التواب شعبان"
  },
  description: "مطور واجهات أمامية (Front-End) متخصص في بناء تجارب مستخدم استثنائية باستخدام React و Next.js و TypeScript. خبير في تحويل التصاميم إلى مواقع سريعة ومتجاوبة.",
  keywords: [
    "Front-End Developer",
    "مطور واجهات أمامية",
    "React Developer",
    "Next.js Expert",
    "TypeScript",
    "UI/UX Design",
    "Web Performance",
    "Portfolio",
    "عبد التواب شعبان",
    "Abdeltawab Sha`ban"
  ],
  authors: [{ name: "Abdeltawab Sha`ban", url: "https://abdeltawab.com" }],
  creator: "Abdeltawab Sha`ban",
  themeColor: "#05050A",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "عبد التواب شعبان | مطور واجهات أمامية",
    description: "استعرض مشاريعي وتجاربي في تطوير الويب الحديث والواجهات المبتكرة.",
    url: "https://abdeltawab.com",
    siteName: "Portfolio | Abdeltawab",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdeltawab Sha`ban | Front-End Developer",
    description: "Professional Front-End Developer specializing in modern web technologies.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="noise-overlay" />
      {children}
    </>
  )
}

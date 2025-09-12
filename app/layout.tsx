import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "عبد التواب شعبان - مطور واجهات أمامية | Abdeltawab Sha`ban - Front-End Developer",
  description:
    "معرض أعمال احترافي لعبد التواب شعبان، مطور واجهات أمامية متخصص في React و Next.js | Professional portfolio of Abdeltawab Sha`ban, a front-end developer specializing in React and Next.js",
  generator: "v0.app",
  keywords: [
    "Front-End Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "مطور واجهات",
    "ريأكت",
    "نكست جي اس",
  ],
  authors: [{ name: "Abdeltawab Sha`ban" }, { name: "عبد التواب شعبان" }],
  openGraph: {
    title: "عبد التواب شعبان - مطور واجهات أمامية",
    description: "معرض أعمال احترافي يعرض مشاريع تطوير الويب الحديثة",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}

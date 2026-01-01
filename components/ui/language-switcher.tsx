"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const switchLocale = () => {
        const newLocale = locale === "en" ? "ar" : "en"

        // Get the path without the current locale prefix
        let newPath = pathname

        // If current locale is 'ar', remove /ar prefix
        if (locale === "ar" && pathname.startsWith("/ar")) {
            newPath = pathname.replace(/^\/ar/, "") || "/"
        }

        // If switching to Arabic, add /ar prefix
        if (newLocale === "ar") {
            newPath = `/ar${newPath === "/" ? "" : newPath}`
        }

        router.push(newPath)
        router.refresh()
    }

    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <Button
                variant="ghost"
                size="sm"
                onClick={switchLocale}
                className="relative p-2 rounded-full hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
                aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
            >
                <Languages className="h-5 w-5" />
                <span className="font-medium text-sm">
                    {locale === "en" ? "العربية" : "English"}
                </span>
            </Button>
        </motion.div>
    )
}

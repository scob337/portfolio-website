"use client"

import { useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/routing"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const switchLocale = () => {
        const newLocale = locale === "en" ? "ar" : "en"
        router.push(pathname, { locale: newLocale })
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
                className="relative p-2 rounded-full glass hover:bg-white/10 text-foreground transition-all duration-300 flex items-center gap-2 border border-white/5"
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

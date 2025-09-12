"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex items-center gap-2"
      disabled
    >
      <Globe className="h-4 w-4" />
      English
    </Button>
  )
}

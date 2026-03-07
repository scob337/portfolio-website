import { defineRouting } from "next-intl/routing"
import * as navigation from "next-intl/navigation"

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ar"],

  // Used when no locale matches
  defaultLocale: "en",

  // Show locale prefix only for non-default locale
  localePrefix: "as-needed"
})

const { Link, redirect, usePathname, useRouter, getPathname } =
  (navigation as any).createNavigation(routing)

export { Link, redirect, usePathname, useRouter, getPathname }

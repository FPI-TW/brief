"use client"

import { useRouter, usePathname } from "next/navigation"

export default function useChooseLocale() {
  const router = useRouter()
  const pathname = usePathname()

  const chooseLocale = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`
    // Replace the first path segment with the new locale if present
    const newPath = pathname
      ? pathname.replace(/^(\/[\w-]+)(?=\/|$)/, `/${locale}`)
      : `/${locale}`
    router.replace(newPath)
  }

  return chooseLocale
}

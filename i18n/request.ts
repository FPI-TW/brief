import { getRequestConfig } from "next-intl/server"
import { cookies } from "next/headers"

type Locale = "en" | "zh-hant" | "zh-hans"
const defaultLocale: Locale = "zh-hant"

export default getRequestConfig(async () => {
  const store = await cookies()
  const locale = (store.get("NEXT_LOCALE")?.value as Locale) || defaultLocale

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})

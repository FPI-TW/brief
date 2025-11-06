import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"

const locales = ["zh-hant", "zh-hans", "en"] as const
type AvailableLocale = (typeof locales)[number]
const defaultLocale: AvailableLocale = "zh-hant"

function parseAcceptLanguage(
  header: string | null
): AvailableLocale | undefined {
  if (!header) return undefined
  const parts = header.split(",")
  for (const p of parts) {
    const code = p.split(";")[0]?.trim().toLowerCase()
    if (!code) continue
    if (
      code.startsWith("zh-hant") ||
      code === "zh-tw" ||
      code === "zh-hk" ||
      code === "zh-mo"
    )
      return "zh-hant"
    if (code.startsWith("zh-hans") || code === "zh-cn" || code === "zh-sg")
      return "zh-hans"
    if (code === "zh") return "zh-hans"
    if (code.startsWith("en")) return "en"
  }
  return undefined
}

export default async function RootRedirect() {
  const store = await cookies()
  const cookie = store.get("NEXT_LOCALE")?.value as AvailableLocale | undefined
  const h = await headers()
  const headerLocale = parseAcceptLanguage(h.get("accept-language"))
  const locale =
    (cookie && locales.includes(cookie) ? cookie : undefined) ||
    headerLocale ||
    defaultLocale
  redirect(`/${locale}`)
}

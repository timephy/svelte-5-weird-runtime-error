import { base } from "$app/paths"

export type Lang = "de" | "it" | "en"

/**
 * Tries to detect the language from the route string, falls back to german.
 *
 * Argument can be either a `Page` or a `Request` event object.
 */
export function detectLang(page: { url: URL }): Lang {
    const pathname = page.url.pathname.replace(base, "")

    const result = (() => {
        if (pathname === "/de" || pathname.startsWith("/de/")) return "de"
        if (pathname === "/it" || pathname.startsWith("/it/")) return "it"
        if (pathname === "/en" || pathname.startsWith("/en/")) return "en"

        // fallback
        return "de"
    })()

    console.log(`detectLang("${pathname}") -> "${result}"`)
    return result
}

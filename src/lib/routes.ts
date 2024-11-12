import { base } from "$app/paths"
import type { Lang } from "$lib"
import type { LayoutRouteId } from "../routes/$types"
import type { Page } from "@sveltejs/kit"

type InferRoutes<R> = R extends `/(languages)${infer T}` ? T : R extends "/" ? R : never
export type Route = InferRoutes<LayoutRouteId>

export const routes = {
    home: {
        de: `/`,
        it: `/it`,
        en: `/en`,
    } satisfies Record<Lang, Route>,

    story: {
        de: `/de/geschichte`,
        it: `/it/storia`,
        en: `/en/story`,
    } satisfies Record<Lang, Route>,

    gallery: {
        de: `/de/galerie`,
        it: `/it/galeria`,
        en: `/en/gallery`,
    } satisfies Record<Lang, Route>,
}

export function detectRoute(page: Page): keyof typeof routes {
    const pathname = page.url.pathname.replace(base, "")

    const result = (() => {
        for (const [route, langToPath] of Object.entries(routes)) {
            const routePaths = Object.values(langToPath) as string[]
            if (routePaths.includes(pathname)) return route as keyof typeof routes
        }

        // fallback
        return "home"
    })()

    console.log(`detectRoute("${pathname}") -> "${result}"`)
    return result
}

import { detectLang } from "$lib"
import type { Handle } from "@sveltejs/kit"

const handleLang: Handle = async ({ event, resolve }) => {
    const LANG = detectLang(event)

    // replace %lang% in the response html
    return resolve(event, { transformPageChunk: ({ html }) => html.replace("%lang%", LANG) })
}
export const handle = handleLang

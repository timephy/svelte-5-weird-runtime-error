import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter({
            strict: true,
            fallback: "404.html",
            pages: "build",
            precompress: true,
        }),
        paths: {
            base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
            // NOTE: will not allow `base` from `$app/paths` to be relative (e.g. `..`, so it is able to be `replace`d)
            relative: false,
        },
        alias: {
            $images: "src/images",
        },
    },

    compilerOptions: {
        // TODO: not yet possible as `svelte-awesome` is still using the old syntax
        //     runes: true,
    },
}

export default config

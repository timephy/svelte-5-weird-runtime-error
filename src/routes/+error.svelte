<script lang="ts" module>
    const CONTENT = {
        de: {
            title: "404",
            subtitle: "Seite nicht gefunden",
            home: "Zur Startseite",
        },
        en: {
            title: "404",
            subtitle: "Page not found",
            home: "Go Home",
        },
        it: {
            title: "404",
            subtitle: "Pagina non trovata",
            home: "Torna alla Home",
        },
    }
</script>

<script lang="ts">
    import { base } from "$app/paths"
    import { page } from "$app/stores"
    import { detectLang } from "$lib"

    const LANG = $derived(detectLang($page))
    const content = $derived(CONTENT[LANG])
</script>

<div class="flex grow flex-col items-center justify-center gap-6">
    <div class="flex flex-col items-center gap-4">
        <h1>{content.title}</h1>
        <p class="text-xl">{content.subtitle}</p>
    </div>
</div>

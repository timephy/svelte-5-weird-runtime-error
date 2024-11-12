<script lang="ts">
    import "../app.css"

    import type { Snippet } from "svelte"
    const {
        children,
    }: {
        children: Snippet
    } = $props()
</script>

<main class="flex min-h-full flex-col pt-16">
    <!-- NOTE: min-h set to make Footer visible less on short pages like the error page -->
    <div class="flex min-h-[70vh] grow flex-col bg-white">
        {@render children()}
    </div>
</main>

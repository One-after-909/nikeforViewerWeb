<script>
    import ThemeSwitch from '$lib/theme/ThemeSwitch.svelte';
    import LanguageSwitch from '$lib/translations/LanguageSwitch.svelte';
    import { locale } from '$lib/translations';
</script>

<header>
    <nav class="bg-p2 text-gray-100">
        <div class="flex justify-between">
            <div class="p-1 transition-colors bg-tWhitesmoke text-4xl hover:bg-p3 transitionn-colors">
                <a href="/{$locale}/bible" class="text-gray-200 p-1 ">Nikefor</a>
            </div>
            <div class="flex">
                <div class="p-3">
                    <ThemeSwitch />
                </div>
                <div class="p-2">
                    <LanguageSwitch />
                </div>
            </div>
        </div>
    </nav>
</header>
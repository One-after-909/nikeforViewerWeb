<script lang="ts">
    import { browser } from '$app/environment';

let darkMode = true;

function handleSwitchDarkMode() {
    darkMode = !darkMode;

    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

    darkMode
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
}

if (browser) {
    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark');
        darkMode = true;
    } else {
        document.documentElement.classList.remove('dark');
        darkMode = false;
    }
}
</script>

<div>
    <input checked={darkMode} on:click={handleSwitchDarkMode} type="checkbox" class="hidden" id="theme-toggle" />
    <label for="theme-toggle" class="cursor-pointer"><span class="{darkMode ? "icon-[ph--sun-bold]" : "icon-[ph--moon-bold]"} text-2xl"></span></label>
</div>
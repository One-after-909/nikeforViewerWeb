<script lang="ts">
    import { t, locales, locale } from '$lib/translations';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import Icon from '@iconify/svelte';
    $: ({ route } = $page.data);
    const flags = {
      'cs': '🇨🇿',
      'uk': '🇺🇦'
    }

</script>
<select class="text-p2 bg-p2 text-2xl cursor-pointer" on:change="{({ target }) => goto(target.value)}">
    {#each $locales as lc}
      <option value="/{lc}{route}" selected="{lc === $locale}">{flags[lc]}</option>
    {/each}
  </select>
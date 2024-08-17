<Return target={content.chapterId} />
{#each content.verses as verse}
    <span class="text-bold">{verse.verse}. </span>{verse.words}<br>
{/each}
<script lang="ts">
    import Return from '$lib/bible/Return.svelte';
    export let data
    const content = data.content
    console.log(content.verses)
</script>
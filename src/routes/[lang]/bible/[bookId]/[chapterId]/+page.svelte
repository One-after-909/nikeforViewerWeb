<script lang="ts">
    import TopBar from "$lib/bible/TopBar.svelte";
    export let data;
    const content = data.content;
    console.log(content);
</script>

<TopBar
    target={content.bookId}
    text={`${content.book.name} ${content.chapter.chapter}`}
/>
{#each content.verses as verse}
    <span class="text-bold">{verse.verse}. </span>{verse.words}<br />
{/each}

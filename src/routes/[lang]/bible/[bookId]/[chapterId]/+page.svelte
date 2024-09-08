<script lang="ts">
    import TopBar from "$lib/bible/TopBar.svelte";
    export let data;
    const content = data.content;
    console.log(content);
    const topBarProps = {
        target: content.bookId,
        bookId: content.book.id,
        text: `${content.book.name} - ${content.chapter.chapter}`,
        nav: true,
        currentChapter: content.chapter.chapter,
        lastChapter: content.book.chapter_count
    }
</script>

<TopBar {...topBarProps} />
{#each content.verses as verse}
    {#if !verse.isHeader}
        <span class="text-bold">{verse.verse}. </span>{verse.words}<br />
    {:else}
        <p class="text-bold my-2 font-bold">{verse.words}.</p>
    {/if}
{/each}
<TopBar {...topBarProps} />
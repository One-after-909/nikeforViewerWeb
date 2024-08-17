<Return target={''} />
<ul id="list" class="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-8 w-10/12 gap-2">
    {#each content.chapters as chapter}
        <li>
            <a href="/{$locale}/bible/{content.bookId}/{chapter.chapter}">
                <div class="curcor-pointer transition-colors bg-transparent hover:bg-p3 text--700 font-semibold hover:text-white py-2 px-4 border border-p3 hover:border-transparent rounded text-center">
                    {chapter.chapter}
                </div>
            </a>
        </li>
    {/each}
</ul>

<script lang="ts">
    import { locale } from '$lib/translations';
    import Return from '$lib/bible/Return.svelte';
    export let data
    const content = data.content
    console.log(data)
</script>

<style>
    #list {
        margin: auto;
    }
</style>
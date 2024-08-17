<ul>
    {#each data.content.books as book}
        <li class="my-3 mx-8 sm:mx-20">
            <a href="/{$locale}/bible/{book.id}">
                <div class="book curcor-pointer transition-colors bg-transparent hover:bg-p3 text--700 font-semibold hover:text-white py-2 px-4 border border-p3 hover:border-transparent rounded text-center">
                    {book.name}
                </div>
            </a>
        </li>
    {/each}
</ul>
<script lang="ts">
    import { locale } from '$lib/translations';
    export let data
</script>

<style lang="postcss">
    .book {

    }
</style>
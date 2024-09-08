<script lang="ts">
    import { locale } from "$lib/translations";
    const baseTarget = `/${$locale}/bible/`;
    export let target: string;
    export let text = "";
    export let bookId = 0;
    export let nav = false;
    export let currentChapter = 0;
    export let lastChapter = 0;
</script>
<div class="flex  w-100 align-content-center">
    <div class="p-2 mx-auto dark:bg-p3 mt-3 mb-5 border border-p3 rounded w-10/12">
    <div class="justify-between w-full"  id="top-bar">
        {#if nav && currentChapter > 1}
            <div class="ps-2 predchozi">
                <a data-sveltekit-reload href={`${baseTarget}${bookId}/${currentChapter-1}`}><span class="icon-[material-symbols--arrow-back-ios]"></span></a>
            </div>
        {/if}

        <div class="zpet">
            <a href={baseTarget + target} class="font-semibold">
                <span class="icon-[material-symbols--arrow-back-ios-new]"></span>
                <span>Zpět</span>
            </a>
        </div>
        <div class="nadpis">
            <h1 class="font-semibold">{text}</h1>
        </div>

        {#if nav && currentChapter < lastChapter}
            <div class="pe-2 dalsi">
                <a data-sveltekit-reload href={`${baseTarget}${bookId}/${currentChapter+1}`}><span class="icon-[material-symbols--arrow-forward-ios]"></span></a>
            </div>
        {/if}
    </div>
</div>
</div>


<style>
    #top-bar {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
    #top-bar .zpet {
        grid-column: 2/3;
        grid-row: 1/2;
        text-align: center;
    }
    #top-bar .nadpis {
        grid-column: 2/3;
        grid-row: 2/3;
        text-align: center;
    }
    #top-bar .predchozi {
        grid-column: 1/2;
        grid-row: 1/2;
        text-align: center;
    }
    #top-bar .dalsi {
        grid-column: 3/4;
        grid-row: 1/2;
        text-align: center;
    }
    @media only screen and (min-width: 768px) {
        #top-bar {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-template-rows: 1fr;
        }
        #top-bar .zpet {
            grid-column: 3/4;
            grid-row: 1/2;
            text-align: center;
        }
        #top-bar .nadpis {
            grid-column: 4/5;
            grid-row: 1/2;
            text-align: center;
        }
        #top-bar .predchozi {
            grid-column: 1/2;
            grid-row: 1/2;
            text-align: center;
        }
        #top-bar .dalsi {
            grid-column: 6/7;
            grid-row: 1/2;
            text-align: center;
        }
    }
</style>
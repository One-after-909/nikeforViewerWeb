<script lang="ts">
    import { locale } from "$lib/translations";
    const baseTarget = `/${$locale}/bible/`;
    export let target: string;
    export let text = "";
</script>

<div class="flex space-x-8 p-2 m-3 dark:bg-p3 border border-p3 rounded">
    <div>
        <a href={baseTarget + target} class="font-semibold">
            <span class="icon-[fluent--ios-arrow-24-filled]"></span>
            <span>Zpět</span>
        </a>
    </div>

    <div>
        <h1 class="font-semibold">{text}</h1>
    </div>
</div>

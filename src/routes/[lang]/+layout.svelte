<script lang="ts">
    import Footer from "$lib/layout/Footer.svelte";
import Header from "$lib/layout/Header.svelte";
</script>
<Header />
<div class="my-8 mx-1 md:mx-5">
    <slot />
</div>
<Footer />
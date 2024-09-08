<script lang="ts">
    import Footer from "$lib/layout/Footer.svelte";
import Header from "$lib/layout/Header.svelte";
</script>

<Header />
<main class= "grow my-8 mx-1 md:mx-5">
    <slot />
</main>
<Footer />
<script lang="ts">
  import SnapScroll from '$lib/components/SnapScroll.svelte';
  import About from '$lib/components/About.svelte';
  import ContactMe from '$lib/components/ContactMe.svelte';
  import Projects from '$lib/components/Projects.svelte';
</script>

<main class="w-full h-[95vh]">
  <SnapScroll>
    <About />
    <ContactMe />
    <Projects />
  </SnapScroll>
</main>

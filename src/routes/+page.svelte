<script lang="ts">
  import { SnapScroll, SnapChild } from '$lib/components/SnapScroll';
  import About from '$lib/components/About.svelte';
  import ContactMe from '$lib/components/ContactMe.svelte';
  import Projects from '$lib/components/Projects.svelte';
</script>

<main class="w-full h-[95vh]">
  <SnapScroll>
    <SnapChild>
      <About />
    </SnapChild>
    <SnapChild>
      <ContactMe />
    </SnapChild>
    <SnapChild>
      <Projects />
    </SnapChild>
  </SnapScroll>
</main>

<script lang="ts">
  import { SnapScroll, SnapChild } from '$lib/components/SnapScroll';
  import About from '$lib/components/About.svelte';
  import ContactMe from '$lib/components/ContactMe.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Experience from '$lib/components/Experience.svelte';
</script>

<main class="w-full h-[95vh]">
  <SnapScroll>
    <SnapChild>
      <About />
    </SnapChild>
    <SnapChild>
      <Projects />
    </SnapChild>
    <SnapChild>
      <Experience />
    </SnapChild>
    <SnapChild>
      <ContactMe />
    </SnapChild>
  </SnapScroll>
</main>

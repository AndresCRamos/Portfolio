<script lang="ts">
  import ProjectCard from './ProjectCard.svelte';

  export let title: string;
  export let description: string;
  export let stack: string[];
  export let url: string = '';

  const props = {
    title,
    description,
    stack
  };
</script>

{#if url}
  <a href={url}>
    <ProjectCard {...props} />
  </a>
{:else}
  <ProjectCard {...props} />
{/if}

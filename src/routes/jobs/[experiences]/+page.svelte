<script lang="ts">
  import ListBLock from '$lib/components/ExperienceBlocks/ListBLock.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1 class="text-4xl">{data.title}</h1>
<h2 class="text-2xl text-secondary-500 dark:text-secondary-400">{data.position}</h2>
{#if data.blocks}
  {#each data.blocks as block}
    {#if block.type == 'list'}
      <ListBLock title={block.title} value={block.value} />
    {/if}
  {/each}
{/if}

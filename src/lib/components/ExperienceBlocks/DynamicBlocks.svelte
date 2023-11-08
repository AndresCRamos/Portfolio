<script lang="ts">
  import ListBLock from './ListBLock.svelte';
  import TextBlock from './TextBlock.svelte';
  import type { Block } from '$lib/types/block';

  export let block_list: Block[];
</script>

<div class="flex flex-col gap-4">
  {#each block_list as block}
    {#if block.type == 'list'}
      <ListBLock title={block.title} items={block.value} />
    {:else if block.type == 'text'}
      <TextBlock title={block.title} text={block.value} />
    {/if}
  {/each}
</div>

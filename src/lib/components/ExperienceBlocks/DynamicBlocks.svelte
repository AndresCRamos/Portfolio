<script lang="ts">
  import ListBLock from './ListBLock.svelte';

  interface block {
    type: string;
    title: string | undefined;
    value: any;
  }

  export let block_list: block[];
</script>

{#each block_list as block}
  {#if block.type == 'list'}
    <ListBLock title={block.title} value={block.value} />
  {/if}
{/each}

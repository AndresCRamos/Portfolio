<script lang="ts">
  import BasicBlock from './BasicBlock.svelte';

  export let title: string = '';
  export let items: string[];
</script>

<BasicBlock {title}>
  <ul>
    {#each items as item}
      <li class="font-light">{item}</li>
    {/each}
  </ul>
</BasicBlock>

<script lang="ts">
  import BasicBlock from './BasicBlock.svelte';

  export let title: string = '';
  export let value: any[];
</script>

<BasicBlock {title}>
  <ul>
    {#each value as item}
      <li class="font-light">{item}</li>
    {/each}
  </ul>
</BasicBlock>

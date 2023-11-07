<script lang="ts">
  import BasicBlock from './BasicBlock.svelte';

  export let title: string = '';
  export let text: string;
</script>

<BasicBlock {title}>
  <p>{text}</p>
</BasicBlock>

<script lang="ts">
  export let title: string = '';
  export let value: any[];
</script>

{#if title}
  <h3 class="text-lg text-accent-500 dark:text-accent-300">{title}</h3>
{/if}

<ul>
  {#each value as item}
    <li class="font-light">{item}</li>
  {/each}
</ul>

<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1 class="text-4xl">{data.title}</h1>
<h2 class="text-2xl text-secondary-500 dark:text-secondary-400">{data.position}</h2>
{#if data.stack}
  <h3 class="text-2xl text-accent-500 dark:text-accent-300">Tech stack</h3>
  <ul>
    {#each data.stack as stack}
      <li>{stack}</li>
    {/each}
  </ul>
{/if}

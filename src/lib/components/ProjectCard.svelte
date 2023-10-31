<script lang="ts">
  import { Card } from 'flowbite-svelte';

  export let title: string;
  export let description: string;
  export let stack: string[];
</script>

<Card class="mx-auto relative" padding="none">
  <h1
    class="font-bold text-center mb-5 text-2xl rounded-t-lg p-2 bg-secondary-400 dark:bg-secondary-500 text-gray-500 dark:text-gray-700"
  >
    {title}
  </h1>
  <p class="px-5 pb-2">{description}</p>

  <div class="card_hover">
    <ul>
      {#each stack as tech}
        <li>{tech}</li>
      {/each}
    </ul>
  </div>
</Card>

<style lang="postcss">
  .card_hover {
    @apply rounded-lg absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-80 hover:bg-primary-700 transition-opacity duration-500;
  }
</style>

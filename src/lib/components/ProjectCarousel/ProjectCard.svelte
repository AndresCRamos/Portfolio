<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import { ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';

  export let title: string;
  export let description: string;
  export let stack: string[];
  export let url: string = '';
</script>

<Card class="mx-auto relative" padding="none" size="lg">
  <h1
    class="font-bold text-center mb-5 text-2xl rounded-t-lg p-2 bg-secondary-400 dark:bg-secondary-500 text-gray-500 dark:text-gray-700"
  >
    {title}
  </h1>
  <p class="px-5 pb-2 text-base sm:text-xl">{description}</p>

  <div
    class="rounded-lg absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-90 bg-primary-900 dark:bg-primary-600 transition-opacity duration-500"
  >
    <h2 class="text-lg text-secondary-600 dark:text-secondary-600">Made using</h2>
    <ul>
      {#each stack as tech}
        <li class="text-gray-100">{tech}</li>
      {/each}
    </ul>
    {#if url}
      <a class="flex text-accent-400" href={url}>
        Learn more
        <ArrowUpRightFromSquareOutline class="ml-1" />
      </a>
    {/if}
  </div>
</Card>

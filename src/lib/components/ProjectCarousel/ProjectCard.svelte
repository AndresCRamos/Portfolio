<script lang="ts">
  import { ArrowKeyDown, Card } from 'flowbite-svelte';
  import {
    AngleDownOutline,
    ArrowDownOutline,
    ArrowDownSolid,
    ArrowDownToBraketSolid,
    ArrowUpRightFromSquareOutline
  } from 'flowbite-svelte-icons';

  export let title: string;
  export let description: string;
  export let stack: string[];
  export let url: string = '';
</script>

<Card class="mx-4 relative group pb-2" padding="none" size="lg">
  <h1
    class="font-bold text-center text-2xl rounded-t-lg p-2 bg-secondary-400 dark:bg-secondary-500 text-gray-500 dark:text-gray-700"
  >
    {title}
  </h1>
  <p class="px-5 text-base xs:text-xl my-4">{description}</p>
  <p class="text-sm font-bold text-accent-300 flex gap-1 justify-center">
    Click me for more info <AngleDownOutline class="text-accent-500 text-sm" size="sm" />
  </p>

  <div
    class="rounded-lg absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-90 bg-primary-900 dark:bg-primary-600 transition-all duration-500 translate-y-full group-hover:translate-y-0"
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

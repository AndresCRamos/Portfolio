<script lang="ts">
  import DynamicBlocks from '$lib/components/ExperienceBlocks/DynamicBlocks.svelte';
  import { Button } from 'flowbite-svelte';
  import type { PageData } from './$types';
  import CurvyDecorator from '$lib/components/CurvyDecorator.svelte';
  import { base } from '$app/paths';

  export let data: PageData;

  let init_date = `${data.dates?.from.month}-${data.dates?.from.year}`;
  let end_date = `${data.dates?.to.month}-${data.dates?.to.year}`;
</script>

<main class="h-[95dvh] overflow-y-auto mx-auto">
  <div class=" w-4/5 mx-auto mt-24 mb-8">
    <Button href="{base}/" size="lg" class="w-full max-w-3xl">Go back</Button>
    <h1 class="text-4xl mt-12">{data.company}</h1>
    <h2 class="text-2xl text-secondary-500 dark:text-secondary-400 mb-4">
      {data.position}
    </h2>
    <div class="flex justify-center gap-2 flex-col md:flex-row mb-6 md:mb-12">
      <p class="text-sm font-thin"><span class="hidden sm:inline">From: </span>{init_date}</p>
      <p class="text-sm font-thin"><span class="hidden sm:inline">To: </span>{end_date}</p>
    </div>
    {#if data.blocks}
      <DynamicBlocks block_list={data.blocks} />
      <div class="mb-24 md:mb-32" />
      <CurvyDecorator />
    {/if}
  </div>
</main>

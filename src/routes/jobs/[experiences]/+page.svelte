<script lang="ts">
  import DynamicBlocks from '$lib/components/ExperienceBlocks/DynamicBlocks.svelte';
  import { Button } from 'flowbite-svelte';
  import type { PageData } from './$types';
  import CurvyDecorator from '$lib/components/CurvyDecorator.svelte';

  export let data: PageData;
</script>

<main class="h-[95dvh] overflow-y-auto mx-auto">
  <div class=" w-4/5 mx-auto mt-24 mb-8">
    <Button href="/" size="lg" class="w-full max-w-3xl">Go back</Button>
    <h1 class="text-4xl mt-12">{data.title}</h1>
    <h2 class="text-2xl text-secondary-500 dark:text-secondary-400 mb-6 md:mb-12">
      {data.position}
    </h2>
    {#if data.blocks}
      <DynamicBlocks block_list={data.blocks} />
      <div class="mb-24 md:mb-32" />
      <CurvyDecorator />
    {/if}
  </div>
</main>

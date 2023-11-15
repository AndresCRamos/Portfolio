<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { Button } from 'flowbite-svelte';
</script>

<div class="h-[95dvh] flex flex-col justify-center gap-2">
  {#if $page.status == 404}
    <h1 class="text-7xl">Oops</h1>
    <p class="text-4xl font-thin">Looks like the page you're trying to access is not availabl</p>
    <div class="mt-12">
      <Button
        href="{base}/"
        size="xl"
        class="bg-secondary-500 hover:bg-secondary-600 dark:bg-secondary-400 dark:hover:bg-secondary-500"
        >Return to home</Button
      >
    </div>
  {:else}
    <h1 class="text-7xl">An error has ocurred</h1>
    <p class="text-4xl font-thin">An error has ocurred, were sorry, please try again</p>
    <div class="mt-12">
      <Button
        href="{base}/"
        size="xl"
        class="bg-secondary-500 hover:bg-secondary-600 dark:bg-secondary-400 dark:hover:bg-secondary-500"
        >Return to home</Button
      >
    </div>
  {/if}
</div>

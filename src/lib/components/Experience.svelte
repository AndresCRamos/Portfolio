<script>
  import { base } from '$app/paths';
  import { experiences } from '$lib/data/experience';
  import { Card } from 'flowbite-svelte';
</script>

<div class="w-full">
  <h1>Experience</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
    {#each experiences as experience}
      <Card class="flex flex-col w-full max-w-none">
        <div class="flex-grow">
          <h1 class="text-xl">{experience.company}</h1>
          <h2 class="text-secondary-500 dark:text-secondary-300 text-base mb-2">
            {experience.job}
          </h2>
          <p class="hidden text-base sm:block">{experience.description}</p>
        </div>

        <a
          class="text-accent-500 dark:text-accent-200 font-bold mt-2"
          href="{base}/{experience.redirect}"
        >
          Learn more
        </a>
      </Card>
    {/each}
  </div>
</div>

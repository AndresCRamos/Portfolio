<script lang="ts">
  import { Avatar, Button } from 'flowbite-svelte';
  import Photo from '$lib/images/avatar.jpg';
  import { base } from '$app/paths';

  let tools: string[] = [
    'Golang',
    'Python',
    'Django',
    'Gin Gonic',
    'HTML/CSS',
    'SvelteKit',
    'TailwindCSS',
    'Big Query',
    'Docker'
  ];
</script>

<main class=" h-[95dvh] overflow-y-scroll mx-auto">
  <section class="h-full mx-auto flex flex-col items-center gap-6 px-4 w-full max-w-5xl">
    <div class="flex-grow" />
    <Button href="{base}/">Go to home</Button>
    <Avatar src={Photo} size="xl" />
    <h1>Hi, im Andres Ramos</h1>
    <p>
      A full stack developer fascinated with tech, how its build and how it can help to improve the
      lives of the people, creating new opportunities for all
    </p>
    <p>
      Im a passionate learner, always searching fascinating new tech, and thinking how apply it to
      challenging problems.
    </p>
    <p>
      Most of my experience is working in fintech apps, always searching secure solutions for its
      users, and the developers that make these apps possible in the first place
    </p>
    <div class="w-full">
      <p>Some of the things i used in my day to day:</p>
      <ul class="mx-auto w-4/5 flex flex-wrap gap-4 my-2">
        {#each tools as tool}
          <li class=" flex-grow text-lg font-thin">{tool}</li>
        {/each}
      </ul>
    </div>

    <div class="flex-grow" />
  </section>
</main>

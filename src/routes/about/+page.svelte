<script>
  import { Avatar, Button } from 'flowbite-svelte';
  import Photo from '$lib/images/avatar.jpg';
  import { base } from '$app/paths';
</script>

<main
  class="flex flex-col items-center gap-6 px-4 w-full max-w-5xl h-[95dvh] overflow-y-scroll mx-auto"
>
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
</main>

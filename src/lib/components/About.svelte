<script>
  import { base } from '$app/paths';
  import { Button } from 'flowbite-svelte';
</script>

<div class="flex flex-col gap-2">
  <h1>About me</h1>
  <h2 class="font-medium">Hi im Andres Ramos</h2>
  <p>For years i have studied the almost magic ways of making computers do cool stuff</p>
  <p>A full stack dev starting its new journey in this space full opportunities and challenges</p>
  <p>
    Im a passionate learner, always searching for new ways to improve my skills and ways to
    opportunities to challenge myself in the search of improving
  </p>
  <div>
    <Button href="{base}/about">More about me</Button>
  </div>
</div>

<style lang="postcss">
  p {
    @apply my-2;
  }
</style>

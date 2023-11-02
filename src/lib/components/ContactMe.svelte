<script>
  import { Button, ButtonGroup } from 'flowbite-svelte';
  import {
    EnvelopeOpenSolid,
    EnvelopeSolid,
    GithubSolid,
    LinkedinSolid
  } from 'flowbite-svelte-icons';
</script>

<div>
  <h2 class="text-secondary-500 dark:text-secondary-300">Curious about this portfolio?</h2>
  <Button
    class="bg-accent-400  hover:bg-accent-600 dark:bg-accent-300 dark:hover:bg-accent-500 dark:text-gray-600 mt-2 mb-4"
    >Check its source code</Button
  >
  <h2 class="text-secondary-500 dark:text-secondary-300">Want to chat?</h2>
  <p class="text-xl my-2">Don't be afraid to leave a message</p>
  <ButtonGroup>
    <Button class="gap-2 items-center  justify-center group">
      <GithubSolid />
      <span>Github</span>
    </Button>
    <Button class="gap-2 items-center  justify-center">
      <LinkedinSolid />
      <span>LinkedIn</span>
    </Button>
    <Button class="gap-2 items-center  justify-center group">
      <EnvelopeSolid class="group-hover:hidden" />
      <EnvelopeOpenSolid class="hidden group-hover:block" />
      <span>Mail</span>
    </Button>
  </ButtonGroup>
</div>

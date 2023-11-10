<script>
  import { Button, ButtonGroup } from 'flowbite-svelte';
  import SocialButton from './SocialButton.svelte';
  import socials from '$lib/data/socials';
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
    {#each socials as social}
      <SocialButton {...social} />
    {/each}
  </ButtonGroup>
</div>

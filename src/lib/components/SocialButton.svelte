<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import {
    EnvelopeOpenSolid,
    EnvelopeSolid,
    GithubSolid,
    LinkedinSolid
  } from 'flowbite-svelte-icons';

  export let title: string;
  export let url: string;
</script>

<Button href={url} class="gap-2 items-center  justify-center">
  {#if title == 'Github'}
    <GithubSolid />
  {:else if title == 'LinkedIn'}
    <LinkedinSolid />
  {:else if title == 'Mail'}
    <EnvelopeSolid class="group-hover:hidden" />
    <EnvelopeOpenSolid class="hidden group-hover:block" />
  {/if}
  <span class="hidden xxs:block">{title}</span>
</Button>

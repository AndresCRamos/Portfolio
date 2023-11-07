<script lang="ts">
  export let title: string = '';
</script>

<div>
  {#if title}
    <h3 class="text-2xl text-accent-500 dark:text-accent-300">{title}</h3>
  {/if}
  <slot />
</div>

<div class="snap-y snap-mandatory overflow-y-scroll h-[95dvh] custom_scrollbar">
  <slot />
</div>

<style lang="postcss">
  /* This will change the scrollbar for the whole page */
  .custom_scrollbar::-webkit-scrollbar {
    @apply w-2;
  }

  .custom_scrollbar::-webkit-scrollbar-track {
    @apply bg-none;
  }

  .custom_scrollbar::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    @apply bg-gray-400 dark:bg-gray-800;
  }
</style>

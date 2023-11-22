<div class="snap-y snap-mandatory overflow-y-scroll h-[95dvh] snap-scroll">
  <slot />
</div>

<style lang="postcss">
  .snap-scroll > :global(:first-child > .snap-child-indicator-up) {
    @apply hidden;
  }

  .snap-scroll > :global(:last-child .snap-child-indicator-down) {
    @apply hidden;
  }
</style>

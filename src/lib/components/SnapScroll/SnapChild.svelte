<script>
  import { AngleDownSolid, AngleUpSolid } from 'flowbite-svelte-icons';
</script>

<div
  class="relative mx-auto snap-center flex flex-col justify-center items-center w-full max-w-4xl h-full pl-5 pr-3 snap-child"
>
  <AngleUpSolid size="lg" class="snap-child-indicator-up absolute top-0 left-0 right-0 mx-auto" />

  <slot />
  <AngleDownSolid
    size="lg"
    class="snap-child-indicator-down absolute left-0 right-0 mx-auto bottom-2"
  />
</div>

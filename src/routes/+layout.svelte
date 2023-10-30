<script>
  import '../app.postcss';
  import { DarkMode } from 'flowbite-svelte';
</script>

<div>
  <nav class="flex justify-end h-[5vh]">
    <DarkMode class="w-[5vh] flex justify-center items-center" />
  </nav>
  <slot />
</div>

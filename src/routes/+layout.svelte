<script>
  import '../app.postcss';
  import { DarkMode } from 'flowbite-svelte';
</script>

<div class="dark:bg-gray-800 dark:text-gray-400">
  <nav class="flex justify-end h-[5vh]">
    <DarkMode class="w-[5vh] flex justify-center items-center" />
  </nav>
  <slot />
</div>

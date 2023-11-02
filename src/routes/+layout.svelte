<script>
  import '../app.postcss';
  import { DarkMode } from 'flowbite-svelte';
</script>

<div>
  <nav class="flex justify-end h-[5dvh] items-center mx-2">
    <DarkMode
      class="rounded-full focus:ring-0 hover:bg-blue-900 dark:hover:bg-blue-200 hover:text-yellow-300 dark:hover:text-orange-400 transition duration-300"
    />
  </nav>
  <slot />
</div>

<script lang="ts">
  import '@splidejs/splide/dist/css/splide.min.css';
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
  import ProjectCard from './ProjectCard.svelte';
  import type { Project } from '$lib/types/projects';
  import { AngleRightSolid } from 'flowbite-svelte-icons';

  let options = {
    perPage: 1,
    drag: true,
    autoplay: true,
    type: 'loop',
    pagination: false,
    arrow: false,
    interval: 1000 * 30,
    pauseOnHover: true
  };

  export let projects: Project[];
</script>

<div>
  <Splide hasTrack={false} {options} class="w-full">
    <div class="sm:px-20">
      <SplideTrack>
        {#each projects as project}
          <SplideSlide>
            <ProjectCard {...project} />
          </SplideSlide>
        {/each}
      </SplideTrack>
    </div>
    <div class="splide__arrows">
      <button class="splide__arrow splide__arrow--prev"><AngleRightSolid /></button>
      <button class="splide__arrow splide__arrow--next"><AngleRightSolid /></button>
    </div>
    <div class="splide__progres mx-4 sm:mx-20">
      <div class="bg-black splide__progress__bar" />
    </div>
  </Splide>
</div>

<style lang="postcss">
  .splide__progress__bar {
    @apply mt-5 bg-secondary-400;
  }

  .splide__arrow {
    @apply bg-secondary-400 w-10 h-10 text-white hidden sm:flex;
  }

  :global(.splide__slide) {
    @apply flex flex-col justify-center;
  }
</style>

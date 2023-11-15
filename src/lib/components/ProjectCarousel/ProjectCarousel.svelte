<script lang="ts">
  import '@splidejs/splide/dist/css/splide.min.css';
  import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
  import ProjectCard from './ProjectCard.svelte';

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

  interface Project {
    title: string;
    description: string;
    stack: string[];
    url?: string;
  }

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
      <button class="splide__arrow splide__arrow--prev">Prev</button>
      <button class="splide__arrow splide__arrow--next">Next</button>
    </div>
    <div class="splide__progres">
      <div class="bg-black splide__progress__bar" />
    </div>
  </Splide>
</div>

<style lang="postcss">
  .splide__progress__bar {
    @apply mt-5 bg-secondary-400;
  }

  .splide__arrow {
    @apply bg-secondary-400 w-10 h-10 text-white hidden sm:block;
  }

  :global(.splide__slide) {
    @apply flex flex-col justify-center;
  }
</style>

<script>
  import { projects } from '$lib/data/projects';
  import { ProjectCarousel } from './ProjectCarousel';
</script>

<div class="w-full">
  <h1 class="pb-4">Personal Projects</h1>
  <ProjectCarousel {projects} />
</div>

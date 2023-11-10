<script>
  import { projects } from '$lib/data/projects';
  import { ProjectCarousel } from './ProjectCarousel';
</script>

<div>
  <h1 class="mb-4">Personal Projects</h1>
  <ProjectCarousel {projects} />
</div>

<script>
  import { ProjectCarousel } from './ProjectCarousel';

  let projects = [
    {
      title: 'project 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates eveniet harum nemo libero. Similique vel, omnis adipisci accusantium vero placeat explicabo eum provident odit autem molestiae blanditiis magnam',
      stack: ['t1', 't2', 't3'],
      url: 'https://www.google.com'
    },
    {
      title: 'project 2',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi beatae ea sunt quos saepe ducimus quod voluptates explicabo obcaecati eveniet asperiores quaerat dolorum cumque totam, illum aperiam aliquam repellat!',
      stack: ['t1', 't2']
    }
  ];
</script>

<div>
  <ProjectCarousel {projects} />
</div>

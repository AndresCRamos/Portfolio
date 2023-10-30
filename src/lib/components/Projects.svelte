<script>
  import ProjectLinkCard from './ProjectLinkCard.svelte';

  let projects = [
    {
      title: 'project 1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi beatae ea sunt quos saepe ducimus quod voluptates explicabo obcaecati eveniet asperiores quaerat dolorum cumque totam, illum aperiam aliquam repellat!',
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

<div class="flex gap-2">
  {#each projects as project}
    <ProjectLinkCard {...project} />
  {/each}
</div>

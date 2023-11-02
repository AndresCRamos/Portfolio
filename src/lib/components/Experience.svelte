<script>
  import { Card } from 'flowbite-svelte';

  let experiences = [
    {
      company: 'Mercado pago',
      job: 'Software Analyst',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem aut repellendus officia exercitationem consequatur nesciunt voluptatibus hic? Itaque accusamus non porro eligendi dolor blanditiis omnis vel iste ipsa quisquam!',
      redirect: ''
    },
    {
      company: 'Contractor at Tata Consultant Services',
      job: 'PHP Junior Dev',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rem aut repellendus officia exercitationem consequatur nesciunt voluptatibus hic? Itaque accusamus non porro eligendi dolor blanditiis omnis vel iste ipsa quisquam!',
      redirect: ''
    }
  ];
</script>

<div class="w-full">
  <h1>Experience</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
    {#each experiences as experience}
      <Card class="flex flex-col w-full max-w-none">
        <div class="flex-grow">
          <h1 class="text-xl">{experience.company}</h1>
          <h2 class="text-secondary-500 dark:text-secondary-300 text-base mb-2">
            {experience.job}
          </h2>
          <p class="hidden text-base lg:block">{experience.description}</p>
        </div>

        <a class="text-accent-500 dark:text-accent-200 font-bold mt-2" href={experience.redirect}>
          Learn more
        </a>
      </Card>
    {/each}
  </div>
</div>

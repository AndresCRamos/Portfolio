import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const experience = params.experiences;
  if (!job_experience.has(experience)) {
    throw error(404, 'job_not_exists');
  }
  const experienceData = job_experience.get(experience);
  return experienceData;
}) satisfies PageLoad;

const job_experience = new Map([
  [
    'mercadolibre',
    {
      title: 'Mercado Libre',
      position: 'Software Analyst',
      blocks: [
        {
          type: 'list',
          title: 'Tech Stack',
          value: ['Golang', 'Gin Gonic', 'REST APIs']
        }
      ]
    }
  ]
]);

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { job_experience } from '$lib/data/job_experience';

export const load = (async ({ params }) => {
  const experience = params.experiences;
  if (!job_experience.has(experience)) {
    throw error(404, 'job_not_exists');
  }
  const experienceData = job_experience.get(experience);
  return experienceData;
}) satisfies PageLoad;

import type { JobExperience } from '$lib/types/job_experience';

export const job_experience = new Map<string, JobExperience>([
  [
    'mercadolibre',
    {
      company: 'Mercado Libre',
      position: 'Software Analyst',
      dates: {
        from: {
          month: 6,
          year: 2022
        },
        to: {
          month: 7,
          year: 2023
        }
      },
      blocks: [
        {
          type: 'list',
          title: 'Tech Stack',
          value: ['Golang', 'Gin Gonic', 'REST APIs']
        },
        {
          type: 'text',
          title: 'In depth',
          value:
            'In Mercado Libre i first worked maintaining the microservices responsible for processing payments made using credit or debit cards'
        },
        {
          type: 'text',
          value:
            'Then i worked in the Business Continuous Integration, helping with solving more complex problems, still related to the card payments ecosystem'
        }
      ]
    }
  ]
]);

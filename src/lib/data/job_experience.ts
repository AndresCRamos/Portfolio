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
          title: 'What i learned?',
          value: [
            'Golang', 
            'Gin Gonic', 
            'REST APIs', 
            'Microservices',
            'Unit testing'
          ]
        },
        {
          type: 'text',
          title: 'Whats Mercado Libre?',
          value: 'Mercado Libre is a startup leader in e-commerce and fintech solutions across Latin America',
        },
        {
          type: 'text',
          title: 'Resume',
          value:
            'In Mercado Libre i worked in the fintech division, Mercado Pago, there i worked in the team responsible for processing payments made with debit and credit cards'
        },
        {
          type: 'text',
          title: 'Maintaining microservices',
          value:
            'First i worked in the team responsible for maintaining the microservices responsible for communicating the payments made inside the Mercado Pago ecosystem and the entity that emitted the card that generated the payment'
        },
        {
          type: 'text',
          title: 'BCI',
          value:
            'Then i worked in the Business Continuous Integration team, solving more broad problems, while i worked closely with my old team, i also worked with other teams with different responsibilities'
        }
      ]
    }
  ]
]);

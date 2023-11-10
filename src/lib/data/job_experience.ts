import type { Block } from '$lib/types/block';

export const job_experience = new Map([
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
      ] as Block[]
    }
  ]
]);

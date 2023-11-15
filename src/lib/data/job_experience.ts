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
          value: ['Golang', 'Gin Gonic', 'REST APIs', 'Microservices', 'Unit testing']
        },
        {
          type: 'text',
          title: 'Whats Mercado Libre?',
          value:
            'Mercado Libre is a startup leader in e-commerce and fintech solutions across Latin America'
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
  ],
  [
    'tcs',
    {
      company: 'Contractor at Tata Consultant Services',
      position: 'Junior PHP Developer',
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
          value: ['HTML/CSS', 'JavaScript', 'PHP', 'SQL', 'Encryption', 'Captcha']
        },
        {
          type: 'text',
          title: 'Resume',
          value:
            'I worked with a software engineer who had a contract with Tata Consultant Services, there i worked by requirements maintaining and updating vanilla PHP sites'
        },
        {
          type: 'text',
          title: 'In depth',
          value:
            'The client i worked with was Credicorp Capital, a finance firm that wanted to update its page to better accommodate to its design brand'
        },
        {
          type: 'text',
          title: 'Login page',
          value:
            'First i worked in the login page, where i was given access to the Figma designs and tasked to change the design to reflect those Figma designs'
        },
        {
          type: 'text',
          value:
            'One of the requirements was the implementation of encryption between client and server during login, this was achieved by using AES encryption, where client encrypted the data using JS, and the server receive it and decrypt it using php crypto library'
        },
        {
          type: 'text',
          value:
            'To protect the page against malicious actors, reCaptcha was also implemented following Google documentation'
        },
        {
          type: 'text',
          title: 'Financial Reports',
          value:
            'I was tasked to renovate the generation of financial reports, consuming different databases to generate graphs and display, while also reimplementing the old, block based PDF generation, with a new system, based in parsing the generated HTML into a PDF'
        }
      ]
    }
  ]
]);

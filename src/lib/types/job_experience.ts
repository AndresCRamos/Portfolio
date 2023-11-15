import type { Block } from './block';

type Dates = {
  from: {
    month: number;
    year: number;
  };
  to: {
    month: number;
    year: number;
  };
};

export type JobExperience = {
  company: string;
  position: string;
  dates: Dates;
  blocks: Block[];
};

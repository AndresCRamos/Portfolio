interface ListBlock {
  type: 'list';
  title: string;
  value: string[];
}

interface TextBlock {
  type: 'text';
  title: string;
  value: string;
}

export type Block = ListBlock | TextBlock;

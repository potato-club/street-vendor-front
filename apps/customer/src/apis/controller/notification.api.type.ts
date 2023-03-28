export type FAQType = 'EVENT' | 'FAQ_BOSS' | 'FAQ_USER' | 'NOTIFICATION';

export type RequestQuestion = {
  content: string;
  imageUrl: string;
  title: string;
};

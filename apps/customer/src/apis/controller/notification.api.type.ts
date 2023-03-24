export type FAQAnswer = {
  content: string;
  imageUrl: string;
  title: string;
};

export type RequestFAQ = {
  code: string;
  data: FAQAnswer;
};

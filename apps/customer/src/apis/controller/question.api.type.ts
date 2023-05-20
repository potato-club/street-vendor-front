export interface QuestionType {
  content: string;
  title: string;
  type: 'ETC' | 'ORDER' | 'REVIEW' | 'ACCOUNT';
  questionsImages: { imageUrl: string }[];
}

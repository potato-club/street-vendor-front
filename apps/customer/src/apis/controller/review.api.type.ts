export interface ReviewType {
  comment: string;
  orderId: number;
  rate: number;
  reviewImages: ({ imageUrl: string } | null)[];
}

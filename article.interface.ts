interface Article {
  id: string;
  articleCategoryId: string|null;
  description: string;
  images: string[]|null;
  isAvailable: boolean;
  name: string;
  price: number;
  userMerchantId: string;
  sizeId: string;
  createdAt: Date;
  updatedAt: Date;
}

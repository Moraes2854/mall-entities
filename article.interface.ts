interface Article {
  id: string;
  articleCategoryId: string|null;
  description: string;
  images: string[]|null;
  isAvailable: boolean;
  name: string;
  price: number;
  stock: number;
  userMerchantId: string;
  createdAt: Date;
  updatedAt: Date;
}

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
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

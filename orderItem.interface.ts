interface OrderItem {
  id: string;
  articleId: string;
  orderId: string;
  quantity: number;
  total: number;
  createdAt: Date;
  updatedAt: Date;
}
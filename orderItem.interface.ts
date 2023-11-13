interface OrderItem {
  id: string;
  articleId: string;
  orderId: string;
  quantity: number;
  total: number;
  detailedSize: string;
  createdAt: Date;
  updatedAt: Date;
}
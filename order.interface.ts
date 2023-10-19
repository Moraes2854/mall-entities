interface Order {
  id: string;
  address: string|null;
  deliveryDate: Date|null;
  followCode: string;
  isPaid: boolean;
  paymentId: string|null;
  phone: string;
  status: 'DELIVERED' | 'CLAIMED' | 'NOT-RECEIVED' | 'CANCELED';
  total: number;
  userClientId: string|null;
  userMerchantId: string;
  createdAt: Date;
  updatedAt: Date;
}

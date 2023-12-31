interface Order {
  id: string;
  addressId: string|null;
  deliveryDate: Date|null;
  followCode: string;
  isPaid: boolean;
  paymentId: string|null;
  status: 'DELIVERED' | 'CLAIMED' | 'NOT-RECEIVED' | 'CANCELED';
  total: number;
  userClientId: string|null;
  userMerchantId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Payment {
  id: string;
  amountPaid: number;
  date: Date;
  isPaid: boolean;
  status: 'APPROVED'|'REJECTED'|'ON-HOLD';
  userClientId: string|null;
  userMerchantId: string;
  zenriseTransactionId: string|null;
  createdAt: Date;
  updatedAt: Date;
}
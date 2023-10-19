interface PaymentCard {
  id: string;
  expirationMonth: string;
  expirationYear: string;
  holderIdentification: string;
  holderName: string;
  isCreditCard: boolean;
  isDebitCard: boolean;
  number: string;
  securityCode: string;
  userClientId: string;
  createdAt: Date;
  updatedAt: Date;
}
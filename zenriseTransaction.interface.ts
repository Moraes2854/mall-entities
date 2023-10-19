interface ZenriseTransaction {
  id: string;
  invoiceId: string;
  username: string|null;
  dni: string|null;
  amountPaid: number;
  date: Date;
  status: 'approved'|'pending'|'rejected';
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
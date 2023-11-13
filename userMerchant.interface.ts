interface UserMerchant {
  id: string;
  address: string|null;
  bankAccount: string;
  cuit: string;
  email: string;
  image: string|null;
  isTestUser: boolean;
  lastConnection: Date;
  name: string;
  phone: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

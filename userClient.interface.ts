interface UserClient {
  id: string;
  address: string|null;
  email: string;
  image: string|null;
  lastConnection: Date;
  name: string;
  phone: string;
  mainAddressId: string|null;
  mainPaymentCardId: string|null;
  mainProfileId: string|null;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

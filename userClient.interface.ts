interface UserClient {
  id: string;
  address: string|null;
  email: string;
  image: string|null;
  lastConnection: Date;
  name: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

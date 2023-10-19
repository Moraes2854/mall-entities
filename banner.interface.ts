interface Banner {
  id: string;
  from: Date;
  image: string|null;
  isActive: boolean;
  redirectTo: string;
  to: Date;
  createdAt: Date;
  updatedAt: Date;
}
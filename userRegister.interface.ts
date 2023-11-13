interface UserRegister {
    id: string;
    email: string;
    userMerchantId: string | null;
    userClientId: string | null;
    userId: string | null;
    userFirebaseId: string | null;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
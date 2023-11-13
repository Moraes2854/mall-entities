interface Contact {
    id: string;
    userMerchantId: string|null;
    userClientId: string|null;
    email: string;
    message: string;
    response: string|null;
    createdAt: Date;
    updatedAt: Date;
}
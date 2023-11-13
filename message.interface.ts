interface Message {
    id: string;
    userMerchantId: string|null;
    userClientId: string|null;
    articleId: string;
    message: string;
    response: string;
    createdAt: Date;
    updatedAt: Date;
  }
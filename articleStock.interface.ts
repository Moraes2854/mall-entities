interface ArticleStock {
    id: string;
    articleId: string;
    sizeId: string;
    detailedSize: string;
    stock: number;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
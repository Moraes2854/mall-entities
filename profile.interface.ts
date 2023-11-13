interface Profile {
    id: string;
    alias: string;
    image: string | null;
    userClientId: string;
    genre: string | null;
    fit: string | null;
    shoeSize: string | null;
    createdAt: Date;
    updatedAt: Date;
}
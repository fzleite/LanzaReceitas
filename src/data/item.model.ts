export interface Item {
    id: number;
    name: string;
    cover: string;
    category: string;
    categoryTag: string;
    tags: Array<string>;
    price: string;
    likes: number;
    isLike: boolean;
    isFavorite: boolean;
    comments: number;
    rating: string;
    description: string;
}
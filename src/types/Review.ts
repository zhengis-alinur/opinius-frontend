import type { Comment } from './Comment';

export type Review = {
    id: number;
    title: string;
    object: string;
    text: string;
    grade: number;
    tags: string[];
    categoryId: number;
    image: string;
    likes: number;
    rating: number;
    userId: number;
    comments: Comment[];
};

export type CreateReview = Omit<
    Review,
    'comments' | 'likes' | 'rating' | 'id' | 'categoryId' | 'grade'
> & {
    categoryId: string;
    grade: string;
};

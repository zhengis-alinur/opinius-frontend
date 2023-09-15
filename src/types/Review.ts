import type { Comment } from './Comment';
import { Like } from './Like';
import { Rating } from './Rating';

export type Review = {
    id: number;
    title: string;
    objectName: string;
    text: string;
    grade: number;
    tags: string[];
    categoryId: number;
    image: string;
    likes: Like[];
    ratings: Rating[];
    rating: number;
    userId: number;
    comments: Comment[];
};

export type CreateReview = Omit<
    Review,
    'comments' | 'likes' | 'rating' | 'id' | 'categoryId' | 'grade' | 'ratings'
> & {
    categoryId: string;
    grade: string;
};

import type { Comment } from './Comment';
import { Like } from './Like';
import { Rating } from './Rating';
import { Tag } from './Tag';

export type Review = {
    id: number;
    title: string;
    objectName: string;
    text: string;
    grade: number;
    tags: Tag[];
    categoryId: number;
    image: string;
    likes: Like[];
    ratings: Rating[];
    rating: number;
    userId: number;
    comments: Comment[];
};

export type CreateReview = {
    title: string;
    objectName: string;
    text: string;
    grade: number;
    tags: string[];
    categoryId: number;
    image: string;
    userId: number;
};

export type UpdateReview = {
    id: number;
    title: string;
    objectName: string;
    text: string;
    grade: number;
    tags: string[];
    categoryId: number;
    image: string;
    userId: number;
};

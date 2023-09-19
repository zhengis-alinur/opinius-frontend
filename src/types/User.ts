import { Review } from './Review';

export type User = {
    id: number;
    roleId: number;
    username: string;
    avatar: string;
    firstName: string;
    likesCount: number;
    reviews: Review[];
    commentsCount: number;
    ratedCount: number;
    lastName: string;
    email: string;
};

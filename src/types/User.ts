import { Review } from './Review';

export type User = {
    id: number;
    roleId: number;
    blocked: boolean;
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

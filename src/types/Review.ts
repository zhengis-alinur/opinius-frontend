export type Comment = {
    userId: string;
    text: string;
};
export type Review = {
    id: string;
    object: string;
    likes: number;
    grade: number;
    rating: number;
    title: string;
    tags: string[];
    text: string;
    img: string;
    comments: Comment[];
};

export type Comment = {
    userId: string;
    text: string;
};
export type Review = {
    id: string;
    title: string;
    object: string;
    text: string;
    grade: number;
    tags: string[];
    img: string;
    likes: number;
    rating: number;
    comments: Comment[];
};

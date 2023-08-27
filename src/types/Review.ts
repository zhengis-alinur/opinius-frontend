export type Comment = {
    userId: string;
    text: string;
};
export type Review = {
    id: string;
    grade: number;
    rating: number;
    title: string;
    text: string;
    img: string;
    comments: Comment[];
};

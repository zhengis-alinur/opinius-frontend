import { useEffect, useState } from 'react';

import { useCommentsOfReviewQuery } from '../../../api/reviewApi';
import { Comment as CommentType } from '../../../types/Comment';
import Comment from './Comment';

const Comments = ({ reviewId }: { reviewId: number }) => {
    const [comments, setComments] = useState<CommentType[]>();
    const getComments = useCommentsOfReviewQuery(reviewId);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const comments = (await getComments.refetch()).data;
                if (comments) {
                    setComments(comments);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (
        <>
            {comments &&
                comments.map((comment, index) => (
                    <Comment comment={comment} key={index} />
                ))}
        </>
    );
};

export default Comments;

import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useCommentsOfReviewQuery } from '../../../api/reviewApi';
import { Comment as CommentType } from '../../../types/Comment';
import Comment from './Comment';

const Comments = ({ reviewId }: { reviewId: number }) => {
    const [comments, setComments] = useState<CommentType[]>([]);
    const getComments = useCommentsOfReviewQuery(reviewId);
    const { t } = useTranslation();
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
    useEffect(() => {
        setInterval(() => {
            fetchData();
        }, 1000);
    }, []);
    return (
        <>
            {comments.length > 0 ? (
                comments.map((comment, index) => (
                    <Comment comment={comment} key={index} />
                ))
            ) : (
                <h1 className="text-center">{t('no-comments')}</h1>
            )}
        </>
    );
};

export default Comments;

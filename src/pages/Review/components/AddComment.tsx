import { useState } from 'react';

import { useCommentReviewMutation } from '../../../api/reviewApi';
import { Review } from '../../../types';
import CommentInput from './CommentInput';

const AddComment = ({ review }: { review: Review }) => {
    const [showArea, setShowArea] = useState(false);
    const [comment] = useCommentReviewMutation();
    const onComment = (text: string) => {
        comment({ reviewId: review.id, comment: text });
        setShowArea(false);
    };
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <button
                className=" w-48 text-gray-900 bg-white dark:bg-gray ring-0 dark:text-gray-100 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2"
                onClick={() => setShowArea(!showArea)}
            >
                {showArea ? 'Hide' : 'Add new comment +'}
            </button>
            {showArea && <CommentInput onComment={onComment} />}
        </div>
    );
};

export default AddComment;

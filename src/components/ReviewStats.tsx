import Comment from '../icons/Comment';
import Likes from '../icons/Likes';
import Star from '../icons/Star';
import { Review } from '../types';

const ReviewStats = ({ review }: { review: Review }) => {
    return (
        <div className="flex justify-center gap-5">
            <div className="flex gap-1">
                <Likes />
                <p className="text-xs">
                    <span className="font-bold">{review.likes.length}</span>
                </p>
            </div>
            <div className="flex gap-1">
                <Comment />
                <p className="text-xs">
                    <span className="font-bold">{review.comments.length}</span>
                </p>
            </div>
            <div className="flex gap-1">
                <Star />
                <p className="text-xs">
                    <span className="font-bold">{review.rating}</span>
                </p>
            </div>
        </div>
    );
};

export default ReviewStats;

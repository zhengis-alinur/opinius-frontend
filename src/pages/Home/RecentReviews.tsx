import ReviewPost from '../../components/ReviewPost';
import { review } from '../../data';

const RecentReviews = () => {
    return (
        <div className="relative w-full">
            <h1 className="text-3xl mb-5 text-center">Recent Reviews</h1>
            <div className="flex items-center justify-center gap-5 w-full flex-wrap">
                {new Array(10).fill(<ReviewPost review={review} />)}
            </div>
        </div>
    );
};

export default RecentReviews;

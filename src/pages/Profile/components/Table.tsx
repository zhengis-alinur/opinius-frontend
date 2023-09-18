import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useRatingOfReviewQuery } from '../../../api/reviewApi';
import { useGetUserReviewsQuery } from '../../../api/userApi';
import Badge from '../../../components/Badge';
import Checkbox from '../../../components/Checkbox';
import { useAppSelector } from '../../../redux/hooks';
import { selectUser } from '../../../redux/selectors';
import { Review, User } from '../../../types';

const TableHeadItem = ({
    title,
    sortable = false,
}: {
    title: string;
    sortable?: boolean;
}) => (
    <th scope="col" className="px-6 py-3">
        <div className="flex items-center whitespace-nowrap">
            {title}
            {sortable && (
                <a>
                    <svg
                        className="w-3 h-3 ml-1.5 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                </a>
            )}
        </div>
    </th>
);

const TableRow = ({ review }: { review: Review }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <Checkbox />
            <td className="px-6 py-4 w-10">
                <Link to={`/review/${review.id}`}>{review.title}</Link>
            </td>
            <td className="px-6 py-4">{review.objectName}</td>
            <td className="px-6 py-4">{review.grade}</td>
            <td className="px-6 py-4">
                <div className="flex flex-col items-start">
                    {review.tags &&
                        review.tags.map((tag, index) => <Badge key={index}>{tag}</Badge>)}
                </div>
            </td>
            <td className="px-6 py-4">{review.likes.length}</td>
            <td className="px-6 py-4">{review.comments.length}</td>
            <td className="px-6 py-4">{review.rating}</td>
        </tr>
    );
};

const TableHead = () => (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray dark:text-gray-400">
        <tr>
            <Checkbox />
            <TableHeadItem title="Review title" />
            <TableHeadItem title="Review object" />
            <TableHeadItem title="My grade" sortable />
            <TableHeadItem title="Tags" />
            <TableHeadItem title="Likes" sortable />
            <TableHeadItem title="Comments" sortable />
            <TableHeadItem title="Rating" sortable />
        </tr>
    </thead>
);

const TableBody = ({ reviews }: { reviews: Review[] }) => (
    <tbody>
        {reviews &&
            reviews.map((review, index) => <TableRow review={review} key={index} />)}
    </tbody>
);

const TableSearch = () => (
    <div className="pb-4 bg-white dark:bg-gray">
        <label htmlFor="table-search" className="sr-only ">
            Search
        </label>
        <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>
            <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
            />
        </div>
    </div>
);

const Table = ({ user }: { user: User }) => {
    const [reviews, setReviews] = useState<Review[]>([]);
    const getReviews = useGetUserReviewsQuery(user.id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = (await getReviews.refetch()).data;
                if (data) {
                    setReviews(data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="relative bg-white w-full max-w-6xl overflow-x-auto shadow-md sm:rounded-lg p-4 dark:bg-gray ">
            <TableSearch />
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <TableHead />
                <TableBody reviews={reviews} />
            </table>
        </div>
    );
};

export default Table;

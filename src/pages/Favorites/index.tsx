import React, { useEffect, useState } from 'react';

import { useGetUserFavoritesQuery } from '../../api/userApi';
import { ReviewPost } from '../../components';
import Spinner from '../../components/Spinner';
import { useAppSelector } from '../../redux/hooks';
import { selectUser } from '../../redux/selectors';
import { Review } from '../../types';

const Favorites = () => {
    const user = useAppSelector(selectUser);
    const [favorites, setFavorites] = useState<{ review: Review }[]>();
    const getFavorites = useGetUserFavoritesQuery(user.id);
    useEffect(() => {
        const fetchFavorites = async () => {
            const data = (await getFavorites.refetch()).data;
            setFavorites(data);
        };
        fetchFavorites();
    }, []);
    return (
        <div className="w-full flex flex-col min-h-screen items-center">
            <h1 className="text-3xl mb-5 text-center">Favorite Reviews</h1>
            {getFavorites.isLoading ? (
                <Spinner />
            ) : (
                <div className="flex flex-col items-center justify-center gap-5 w-full">
                    {favorites?.map(({ review }) => (
                        <ReviewPost key={review.id} review={review} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;

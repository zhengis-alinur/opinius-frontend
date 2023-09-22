import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { TagCloud } from 'react-tagcloud';

import { useGetTagStatsQuery } from '../api/tagApi';
import Spinner from './Spinner';

type Tag = {
    value: string;
    count: number;
};

const View = () => {
    const getTags = useGetTagStatsQuery();
    const [tags, setTags] = useState<Tag[]>([]);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const data = (await getTags.refetch()).data;
            if (data) {
                setTags(data);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {getTags.isLoading ? (
                <Spinner />
            ) : (
                <TagCloud
                    minSize={12}
                    maxSize={35}
                    tags={tags}
                    className="cursor-pointer"
                    onClick={(tag: { value: string }) => navigate(`/search/${tag.value}`)}
                />
            )}
        </>
    );
};

export default View;

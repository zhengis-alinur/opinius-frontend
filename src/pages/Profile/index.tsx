import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useGetUserQuery } from '../../api/userApi';
import { User } from '../../types';
import Header from './components/Header';
import Table from './components/Table';

const Profile = () => {
    const { id } = useParams();
    const [user, setUser] = useState<User>();
    const getUser = useGetUserQuery(id || 0);
    useEffect(() => {
        const fetchUser = async () => {
            const data = (await getUser.refetch()).data;
            if (data) {
                setUser(data);
            }
        };
        fetchUser();
    }, [id]);
    return (
        <>
            {user && (
                <div className="flex flex-col justify-between w-full overflow-hidden gap-5">
                    <Header user={user} />
                    <Table user={user} />
                </div>
            )}
        </>
    );
};

export default Profile;

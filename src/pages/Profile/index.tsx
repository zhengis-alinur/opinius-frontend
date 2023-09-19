import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { useGetUserQuery } from '../../api/userApi';
import { ADMIN_ROLE_ID } from '../../constants';
import { User } from '../../types';
import AdminTable from './components/AdminTable';
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
                <div className="flex flex-col justify-between w-full gap-5">
                    <Header user={user} />
                    {user.roleId === ADMIN_ROLE_ID ? (
                        <>
                            <h1 className="text-3xl text-center">Users</h1>
                            <AdminTable />
                        </>
                    ) : (
                        <>
                            <h1 className="text-3xl text-center">Reviews</h1>
                            <Table user={user} />
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default Profile;

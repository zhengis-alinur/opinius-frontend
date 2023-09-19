/* eslint-disable react/jsx-key */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useGetUsersQuery } from '../../../api/userApi';
import Table from '../../../components/Table';
import { ADMIN_ROLE_ID } from '../../../constants';
import { User } from '../../../types';

const View = () => {
    const [users, setUsers] = useState<User[]>([]);
    const getUsers = useGetUsersQuery();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = (await getUsers.refetch()).data;
                if (data) {
                    setUsers(data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="relative bg-white w-full overflow-x-auto shadow-md sm:rounded-lg p-4 dark:bg-gray ">
            <Table
                rows={users.map((user) => [
                    <Link to={`/profile/${user.id}`}>
                        <p>{user.id}</p>
                    </Link>,
                    <Link to={`/profile/${user.id}`}>
                        <p>{user.username}</p>
                    </Link>,
                    <p className={user.roleId === ADMIN_ROLE_ID ? 'text-lime-600' : ''}>
                        {user.roleId === ADMIN_ROLE_ID ? 'Admin' : 'User'}
                    </p>,
                    <p>{user.firstName}</p>,
                    <p>{user.lastName}</p>,
                    <p>{user.email}</p>,
                    <p>{user.likesCount}</p>,
                    <p>{user.commentsCount}</p>,
                    <p>{user.ratedCount}</p>,
                ])}
                head={[
                    'ID',
                    'Username',
                    'Role',
                    'First name',
                    'LastName',
                    'Email',
                    'Likes',
                    'Comments',
                    'Rated',
                ]}
            />
        </div>
    );
};

export default View;

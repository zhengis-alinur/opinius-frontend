/* eslint-disable react/jsx-key */
import { Checkbox } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    useBlockUsersMutation,
    useDeleteUsersMutation,
    useGetUsersQuery,
    useSetAdminMutation,
} from '../../../api/userApi';
import Table, {
    TableHeadItem,
    TableSearch,
    TableToolbar,
} from '../../../components/Table';
import { ADMIN_ROLE_ID } from '../../../constants';
import { User } from '../../../types';

type UpdateFunction = (ids: { ids: number[] }) => Promise<any>;

const View = () => {
    const [users, setUsers] = useState<User[]>([]);
    const getUsers = useGetUsersQuery();
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

    const [deleteUsers] = useDeleteUsersMutation();
    const [blockUsers] = useBlockUsersMutation();
    const [setAdmin] = useSetAdminMutation();

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
    useEffect(() => {
        fetchData();
    }, []);

    const toggleReviewSelection = (reviewId: number) => {
        if (selectedUsers.includes(reviewId)) {
            setSelectedUsers(selectedUsers.filter((id) => id !== reviewId));
        } else {
            setSelectedUsers([...selectedUsers, reviewId]);
        }
    };

    const onAllSelect = () => {
        if (selectedUsers.length < users.length) {
            const selected: number[] = [];
            users.forEach((user) => selected.push(user.id));
            setSelectedUsers([...selected]);
        } else {
            setSelectedUsers([]);
        }
    };

    const onUpdate = async (update: UpdateFunction): Promise<void> => {
        if (selectedUsers.length !== 0) {
            update({ ids: selectedUsers })
                .then(() => {
                    return fetchData();
                })
                .then(() => {
                    setSelectedUsers([]);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    return (
        <div className="relative bg-white w-full overflow-x-auto shadow-md sm:rounded-lg p-4 dark:bg-gray ">
            <div className="flex justify-start items-center gap-10  mb-3">
                <TableSearch />
                <TableToolbar
                    onDelete={() => {
                        onUpdate(deleteUsers);
                    }}
                    onBlock={() => {
                        onUpdate(blockUsers);
                    }}
                    onSetAdmin={() => {
                        onUpdate(setAdmin);
                    }}
                />
            </div>
            <Table
                rows={users.map((user) => [
                    <Checkbox
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => toggleReviewSelection(user.id)}
                    />,
                    <Link to={`/profile/${user.id}`}>
                        <p className={user.blocked ? 'text-rose-600 font-bold' : ''}>
                            {user.id}
                        </p>
                    </Link>,
                    <Link to={`/profile/${user.id}`}>
                        <p className={user.blocked ? 'text-rose-600 font-bold' : ''}>
                            {user.username}
                        </p>
                        <p className={user.blocked ? 'text-rose-600 font-bold' : ''}>
                            {user.blocked && 'blocked'}
                        </p>
                    </Link>,
                    <p
                        className={
                            user.roleId === ADMIN_ROLE_ID ? 'text-lime-600 font-bold' : ''
                        }
                    >
                        {user.roleId === ADMIN_ROLE_ID ? 'Admin' : 'User'}
                    </p>,
                    <p>{user.firstName}</p>,
                    <p>{user.lastName}</p>,
                    <p>{user.email}</p>,
                    <p>{user.reviews.length}</p>,
                    <p>{user.likesCount}</p>,
                    <p>{user.commentsCount}</p>,
                    <p>{user.ratedCount}</p>,
                ])}
                head={[
                    <Checkbox
                        checked={selectedUsers.length === users.length}
                        onChange={onAllSelect}
                    />,
                    <TableHeadItem title="ID" />,
                    <TableHeadItem title="Username" />,
                    <TableHeadItem title="Role" />,
                    <TableHeadItem title="First name" />,
                    <TableHeadItem title="Last name" />,
                    <TableHeadItem title="Email" />,
                    <TableHeadItem title="Reviews" />,
                    <TableHeadItem title="Liked by" />,
                    <TableHeadItem title="Commented by" />,
                    <TableHeadItem title="Rated by" />,
                ]}
            />
        </div>
    );
};

export default View;
function useSetAdminsMutation(): [any] {
    throw new Error('Function not implemented.');
}

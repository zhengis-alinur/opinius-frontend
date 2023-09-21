/* eslint-disable react/jsx-key */
import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import {
    useBlockUsersMutation,
    useDeleteUsersMutation,
    useGetUsersQuery,
    useSetAdminMutation,
    useSetUserMutation,
    useUnBlockUsersMutation,
} from '../../../api/userApi';
import { Button, Checkbox, Select } from '../../../components';
import Table, { TableHeadItem, TableToolbar } from '../../../components/Table';
import { ADMIN_ROLE_ID, ORDER, SORTBY_USER } from '../../../constants';
import { useAppSelector } from '../../../redux/hooks';
import { selectUser } from '../../../redux/selectors';
import { User } from '../../../types';

type UpdateFunction = (ids: { ids: number[] }) => Promise<any>;

const View = () => {
    const currentUser = useAppSelector(selectUser);
    const [sortBy, setSortBy] = useState<string>('username');
    const [order, setOrder] = useState<string>('ASC');

    const [users, setUsers] = useState<User[]>([]);
    const getUsers = useGetUsersQuery({
        sortBy,
        order,
    });
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

    const [deleteUsers] = useDeleteUsersMutation();
    const [blockUsers] = useBlockUsersMutation();
    const [unBlockUsers] = useUnBlockUsersMutation();
    const [setAdmin] = useSetAdminMutation();
    const [setUser] = useSetUserMutation();
    const { t } = useTranslation();

    const fetchData = async () => {
        try {
            const data = (await getUsers.refetch()).data;
            if (data) {
                console.log(data);
                setUsers(data.filter((user) => user.id !== currentUser.id));
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
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    const onFilterApply = () => {
        fetchData();
    };

    return (
        <div className="relative bg-white w-full overflow-x-auto shadow-md sm:rounded-lg p-4 dark:bg-gray ">
            <div className="flex flex-col gap-5">
                <Select
                    name="sortBy"
                    label={t('sort-by')}
                    options={SORTBY_USER}
                    value={sortBy}
                    onChange={(value) => setSortBy(value)}
                />
                <Select
                    name="order"
                    label={t('order')}
                    options={ORDER}
                    value={order}
                    onChange={(value) => setOrder(value)}
                />
                <Button
                    type="submit"
                    className="text-white max-w-[100px]"
                    onClick={() => {
                        onFilterApply();
                    }}
                >
                    {t('apply')}
                </Button>
                {selectedUsers.length > 0 && (
                    <TableToolbar
                        style={{
                            opacity: selectedUsers.length > 0 ? '100' : '0',
                        }}
                        onDelete={() => {
                            onUpdate(deleteUsers);
                        }}
                        onBlock={() => {
                            onUpdate(blockUsers);
                        }}
                        onUnBlock={() => {
                            onUpdate(unBlockUsers);
                        }}
                        onSetAdmin={() => {
                            onUpdate(setAdmin);
                        }}
                        onSetUser={() => {
                            onUpdate(setUser);
                        }}
                    />
                )}
            </div>
            <Table
                rows={users.map((user) => [
                    <Checkbox
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => toggleReviewSelection(user.id)}
                    />,
                    <Link to={`/profile/${user.id}`}>
                        <p>{user.id}</p>
                    </Link>,
                    <Link to={`/profile/${user.id}`}>
                        <p>{user.username}</p>
                    </Link>,
                    <>
                        {(user.blocked && (
                            <p className="text-rose-600 font-bold">Blocked</p>
                        )) || (
                            <p
                                className={
                                    user.roleId === ADMIN_ROLE_ID
                                        ? 'text-lime-600 font-bold'
                                        : ''
                                }
                            >
                                {user.roleId === ADMIN_ROLE_ID ? 'Admin' : 'User'}
                            </p>
                        )}
                    </>,
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

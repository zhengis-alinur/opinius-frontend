import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { useGetUserQuery } from '../../api/userApi';
import { ADMIN_ROLE_ID } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { selectUser } from '../../redux/selectors';
import { User } from '../../types';
import AdminTable from './components/AdminTable';
import Header from './components/Header';
import Table from './components/Table';

const Profile = () => {
    const { id } = useParams();
    const currentUser = useAppSelector(selectUser);
    const [user, setUser] = useState<User>();
    const getUser = useGetUserQuery(id || 0);
    const { t } = useTranslation();
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
                    {currentUser &&
                        currentUser.id === user.id &&
                        user.roleId === ADMIN_ROLE_ID && (
                            <>
                                <h1 className="text-3xl text-center">{t('users')}</h1>
                                <AdminTable />
                            </>
                        )}
                    <h1 className="text-3xl text-center">{t('reviews')}</h1>
                    <Table user={user} />
                </div>
            )}
        </>
    );
};

export default Profile;

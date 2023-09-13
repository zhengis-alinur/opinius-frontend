import { useNavigate } from 'react-router';

import { useAppSelector } from '../../redux/hooks';
import { selectUser } from '../../redux/selectors';
import Header from './components/Header';
import Table from './components/Table';

const Profile = () => {
    const user = useAppSelector(selectUser);

    return (
        <div className="flex flex-col justify-between w-full overflow-hidden gap-5">
            <Header user={user} />
            <Table />
        </div>
    );
};

export default Profile;

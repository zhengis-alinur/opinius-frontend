import { user } from '../../data';
import Header from './components/Header';
import Table from './components/Table';

const Profile = () => {
    return (
        <div className="flex flex-col justify-between w-full gap-5">
            <Header user={user} />
            <Table />
        </div>
    );
};

export default Profile;

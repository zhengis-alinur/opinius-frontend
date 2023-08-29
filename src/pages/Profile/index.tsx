import { user } from '../../data';
import CreateReviewModal from './components/CreateReviewModal';
import Header from './components/Header';
import Table from './components/Table';

const Profile = () => {
    return (
        <div className="flex flex-col justify-between w-full overflow-hidden gap-5">
            <Header user={user} />
            <Table />
            <CreateReviewModal />
        </div>
    );
};

export default Profile;

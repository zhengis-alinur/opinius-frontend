import { useState } from 'react';
import { useNavigate } from 'react-router';

import { useAppSelector } from '../../redux/hooks';
import { selectUser } from '../../redux/selectors';
import CreateReviewModal from './components/CreateReviewModal';
import Header from './components/Header';
import Table from './components/Table';

const Profile = () => {
    const navigate = useNavigate();
    const user = useAppSelector(selectUser);
    const [showModal, setShowModal] = useState(false);
    const onCreateReview = () => {
        navigate('/createReview');
    };
    return (
        <div className="flex flex-col justify-between w-full overflow-hidden gap-5">
            <Header user={user} onCreateReview={onCreateReview} />
            <Table />
            {showModal && <CreateReviewModal onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default Profile;

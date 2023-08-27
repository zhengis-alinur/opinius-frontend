import Container from '../../components/Container';
import { review, user } from '../../data';
import Likes from '../../icons/Likes';
import AddComment from './components/AddComment';
import Comments from './components/Comments';
import Content from './components/Content';
import Header from './components/Header';
import Rate from './components/Rate';
import Tags from './components/Tags';

const View = () => {
    return (
        <div className="flex flex-col justify-between w-full gap-5">
            <Container className="flex flex-col gap-5 items-center">
                <Header user={user} review={review} />
                <Tags className="self-start" tags={review.tags} />
                <Content text={review.text} />
                <div className="self-start">
                    <p className="font-bold">
                        {user.userName + "'"}s final rate: {review.grade}/10
                    </p>
                </div>
                <h1>Did you like this review?</h1>
                <Likes scale={4} />
                <Rate rating={review.rating} />
            </Container>
            <AddComment />
            <Comments comments={review.comments} />
        </div>
    );
};

export default View;

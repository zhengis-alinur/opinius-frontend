import Container from '../../components/Container';
import Logo from '../../components/Logo';
import TagCloud from '../../components/TagCloud';
import BestReviews from './BestReviews';
import RecentReviews from './RecentReviews';

const Home = () => {
    return (
        <div className="flex flex-col justify-between 2xl:flex-row w-full gap-5">
            <div className="flex flex-col gap-5">
                <Container className="flex flex-col">
                    <div className="flex flex-col justify-start items-center">
                        <Logo />
                        <TagCloud />
                    </div>
                </Container>
                <BestReviews />
                <Container>
                    <RecentReviews />
                </Container>
            </div>
        </div>
    );
};

export default Home;

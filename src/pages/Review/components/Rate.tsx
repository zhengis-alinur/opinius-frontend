import Rating from 'react-rating';

import Star from '../../../icons/Star';
const Rate = ({ rating }: { rating: number }) => (
    <Rating
        initialRating={rating}
        emptySymbol={<Star scale={3} />}
        fullSymbol={<Star full scale={3} />}
    />
);

export default Rate;

import { useState } from 'react';

import { ACCENT, UNFOCUS } from '../constants/colors';

const Likes = ({ scale = 1, liked = false }: { scale?: number; liked?: boolean }) => {
    return (
        <svg
            width={18 * scale}
            height={16 * scale}
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.85457 0C1.9622 0 0 2.67425 0 5.62162C0 10.6742 3.89189 12.7568 8.86487 16C13.8378 12.7568 17.7297 10.6742 17.7297 5.62162C17.7297 2.67425 15.7675 0 12.8752 0C11.0135 0 9.48334 1.05263 8.86487 1.6842C8.24639 1.05263 6.71623 0 4.85457 0Z"
                fill={liked ? ACCENT : UNFOCUS}
            />
        </svg>
    );
};

export default Likes;

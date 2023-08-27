import { SVGAttributes } from 'react';

import { PRIMARY } from '../../../constants/colors';

const SVG = (props: SVGAttributes<HTMLOrSVGElement>) => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`cursor-pointer ${props.className}`}
            {...props}
        >
            <path
                d="M24 12C24 11.1074 23.3569 10.1559 22.564 9.87521C21.7711 9.59455 21.0025 8.90727 20.7788 8.36529C20.5552 7.82331 20.6132 6.7919 20.9752 6.03223C21.3367 5.27256 21.1175 4.14446 20.4863 3.51322C19.8555 2.88198 18.7274 2.66331 17.9673 3.02479C17.2076 3.38628 16.1777 3.44529 15.6372 3.22165C15.0967 2.99802 14.4089 2.22843 14.1273 1.43554C13.8451 0.642645 12.8926 0 12 0C11.1074 0 10.1549 0.642645 9.87273 1.43554C9.59058 2.22843 8.90331 2.99802 8.36281 3.22165C7.82231 3.44529 6.7919 3.38628 6.03223 3.02479C5.27256 2.66331 4.14446 2.88198 3.51322 3.51322C2.88198 4.14446 2.66331 5.27207 3.02479 6.03223C3.38628 6.7924 3.4438 7.82281 3.21917 8.3643C2.99455 8.90578 2.22843 9.59455 1.43554 9.87521C0.642645 10.1559 0 11.1074 0 12C0 12.8926 0.642645 13.8451 1.43554 14.1273C2.22843 14.4089 2.99554 15.0977 3.22017 15.6382C3.44479 16.1782 3.38628 17.2081 3.02479 17.9678C2.66331 18.7274 2.88198 19.8555 3.51322 20.4868C4.14446 21.1175 5.27207 21.3367 6.03223 20.9752C6.7924 20.6137 7.82231 20.5552 8.36281 20.7793C8.9038 21.0035 9.59058 21.775 9.87273 22.5664C10.1549 23.3579 11.1074 24 12 24C12.8926 24 13.8451 23.3579 14.1273 22.5664C14.4089 21.775 15.0957 21.0045 15.6362 20.7793C16.1767 20.5547 17.2081 20.6137 17.9673 20.9757C18.7274 21.3372 19.8555 21.118 20.4863 20.4873C21.1175 19.856 21.3367 18.7279 20.9752 17.9683C20.6137 17.2081 20.5542 16.1782 20.7779 15.6377C21.0015 15.0972 21.7716 14.4094 22.5645 14.1278C23.3574 13.8451 24 12.8926 24 12ZM12 16.4033C9.56529 16.4033 7.59669 14.4347 7.59669 12.005C7.59669 9.57025 9.56529 7.60165 12 7.60165C14.4293 7.60165 16.3983 9.57025 16.3983 12.005C16.3983 14.4347 14.4298 16.4033 12 16.4033Z"
                fill={PRIMARY}
            />
        </svg>
    );
};

export default SVG;

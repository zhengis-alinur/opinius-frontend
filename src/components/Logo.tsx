import { Link } from 'react-router-dom';

const Logo = () => (
    <svg
        width="40"
        height="40"
        viewBox="0 0 109 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_205_409)">
            <path
                d="M86.2978 14.5C86.2978 14.5 78.8182 21.6841 70.7289 24.5805C10.8254 46.0312 36.0892 87.8326 36.9134 87.9703C36.9134 87.9703 40.2725 82.1792 44.8101 78.876C73.6041 57.9199 79.4564 33.7984 79.4564 33.7984C79.4564 33.7984 72.9951 62.8243 47.3785 80.885C41.7208 84.8719 37.8898 94.6884 36.2681 104.5C36.2681 104.5 40.2786 102.896 42.0032 102.461C42.6757 98.1166 44.0817 93.9564 46.4589 90.24C82.261 94.4599 93.9869 65.8996 95.5187 55.9408C99.1342 32.4203 86.2978 14.5 86.2978 14.5Z"
                fill="url(#paint0_linear_205_409)"
                fillOpacity="0.75"
            />
        </g>
        <g clipPath="url(#clip1_205_409)">
            <path
                d="M67.6153 3.76658C67.6153 3.76658 61.3925 12.1293 53.8539 16.3427C-1.97117 47.5461 30.0089 84.7933 30.8488 84.7931C30.8488 84.7931 33.218 78.4949 37.1682 74.4675C62.2356 48.9159 64.0351 24.0327 64.0351 24.0327C64.0351 24.0327 62.4455 53.8788 40.0476 76.0329C35.1004 80.924 32.9314 91.291 32.9516 101.286C32.9516 101.286 36.6612 99.0309 38.2987 98.314C38.2445 93.8954 38.9481 89.538 40.6881 85.4594C76.8799 83.7027 83.7655 53.4446 83.6318 43.3181C83.3136 19.4017 67.6153 3.76658 67.6153 3.76658Z"
                fill="#075985"
                fillOpacity="0.88"
            />
        </g>
        <defs>
            <linearGradient
                id="paint0_linear_205_409"
                x1="63.5454"
                y1="14.5"
                x2="13.763"
                y2="277.185"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#075985" />
                <stop offset="1" stopColor="#075985" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_205_409">
                <rect
                    width="90.9091"
                    height="90"
                    fill="white"
                    transform="translate(18.0909 14.5)"
                />
            </clipPath>
            <clipPath id="clip1_205_409">
                <rect
                    width="91.3741"
                    height="90.4603"
                    fill="white"
                    transform="translate(0 15.0829) rotate(-9.50118)"
                />
            </clipPath>
        </defs>
    </svg>
);
const View = () => {
    return (
        <Link className="flex items-center" to="/">
            <Logo />
            <h1 className="font-logo text-4xl text-sky-800 cursor-pointer e">Opinius</h1>
        </Link>
    );
};

export default View;

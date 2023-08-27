import { SVGAttributes } from 'react';

import Tooltip from '../../Tooltip';

const SVG = (props: SVGAttributes<HTMLOrSVGElement>) => {
    return (
        <svg
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`cursor-pointer ${props.className}`}
            {...props}
        >
            <path
                d="M8.89296 10.9226C8.968 10.6299 9.17052 10.3898 9.44397 10.2693L20.1279 5.55926C20.9811 5.18312 21.9897 5.46549 22.5486 6.23702L29.5474 15.8979C29.7265 16.1451 29.787 16.4589 29.712 16.7515L26.4216 29.5829C26.2572 30.224 25.8558 30.7705 25.3057 31.1023C24.7557 31.4342 24.102 31.5241 23.4885 31.3523L7.29596 26.8187C6.68246 26.6469 6.15938 26.2275 5.84181 25.6528C5.52424 25.078 5.43818 24.395 5.60257 23.7539L8.89296 10.9226Z"
                fill="url(#paint0_linear_29_252)"
            />
            <g filter="url(#filter0_bd_29_252)">
                <path
                    d="M2 11.9792C2 11.6781 2.13566 11.3931 2.36931 11.2032L11.7882 3.54839C12.5231 2.95115 13.5761 2.95115 14.311 3.54838L23.7298 11.2032C23.9635 11.3931 24.0992 11.6781 24.0992 11.9792V25.6149C24.0992 26.2953 23.8405 26.9479 23.38 27.4291C22.9195 27.9103 22.2949 28.1806 21.6437 28.1806H4.45546C3.80423 28.1806 3.17968 27.9103 2.71919 27.4291C2.2587 26.9479 2 26.2953 2 25.6149V11.9792Z"
                    fill="url(#paint1_linear_29_252)"
                    fillOpacity="0.6"
                />
                <path
                    d="M2 11.9792C2 11.6781 2.13566 11.3931 2.36931 11.2032L11.7882 3.54839C12.5231 2.95115 13.5761 2.95115 14.311 3.54838L23.7298 11.2032C23.9635 11.3931 24.0992 11.6781 24.0992 11.9792V25.6149C24.0992 26.2953 23.8405 26.9479 23.38 27.4291C22.9195 27.9103 22.2949 28.1806 21.6437 28.1806H4.45546C3.80423 28.1806 3.17968 27.9103 2.71919 27.4291C2.2587 26.9479 2 26.2953 2 25.6149V11.9792Z"
                    stroke="url(#paint2_linear_29_252)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <line
                x1="9.13864"
                y1="23.332"
                x2="16.9605"
                y2="23.332"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <defs>
                <filter
                    id="filter0_bd_29_252"
                    x="-2.5"
                    y="-1.39954"
                    width="32.0992"
                    height="34.0801"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_29_252"
                    />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dx="2" dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_backgroundBlur_29_252"
                        result="effect2_dropShadow_29_252"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_29_252"
                        result="shape"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_29_252"
                    x1="26.5363"
                    y1="7.63033"
                    x2="7.18944"
                    y2="25.5484"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF0028" />
                    <stop offset="1" stopColor="#DE2442" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_29_252"
                    x1="19.8021"
                    y1="8.93759"
                    x2="1.19078"
                    y2="27.3632"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF0029" />
                    <stop offset="1" stopColor="#E5324F" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_29_252"
                    x1="22.8714"
                    y1="5.73042"
                    x2="1.05597"
                    y2="27.2223"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default SVG;

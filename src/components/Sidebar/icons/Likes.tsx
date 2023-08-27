import { SVGAttributes } from 'react';

const SVG = (props: SVGAttributes<HTMLOrSVGElement>) => {
    return (
        <svg
            width="30"
            height="35"
            viewBox="0 0 30 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`cursor-pointer ${props.className}`}
            {...props}
        >
            <path
                d="M25.3745 0.14502H12.5429C11.1314 0.14502 9.97653 1.22288 9.97653 2.54026V21.7021L18.9587 18.1093L27.9408 21.7021V2.54026C27.9408 1.22288 26.786 0.14502 25.3745 0.14502Z"
                fill="url(#paint0_linear_29_271)"
                fillOpacity="0.3"
            />
            <g filter="url(#filter0_bd_29_271)">
                <path
                    d="M20.4775 4.27646H5.07959C3.38582 4.27646 2 5.56989 2 7.15074V30.145L12.7786 25.8336L23.5571 30.145V7.15074C23.5571 5.56989 22.1713 4.27646 20.4775 4.27646Z"
                    fill="url(#paint1_linear_29_271)"
                    fillOpacity="0.3"
                />
                <path
                    d="M2 30.145H1.5C1.5 30.3109 1.5823 30.466 1.71969 30.559C1.85707 30.6521 2.03165 30.6709 2.1857 30.6092L2 30.145ZM12.7786 25.8336L12.9643 25.3693C12.8451 25.3217 12.7121 25.3217 12.5929 25.3693L12.7786 25.8336ZM23.5571 30.145L23.3714 30.6092C23.5255 30.6709 23.7001 30.6521 23.8374 30.559C23.9748 30.466 24.0571 30.3109 24.0571 30.145H23.5571ZM20.4775 3.77646H5.07959V4.77646H20.4775V3.77646ZM5.07959 3.77646C3.14272 3.77646 1.5 5.26181 1.5 7.15074H2.5C2.5 5.87796 3.62891 4.77646 5.07959 4.77646V3.77646ZM1.5 7.15074V30.145H2.5V7.15074H1.5ZM2.1857 30.6092L12.9643 26.2978L12.5929 25.3693L1.8143 29.6808L2.1857 30.6092ZM12.5929 26.2978L23.3714 30.6092L23.7428 29.6808L12.9643 25.3693L12.5929 26.2978ZM24.0571 30.145V7.15074H23.0571V30.145H24.0571ZM24.0571 7.15074C24.0571 5.26181 22.4144 3.77646 20.4775 3.77646V4.77646C21.9282 4.77646 23.0571 5.87796 23.0571 7.15074H24.0571Z"
                    fill="url(#paint2_linear_29_271)"
                />
            </g>
            <defs>
                <filter
                    id="filter0_bd_29_271"
                    x="-2.5"
                    y="-0.223541"
                    width="31.5571"
                    height="34.8686"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                    <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_29_271"
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
                        values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="effect1_backgroundBlur_29_271"
                        result="effect2_dropShadow_29_271"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_29_271"
                        result="shape"
                    />
                </filter>
                <linearGradient
                    id="paint0_linear_29_271"
                    x1="25.6953"
                    y1="-13.3282"
                    x2="9.67476"
                    y2="17.0363"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F9705C" />
                    <stop offset="1" stopColor="#FF1E00" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_29_271"
                    x1="20.8625"
                    y1="-11.8914"
                    x2="1.63788"
                    y2="24.546"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F9705C" />
                    <stop offset="1" stopColor="#FF1E00" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_29_271"
                    x1="22.3595"
                    y1="7.51003"
                    x2="0.387291"
                    y2="28.453"
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

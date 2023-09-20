import { SVGProps } from 'react';

const Admin = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            width="26"
            height="29"
            viewBox="0 0 26 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M13 0C16.5913 0 19.5 2.88389 19.5 6.44444C19.5 10.005 16.5913 12.8889 13 12.8889C9.40875 12.8889 6.5 10.005 6.5 6.44444C6.5 2.88389 9.40875 0 13 0ZM19.5 16.9811C19.5 18.6889 19.045 22.6683 15.9413 27.115L14.625 19.3333L16.1525 16.3044C15.145 16.1917 14.0888 16.1111 13 16.1111C11.9112 16.1111 10.855 16.1917 9.8475 16.3044L11.375 19.3333L10.0587 27.115C6.955 22.6683 6.5 18.6889 6.5 16.9811C2.61625 18.1089 0 20.1389 0 22.5556V29H26V22.5556C26 20.1389 23.4 18.1089 19.5 16.9811Z"
                fill="green"
                fillOpacity="0.8"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_366_6"
                    x1="16.7304"
                    y1="15.3406"
                    x2="-5.96013"
                    y2="38.7353"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#27D224" />
                    <stop offset="1" stopColor="#27D224" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Admin;

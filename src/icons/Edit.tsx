import { SVGProps } from 'react';

const Edit = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            width="15"
            height="15"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`hover:opacity-80 cursor-pointer ${props.className}`}
        >
            <path
                d="M18.6024 0L15.502 3.10039L21.7028 9.30118L24.8032 6.20079L18.6024 0ZM12.4016 6.20079L0 18.6024V24.8032H6.20079L18.6024 12.4016L12.4016 6.20079Z"
                fill="white"
            />
        </svg>
    );
};

export default Edit;

import { SVGProps } from 'react';

const UploadImage = (props: SVGProps<SVGElement>) => {
    return (
        <svg
            width="160"
            height="160"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
        >
            <path
                d="M47.7123 25.6071H43.5291L41.1141 22.9643H33.1963V25.6071H39.9529L42.3678 28.25H47.7123V44.1071H26.5982V32.2143H23.9589V44.1071C23.9589 45.5607 25.1466 46.75 26.5982 46.75H47.7123C49.1639 46.75 50.3516 45.5607 50.3516 44.1071V28.25C50.3516 26.7964 49.1639 25.6071 47.7123 25.6071ZM30.5571 36.1786C30.5571 39.8257 33.513 42.7857 37.1552 42.7857C40.7974 42.7857 43.7534 39.8257 43.7534 36.1786C43.7534 32.5314 40.7974 29.5714 37.1552 29.5714C33.513 29.5714 30.5571 32.5314 30.5571 36.1786ZM37.1552 32.2143C39.3326 32.2143 41.1141 33.9982 41.1141 36.1786C41.1141 38.3589 39.3326 40.1429 37.1552 40.1429C34.9778 40.1429 33.1963 38.3589 33.1963 36.1786C33.1963 33.9982 34.9778 32.2143 37.1552 32.2143ZM26.5982 25.6071H30.5571V22.9643H26.5982V19H23.9589V22.9643H20V25.6071H23.9589V29.5714H26.5982V25.6071Z"
                fill="black"
            />
        </svg>
    );
};

export default UploadImage;
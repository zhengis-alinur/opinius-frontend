import { ImgHTMLAttributes } from 'react';

import Tooltip from './Tooltip';

const ProfileImage = ({
    children,
    large = false,
    url,
    ...props
}: { large?: boolean; url: string } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>) => {
    return (
        <div className={`hs-tooltip inline-block ${props.className}`} {...props}>
            <img
                className={`object-cover inline-block h-16 w-16 ${
                    large ? 'h-40 w-40' : ''
                } rounded-full ring-2 ring-white dark:ring-gray-800`}
                src={
                    url || 'https://dentistree.kg/wp-content/uploads/2020/12/default.png'
                }
                alt="profile"
            />
            {children}
        </div>
    );
};

export default ProfileImage;

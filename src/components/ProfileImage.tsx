import { ImgHTMLAttributes } from 'react';

import Tooltip from './Tooltip';

const ProfileImage = ({
    large = false,
    url,
    ...props
}: { large?: boolean; url: string } & ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <div className={`hs-tooltip inline-block ${props.className}`}>
            <a className="hs-tooltip-toggle relative inline-block">
                <img
                    className={`object-cover inline-block h-16 w-16 ${
                        large ? 'h-40 w-40' : ''
                    } rounded-full ring-2 ring-white dark:ring-gray-800`}
                    src={url}
                    alt="profile"
                />
                <Tooltip text="This is you avatar" />
            </a>
        </div>
    );
};

export default ProfileImage;

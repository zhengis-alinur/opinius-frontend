import { ImgHTMLAttributes } from 'react';

import Tooltip from './Tooltip';

const ProfileImage = ({
    url,
    ...props
}: { url: string } & ImgHTMLAttributes<HTMLImageElement>) => {
    return (
        <div className="hs-tooltip inline-block">
            <a className="hs-tooltip-toggle relative inline-block">
                <img
                    className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                    src={url}
                    alt="Description"
                />
                <Tooltip text="This is you avatar" />
            </a>
        </div>
    );
};

export default ProfileImage;

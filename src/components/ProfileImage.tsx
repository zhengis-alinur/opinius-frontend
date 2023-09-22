import { HTMLAttributes } from 'react';

const ProfileImage = ({
    children,
    large = false,
    src,
    ...props
}: { large?: boolean; src?: string } & HTMLAttributes<HTMLDivElement>) => {
    return (
        <img
            className={`object-cover h-16 w-16  inline-block ${
                large ? 'h-40 w-40' : ''
            } rounded-full ring-2 ring-white dark:ring-gray-800`}
            src={src || '/assets/no-avatar.jpg'}
            alt="profile"
        />
    );
};

export default ProfileImage;

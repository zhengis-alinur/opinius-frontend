import { HTMLAttributes } from 'react';

const AdvancedImage = ({
    children,
    large = false,
    rounded = false,
    src,
    ...props
}: {
    large?: boolean;
    rounded?: boolean;
    src?: string;
} & HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={`hs-tooltip inline-block ${props.className}`} {...props}>
            <img
                className={`object-cover inline-block h-16 w-16 ${
                    large ? 'h-40 w-40' : ''
                } ${rounded && 'rounded-full'} ring-2 ring-white dark:ring-gray-800`}
                src={src}
                alt="profile"
            />
            {children}
        </div>
    );
};

export default AdvancedImage;

import { useState } from 'react';

import { useSetAvatarMutation } from '../../../api/userApi';
import ProfileImage from '../../../components/ProfileImage';
import UploadImageIcon from '../../../icons/UploadImageIcon';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setUser } from '../../../redux/reducers/auth';
import { selectUser } from '../../../redux/selectors';
import { openUploadWidget, url } from '../../../utils/cloudinary';

const AvatarUpload = () => {
    const user = useAppSelector(selectUser);
    const dispatch = useAppDispatch();

    const [setAvatar, { isLoading }] = useSetAvatarMutation();

    const uploadImageWidget = () => {
        const myUploadWidget = openUploadWidget(
            {
                cloudName: import.meta.env.VITE_CLOUD_NAME,
                uploadPreset: import.meta.env.VITE_UPLOAD_PRESET,
                sources: ['local', 'url', 'camera'],
            },
            async (error, result) => {
                if (!error && result?.event === 'success') {
                    const imageUrl = url(result.info.public_id, {
                        cloudName: import.meta.env.VITE_CLOUD_NAME,
                        uploadPreset: import.meta.env.VITE_UPLOAD_PRESET,
                    });
                    const response = await setAvatar({ id: user.id, imageUrl });
                    if ('data' in response) {
                        dispatch(setUser(response.data));
                    }
                }
            },
        );
        myUploadWidget.open();
    };

    return (
        <ProfileImage
            className="relative mb-1 hover:opacity-50 cursor-pointer"
            large
            url={user.avatar}
            onClick={() => {
                uploadImageWidget();
            }}
        >
            {isLoading || (
                <UploadImageIcon className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity" />
            )}
        </ProfileImage>
    );
};

export default AvatarUpload;

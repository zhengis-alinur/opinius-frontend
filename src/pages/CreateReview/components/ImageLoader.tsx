import { Cloudinary } from '@cloudinary/url-gen';
import { useState } from 'react';

import Button from '../../../components/Button';
import CldGallery from './CldGallery';
import ImageUpload from './ImageUpload';

function ImageLoader({ onUpload }: { onUpload: (url: string) => void }) {
    const [imagesUploadedList, setImagesUploadedList] = useState<string[]>([]);

    const cld = new Cloudinary({
        cloud: {
            cloudName: import.meta.env.VITE_CLOUD_NAME,
        },
    });

    const onImageUploadHandler = (publicId: string) => {
        onUpload(publicId);
        setImagesUploadedList((prevState) => [...prevState, publicId]);
    };

    const deleteImage = async () => {
        try {
            setImagesUploadedList([]);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="App">
            <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                Upload image
            </label>
            <CldGallery
                imagesUploaded={imagesUploadedList}
                {...cld}
                cloudName={import.meta.env.VITE_CLOUD_NAME}
            />
            {imagesUploadedList.length === 0 ? (
                <ImageUpload
                    cloudName={import.meta.env.VITE_CLOUD_NAME}
                    uploadPreset={import.meta.env.VITE_UPLOAD_PRESET}
                    onImageUpload={(publicId: string) => onImageUploadHandler(publicId)}
                />
            ) : (
                <Button className="m-3" onClick={deleteImage}>
                    Delete image
                </Button>
            )}
        </div>
    );
}

export default ImageLoader;

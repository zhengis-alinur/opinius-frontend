import { Cloudinary } from '@cloudinary/url-gen';
import { useState } from 'react';

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

    const deleteAllImages = async () => {
        try {
            setImagesUploadedList([]);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="App">
            <button className="redButton" onClick={deleteAllImages}>
                Delete all images
            </button>
            <ImageUpload
                cloudName={import.meta.env.VITE_CLOUD_NAME}
                uploadPreset={import.meta.env.VITE_UPLOAD_PRESET}
                onImageUpload={(publicId: string) => onImageUploadHandler(publicId)}
            />
            <p>
                This mini project demonstrates the use of Upload widget + transformations
                on uploaded images in responsive way useing hooks in React
            </p>
            <CldGallery
                imagesUploaded={imagesUploadedList}
                {...cld}
                cloudName={import.meta.env.VITE_CLOUD_NAME}
            />
        </div>
    );
}

export default ImageLoader;

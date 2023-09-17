import UploadImageIcon from '../icons/UploadImageIcon';
import { openUploadWidget, url } from '../utils/cloudinary';
import AdvancedImage from './AdvancedImage';

const ImageUploader = ({
    onUpload,
    bgImage,
}: {
    onUpload: (imageUrl: string) => void;
    bgImage?: string;
}) => {
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
                    onUpload(imageUrl);
                }
            },
        );
        myUploadWidget.open();
    };
    return (
        <AdvancedImage
            className="relative mb-1 hover:opacity-50 cursor-pointer"
            large
            src={bgImage}
            rounded
            onClick={() => {
                uploadImageWidget();
            }}
        >
            <UploadImageIcon className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-opacity" />
        </AdvancedImage>
    );
};

export default ImageUploader;

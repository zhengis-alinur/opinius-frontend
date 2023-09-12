import { openUploadWidget } from '../../../utils/cloudinary';
import DropZone from '../../Review/components/DropZone';

const ImageUpload = ({
    cloudName,
    uploadPreset,
    onImageUpload,
}: {
    cloudName: string;
    uploadPreset: string;
    onImageUpload: (url: string) => void;
}) => {
    const uploadImageWidget = () => {
        const myUploadWidget = openUploadWidget(
            {
                cloudName,
                uploadPreset,
                sources: ['local', 'url', 'camera'],
            },
            (error, result) => {
                if (!error && result?.event === 'success') {
                    onImageUpload(result.info.public_id);
                }
            },
        );
        myUploadWidget.open();
    };
    return <DropZone onUpload={uploadImageWidget} />;
};

export default ImageUpload;

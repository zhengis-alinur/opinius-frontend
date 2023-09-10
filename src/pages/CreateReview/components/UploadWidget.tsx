import React, { useEffect } from 'react';

import { CloudinaryResult } from '../../../types/Cloudinary';

const UploadWidget = ({ onUpload }: { onUpload: (url: string) => void }) => {
    useEffect(() => {
        const cloudName = 'dsnccfdsh';
        const uploadPreset = 'ijfitaf7';

        const myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: cloudName,
                uploadPreset: uploadPreset,
            },
            (error: Error, result: CloudinaryResult) => {
                if (!error && result && result.event === 'success') {
                    onUpload(result.info.secure_url);
                    document
                        .getElementById('uploadedimage')
                        ?.setAttribute('src', result.info.secure_url);
                }
            },
        );

        const uploadButton = document.getElementById('upload_widget');

        if (uploadButton) {
            uploadButton.addEventListener('click', () => {
                myWidget.open();
            });
        }

        return () => {
            if (uploadButton) {
                uploadButton.removeEventListener('click', () => {
                    myWidget.open();
                });
            }
        };
    }, []);

    return (
        <button id="upload_widget" className="cloudinary-button">
            Upload
        </button>
    );
};

export default UploadWidget;

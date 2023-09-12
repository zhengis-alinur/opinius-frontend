import { Cloudinary as CoreCloudinary, Util } from 'cloudinary-core';

interface CloudinaryOptions {
    cloudName: string;
    uploadPreset: string;
    sources?: string[];
}

export const url = (publicId: string, options: CloudinaryOptions) => {
    try {
        const scOptions = Util.withSnakeCaseKeys(options);
        const cl = CoreCloudinary.new(options);
        return cl.url(publicId, scOptions);
    } catch (e) {
        console.error(e);
        return '';
    }
};

interface UploadCallback {
    event: string;
    info: {
        public_id: string;
    };
}

export const openUploadWidget = (
    options: CloudinaryOptions,
    callback: (error: Error, result: UploadCallback) => void,
) => {
    return window.cloudinary.openUploadWidget(options, callback);
};

import { AdvancedImage, lazyload } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { quality } from '@cloudinary/url-gen/actions/delivery';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners';

const CldPhoto = ({ cloudName, publicId }: { cloudName: string; publicId: string }) => {
    const cld = new Cloudinary({
        cloud: {
            cloudName,
        },
    });

    const myImage = cld.image(publicId);
    myImage
        .resize(fill().width(200).height(200))
        .roundCorners(byRadius(20))
        .delivery(quality(60));

    return <AdvancedImage cldImg={myImage} plugins={[lazyload()]} />;
};

export default CldPhoto;

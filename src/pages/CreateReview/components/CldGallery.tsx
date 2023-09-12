import Photo from './CldPhoto';

const CldGallery = ({
    imagesUploaded,
    cloudName,
}: {
    imagesUploaded: string[];
    cloudName: string;
}) => {
    return (
        <div className="photos">
            {imagesUploaded &&
                imagesUploaded.length !== 0 &&
                imagesUploaded.map((publicId: string) => {
                    return (
                        <Photo key={publicId} publicId={publicId} cloudName={cloudName} />
                    );
                })}
        </div>
    );
};

export default CldGallery;

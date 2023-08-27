import Badge from '../../../components/Badge';
import { Review } from '../../../types';

const Tags = ({
    tags,
    ...props
}: { tags: string[] } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>) => {
    return (
        <div className={`${props.className}`}>
            {tags.map((tag, index) => (
                <Badge key={index}>{tag}</Badge>
            ))}
        </div>
    );
};

export default Tags;

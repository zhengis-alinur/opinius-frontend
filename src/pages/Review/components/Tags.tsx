import { HTMLAttributes } from 'react';

import Badge from '../../../components/Badge';
import { Tag } from '../../../types/Tag';

const Tags = ({ tags, ...props }: { tags: Tag[] } & HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={`${props.className}`}>
            {tags.map((tag) => (
                <Badge key={tag.id}>{tag.name}</Badge>
            ))}
        </div>
    );
};

export default Tags;

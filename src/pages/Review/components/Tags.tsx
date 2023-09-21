import { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import Badge from '../../../components/Badge';
import { Tag } from '../../../types/Tag';

const Tags = ({ tags, ...props }: { tags: Tag[] } & HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={`${props.className}`}>
            {tags.map((tag) => (
                <Link key={tag.id} to={`/search/${tag.name}`}>
                    <Badge key={tag.id}>{tag.name}</Badge>
                </Link>
            ))}
        </div>
    );
};

export default Tags;

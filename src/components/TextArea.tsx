import { ChangeEventHandler, TextareaHTMLAttributes } from 'react';

import Alert from './Alert';
import Badge from './Badge';

const TextArea = ({
    label,
    placeholder,
    error,
    tags,
    ...props
}: {
    label: string;
    error: string | false | undefined;
    tags: Set<string>;
    placeholder: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        if (props.onChange) {
            props.onChange(e);
        }
    };

    return (
        <>
            <label
                htmlFor={label}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            {error && <Alert type="danger">{error}</Alert>}
            <div className="flex gap-1 mb-2">
                <span>Tags:</span>
                {Array.from(tags).map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                ))}
            </div>
            <textarea
                name={props.name}
                onChange={handleChange}
                value={props.value}
                id="Review"
                rows={4}
                className={`w-full resize-none h-full px-3 text-sm rounded-lg text-gray-900 bg-gray-100 border-0 dark:bg-dark focus:ring-0 dark:text-white dark:placeholder-gray-400 min-h-[500px] ${props.className}`}
                placeholder={placeholder}
            ></textarea>
        </>
    );
};

export default TextArea;

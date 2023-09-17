import { TextareaHTMLAttributes } from 'react';

import Alert from './Alert';

const TextArea = ({
    label,
    placeholder,
    error,
    ...props
}: {
    label: string;
    error: string | false | undefined;
    placeholder: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    return (
        <>
            <label
                htmlFor={label}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            {error && <Alert type="danger">{error}</Alert>}
            <textarea
                name={props.name}
                onChange={props.onChange}
                value={props.value}
                id="Review"
                rows={4}
                className={`w-full resize-none h-full px-3 text-sm rounded-lg text-gray-900 bg-gray-100 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 ${props.className}`}
                placeholder={placeholder}
            ></textarea>
        </>
    );
};

export default TextArea;

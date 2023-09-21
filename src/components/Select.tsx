import { SelectHTMLAttributes, useState } from 'react';

import Alert from './Alert';

type Option = {
    value: string;
    label: string;
};

const View = ({
    label,
    options,
    onChange,
    error,
    ...props
}: {
    label: string;
    error?: string | false | undefined;
    options: Option[];
    onChange: (option: string) => void;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>) => {
    return (
        <div className="flex items-center gap-5 max-w-[100px]">
            {error && <Alert type="danger">{error}</Alert>}
            <label
                htmlFor="select"
                className="block whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <select
                {...props}
                id="select"
                className="block w-fit p-2 text-sm text-gray-900 border dark:bg-gray border-gray-300 rounded-lg bg-gray-50 border-transparent focus:border-transparent focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default View;

import { ChangeEvent, InputHTMLAttributes, useState } from 'react';

import Alert from './Alert';

const Range = ({
    label,
    error,
    ...props
}: {
    label: string;
    error: string | false | undefined;
} & InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className={`relative mb-7 ${props.className}`}>
            {error && <Alert type="danger">{error}</Alert>}
            <label
                htmlFor="steps-range"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <input
                {...props}
                onChange={props.onChange}
                id="steps-range"
                type="range"
                min={props.min || '0'}
                max={props.max || '5'}
                value={props.value}
                step={props.step || '1'}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-dark"
            ></input>
            <span className="absolute left-0 top-12">{props.min}</span>
            <span className="absolute right-0  top-12">{props.max}</span>
        </div>
    );
};

export default Range;

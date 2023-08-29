import { ChangeEvent, InputHTMLAttributes, useState } from 'react';

const Range = ({
    label,
    ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className={`relative mb-7 ${props.className}`}>
            <label
                htmlFor="steps-range"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <input
                onChange={props.onChange}
                id="steps-range"
                type="range"
                min={props.min || '0'}
                max={props.max || '5'}
                value={props.value}
                step={props.step || '1'}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            ></input>
            <span className="absolute left-0 top-12">{props.min}</span>
            <span className="absolute right-0  top-12">{props.max}</span>
        </div>
    );
};

export default Range;

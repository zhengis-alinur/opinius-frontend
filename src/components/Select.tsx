import { SelectHTMLAttributes, useState } from 'react';
import Select from 'react-select';

import { Category } from '../types';
import Alert from './Alert';

type Option = {
    value: number;
    label: string;
};

const View = ({
    label,
    options,
    onChange,
    error,
    selectedOption,
    name,
    ...props
}: {
    label: string;
    error: string | false | undefined;
    options: Category[];
    selectedOption?: Option;
    name: string;
    onChange: (option?: number) => void;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>) => {
    const [selected, setSelected] = useState<Option | null>(selectedOption || null);
    return (
        <>
            {error && <Alert type="danger">{error}</Alert>}
            <label
                htmlFor="steps-range"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <Select
                name={name}
                className="w-full dark:bg-dark"
                value={selected}
                onChange={(option) => {
                    setSelected(option);
                    onChange(option?.value);
                }}
                options={options.map((category) => ({
                    value: category.id,
                    label: category.name,
                }))}
            />
        </>
    );
};

export default View;

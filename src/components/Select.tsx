import { SelectHTMLAttributes, useState } from 'react';
import Select from 'react-select';

import Alert from './Alert';

const View = ({
    label,
    options,
    onChange,
    error,
    name,
}: {
    label: string;
    error: string | false | undefined;
    options: {
        value: string;
        label: string;
    }[];
    name: string;
    onChange: (option: string) => void;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>) => {
    const [selectedOption, setSelectedOption] = useState<{
        value: string;
        label: string;
    } | null>(null);

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
                className="w-full"
                value={selectedOption}
                onChange={(option) => {
                    setSelectedOption(option);
                    onChange(option?.value || '');
                }}
                options={options}
            />
        </>
    );
};

export default View;

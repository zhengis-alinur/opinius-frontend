import { useState } from 'react';
import Select from 'react-select';

const View = ({ label, options }: { label: string; options: string[] }) => {
    const [selectedOption, setSelectedOption] = useState<{
        value: string;
        label: string;
    } | null>(null);
    const formatedOptions = options.map((option) => ({
        value: option,
        label: option,
    }));
    return (
        <>
            <label
                htmlFor="steps-range"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <Select
                className="w-full"
                value={selectedOption}
                onChange={(option) => setSelectedOption(option)}
                options={formatedOptions}
            />
        </>
    );
};

export default View;

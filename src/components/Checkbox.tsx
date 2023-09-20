import { InputHTMLAttributes } from 'react';

const Checkbox = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            {...props}
            id="checkbox-all-search"
            type="checkbox"
            className="w-4 h-4 my-4 text-green-400 bg-gray-100 border-gray-300 rounded dark:bg-gray dark:border-gray-600 focus:ring-0 focus:border-none"
        />
    );
};

export default Checkbox;

import { InputHTMLAttributes } from 'react';

const Checkbox = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <th scope="col" className="p-4">
            <div className="flex items-center">
                <input
                    {...props}
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                </label>
            </div>
        </th>
    );
};

export default Checkbox;

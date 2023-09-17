const Input = ({
    type,
    label,
    placeholder,
    className,
    error,
    ...props
}: {
    error: string | false | undefined;
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <div className={`relative mb-6 ${className}`}>
            <label
                htmlFor={label}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <input
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                type={type}
                id={label}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
            />
            {error && (
                <div className="absolute bottom-[-15px] text-red-600 text-xs mt-1">
                    {error}
                </div>
            )}
        </div>
    );
};

export default Input;

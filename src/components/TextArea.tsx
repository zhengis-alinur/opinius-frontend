const TextArea = ({ label, placeholder }: { label: string; placeholder: string }) => {
    return (
        <>
            <label
                htmlFor={label}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <textarea
                id="Review"
                rows={4}
                className="w-full resize-none h-full px-3 text-sm rounded-lg text-gray-900 bg-gray-100 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder={placeholder}
                required
            ></textarea>
        </>
    );
};

export default TextArea;

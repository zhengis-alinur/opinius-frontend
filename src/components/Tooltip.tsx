const Tooltip = ({ text }: { text: string }) => {
    return (
        <div
            className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
            role="tooltip"
        >
            {text}
        </div>
    );
};

export default Tooltip;

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import BlockUser from '../icons/BlockUser';
import Delete from '../icons/Delete';
import SetAdmin from '../icons/SetAdmin';

export const TableHeadItem = ({
    title,
    sortable = false,
}: {
    title: string;
    sortable?: boolean;
}) => (
    <th scope="col" className="pr-6 py-3">
        <div className="flex items-center whitespace-nowrap">
            {title}
            {sortable && (
                <a>
                    <svg
                        className="w-3 h-3 ml-1.5 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                </a>
            )}
        </div>
    </th>
);

const TableRow = ({ row }: { row: ReactNode[] }) => {
    return (
        <tr className="bg-white border-b dark:bg-gray dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            {row.map((rowItem, index) => (
                <td className="pr-6 py-4" key={index}>
                    {rowItem}
                </td>
            ))}
        </tr>
    );
};

const TableHead = ({ head }: { head: ReactNode[] }) => (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray dark:text-gray-400">
        <tr>{head}</tr>
    </thead>
);

const TableBody = ({ rows }: { rows: ReactNode[][] }) => (
    <tbody>
        {rows.map((row, index) => (
            <TableRow row={row} key={index} />
        ))}
    </tbody>
);

export const TableSearch = () => (
    <div className="flex items-center relative bg-white dark:bg-gray">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
            </svg>
        </div>
        <input
            type="text"
            id="table-search"
            className="p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
        />
    </div>
);

export const ToolbarButton = ({
    callback,
    children,
    ...props
}: {
    callback: () => void;
    children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>) => (
    <button
        {...props}
        onClick={() => callback()}
        className={`flex gap-3 items-center p-2 rounded-md text-white ${props.className}`}
    >
        {children}
    </button>
);

export const TableToolbar = ({
    onDelete,
    onBlock,
    onSetAdmin,
    ...props
}: {
    onDelete?: () => void;
    onBlock?: () => void;
    onSetAdmin?: () => void;
} & HTMLAttributes<HTMLDivElement>) => {
    return (
        <div {...props} className="flex gap-5">
            {onDelete && (
                <ToolbarButton callback={onDelete} className="bg-rose-600">
                    Delete <Delete />
                </ToolbarButton>
            )}
            {onBlock && (
                <ToolbarButton callback={onBlock} className="bg-amber-400">
                    Block <BlockUser />
                </ToolbarButton>
            )}
            {onSetAdmin && (
                <ToolbarButton callback={onSetAdmin} className="bg-lime-500">
                    Set as Admin <SetAdmin />
                </ToolbarButton>
            )}
        </div>
    );
};

const Table = ({ rows, head }: { rows: ReactNode[][]; head: ReactNode[] }) => {
    return (
        <div className="relative bg-white w-full overflow-x-auto shadow-md sm:rounded-lg p-4 dark:bg-gray min-h-[300px]">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <TableHead head={head} />
                <TableBody rows={rows} />
            </table>
        </div>
    );
};

export default Table;

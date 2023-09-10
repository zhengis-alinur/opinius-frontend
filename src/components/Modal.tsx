import { ReactNode, useState } from 'react';

const Modal = ({
    title = 'Modal',
    children,
    onClose,
}: {
    title: string;
    children: ReactNode;
    onClose: () => void;
}) => {
    return (
        <div
            id="modal"
            className={`fixed flex items-center justify-center top-0 left-0 right-0 z-50 bg-black/60 w-full h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0`}
        >
            <div className="max-w-5xl max-h-full">
                <div className="bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            {title}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                                onClose();
                            }}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="px-6 pt-3">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

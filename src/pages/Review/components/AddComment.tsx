import { useState } from 'react';

import CommentInput from './CommentInput';

const AddComment = () => {
    const [showArea, setShowArea] = useState(false);
    return (
        <div className="flex flex-col w-full max-w-5xl justify-center items-center">
            <button
                className=" w-48 text-gray-900 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-gray-500 mr-2 mb-2"
                onClick={() => setShowArea(!showArea)}
            >
                {showArea ? 'Hide' : 'Add new comment +'}
            </button>
            {showArea && <CommentInput />}
        </div>
    );
};

export default AddComment;

import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Spinner from '../../../components/Spinner';

const CommentInput = ({ onComment }: { onComment: (text: string) => void }) => {
    const [comment, setComment] = useState('');
    const { t } = useTranslation();
    const handleComment = (e: FormEvent<HTMLTextAreaElement>) => {
        setComment(e.currentTarget.value);
    };
    return (
        <form
            className="w-full"
            onSubmit={(event) => {
                event.preventDefault();
                onComment(comment);
            }}
        >
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray">
                    <label htmlFor="comment" className="sr-only">
                        Your comment
                    </label>
                    <textarea
                        id="comment"
                        rows={4}
                        className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray dark:text-gray-200 focus:ring-0 dark:placeholder-gray-400"
                        placeholder={t('comment-input-placeholder')}
                        value={comment}
                        onChange={handleComment}
                        required
                    ></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button
                        type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    >
                        {t('send')}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CommentInput;

import { useTranslation } from 'react-i18next';

import { useAppDispatch } from '../redux/hooks';
import { setLanguage } from '../redux/reducers/language';

const LanguageToggler = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useAppDispatch();
    const handleTrans = (code: string) => {
        i18n.changeLanguage(code);
        dispatch(setLanguage(code));
    };
    return (
        <div>
            <button
                className="outline-none rounded-l bg-sky-900 p-1 text-white"
                onClick={() => {
                    handleTrans('en');
                }}
            >
                English
            </button>
            <button
                className="rounded-r bg-rose-900 p-1 text-white"
                onClick={() => {
                    handleTrans('ru');
                }}
            >
                Русский
            </button>
        </div>
    );
};

export default LanguageToggler;

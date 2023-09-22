import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import LanguageToggler from '../../components/LanguageToggler';
import ThemeSwitcher from '../../components/ThemeSwitcher';

const SettingItem = ({ children }: { children: ReactNode }) => (
    <div className="flex flex-col gap-5 items-center mb-5">{children}</div>
);

const Setting = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-center mx-auto min-w-[400px]">
            <h1 className="text-3xl mb-5 mx-auto text-center">{t('settings')}</h1>
            <SettingItem>
                <span>{t('change-theme')}:</span>
                <ThemeSwitcher />
            </SettingItem>
            <SettingItem>
                <span>{t('change-language')}:</span>
                <LanguageToggler />
            </SettingItem>
        </div>
    );
};

export default Setting;

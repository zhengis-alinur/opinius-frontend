import React from 'react';

import Moon from '../icons/Moon';
import Sun from '../icons/Sun';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setDarkMode } from '../redux/reducers/mode';
import { selectMode } from '../redux/selectors';

const ThemeSwitcher = () => {
    const darkMode = useAppSelector(selectMode);
    const dispatch = useAppDispatch();

    const onSwitch = () => {
        dispatch(setDarkMode(!darkMode));
    };

    return (
        <button
            onClick={onSwitch}
            className={`px-3 py-1 rounded-xl ${
                darkMode ? 'bg-sky-600' : 'bg-indigo-950'
            }`}
        >
            {darkMode ? <Sun /> : <Moon />}
        </button>
    );
};

export default ThemeSwitcher;

import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { Category, User } from '../types';

export const getTokenFromLocalStorage = () => localStorage.getItem('token');
export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    if (user) return JSON.parse(user);
    return null;
};
export const setAuthDataToLocalStorage = (user: User, token?: string) => {
    if (token) {
        localStorage.setItem('token', token);
    }
    localStorage.setItem('user', JSON.stringify(user));
};

export const setModeToLocalStorage = (darkMode: boolean) =>
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

export const setLanguageToLocalStorage = (language: string) =>
    localStorage.setItem('language', language);

export const getModeFromLocalStorage = () => {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode) {
        return JSON.parse(darkMode);
    }
};

export const getLanguageFromLocalStorage = () => localStorage.getItem('language');

export const categoriesToSelectOptions = (categories: Category[]) =>
    categories.map((category) => ({
        value: category.id,
        label: category.name,
    }));

export const isFetchBaseQueryError = (error: unknown): error is FetchBaseQueryError => {
    return typeof error === 'object' && error != null && 'status' in error;
};
export const extractHashtags = (text: string) => {
    // eslint-disable-next-line no-useless-escape
    const hashtagRegex = /#([^\s!@#$%^&*()=+./,\[{\]};:'"?\>\<]+)/g;
    const hashtagsWithHash = text.match(hashtagRegex);

    if (!hashtagsWithHash) {
        return new Set([]);
    }

    const hashtagsWithoutHash = hashtagsWithHash.map((hashtag) => hashtag.slice(1));
    return new Set(hashtagsWithoutHash);
};

export const getDateFromMysql = (date: string) => date.split('T')[0];
export const getTimeFromMysql = (date: string) => {
    const time = date.split('T')[1].split(':');
    return `${time[0]}:${time[1]}`;
};

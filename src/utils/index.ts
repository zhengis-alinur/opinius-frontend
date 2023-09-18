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

export const categoriesToSelectOptions = (categories: Category[]) =>
    categories.map((category) => ({
        value: category.id,
        label: category.name,
    }));

export const isFetchBaseQueryError = (error: unknown): error is FetchBaseQueryError => {
    return typeof error === 'object' && error != null && 'status' in error;
};

export const extractHashtags = (text: string): Set<string> => {
    const hashtagRegex = /#(\w+)/g;
    const hashtags = text.match(hashtagRegex);
    const uniqueHashtags = new Set<string>();

    if (hashtags) {
        hashtags.forEach((tag) => {
            uniqueHashtags.add(tag.slice(1)); // Remove the '#' symbol and add to Set
        });
    }

    return uniqueHashtags;
};

import { Category, User } from '../types';

export const getTokenFromLocalStorage = () => localStorage.getItem('token');
export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user');
    if (user) return JSON.parse(user);
    return null;
};
export const setAuthDataToLocalStorage = (user: User, token: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
};

export const categoriesToSelectOptions = (categories: Category[]) =>
    categories.map((category) => ({
        value: category.id,
        label: category.name,
    }));

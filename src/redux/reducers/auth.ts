import { createSlice } from '@reduxjs/toolkit';

import { User } from '../../types';
import {
    getTokenFromLocalStorage,
    getUserFromLocalStorage,
    setAuthDataToLocalStorage,
} from '../../utils';

const initialState: {
    user: User;
    isLogined: boolean;
    token: string | null;
} = {
    user: getUserFromLocalStorage(),
    isLogined: Boolean(getTokenFromLocalStorage()),
    token: getTokenFromLocalStorage(),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            setAuthDataToLocalStorage(action.payload);
        },
        setAuthData: (state, action) => {
            const { user, token } = action.payload;
            console.log(user, token);
            state.user = user;
            state.token = token;
            setAuthDataToLocalStorage(user, token);
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { setUser, setToken, setAuthData } = authSlice.actions;
export default authSlice.reducer;

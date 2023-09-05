import { createSlice } from '@reduxjs/toolkit';

import { User } from '../../types';
import { getTokenFromLocalStorage, getUserFromLocalStorage } from '../../utils';

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
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
});

export const { setUser, setToken } = authSlice.actions;
export default authSlice.reducer;

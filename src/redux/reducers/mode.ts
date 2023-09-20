import { createSlice } from '@reduxjs/toolkit';

import { getModeFromLocalStorage, setModeToLocalStorage } from '../../utils';

const initialState: {
    darkMode: boolean;
} = {
    darkMode: getModeFromLocalStorage(),
};

const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.darkMode = action.payload;
            setModeToLocalStorage(action.payload);
        },
    },
});

export const { setDarkMode } = modeSlice.actions;
export default modeSlice.reducer;

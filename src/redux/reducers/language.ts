import { createSlice } from '@reduxjs/toolkit';

import { getLanguageFromLocalStorage, setLanguageToLocalStorage } from '../../utils';

const initialState: {
    language?: string | null;
} = {
    language: getLanguageFromLocalStorage() || 'en',
};

const modeSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
            setLanguageToLocalStorage(action.payload);
        },
    },
});

export const { setLanguage } = modeSlice.actions;
export default modeSlice.reducer;

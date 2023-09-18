import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getTokenFromLocalStorage } from '../utils';

export const rootApi = createApi({
    reducerPath: 'api',
    tagTypes: ['Reviews', 'Auth', 'User', 'Categories'],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.SERVER_URL,
        prepareHeaders: (headers) => {
            const token = getTokenFromLocalStorage();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
        },
    }),
    endpoints: () => ({}),
});

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getTokenFromLocalStorage } from '../utils';

export const rootApi = createApi({
    reducerPath: 'api',
    tagTypes: ['Reviews', 'Auth'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/api/v1/',
        prepareHeaders: (headers) => {
            const token = getTokenFromLocalStorage();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
        },
    }),
    endpoints: () => ({}),
});

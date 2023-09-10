import { Category } from '../types';
import { rootApi } from './rootApi';

const reviewApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query<Category[], void>({
            query: () => ({
                url: '/category/getAll',
            }),
            providesTags: ['Categories'],
        }),
    }),
    overrideExisting: false,
});

export const { useGetCategoriesQuery } = reviewApi;

import { rootApi } from './rootApi';

type TagStatsResponse = {
    count: number;
    value: string;
}[];

const tagApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getTagStats: builder.query<TagStatsResponse, void>({
            query: () => ({
                url: `/tag/stats`,
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetTagStatsQuery } = tagApi;

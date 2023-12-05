import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { recordsParser } from './commonParser';

const commonApis = createApi({
    reducerPath: 'commonApis',
    baseQuery: fetchBaseQuery({
    }),
    keepUnusedDataFor: 30,
    tagTypes: ["HOME"],
    endpoints: build => ({
        helloWorld: build.query({
            query: (params) => ({
                url: "/api/hello",
                method: "GET",
                params: params
            }),
            transformResponse: (response) => response,
            providesTags: ['HOME'],
            keepUnusedDataFor: 5,
        }),
        addHelloWord: build.mutation({
            query: (payload) => ({
                url: "/api/hello",
                method: "POST",
                body: payload,
            }),
            transformResponse: (response) => response,
            invalidatesTags: ['HOME'],
        }),
    }),
});

export const { useHelloWorldQuery, useAddHelloWordMutation } = commonApis;
export default commonApis;
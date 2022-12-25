import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transactionAPI = createApi({
  reducerPath: "transactionAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints: (builder) => ({
    getTransactions: builder.query({
      // @ts-ignore
      providesTags: ['transactionTag'],
      query: () => ({
        url: "/transactions",
        method: "GET",
      }),
    }),

    postTransaction: builder.mutation({
      // @ts-ignore
      invalidatesTags: ['transactionTag'],
      query: (body) => ({
        url: "/transactions",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetTransactionsQuery, usePostTransactionMutation } =
  transactionAPI;

import { configureStore } from "@reduxjs/toolkit";
import {
  useGetTransactionsQuery,
  transactionAPI,
  usePostTransactionMutation,
} from "./API/transactionAPI";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [transactionAPI.reducerPath]: transactionAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(transactionAPI.middleware);
  },
});

setupListeners(store.dispatch);

export { useGetTransactionsQuery, usePostTransactionMutation };

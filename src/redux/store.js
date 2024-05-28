import { configureStore } from '@reduxjs/toolkit';
import { balanceReducer } from './balanceSlice';
import { localeReducer } from './localeSlice';

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    locale: localeReducer,
  },
});

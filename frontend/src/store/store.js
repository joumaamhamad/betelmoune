import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import productsSlice from './productsSlice';

const store = configureStore({
  reducer: {
    authSlice,
    productsSlice,
  },
});

export default store;

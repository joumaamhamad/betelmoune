import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import productsSlice from './productsSlice';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    authSlice,
    productsSlice,
    cartSlice,
  },
});

export default store;
